/**
 * migrate-homepage.ts
 *
 * One-off migration for the homepage content audit. The rendered site reads
 * Sanity first and only falls back to src/data/homepage.ts, so editing the
 * code defaults alone changes nothing on a dataset that already holds values.
 * This brings the stored document in line with the code.
 *
 * It does three things:
 *   1. Unsets fields no section renders, plus the three headings whose leading
 *      count is now derived from the actual number of steps/plans/templates.
 *      A stored value would win over the derived default and re-introduce the
 *      stale count.
 *   2. Rewrites the two invented statistics on the "standard" plan.
 *   3. Refreshes the testimonial dates.
 *
 * Dry run by default — prints what would change and writes nothing.
 *
 * How to run:
 *   pnpm tsx scripts/migrate-homepage.ts            # preview
 *   pnpm tsx scripts/migrate-homepage.ts --apply    # write
 */

import * as dotenv from "dotenv";
import { createClient } from "next-sanity";

dotenv.config({ path: ".env.local" });

const APPLY = process.argv.includes("--apply");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-05-17",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

// Rendered by no section. The four eyebrows, the hero badge, the secondary CTA
// and the hero highlight list were all editable in the Studio while doing
// nothing on the page.
const UNSET_UNRENDERED = [
  "heroEyebrow",
  "heroBadge",
  "heroCtaSecondary",
  "heroMeta",
  "hiwEyebrow",
  "tplEyebrow",
  "testiEyebrow",
  "pricingEyebrow",
];

// Count-bearing headings, now derived in code from the real list length.
const UNSET_DERIVED = ["hiwHeading", "tplHeading", "pricingHeading"];

const PLAN_EDITS: Record<string, { description: string; footnote: string }> = {
  standard: {
    description: "3 pages — landing, services, contact. room for a full service list.",
    footnote: "for shops with a service menu",
  },
};

const TESTIMONIAL_DATES: Record<string, string> = {
  t1: "June 2026",
  t2: "May 2026",
  t3: "April 2026",
};

async function main() {
  const doc = await client.fetch<Record<string, unknown> | null>(
    `*[_type == "homepage" && _id == "homepage"][0]`
  );
  if (!doc) {
    console.error("\n❌  No homepage document found — nothing to migrate.\n");
    process.exit(1);
  }

  console.log(`\n${APPLY ? "✍️   APPLYING" : "👀  DRY RUN"} — dataset ${client.config().dataset}\n`);

  // ── 1. Unsets ──────────────────────────────────────────────────────────────
  const present = (keys: string[]) => keys.filter((k) => doc[k] !== undefined);

  const unrendered = present(UNSET_UNRENDERED);
  const derived = present(UNSET_DERIVED);

  console.log("unset — not rendered by any section:");
  unrendered.forEach((k) => console.log(`   - ${k} = ${JSON.stringify(doc[k])}`));
  if (!unrendered.length) console.log("   (already clean)");

  console.log("\nunset — count now derived in code:");
  derived.forEach((k) => console.log(`   - ${k} = ${JSON.stringify(doc[k])}`));
  if (!derived.length) console.log("   (already clean)");

  // ── 2. Pricing copy ────────────────────────────────────────────────────────
  const plans = (doc.pricingPlans ?? []) as Array<Record<string, unknown>>;
  const planPatches: Record<string, string> = {};
  console.log("\nrewrite — invented statistics:");
  for (const plan of plans) {
    const key = String(plan._key);
    const edit = PLAN_EDITS[key];
    if (!edit) continue;
    for (const field of ["description", "footnote"] as const) {
      if (plan[field] !== edit[field]) {
        console.log(`   - ${key}.${field}`);
        console.log(`       from: ${JSON.stringify(plan[field])}`);
        console.log(`       to:   ${JSON.stringify(edit[field])}`);
        planPatches[`pricingPlans[_key=="${key}"].${field}`] = edit[field];
      }
    }
  }
  if (!Object.keys(planPatches).length) console.log("   (already clean)");

  // ── 3. Testimonial dates ───────────────────────────────────────────────────
  const testimonials = (doc.testiItems ?? []) as Array<Record<string, unknown>>;
  const datePatches: Record<string, string> = {};
  console.log("\nrefresh — testimonial dates:");
  for (const t of testimonials) {
    const key = String(t._key);
    const next = TESTIMONIAL_DATES[key];
    if (!next || t.date === next) continue;
    console.log(`   - ${key}: ${JSON.stringify(t.date)} -> ${JSON.stringify(next)}`);
    datePatches[`testiItems[_key=="${key}"].date`] = next;
  }
  if (!Object.keys(datePatches).length) console.log("   (already clean)");

  const toUnset = [...unrendered, ...derived];
  const toSet = { ...planPatches, ...datePatches };
  const nothingToDo = !toUnset.length && !Object.keys(toSet).length;

  if (nothingToDo) {
    console.log("\n✅  Document already matches the code — nothing to do.\n");
    return;
  }

  if (!APPLY) {
    console.log("\n👀  Dry run — nothing was written. Re-run with --apply to commit.\n");
    return;
  }

  let patch = client.patch("homepage");
  if (toUnset.length) patch = patch.unset(toUnset);
  if (Object.keys(toSet).length) patch = patch.set(toSet);
  await patch.commit();

  console.log(`\n✅  Applied: ${toUnset.length} unset, ${Object.keys(toSet).length} set.\n`);
}

main().catch((err) => {
  console.error("\n❌  Migration failed:", err.message);
  console.error("    Check SANITY_API_WRITE_TOKEN in .env.local\n");
  process.exit(1);
});
