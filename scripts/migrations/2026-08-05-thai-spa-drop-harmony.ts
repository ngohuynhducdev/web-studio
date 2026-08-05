/**
 * 2026-08-05-thai-spa-drop-harmony.ts
 *
 * The thai-spa "harmony" block (aboutSection, _key: "harmony") and its
 * HarmonyIntro component were removed from the template. Documents seeded
 * before that still carry the block in `sections[]` — template demos and any
 * site seeded from them.
 *
 * Nothing renders it any more (index.tsx no longer picks the key), so this is
 * cosmetic: it stops the Studio from showing clients an editable block whose
 * copy never reaches the page. Safe in either order relative to the deploy,
 * and safe to skip.
 *
 * The key is unique to thai-spa's defaults, so matching on it alone is enough —
 * no other template seeds a section called "harmony".
 *
 * Dry run by default — prints what would change and writes nothing.
 *
 * How to run:
 *   pnpm tsx scripts/migrations/2026-08-05-thai-spa-drop-harmony.ts            # preview
 *   pnpm tsx scripts/migrations/2026-08-05-thai-spa-drop-harmony.ts --apply    # write
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

const DEAD_KEY = "harmony";

type Doc = {
  _id: string;
  _type: string;
  label?: string;
  sections?: Array<{ _key: string; _type: string }>;
};

async function main() {
  // Drafts included: an unpublished template carries the same orphan block.
  const docs = await client.fetch<Doc[]>(
    `*[_type in ["template", "site"] && count(sections[_key == $key]) > 0]{
      _id, _type, "label": coalesce(title, businessName), sections
    }`,
    { key: DEAD_KEY },
    { perspective: "raw" }
  );

  console.log(`\n${APPLY ? "✍️   APPLYING" : "👀  DRY RUN"} — dataset ${client.config().dataset}\n`);

  if (!docs.length) {
    console.log(`✅  No document still carries a "${DEAD_KEY}" section — nothing to do.\n`);
    return;
  }

  for (const doc of docs) {
    console.log(`  ${doc._type}: ${doc.label ?? "(untitled)"} (${doc._id})`);
    console.log(`     - dropping 1 of ${doc.sections?.length ?? 0} sections`);
  }

  if (!APPLY) {
    console.log("\n👀  Dry run — nothing was written. Re-run with --apply to commit.\n");
    return;
  }

  let tx = client.transaction();
  for (const doc of docs) {
    // The fetched sections are the full blocks, so writing the filtered array
    // back leaves every remaining block — and its _key — exactly as it was.
    const kept = (doc.sections ?? []).filter((s) => s._key !== DEAD_KEY);
    tx = tx.patch(doc._id, (p) => p.set({ sections: kept }));
  }
  await tx.commit();

  console.log(`\n✅  Removed the "${DEAD_KEY}" section from ${docs.length} document(s).\n`);
}

main().catch((err) => {
  console.error("\n❌  Migration failed:", err.message);
  console.error("    Check SANITY_API_WRITE_TOKEN in .env.local\n");
  process.exit(1);
});
