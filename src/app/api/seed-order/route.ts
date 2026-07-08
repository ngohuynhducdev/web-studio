import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";
import { DEFAULT_SECTIONS_MAP } from "@/lib/templateRegistry";

// POST /api/seed-order
// Body: { orderId: string; templateSlug: string }
// Copies the template's DEFAULT_SECTIONS into the site so editors can
// start from real content instead of a blank array.
export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-seed-secret");
  if (secret !== process.env.SEED_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { orderId, templateSlug } = body as { orderId?: string; templateSlug?: string };

  if (!orderId || !templateSlug) {
    return NextResponse.json({ error: "orderId and templateSlug are required" }, { status: 400 });
  }

  const sections = DEFAULT_SECTIONS_MAP[templateSlug];
  if (!sections) {
    return NextResponse.json({ error: `No DEFAULT_SECTIONS for template: ${templateSlug}` }, { status: 400 });
  }

  await writeClient.patch(orderId).set({ sections }).commit();

  return NextResponse.json({ ok: true, seededSections: sections.length });
}
