import { defineArrayMember, defineField, defineType } from 'sanity'

export const homepageSchema = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'hero',          title: 'Hero' },
    { name: 'tape',          title: 'Tape Strip' },
    { name: 'howItWorks',    title: 'Cách hoạt động' },
    { name: 'templates',     title: 'Templates' },
    { name: 'testimonials',  title: 'Đánh giá' },
    { name: 'pricing',       title: 'Bảng giá' },
    { name: 'cta',           title: 'CTA' },
  ],
  fields: [

    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({ name: 'heroEyebrow',     title: 'Eyebrow',          type: 'string', group: 'hero' }),
    defineField({ name: 'heroHeading',     title: 'Tiêu đề chính',    type: 'string', group: 'hero' }),
    defineField({ name: 'heroHeadingItal', title: 'Tiêu đề (nghiêng)',type: 'string', group: 'hero' }),
    defineField({ name: 'heroLede',        title: 'Mô tả',            type: 'text', rows: 3, group: 'hero' }),
    defineField({ name: 'heroBadge',       title: 'Badge (vd: bàn giao trong 5 ngày)', type: 'string', group: 'hero' }),
    defineField({ name: 'heroCtaPrimary',  title: 'Nút CTA chính',    type: 'string', group: 'hero' }),
    defineField({ name: 'heroCtaSecondary',title: 'Nút CTA phụ',      type: 'string', group: 'hero' }),
    defineField({
      name: 'heroMeta', title: 'Điểm nổi bật (✓ list)', type: 'array', group: 'hero',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'heroImage', title: 'Ảnh hero', type: 'image', group: 'hero',
      options: { hotspot: true },
    }),

    // ── Tape Strip ────────────────────────────────────────────────────────
    defineField({
      name: 'tapeItems', title: 'Danh sách ngành nghề', type: 'array', group: 'tape',
      of: [{ type: 'string' }],
    }),

    // ── How It Works ──────────────────────────────────────────────────────
    defineField({ name: 'hiwEyebrow',  title: 'Eyebrow',           type: 'string', group: 'howItWorks' }),
    defineField({ name: 'hiwHeading',  title: 'Tiêu đề chính',     type: 'string', group: 'howItWorks' }),
    defineField({ name: 'hiwHeadingItal', title: 'Tiêu đề (nghiêng)', type: 'string', group: 'howItWorks' }),
    defineField({
      name: 'hiwSteps', title: 'Các bước', type: 'array', group: 'howItWorks',
      of: [defineArrayMember({
        type: 'object', name: 'step',
        fields: [
          defineField({ name: 'title', title: 'Tiêu đề bước', type: 'string' }),
          defineField({ name: 'desc',  title: 'Mô tả',         type: 'text', rows: 2 }),
          defineField({ name: 'icon',  title: 'Icon',           type: 'string',
            options: { list: [
              { title: 'Grid (chọn mẫu)',    value: 'grid' },
              { title: 'Chat (gửi thông tin)', value: 'chat' },
              { title: 'Pulse (nhận web)',   value: 'pulse' },
            ]},
          }),
        ],
        preview: { select: { title: 'title', subtitle: 'desc' } },
      })],
    }),

    // ── Templates section ─────────────────────────────────────────────────
    defineField({ name: 'tplEyebrow',     title: 'Eyebrow',           type: 'string', group: 'templates' }),
    defineField({ name: 'tplHeading',     title: 'Tiêu đề',           type: 'string', group: 'templates' }),
    defineField({ name: 'tplHeadingItal', title: 'Tiêu đề (nghiêng)', type: 'string', group: 'templates' }),

    // ── Testimonials ──────────────────────────────────────────────────────
    defineField({ name: 'testiEyebrow', title: 'Eyebrow', type: 'string', group: 'testimonials' }),
    defineField({ name: 'testiHeading', title: 'Tiêu đề', type: 'string', group: 'testimonials' }),
    defineField({
      name: 'testiItems', title: 'Đánh giá', type: 'array', group: 'testimonials',
      of: [defineArrayMember({
        type: 'object', name: 'testimonial',
        fields: [
          defineField({ name: 'clientName', title: 'Tên khách',     type: 'string' }),
          defineField({ name: 'shopName',   title: 'Tên tiệm',      type: 'string' }),
          defineField({ name: 'content',    title: 'Nội dung',      type: 'text', rows: 3 }),
          defineField({ name: 'rating',     title: 'Số sao (1–5)',  type: 'number', initialValue: 5,
            validation: (Rule) => Rule.min(1).max(5).integer(),
          }),
        ],
        preview: { select: { title: 'clientName', subtitle: 'shopName' } },
      })],
    }),

    // ── Pricing ───────────────────────────────────────────────────────────
    defineField({ name: 'pricingEyebrow',     title: 'Eyebrow',           type: 'string', group: 'pricing' }),
    defineField({ name: 'pricingHeading',     title: 'Tiêu đề',           type: 'string', group: 'pricing' }),
    defineField({ name: 'pricingHeadingItal', title: 'Tiêu đề (nghiêng)', type: 'string', group: 'pricing' }),
    defineField({
      name: 'pricingPlans', title: 'Gói dịch vụ', type: 'array', group: 'pricing',
      of: [defineArrayMember({
        type: 'object', name: 'plan',
        fields: [
          defineField({ name: 'name',        title: 'Tên gói',       type: 'string' }),
          defineField({ name: 'description', title: 'Mô tả ngắn',   type: 'string' }),
          defineField({ name: 'price',       title: 'Giá (số, đơn vị đ)', type: 'number' }),
          defineField({
            name: 'features', title: 'Tính năng', type: 'array',
            of: [defineArrayMember({
              type: 'object', name: 'feature',
              fields: [
                defineField({ name: 'text',     title: 'Tên tính năng', type: 'string' }),
                defineField({ name: 'included', title: 'Có trong gói', type: 'boolean', initialValue: true }),
              ],
              preview: { select: { title: 'text', subtitle: 'included' } },
            })],
          }),
          defineField({ name: 'cta',      title: 'Label nút CTA', type: 'string' }),
          defineField({ name: 'footnote', title: 'Ghi chú nhỏ',   type: 'string' }),
          defineField({ name: 'featured', title: 'Nổi bật nhất',  type: 'boolean' }),
        ],
        preview: { select: { title: 'name', subtitle: 'price' } },
      })],
    }),

    // ── CTA ───────────────────────────────────────────────────────────────
    defineField({ name: 'ctaEyebrow',     title: 'Eyebrow',           type: 'string', group: 'cta' }),
    defineField({ name: 'ctaHeading',     title: 'Tiêu đề',           type: 'string', group: 'cta' }),
    defineField({ name: 'ctaHeadingItal', title: 'Tiêu đề (nghiêng)', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaBody',        title: 'Mô tả',             type: 'text', rows: 2, group: 'cta' }),
    defineField({ name: 'ctaZaloUrl',     title: 'Link Zalo',         type: 'string', group: 'cta' }),
    defineField({ name: 'ctaPhone',       title: 'Số điện thoại',     type: 'string', group: 'cta' }),
    defineField({ name: 'ctaHours',       title: 'Giờ hỗ trợ',       type: 'string', group: 'cta' }),
  ],
  preview: { prepare: () => ({ title: '🏠 Homepage' }) },
})
