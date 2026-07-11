import { defineField, defineType } from "sanity";

export const duAnPageSchema = defineType({
  name: "duAnPage",
  title: "Projects Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "cta", title: "End-of-page CTA" },
  ],
  fields: [
    // ── Hero ──────────────────────────────────────────
    defineField({
      name: "heroEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "hero",
      initialValue: "PROJECTS WE'VE SHIPPED",
    }),
    defineField({
      name: "heroTitle",
      title: "Heading",
      type: "string",
      group: "hero",
      initialValue: "real work — not",
    }),
    defineField({
      name: "heroTitleItal",
      title: "Heading (italic)",
      type: "string",
      group: "hero",
      initialValue: "mockups.",
    }),
    defineField({
      name: "heroSub",
      title: "Description",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "Every site here passed through our hands — from picking colors to connecting the domain. No two projects look alike.",
    }),
    defineField({
      name: "metaLocation",
      title: "Meta — location",
      type: "string",
      group: "hero",
      initialValue: "all in HCMC",
    }),

    // ── CTA ───────────────────────────────────────────
    defineField({
      name: "ctaEyebrow",
      title: "CTA Eyebrow",
      type: "string",
      group: "cta",
      initialValue: "WHAT'S NEXT",
    }),
    defineField({
      name: "ctaTitle",
      title: "CTA heading",
      type: "string",
      group: "cta",
      initialValue: "your business could be",
    }),
    defineField({
      name: "ctaTitleItal",
      title: "CTA heading (italic)",
      type: "string",
      group: "cta",
      initialValue: "the next project.",
    }),
    defineField({
      name: "ctaBody",
      title: "CTA description",
      type: "text",
      rows: 3,
      group: "cta",
      initialValue:
        "Every business has a different story — we'll listen and build a site that actually fits yours, no copy-paste.",
    }),
  ],
});
