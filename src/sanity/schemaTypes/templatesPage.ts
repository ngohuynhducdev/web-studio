import { defineField, defineType } from "sanity";

export const templatesPageSchema = defineType({
  name: "templatesPage",
  title: "Trang Templates",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "meta", title: "Meta strip" },
  ],
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "hero",
      initialValue: "THƯ VIỆN MẪU",
    }),
    defineField({
      name: "heroHeadingLine1",
      title: "Dòng 1 heading",
      type: "string",
      group: "hero",
      initialValue: "mẫu làm sẵn,",
    }),
    defineField({
      name: "heroHeadingItal",
      title: "Dòng 2 heading (chữ nghiêng)",
      type: "string",
      group: "hero",
      initialValue: "chỉnh theo tiệm",
    }),
    defineField({
      name: "heroHeadingLine3",
      title: "Dòng 3 heading",
      type: "string",
      group: "hero",
      initialValue: "của bạn.",
    }),
    defineField({
      name: "heroDesc",
      title: "Mô tả",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue: "tụi em không bán theme rồi thôi — mỗi mẫu được customize đúng màu sắc, nội dung, hình ảnh của tiệm. chọn cái phù hợp, nhắn zalo, có web trong 5 ngày.",
    }),
    defineField({
      name: "metaUpdateNote",
      title: "Meta — ghi chú cập nhật",
      type: "string",
      group: "meta",
      initialValue: "cập nhật thường xuyên",
    }),
    defineField({
      name: "metaStartingPrice",
      title: "Meta — giá khởi điểm",
      type: "string",
      group: "meta",
      description: 'Ví dụ: "từ 399.000đ / tháng"',
      initialValue: "từ 399.000đ / tháng",
    }),
  ],
});
