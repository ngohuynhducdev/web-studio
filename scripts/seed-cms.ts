/**
 * seed-cms.ts
 *
 * Creates initial content for all singleton documents in Sanity.
 * Uses createIfNotExists — safe to run multiple times (idempotent).
 *
 * How to run:
 *   pnpm seed
 */

import * as dotenv from "dotenv";
import { createClient } from "@sanity/client";

import {
  DEFAULT_HERO,
  DEFAULT_TAPE_ITEMS,
  DEFAULT_HIW_HEADINGS,
  DEFAULT_STEPS,
  DEFAULT_TEMPLATES_SECTION,
  DEFAULT_TESTI_HEADINGS,
  FALLBACK_TESTIMONIALS,
  DEFAULT_PRICING_HEADINGS,
  DEFAULT_PRICING_PLANS,
  DEFAULT_CTA,
} from "../src/data/homepage";

import { DEFAULT_HEADER, DEFAULT_FOOTER } from "../src/data/layout";

import {
  DEFAULT_ABOUT_HERO,
  DEFAULT_STORY,
  DEFAULT_STORY_PARAGRAPHS,
  DEFAULT_VALUES,
  DEFAULT_STATS,
} from "../src/data/ve-chung-toi";

import { DEFAULT_CONTACT } from "../src/data/lien-he";
import { DEFAULT_TEMPLATES_PAGE } from "../src/data/templates-page";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-05-17",
  token:     process.env.SANITY_API_WRITE_TOKEN,
  useCdn:    false,
});

// ─────────────────────────────────────────────────────────────────────────────
// Documents
// ─────────────────────────────────────────────────────────────────────────────

const documents = [

  // ── siteHeader ─────────────────────────────────────────────────────────────
  {
    _id:   "siteHeader",
    _type: "siteHeader",
    ...DEFAULT_HEADER,
  },

  // ── siteFooter ─────────────────────────────────────────────────────────────
  {
    _id:   "siteFooter",
    _type: "siteFooter",
    ...DEFAULT_FOOTER,
  },

  // ── homepage ───────────────────────────────────────────────────────────────
  {
    _id:   "homepage",
    _type: "homepage",

    ...DEFAULT_HERO,
    tapeItems: DEFAULT_TAPE_ITEMS,
    ...DEFAULT_HIW_HEADINGS,
    hiwSteps: DEFAULT_STEPS,
    ...DEFAULT_TEMPLATES_SECTION,
    ...DEFAULT_TESTI_HEADINGS,
    testiItems: FALLBACK_TESTIMONIALS,
    ...DEFAULT_PRICING_HEADINGS,
    pricingPlans: DEFAULT_PRICING_PLANS,
    ...DEFAULT_CTA,
  },

  // ── aboutPage ──────────────────────────────────────────────────────────────
  {
    _id:   "aboutPage",
    _type: "aboutPage",
    ...DEFAULT_ABOUT_HERO,
    ...DEFAULT_STORY,
    storyParagraphs: DEFAULT_STORY_PARAGRAPHS,
    values: DEFAULT_VALUES,
    stats:  DEFAULT_STATS,
  },

  // ── contactPage ────────────────────────────────────────────────────────────
  {
    _id:   "contactPage",
    _type: "contactPage",
    ...DEFAULT_CONTACT,
  },

  // ── templatesPage ──────────────────────────────────────────────────────────
  {
    _id:   "templatesPage",
    _type: "templatesPage",
    ...DEFAULT_TEMPLATES_PAGE,
  },

];

// ─────────────────────────────────────────────────────────────────────────────
// Runner
// ─────────────────────────────────────────────────────────────────────────────

async function seed() {
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.error("❌  Missing SANITY_API_WRITE_TOKEN in .env.local");
    console.error("   → Go to sanity.io/manage → project → API → Tokens → Add token (Editor)");
    process.exit(1);
  }

  console.log(`\n🌱  Seeding ${documents.length} documents to Sanity...\n`);

  for (const doc of documents) {
    try {
      const result = await client.createIfNotExists(doc as Parameters<typeof client.createIfNotExists>[0]);
      console.log(`  ✅  ${doc._id}  ${result._createdAt ? "(created)" : "(already exists, skipped)"}`);
    } catch (err) {
      console.error(`  ❌  ${doc._id}:`, err);
    }
  }

  console.log("\n✨  Done!\n");
}

seed();
