import { defineArrayMember, defineField, defineType } from "sanity";

export const contactPageSchema = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  groups: [
    { name: "hero",     title: "Hero" },
    { name: "form",     title: "Order form" },
    { name: "sidebar",  title: "Sidebar" },
  ],
  fields: [
    // Hero
    defineField({
      name: "heroEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "hero",
      initialValue: "CONTACT & ORDER A TEMPLATE",
    }),
    defineField({
      name: "heroTitle",
      title: "Heading",
      type: "string",
      group: "hero",
      initialValue: "tell us about your business.",
    }),
    defineField({
      name: "heroSub",
      title: "Short description",
      type: "text",
      rows: 2,
      group: "hero",
      initialValue: "Fill out the form below — we'll reach out with free advice and suggest the best-fit template for your business.",
    }),

    // Form card
    defineField({
      name: "formCardTitle",
      title: "Form card heading",
      type: "string",
      group: "form",
      initialValue: "Fill in your details",
    }),
    defineField({
      name: "formCardDesc",
      title: "Description below the heading",
      type: "text",
      rows: 2,
      group: "form",
      initialValue: "Not sure which template you want? Just tell us about your business and we'll suggest one.",
    }),

    // Sidebar — Zalo card
    defineField({
      name: "zaloCardLabel",
      title: "Zalo card — lead-in text",
      type: "string",
      group: "sidebar",
      initialValue: "Want to talk directly?",
    }),
    defineField({
      name: "zaloCardNote",
      title: "Zalo card — note below the button",
      type: "string",
      group: "sidebar",
      initialValue: "Fastest response on Zalo",
    }),

    // Sidebar — Promises
    defineField({
      name: "promisesTitle",
      title: "Promises section heading",
      type: "string",
      group: "sidebar",
      initialValue: "Our promise",
    }),
    defineField({
      name: "promises",
      title: "List of promises",
      type: "array",
      group: "sidebar",
      of: [defineArrayMember({ type: "string" })],
      initialValue: [
        "Free advice, no pressure to buy",
        "Reply within 1–2 hours (business hours)",
        "Site ready in 3–5 business days",
        "Unlimited support after handoff",
      ],
    }),
  ],
});
