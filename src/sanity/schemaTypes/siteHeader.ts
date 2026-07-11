import { defineArrayMember, defineField, defineType } from 'sanity'

export const siteHeaderSchema = defineType({
  name: 'siteHeader',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({ name: 'brandName', title: 'Brand name (logo text)', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo (image — takes priority over text)', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'navLinks', title: 'Nav links', type: 'array',
      of: [defineArrayMember({
        type: 'object', name: 'navLink',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'href',  title: 'Path (e.g. /templates)', type: 'string' }),
        ],
        preview: { select: { title: 'label', subtitle: 'href' } },
      })],
    }),
    defineField({ name: 'ctaLabel', title: 'CTA button — label', type: 'string' }),
    defineField({ name: 'ctaHref',  title: 'CTA button — link',  type: 'string' }),
  ],
  preview: { prepare: () => ({ title: '🧭 Header' }) },
})
