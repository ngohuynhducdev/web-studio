/**
 * 2026-08-03-cta-contact-fields.ts
 *
 * The homepage CTA section carried its own ctaZaloUrl / ctaPhone / ctaHours,
 * holding a second copy of the Zalo link, phone number and opening hours that
 * siteFooter already owns — the source /contact and the footer both read. The
 * values matched, so nothing looked wrong; the failure mode was the first
 * update that touched only one of the two, which is exactly what happens when
 * the placeholder number is replaced with a real one.
 *
 * CTASection now reads siteFooter, and the three fields are gone from the
 * schema, the query and the typed defaults. Sanity keeps whatever a document
 * already stored, so the stale values would sit in the dataset as fields no
 * form shows and no query reads. This clears them.
 *
 * Ordering: run AFTER the code is deployed, so nothing is still reading them.
 *
 * Dry run by default — prints what would change and writes nothing.
 *
 * How to run:
 *   pnpm tsx scripts/migrations/2026-08-03-cta-contact-fields.ts            # preview
 *   pnpm tsx scripts/migrations/2026-08-03-cta-contact-fields.ts --apply    # write
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

const DEAD_FIELDS = ["ctaZaloUrl", "ctaPhone", "ctaHours"];

async function main() {
  const [homepage, footer] = await Promise.all([
    client.fetch<Record<string, unknown> | null>(
      `*[_type == "homepage" && _id == "homepage"][0]`
    ),
    client.fetch<Record<string, unknown> | null>(
      `*[_type == "siteFooter" && _id == "siteFooter"][0]{zaloUrl, phone, hours}`
    ),
  ]);

  if (!homepage) {
    console.error("\n❌  No homepage document found — nothing to migrate.\n");
    process.exit(1);
  }

  console.log(`\n${APPLY ? "✍️   APPLYING" : "👀  DRY RUN"} — dataset ${client.config().dataset}\n`);

  // Printed so the operator can see what the CTA will show from now on, and
  // spot it if the two copies had already drifted before this ran.
  console.log("siteFooter now supplies all three:");
  for (const key of ["zaloUrl", "phone", "hours"] as const) {
    console.log(`   ${key}: ${JSON.stringify(footer?.[key] ?? "(unset — code default renders)")}`);
  }
  console.log("");

  const present = DEAD_FIELDS.filter((f) => homepage[f] !== undefined);

  console.log("unset — duplicated contact details on homepage:");
  for (const f of present) {
    console.log(`   - ${f} = ${JSON.stringify(homepage[f])}`);
  }
  if (!present.length) console.log("   (already clean)");

  if (!present.length) {
    console.log("\n✅  Nothing to do.\n");
    return;
  }

  if (!APPLY) {
    console.log("\n👀  Dry run — nothing was written. Re-run with --apply to commit.\n");
    return;
  }

  await client.patch("homepage").unset(present).commit();

  console.log(`\n✅  Applied: ${present.length} field(s) unset.\n`);
}

main().catch((err) => {
  console.error("\n❌  Migration failed:", err.message);
  console.error("    Check SANITY_API_WRITE_TOKEN in .env.local\n");
  process.exit(1);
});
