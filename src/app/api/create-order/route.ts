import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";
import { sendNewOrderNotification } from "@/lib/email";

// In-memory rate limiter: 3 requests per IP per hour
const rlMap = new Map<string, number[]>();
const RL_MAX = 3;
const RL_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const times = (rlMap.get(ip) ?? []).filter((t) => now - t < RL_WINDOW_MS);
  if (times.length >= RL_MAX) return true;
  rlMap.set(ip, [...times, now]);
  return false;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .substring(0, 48);
}

// POST /api/create-order
// Body: { clientName, phone, businessName, businessType?, templateSlug?, message? }
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "You've sent too many requests. Please try again in 1 hour." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { clientName, phone, businessName, businessType, templateSlug, message } = body as {
      clientName?: string;
      phone?: string;
      businessName?: string;
      businessType?: string;
      templateSlug?: string;
      message?: string;
    };

    if (!clientName || !phone || !businessName) {
      return NextResponse.json({ error: "Missing required information" }, { status: 400 });
    }

    // Server-side validation (defense-in-depth — client validates too).
    if (
      clientName.length > 100 ||
      businessName.length > 120 ||
      phone.length > 20 ||
      (businessType && businessType.length > 40) ||
      (templateSlug && templateSlug.length > 60) ||
      (message && message.length > 2000)
    ) {
      return NextResponse.json({ error: "Data exceeds the maximum allowed length." }, { status: 400 });
    }
    if (!/^[0-9+\-\s().]{8,20}$/.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }

    const base = slugify(businessName) || "order";
    const suffix = Math.random().toString(36).substring(2, 6);
    const previewSlug = `${base}-${suffix}`;
    const orderDate = new Date().toISOString().split("T")[0];

    // Resolve the chosen template slug into a reference so the order links to it
    let chosenTemplate: { _type: "reference"; _ref: string } | undefined;
    if (templateSlug) {
      const templateId = await writeClient.fetch<string | null>(
        `*[_type == "template" && slug.current == $slug][0]._id`,
        { slug: templateSlug }
      );
      if (templateId) chosenTemplate = { _type: "reference", _ref: templateId };
    }

    const order = await writeClient.create({
      _type: "site",
      clientName,
      businessName,
      phone,
      ...(businessType ? { businessType } : {}),
      ...(chosenTemplate ? { chosenTemplate } : {}),
      ...(message ? { notes: message } : {}),
      status: "new",
      orderDate,
      previewSlug: { _type: "slug", current: previewSlug },
    });

    // Fire-and-forget — email failure does not fail the order
    sendNewOrderNotification({
      clientName, phone, businessName,
      businessType, templateSlug, message,
      orderId: order._id, previewSlug,
    }).catch((err) => console.error("[email]", err));

    return NextResponse.json({ ok: true, orderId: order._id, previewSlug });
  } catch (err) {
    console.error("[create-order]", err);
    return NextResponse.json({ error: "Failed to create order, please try again." }, { status: 500 });
  }
}
