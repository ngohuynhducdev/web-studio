import { defineField, defineType } from "sanity";
import { INDUSTRY_OPTIONS } from "@/types";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "shopName",
      title: "Business name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      options: { list: [...INDUSTRY_OPTIONS] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "industryLabel",
      title: "Industry label (displayed)",
      type: "string",
      description: 'Example: "Nail salon", "Spa & Massage"',
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'Example: "District 7, HCMC"',
    }),
    defineField({
      name: "templateUsed",
      title: "Template used",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "liveUrl",
      title: "Website link (if any)",
      type: "url",
    }),
    defineField({
      name: "highlight",
      title: "Key result",
      type: "text",
      rows: 2,
      description: "A single real result — will be displayed in quotation marks",
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers display first",
    }),
  ],
  preview: {
    select: { title: "shopName", subtitle: "industryLabel", media: "image" },
  },
  orderings: [
    { name: "byOrder",   title: "Order",   by: [{ field: "order",      direction: "asc" }] },
    { name: "byNewest",  title: "Newest", by: [{ field: "_createdAt", direction: "desc" }] },
  ],
});
