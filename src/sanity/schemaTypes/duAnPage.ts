import { defineField, defineType } from "sanity";

export const duAnPageSchema = defineType({
  name: "duAnPage",
  title: "Trang Dự Án",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "cta", title: "CTA cuối trang" },
  ],
  fields: [
    // ── Hero ──────────────────────────────────────────
    defineField({
      name: "heroEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "hero",
      initialValue: "DỰ ÁN ĐÃ LÀM",
    }),
    defineField({
      name: "heroTitle",
      title: "Tiêu đề",
      type: "string",
      group: "hero",
      initialValue: "thực tế — không phải",
    }),
    defineField({
      name: "heroTitleItal",
      title: "Tiêu đề (chữ nghiêng)",
      type: "string",
      group: "hero",
      initialValue: "mock-up.",
    }),
    defineField({
      name: "heroSub",
      title: "Mô tả",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "Mỗi trang web ở đây đã đi qua tay mình — từ lúc chọn màu đến lúc gắn tên miền cho tiệm. Không có dự án nào giống dự án nào.",
    }),
    defineField({
      name: "metaLocation",
      title: "Meta — địa điểm",
      type: "string",
      group: "hero",
      initialValue: "tất cả tại TP.HCM",
    }),

    // ── CTA ───────────────────────────────────────────
    defineField({
      name: "ctaEyebrow",
      title: "CTA Eyebrow",
      type: "string",
      group: "cta",
      initialValue: "TIẾP THEO",
    }),
    defineField({
      name: "ctaTitle",
      title: "CTA Tiêu đề",
      type: "string",
      group: "cta",
      initialValue: "tiệm của bạn có thể là",
    }),
    defineField({
      name: "ctaTitleItal",
      title: "CTA Tiêu đề (chữ nghiêng)",
      type: "string",
      group: "cta",
      initialValue: "dự án tiếp theo.",
    }),
    defineField({
      name: "ctaBody",
      title: "CTA Mô tả",
      type: "text",
      rows: 3,
      group: "cta",
      initialValue:
        "Mỗi tiệm một câu chuyện khác nhau — mình sẽ lắng nghe và làm một trang web đúng với tiệm bạn, không copy-paste.",
    }),
  ],
});
