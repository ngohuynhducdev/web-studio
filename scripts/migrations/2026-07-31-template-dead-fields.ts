/**
 * 2026-07-31-template-dead-fields.ts
 *
 * Companion to the /templates page audit. `demoUrl` and `features` were
 * removed from the template schema because nothing rendered them —
 * TemplateCard builds its link from the slug and never reads features.
 * Dropping the schema fields hides them in the Studio but leaves the stored
 * values behind, so this clears them from the documents too.
 *
 * Unlike the homepage migration this one is cosmetic: the data is already
 * inert once the schema no longer declares it and no query selects it.
 * Running it is about not leaving orphan keys for the next person to puzzle
 * over. Safe in either order relative to the deploy, and safe to skip.
 *
 * Dry run by default — prints what would change and writes nothing.
 *
 * How to run:
 *   pnpm tsx scripts/migrations/2026-07-31-template-dead-fields.ts            # preview
 *   pnpm tsx scripts/migrations/2026-07-31-template-dead-fields.ts --apply    # write
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

const DEAD_FIELDS = ["demoUrl", "features"];

async function main() {
  // Drafts included: an unpublished template carries the same orphan keys.
  const docs = await client.fetch<Array<Record<string, unknown>>>(
    `*[_type == "template"]{ _id, title, ${DEAD_FIELDS.join(", ")} }`,
    {},
    { perspective: "raw" }
  );

  console.log(`\n${APPLY ? "✍️   APPLYING" : "👀  DRY RUN"} — dataset ${client.config().dataset}\n`);

  const targets = docs.filter((d) => DEAD_FIELDS.some((f) => d[f] !== undefined && d[f] !== null));

  if (!targets.length) {
    console.log("✅  No template document still carries these fields — nothing to do.\n");
    return;
  }

  for (const doc of targets) {
    console.log(`  ${doc.title} (${doc._id})`);
    for (const f of DEAD_FIELDS) {
      if (doc[f] !== undefined && doc[f] !== null) {
        console.log(`     - ${f} = ${JSON.stringify(doc[f])}`);
      }
    }
  }

  if (!APPLY) {
    console.log("\n👀  Dry run — nothing was written. Re-run with --apply to commit.\n");
    return;
  }

  let tx = client.transaction();
  for (const doc of targets) {
    tx = tx.patch(String(doc._id), (p) => p.unset(DEAD_FIELDS));
  }
  await tx.commit();

  console.log(`\n✅  Cleared ${DEAD_FIELDS.join(" and ")} from ${targets.length} document(s).\n`);
}

main().catch((err) => {
  console.error("\n❌  Migration failed:", err.message);
  console.error("    Check SANITY_API_WRITE_TOKEN in .env.local\n");
  process.exit(1);
});
