/**
 * seed-demo-sites.ts
 *
 * Creates a handful of fictional `site` documents — client orders — so the two
 * parts of this project that have no public surface can actually be looked at:
 *
 *   /preview/[slug]   a delivered client site, rendered from its own document
 *   /admin/orders     the order dashboard, which is empty without orders
 *
 * The README describes both. Until this runs, a reader can only take that on
 * faith: the dataset ships with zero site documents, so the dashboard shows
 * nothing and every preview URL 404s.
 *
 * Everything here is invented, matching the rest of the demo content — see the
 * note in README. The names are marked "(demo)" in internal notes so nobody
 * mistakes them for real customers.
 *
 * Uses createIfNotExists with fixed ids, so re-running does not duplicate and
 * does not overwrite edits made in the Studio afterwards.
 *
 * How to run:
 *   pnpm tsx scripts/seed-demo-sites.ts            # preview
 *   pnpm tsx scripts/seed-demo-sites.ts --apply    # write
 */

import * as dotenv from "dotenv";
import { createClient } from "next-sanity";
import { DEFAULT_SECTIONS_MAP } from "../src/data/templates";

dotenv.config({ path: ".env.local" });

/**
 * Copies a template's sections and swaps the demo brand for a client's.
 *
 * Without this the delivered demo rendered "Mist Spring Spa" in its own hero:
 * businessName reaches the header and footer, but the section copy lives in
 * DEFAULT_SECTIONS, and a site with no sections of its own falls straight
 * through to them. This is what the studio does by hand after auto-seed —
 * /api/seed-order copies the same array — so the demo shows the finished state
 * rather than a half-customised one.
 */
function customise(componentKey: string, from: string, to: string, contact: Record<string, string>) {
  const sections = DEFAULT_SECTIONS_MAP[componentKey as keyof typeof DEFAULT_SECTIONS_MAP];
  // Case-insensitive: the same name is written both title-case and ALL CAPS in
  // the section data, and a title-case-only swap left "MIST SPRING SPA" sitting
  // in the hero eyebrow of a site belonging to someone else. Replacing with the
  // title-case client name is right either way — the eyebrow is uppercased by
  // CSS, not by the stored string.
  const pattern = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
  const swapped = JSON.parse(
    JSON.stringify(sections).replace(pattern, to)
  ) as Array<Record<string, unknown>>;

  return swapped.map((s) =>
    s._type === "bookingSection" ? { ...s, ...contact } : s
  );
}

const APPLY = process.argv.includes("--apply");
// Replaces the demo documents instead of skipping the ones that exist. Only for
// re-seeding after editing this file — it discards Studio edits to these three.
const FORCE = process.argv.includes("--force");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-05-17",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

// A year from today, so the delivered site does not read as expired the moment
// someone opens it — /preview treats a past renewalDate as inactive.
const renewal = new Date();
renewal.setFullYear(renewal.getFullYear() + 1);
const RENEWAL = renewal.toISOString().split("T")[0];

const day = (offset: number) => {
  const d = new Date();
  d.setDate(d.getDate() - offset);
  return d.toISOString().split("T")[0];
};

// Only the delivered order carries `sections`. The other two fall through to
// the template's DEFAULT_SECTIONS, which is the honest picture of an order that
// has not been customised yet — one has no template at all.
const DEMO_SITES = [
  {
    _id: "site-demo-sen-vang",
    _type: "site" as const,
    clientName: "Ms. Huong",
    businessName: "Sen Vang Spa",
    phone: "0903 111 222",
    email: "hello@senvangspa.vn",
    businessType: "spa",
    chosenTemplate: { _type: "reference" as const, _ref: "template-mist-spring-spa" },
    brandColor: "#7c8f6a",
    sections: customise("mist-spring-spa", "Mist Spring Spa", "Sen Vang Spa", {
      phone: "0903 111 222",
      email: "hello@senvangspa.vn",
      address: "72 Vo Van Tan, District 3, HCMC",
    }),
    status: "delivered",
    orderDate: day(21),
    deliveryDate: day(14),
    previewSlug: { _type: "slug" as const, current: "sen-vang-spa" },
    seoTitle: "Sen Vang Spa — day spa in District 3",
    seoDescription: "Massage and body care in a quiet space. Book on Zalo.",
    isActive: true,
    renewalDate: RENEWAL,
    servicePlan: "standard",
    intakeReceived: ["logo", "photos", "services", "contact", "hours", "about", "reviews"],
    qaChecks: ["content", "images", "contact", "form", "mobile"],
    notes: "Demo order (fictional) — seeded by scripts/seed-demo-sites.ts.",
  },
  {
    _id: "site-demo-huong-tram",
    _type: "site" as const,
    clientName: "Mr. Nam",
    businessName: "Huong Tram Foot Spa",
    phone: "0905 333 444",
    email: "huongtram.spa@gmail.com",
    businessType: "spa",
    chosenTemplate: { _type: "reference" as const, _ref: "template-herbal-grove-spa" },
    status: "in_progress",
    orderDate: day(4),
    previewSlug: { _type: "slug" as const, current: "huong-tram-foot-spa" },
    isActive: true,
    servicePlan: "basic",
    intakeReceived: ["logo", "photos", "contact"],
    qaChecks: [],
    notes: "Demo order (fictional) — waiting on the price list. Seeded by scripts/seed-demo-sites.ts.",
  },
  {
    _id: "site-demo-an-nhien",
    _type: "site" as const,
    clientName: "Ms. Lan",
    businessName: "An Nhien Massage",
    phone: "0907 555 666",
    businessType: "spa",
    status: "new",
    orderDate: day(1),
    previewSlug: { _type: "slug" as const, current: "an-nhien-massage" },
    notes: "Demo order (fictional) — no template chosen yet, shows the unassigned state. Seeded by scripts/seed-demo-sites.ts.",
  },
];

async function main() {
  console.log(`\n${APPLY ? "✍️   APPLYING" : "👀  DRY RUN"} — dataset ${client.config().dataset}\n`);

  const existing = await client.fetch<string[]>(
    `*[_type == "site" && _id in $ids]._id`,
    { ids: DEMO_SITES.map((s) => s._id) }
  );

  for (const s of DEMO_SITES) {
    const here = existing.includes(s._id);
    console.log(
      `${here ? "✓ exists" : "→ create"}  ${s.businessName.padEnd(22)} ${s.status.padEnd(12)} /preview/${s.previewSlug.current}`
    );
  }

  const toWrite = FORCE ? DEMO_SITES : DEMO_SITES.filter((s) => !existing.includes(s._id));

  if (!toWrite.length) {
    console.log("\n✅  All demo orders already exist — nothing to do. (--force to replace)\n");
    return;
  }

  if (!APPLY) {
    console.log("\n👀  Dry run — nothing was written. Re-run with --apply to commit.\n");
    return;
  }

  const tx = client.transaction();
  for (const s of toWrite) {
    if (FORCE) tx.createOrReplace(s);
    else tx.createIfNotExists(s);
  }
  await tx.commit();

  console.log(`\n✅  Applied: ${toWrite.length} demo order(s) ${FORCE ? "written" : "created"}.\n`);
}

main().catch((err) => {
  console.error("\n❌  Seed failed:", err.message);
  console.error("    Check SANITY_API_WRITE_TOKEN in .env.local\n");
  process.exit(1);
});
