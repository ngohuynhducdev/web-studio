/**
 * migrate-template-catalog-en.ts
 *
 * One-off migration: translates the 5 surviving `template` documents'
 * catalog-card fields (title, description, features) from Vietnamese to
 * English. These fields are separate from `sections[]` (which is empty on
 * all 5 docs, so template detail pages already correctly fall back to the
 * translated DEFAULT_SECTIONS in code) — this script only fixes the
 * catalog cards shown on the homepage grid and /templates page.
 *
 * Idempotent — only patches if the current title still matches the known
 * Vietnamese original, so re-running after a manual edit is a no-op.
 *
 * How to run:
 *   pnpm tsx scripts/migrate-template-catalog-en.ts
 */

import * as dotenv from "dotenv";
import { createClient } from "@sanity/client";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-05-17",
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const TARGETS = [
  {
    slug: "thai-spa",
    expectedTitle: "Thai Spa",
    patch: {
      title: "Thai Spa",
      description: "Classic Thai massage spa, formal symmetry — deep red and turmeric gold.",
      features: ["Treatment price list", "Founder introduction", "Offers & booking via Zalo"],
    },
  },
  {
    slug: "shizen-spa",
    expectedTitle: "Shizen Spa",
    patch: {
      title: "Shizen Spa",
      description: "Bright Japandi-style spa — warm paper tones, headline overlaid on imagery, hover-preview services.",
      features: ["Hover-preview services", "Space gallery", "Booking via Zalo & phone"],
    },
  },
  {
    slug: "zen-wellness",
    expectedTitle: "Zen Wellness",
    patch: {
      title: "Zen Wellness",
      description: "Modern calm-tech wellness sanctuary — appointment widget, membership plans.",
      features: ["Hero widget app", "Membership plans", "Team & journey"],
    },
  },
  {
    slug: "bach-thao",
    expectedTitle: "Bách Thảo Spa",
    patch: {
      title: "Herbal Grove Spa",
      description: "Vietnamese folk herbal spa — handmade paper texture, herbal leaf illustrations.",
      features: ["Herbal treatment menu", "Remedy storytelling", "Book via Zalo"],
    },
  },
  {
    slug: "suoi-may",
    expectedTitle: "Suối Mây",
    patch: {
      title: "Mist Spring Spa",
      description: "Upscale spa & wellness — hero carousel, menu-style pricing, booking panel.",
      features: ["Hero carousel", "Dotted-leader price list", "3 signature packages & Zalo booking"],
    },
  },
];

async function run() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("Missing SANITY_API_WRITE_TOKEN in .env.local");
    process.exit(1);
  }

  console.log("\nMigrating template catalog fields to English...\n");

  for (const target of TARGETS) {
    try {
      const doc = await client.fetch<{ _id: string; title: string } | null>(
        `*[_type == "template" && slug.current == $slug][0] { _id, title }`,
        { slug: target.slug }
      );

      if (!doc) {
        console.log(`  skip   ${target.slug} — document not found`);
        continue;
      }

      if (doc.title !== target.expectedTitle) {
        console.log(`  skip   ${target.slug} — title is "${doc.title}", not the expected Vietnamese original (already migrated or manually edited)`);
        continue;
      }

      await client.patch(doc._id).set(target.patch).commit();
      console.log(`  done   ${target.slug} — title/description/features -> English`);
    } catch (err) {
      console.error(`  error  ${target.slug}:`, err);
    }
  }

  console.log("\nDone!\n");
}

run();
