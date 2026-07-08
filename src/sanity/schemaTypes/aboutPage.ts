import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPageSchema = defineType({
  name: "aboutPage",
  title: "Về chúng mình",
  type: "document",
  groups: [
    { name: "hero",   title: "Hero" },
    { name: "story",  title: "Câu chuyện" },
    { name: "values", title: "Giá trị" },
    { name: "stats",  title: "Số liệu" },
  ],
  fields: [
    // Hero
    defineField({
      name: "heroEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "hero",
      initialValue: "VỀ CHÚNG MÌNH",
    }),
    defineField({
      name: "heroTitle",
      title: "Tiêu đề",
      type: "string",
      group: "hero",
      initialValue: "một tiệm nhỏ —",
    }),
    defineField({
      name: "heroTitleItal",
      title: "Tiêu đề (chữ nghiêng)",
      type: "string",
      group: "hero",
      initialValue: "không phải agency.",
    }),
    defineField({
      name: "heroSub",
      title: "Mô tả ngắn",
      type: "text",
      rows: 3,
      group: "hero",
    }),

    // Story
    defineField({
      name: "storyTitle",
      title: "Tiêu đề phần câu chuyện",
      type: "string",
      group: "story",
      initialValue: "tại sao có tiệm này",
    }),
    defineField({
      name: "storyParagraphs",
      title: "Các đoạn văn",
      type: "array",
      group: "story",
      of: [defineArrayMember({ type: "text" })],
    }),
    defineField({
      name: "storyQuote",
      title: "Trích dẫn",
      type: "text",
      rows: 2,
      group: "story",
    }),
    defineField({
      name: "storyQuoteSource",
      title: "Nguồn trích dẫn",
      type: "string",
      group: "story",
    }),
    defineField({
      name: "storyImage",
      title: "Ảnh câu chuyện",
      type: "image",
      group: "story",
      options: { hotspot: true },
    }),

    // Values
    defineField({
      name: "values",
      title: "Giá trị cốt lõi",
      type: "array",
      group: "values",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "num",   title: "Số thứ tự", type: "string" }),
            defineField({ name: "title", title: "Tiêu đề",   type: "string" }),
            defineField({ name: "body",  title: "Nội dung",  type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "num" } },
        }),
      ],
    }),

    // Stats
    defineField({
      name: "stats",
      title: "Số liệu nổi bật",
      type: "array",
      group: "stats",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "value", title: "Giá trị", type: "string", description: 'Ví dụ: "15+" hay "5"' }),
            defineField({ name: "label", title: "Nhãn",    type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),
  ],
});
