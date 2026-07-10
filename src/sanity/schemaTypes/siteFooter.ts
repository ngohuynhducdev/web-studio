import { defineArrayMember, defineField, defineType } from 'sanity'

export const siteFooterSchema = defineType({
  name: 'siteFooter',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({ name: 'brandName',    title: 'Brand name',  type: 'string' }),
    defineField({ name: 'tagline',      title: 'Tagline',           type: 'string' }),
    defineField({ name: 'description',  title: 'Short description',       type: 'text', rows: 2 }),
    defineField({
      name: 'shopLinks', title: '"Business" column — links', type: 'array',
      of: [defineArrayMember({
        type: 'object', name: 'shopLink',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'href',  title: 'Link',  type: 'string' }),
        ],
        preview: { select: { title: 'label', subtitle: 'href' } },
      })],
    }),
    defineField({ name: 'email',        title: 'Contact email',    type: 'string' }),
    defineField({ name: 'phone',        title: 'Phone number',    type: 'string' }),
    defineField({ name: 'zaloUrl',      title: 'Zalo link',         type: 'string' }),
    defineField({ name: 'hours',        title: 'Business hours',      type: 'string' }),
    defineField({ name: 'facebookUrl',  title: 'Facebook URL',      type: 'string' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL',     type: 'string' }),
    defineField({ name: 'tiktokUrl',    title: 'TikTok URL',        type: 'string' }),
    defineField({ name: 'copyright',    title: 'Copyright text',    type: 'string' }),
  ],
  preview: { prepare: () => ({ title: '🦶 Footer' }) },
})
