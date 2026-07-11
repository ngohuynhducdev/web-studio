import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/writeClient";
import { DEFAULT_SECTIONS_MAP } from "@/lib/templateRegistry";
import { isAuthorizedAdmin, UNAUTHORIZED_HEADERS } from "@/lib/adminAuth";

// POST /api/admin/seed-order
// Called by the admin UI. Guarded by the same HTTP Basic Auth as /admin —
// the browser replays cached admin credentials on this same-origin request.
export async function POST(req: NextRequest) {
  if (!isAuthorizedAdmin(req.headers.get("authorization"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: UNAUTHORIZED_HEADERS });
  }

  try {
    const { orderId, templateSlug } = await req.json() as {
      orderId?: string;
      templateSlug?: string;
    };

    if (!orderId || !templateSlug) {
      return NextResponse.json({ error: "orderId and templateSlug are required" }, { status: 400 });
    }

    const sections = DEFAULT_SECTIONS_MAP[templateSlug];
    if (!sections) {
      return NextResponse.json({ error: `No DEFAULT_SECTIONS for template: ${templateSlug}` }, { status: 400 });
    }

    await writeClient.patch(orderId).set({ sections }).commit();

    return NextResponse.json({ ok: true, seededSections: sections.length });
  } catch (err) {
    console.error("[admin/seed-order]", err);
    return NextResponse.json({ error: "Seeding failed" }, { status: 500 });
  }
}
