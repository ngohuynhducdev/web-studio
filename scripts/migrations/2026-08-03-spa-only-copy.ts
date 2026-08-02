/**
 * 2026-08-03-spa-only-copy.ts
 *
 * One-off migration accompanying the spa-only positioning fix.
 *
 * Site copy advertised nail salons, cafes and gyms in five places while the
 * catalog held three templates, all of them spas. Those industries are on the
 * roadmap, but a visitor reading the copy today would find nothing to pick —
 * the same overclaim already corrected on /templates (commit 70fef89).
 *
 * This clears the stored copy so the site describes the catalog as it is. When
 * a cafe or barbershop template ships, its industry gets named again as part of
 * that work — see the checklist in CLAUDE.md.
 *
 * The code defaults in src/data/homepage.ts and src/data/about.ts are fixed in
 * the same commit, but the rendered site reads Sanity first and the production
 * documents store the old copy — so the code change alone changes nothing on
 * the live site. This brings the stored documents in line.
 *
 * It unsets rather than rewrites: the corrected copy then has one source of
 * truth (the code default) instead of two that can drift. An editor can still
 * set any of these fields in the Studio afterwards, and that value wins, as
 * before. Fallback is all-or-nothing per array, so unsetting testiItems and
 * storyParagraphs restores the complete coded lists, not a partial merge.
 *
 * Every field is guarded: if a document holds copy this migration does not
 * recognise, an editor has rewritten it since the audit and it is left alone.
 *
 * Ordering: run AFTER the code is deployed. Against the old code an unset
 * field falls back to the old default and nothing changes.
 *
 * Dry run by default — prints what would change and writes nothing.
 *
 * How to run:
 *   pnpm tsx scripts/migrations/2026-08-03-spa-only-copy.ts            # preview
 *   pnpm tsx scripts/migrations/2026-08-03-spa-only-copy.ts --apply    # write
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

type Doc = Record<string, unknown>;

/** A field to clear, plus the test that proves the stored value is the stale one. */
type Check = {
  field: string;
  why: string;
  isStale: (value: unknown) => boolean;
};

const HOMEPAGE_CHECKS: Check[] = [
  {
    field: "heroLede",
    why: 'hero lede advertising "nail salons, spas, cafes, gyms"',
    isStale: (v) => typeof v === "string" && /nail salons, spas, cafes, gyms/.test(v),
  },
  {
    field: "testiItems",
    why: "testimonials from a nail salon and a cafe — industries with no template yet",
    isStale: (v) =>
      Array.isArray(v) &&
      v.some((item) => {
        const shop = (item as Doc)?.shopName;
        return shop === "Lily Nail Studio" || shop === "Moonlight Cafe";
      }),
  },
];

const ABOUT_CHECKS: Check[] = [
  {
    field: "heroSub",
    why: 'hero sub claiming websites for "nail salons, spas, cafes, and gyms"',
    isStale: (v) => typeof v === "string" && /nail salons, spas, cafes, and gyms/.test(v),
  },
  {
    field: "storyParagraphs",
    why: "origin story set in a nail salon",
    isStale: (v) =>
      Array.isArray(v) && typeof v[0] === "string" && /nail salon/.test(v[0]),
  },
];

/** Returns the fields to unset, printing one line of reasoning per field. */
function planUnsets(label: string, doc: Doc, checks: Check[]) {
  console.log(`${label}:`);
  const toUnset: string[] = [];

  for (const { field, why, isStale } of checks) {
    const value = doc[field];
    if (value === undefined) {
      console.log(`   ✓ ${field} — already unset, code default renders`);
    } else if (isStale(value)) {
      console.log(`   → ${field} — unset: ${why}`);
      toUnset.push(field);
    } else {
      console.log(`   ⏭ ${field} — unrecognised copy, left untouched (edited since the audit)`);
    }
  }

  console.log("");
  return toUnset;
}

async function main() {
  const [homepage, about] = await Promise.all([
    client.fetch<Doc | null>(`*[_type == "homepage" && _id == "homepage"][0]`),
    client.fetch<Doc | null>(`*[_type == "aboutPage" && _id == "aboutPage"][0]`),
  ]);

  console.log(`\n${APPLY ? "✍️   APPLYING" : "👀  DRY RUN"} — dataset ${client.config().dataset}\n`);

  const homepageUnsets = homepage
    ? planUnsets("homepage", homepage, HOMEPAGE_CHECKS)
    : (console.log("homepage:\n   (no document — nothing to do)\n"), []);

  const aboutUnsets = about
    ? planUnsets("aboutPage", about, ABOUT_CHECKS)
    : (console.log("aboutPage:\n   (no document — nothing to do)\n"), []);

  if (!homepageUnsets.length && !aboutUnsets.length) {
    console.log("✅  Both documents already match the code — nothing to do.\n");
    return;
  }

  if (!APPLY) {
    console.log("👀  Dry run — nothing was written. Re-run with --apply to commit.\n");
    return;
  }

  const tx = client.transaction();
  if (homepageUnsets.length) tx.patch("homepage", (p) => p.unset(homepageUnsets));
  if (aboutUnsets.length) tx.patch("aboutPage", (p) => p.unset(aboutUnsets));
  await tx.commit();

  console.log(
    `✅  Applied: ${homepageUnsets.length} field(s) on homepage, ${aboutUnsets.length} on aboutPage.\n`
  );
}

main().catch((err) => {
  console.error("\n❌  Migration failed:", err.message);
  console.error("    Check SANITY_API_WRITE_TOKEN in .env.local\n");
  process.exit(1);
});
