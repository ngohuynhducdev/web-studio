import { defineField, defineType } from "sanity";
import { INDUSTRY_OPTIONS } from "@/types";

export const projectSchema = defineType({
  name: "project",
  title: "Dự án",
  type: "document",
  fields: [
    defineField({
      name: "shopName",
      title: "Tên tiệm",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "industry",
      title: "Ngành",
      type: "string",
      options: { list: [...INDUSTRY_OPTIONS] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "industryLabel",
      title: "Nhãn ngành (hiển thị)",
      type: "string",
      description: 'Ví dụ: "Nail salon", "Spa & Massage"',
    }),
    defineField({
      name: "location",
      title: "Địa điểm",
      type: "string",
      description: 'Ví dụ: "Quận 7, TP.HCM"',
    }),
    defineField({
      name: "templateUsed",
      title: "Mẫu đã dùng",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Ảnh đại diện",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "liveUrl",
      title: "Link trang web (nếu có)",
      type: "url",
    }),
    defineField({
      name: "highlight",
      title: "Kết quả nổi bật",
      type: "text",
      rows: 2,
      description: "Một câu kết quả thực tế — sẽ hiển thị trong dấu ngoặc kép",
    }),
    defineField({
      name: "order",
      title: "Thứ tự hiển thị",
      type: "number",
      description: "Số nhỏ hơn hiển thị trước",
    }),
  ],
  preview: {
    select: { title: "shopName", subtitle: "industryLabel", media: "image" },
  },
  orderings: [
    { name: "byOrder",   title: "Thứ tự",   by: [{ field: "order",      direction: "asc" }] },
    { name: "byNewest",  title: "Mới nhất", by: [{ field: "_createdAt", direction: "desc" }] },
  ],
});
