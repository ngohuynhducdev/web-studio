import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPageSchema = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  groups: [
    { name: "hero",   title: "Hero" },
    { name: "story",  title: "Story" },
    { name: "values", title: "Values" },
  ],
  fields: [
    // Hero
    defineField({
      name: "heroTitle",
      title: "Heading",
      type: "string",
      group: "hero",
      initialValue: "a small studio —",
    }),
    defineField({
      name: "heroTitleItal",
      title: "Heading (italic)",
      type: "string",
      group: "hero",
      initialValue: "not an agency.",
    }),
    defineField({
      name: "heroSub",
      title: "Short description",
      type: "text",
      rows: 3,
      group: "hero",
    }),

    // Story
    defineField({
      name: "storyTitle",
      title: "Story section heading",
      type: "string",
      group: "story",
      initialValue: "why this studio exists",
    }),
    defineField({
      name: "storyParagraphs",
      title: "Paragraphs",
      type: "array",
      group: "story",
      of: [defineArrayMember({ type: "text" })],
    }),
    defineField({
      name: "storyQuote",
      title: "Quote",
      type: "text",
      rows: 2,
      group: "story",
    }),
    defineField({
      name: "storyQuoteSource",
      title: "Quote source",
      type: "string",
      group: "story",
    }),
    defineField({
      name: "storyImage",
      title: "Story image",
      type: "image",
      group: "story",
      options: { hotspot: true },
      fields: [
        // Without this the page had one hardcoded alt covering both an uploaded
        // photo and the stock fallback, so whichever was live got the other
        // one's description. An uploaded photo has to carry its own.
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description:
            "Describe what is in the photo, for screen readers. Leave empty only if the image is purely decorative.",
        }),
      ],
    }),

    // Values
    defineField({
      name: "values",
      title: "Core values",
      type: "array",
      group: "values",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "num",   title: "Number", type: "string" }),
            defineField({ name: "title", title: "Title",   type: "string" }),
            defineField({ name: "body",  title: "Body",  type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "num" } },
        }),
      ],
    }),
  ],
});
