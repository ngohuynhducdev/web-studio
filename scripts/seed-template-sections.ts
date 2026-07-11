/**
 * seed-template-sections.ts
 *
 * Patches DEFAULT_SECTIONS onto template documents that are missing sections.
 * Idempotent — only patches if the current sections are empty or null.
 *
 * How to run:
 *   pnpm tsx scripts/seed-template-sections.ts
 */

import * as dotenv from "dotenv";
import { createClient } from "@sanity/client";
import { DEFAULT_SECTIONS as ZEN_WELLNESS_SECTIONS } from "../src/data/templates/zen-wellness";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-05-17",
  token:     process.env.SANITY_API_WRITE_TOKEN,
  useCdn:    false,
});

const TARGETS = [
  { id: "sydQkTivUNpklI3giKtPYX", componentKey: "zen-wellness",  sections: ZEN_WELLNESS_SECTIONS  },
];

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("❌  Missing SANITY_API_WRITE_TOKEN in .env.local");
    process.exit(1);
  }

  console.log("\n🌱  Seeding template sections...\n");

  for (const target of TARGETS) {
    try {
      // Check current state
      const doc = await client.fetch<{ sectionCount: number } | null>(
        `*[_id == $id][0] { "sectionCount": count(sections) }`,
        { id: target.id }
      );

      if (doc?.sectionCount && doc.sectionCount > 0) {
        console.log(`  ⏭️   ${target.componentKey} — already has ${doc.sectionCount} sections, skipping`);
        continue;
      }

      await client
        .patch(target.id)
        .set({ sections: target.sections })
        .commit();

      console.log(`  ✅  ${target.componentKey} — seeded ${target.sections.length} sections`);
    } catch (err) {
      console.error(`  ❌  ${target.componentKey}:`, err);
    }
  }

  console.log("\n✨  Done!\n");
}

run();
