/**
 * 2026-08-04-footer-placeholders.ts
 *
 * Two problems in the stored siteFooter, both of which the code defaults
 * already handle correctly once the stored values are out of the way.
 *
 * 1. `copyright` was the literal string "© 2025 Web Studio". The code default
 *    is `© ${new Date().getFullYear()} …`, so it would have said 2026 on its
 *    own — the stored copy froze the year and will be wrong every January.
 *
 * 2. facebookUrl / instagramUrl / tiktokUrl pointed at facebook.com/webstudio
 *    and friends. Those 404 on the real platforms; the footer now defaults to
 *    "#" so they read as placeholders instead of broken profiles.
 *
 * Unsetting rather than rewriting: the code default is the correct value in
 * both cases, and one of them has to keep changing every year. An editor can
 * still fill any of these in through the Studio afterwards.
 *
 * Ordering: run AFTER the code is deployed, so the new defaults are in place.
 *
 * Dry run by default — prints what would change and writes nothing.
 *
 * How to run:
 *   pnpm tsx scripts/migrations/2026-08-04-footer-placeholders.ts            # preview
 *   pnpm tsx scripts/migrations/2026-08-04-footer-placeholders.ts --apply    # write
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

const FIELDS = [
  { name: "copyright", why: "hardcoded year — the code default derives it" },
  { name: "facebookUrl", why: "placeholder profile that 404s" },
  { name: "instagramUrl", why: "placeholder profile that 404s" },
  { name: "tiktokUrl", why: "placeholder profile that 404s" },
];

async function main() {
  const doc = await client.fetch<Record<string, unknown> | null>(
    `*[_type == "siteFooter" && _id == "siteFooter"][0]`
  );
  if (!doc) {
    console.error("\n❌  No siteFooter document found — nothing to migrate.\n");
    process.exit(1);
  }

  console.log(`\n${APPLY ? "✍️   APPLYING" : "👀  DRY RUN"} — dataset ${client.config().dataset}\n`);

  const present = FIELDS.filter((f) => doc[f.name] != null);

  console.log("unset — code default takes over:");
  for (const f of present) {
    console.log(`   - ${f.name.padEnd(14)} ${JSON.stringify(doc[f.name])}`);
    console.log(`     ${f.why}`);
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

  await client.patch("siteFooter").unset(present.map((f) => f.name)).commit();

  console.log(`\n✅  Applied: ${present.length} field(s) unset.\n`);
}

main().catch((err) => {
  console.error("\n❌  Migration failed:", err.message);
  console.error("    Check SANITY_API_WRITE_TOKEN in .env.local\n");
  process.exit(1);
});
