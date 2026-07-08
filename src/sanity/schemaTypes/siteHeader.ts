import { defineArrayMember, defineField, defineType } from 'sanity'

export const siteHeaderSchema = defineType({
  name: 'siteHeader',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({ name: 'brandName', title: 'Tên thương hiệu (logo text)', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo (ảnh — ưu tiên hơn text)', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'navLinks', title: 'Nav links', type: 'array',
      of: [defineArrayMember({
        type: 'object', name: 'navLink',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'href',  title: 'Đường dẫn (vd: /templates)', type: 'string' }),
        ],
        preview: { select: { title: 'label', subtitle: 'href' } },
      })],
    }),
    defineField({ name: 'ctaLabel', title: 'Nút CTA — label', type: 'string' }),
    defineField({ name: 'ctaHref',  title: 'Nút CTA — link',  type: 'string' }),
  ],
  preview: { prepare: () => ({ title: '🧭 Header' }) },
})
