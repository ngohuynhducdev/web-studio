/**
 * 2026-08-03-template-price.ts
 *
 * Templates carried a `price` of their own — 29 / 49 / 29 — while the homepage
 * offered plans at 19 / 39 / 59. Both were labelled "/mo" and neither explained
 * the other, so a visitor read $19 on the homepage and $29 on the template they
 * had just picked, with nothing to say which one they would actually pay.
 *
 * Only the plans price anything: a template is a design, and what a client buys
 * is a monthly plan (PRODUCT.md). Cards now quote the entry plan through
 * lib/pricing.ts, and the field is gone from the schema, the query, the Template
 * type and the coded fallbacks. This clears the values Sanity would otherwise
 * keep as data no form shows and no query reads.
 *
 * Ordering: run AFTER the code is deployed — the field is required in the old
 * schema, and the old TemplateCard would render "$NaN" without it.
 *
 * Dry run by default — prints what would change and writes nothing.
 *
 * How to run:
 *   pnpm tsx scripts/migrations/2026-08-03-template-price.ts            # preview
 *   pnpm tsx scripts/migrations/2026-08-03-template-price.ts --apply    # write
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

async function main() {
  const templates = await client.fetch<Array<{ _id: string; title?: string; price?: number }>>(
    `*[_type == "template"]{_id, title, price}`
  );

  console.log(`\n${APPLY ? "✍️   APPLYING" : "👀  DRY RUN"} — dataset ${client.config().dataset}\n`);

  const withPrice = templates.filter((t) => t.price !== undefined);

  console.log("unset — per-template price, superseded by the plan price:");
  for (const t of withPrice) {
    console.log(`   - ${t.title ?? t._id}: ${t.price}`);
  }
  if (!withPrice.length) console.log("   (already clean)");

  if (!withPrice.length) {
    console.log("\n✅  Nothing to do.\n");
    return;
  }

  if (!APPLY) {
    console.log("\n👀  Dry run — nothing was written. Re-run with --apply to commit.\n");
    return;
  }

  const tx = client.transaction();
  for (const t of withPrice) tx.patch(t._id, (p) => p.unset(["price"]));
  await tx.commit();

  console.log(`\n✅  Applied: price unset on ${withPrice.length} template(s).\n`);
}

main().catch((err) => {
  console.error("\n❌  Migration failed:", err.message);
  console.error("    Check SANITY_API_WRITE_TOKEN in .env.local\n");
  process.exit(1);
});
