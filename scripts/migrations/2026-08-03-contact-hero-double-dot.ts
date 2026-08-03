/**
 * 2026-08-03-contact-hero-double-dot.ts
 *
 * The /contact h1 rendered "tell us about your business.." — two full stops.
 *
 * (site)/contact/page.tsx composes the heading as `{heroTitle}` followed by a
 * terracotta dot span, so the stored title must not end in a period. The
 * contactPage document (and the code default behind it) both carried one.
 * /about hardcodes the same sentence without the period, which is the pattern
 * this restores.
 *
 * The code default and the schema initialValue are fixed in the same commit,
 * but the rendered page reads Sanity first, so the stored value has to go or
 * nothing changes on the live site. Unsetting rather than rewriting keeps one
 * source of truth; an editor can still set the field afterwards, and the field
 * description now says not to end it with a full stop.
 *
 * Guarded: if the stored value is anything other than the exact stale string,
 * an editor has rewritten it since and it is left alone.
 *
 * Ordering: run AFTER the code is deployed.
 *
 * Dry run by default — prints what would change and writes nothing.
 *
 * How to run:
 *   pnpm tsx scripts/migrations/2026-08-03-contact-hero-double-dot.ts            # preview
 *   pnpm tsx scripts/migrations/2026-08-03-contact-hero-double-dot.ts --apply    # write
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

const STALE_TITLE = "tell us about your business.";

async function main() {
  const doc = await client.fetch<Record<string, unknown> | null>(
    `*[_type == "contactPage" && _id == "contactPage"][0]`
  );
  if (!doc) {
    console.error("\n❌  No contactPage document found — nothing to migrate.\n");
    process.exit(1);
  }

  console.log(`\n${APPLY ? "✍️   APPLYING" : "👀  DRY RUN"} — dataset ${client.config().dataset}\n`);

  const stored = doc.heroTitle;

  if (stored === undefined) {
    console.log("✅  heroTitle is already unset — the code default renders.\n");
    return;
  }

  if (stored !== STALE_TITLE) {
    console.log("⏭   heroTitle holds copy this migration does not recognise:");
    console.log(`       ${JSON.stringify(stored)}`);
    console.log("    Left untouched — an editor rewrote it after the audit.\n");
    return;
  }

  console.log("unset — trailing period duplicated the decorative dot:");
  console.log(`   - heroTitle = ${JSON.stringify(stored)}`);
  console.log(`     rendered as "tell us about your business.." on /contact`);

  if (!APPLY) {
    console.log("\n👀  Dry run — nothing was written. Re-run with --apply to commit.\n");
    return;
  }

  await client.patch("contactPage").unset(["heroTitle"]).commit();

  console.log("\n✅  Applied: heroTitle unset.\n");
}

main().catch((err) => {
  console.error("\n❌  Migration failed:", err.message);
  console.error("    Check SANITY_API_WRITE_TOKEN in .env.local\n");
  process.exit(1);
});
