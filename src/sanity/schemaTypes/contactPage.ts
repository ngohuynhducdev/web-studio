import { defineArrayMember, defineField, defineType } from "sanity";

export const contactPageSchema = defineType({
  name: "contactPage",
  title: "Trang Liên hệ",
  type: "document",
  groups: [
    { name: "hero",     title: "Hero" },
    { name: "form",     title: "Form đặt mẫu" },
    { name: "sidebar",  title: "Sidebar" },
  ],
  fields: [
    // Hero
    defineField({
      name: "heroEyebrow",
      title: "Eyebrow",
      type: "string",
      group: "hero",
      initialValue: "LIÊN HỆ & ĐẶT MẪU",
    }),
    defineField({
      name: "heroTitle",
      title: "Tiêu đề",
      type: "string",
      group: "hero",
      initialValue: "kể về tiệm của bạn.",
    }),
    defineField({
      name: "heroSub",
      title: "Mô tả ngắn",
      type: "text",
      rows: 2,
      group: "hero",
      initialValue: "Điền form bên dưới — mình sẽ liên hệ tư vấn miễn phí và gợi ý mẫu phù hợp nhất với tiệm bạn.",
    }),

    // Form card
    defineField({
      name: "formCardTitle",
      title: "Tiêu đề card form",
      type: "string",
      group: "form",
      initialValue: "Điền thông tin đặt mẫu",
    }),
    defineField({
      name: "formCardDesc",
      title: "Mô tả dưới tiêu đề",
      type: "text",
      rows: 2,
      group: "form",
      initialValue: "Không cần biết rõ mình muốn mẫu nào — cứ kể về tiệm, mình gợi ý cho.",
    }),

    // Sidebar — Zalo card
    defineField({
      name: "zaloCardLabel",
      title: "Zalo card — câu dẫn",
      type: "string",
      group: "sidebar",
      initialValue: "Muốn nói chuyện trực tiếp?",
    }),
    defineField({
      name: "zaloCardNote",
      title: "Zalo card — ghi chú dưới nút",
      type: "string",
      group: "sidebar",
      initialValue: "Phản hồi nhanh nhất qua Zalo",
    }),

    // Sidebar — Promises
    defineField({
      name: "promisesTitle",
      title: "Tiêu đề phần cam kết",
      type: "string",
      group: "sidebar",
      initialValue: "Cam kết của mình",
    }),
    defineField({
      name: "promises",
      title: "Danh sách cam kết",
      type: "array",
      group: "sidebar",
      of: [defineArrayMember({ type: "string" })],
      initialValue: [
        "Tư vấn miễn phí, không ép mua",
        "Trả lời trong 1–2 giờ (giờ hành chánh)",
        "Web xong trong 3–5 ngày làm việc",
        "Hỗ trợ sau bàn giao không giới hạn",
      ],
    }),
  ],
});
