import { defineField, defineType } from "sanity";

export const templatesPageSchema = defineType({
  name: "templatesPage",
  title: "Templates Page",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
  ],
  fields: [
    defineField({
      name: "heroHeadingLine1",
      title: "Heading line 1",
      type: "string",
      group: "hero",
      initialValue: "ready-made templates,",
    }),
    defineField({
      name: "heroHeadingItal",
      title: "Heading line 2 (italic)",
      type: "string",
      group: "hero",
      initialValue: "customized for your",
    }),
    defineField({
      name: "heroHeadingLine3",
      title: "Heading line 3",
      type: "string",
      group: "hero",
      initialValue: "business.",
    }),
    defineField({
      name: "heroDesc",
      title: "Description",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue: "we don't just sell you a theme and walk away — every template is customized with your colors, content, and photos. pick the one that fits, message us on zalo, get your site in 5 days.",
    }),
  ],
});
