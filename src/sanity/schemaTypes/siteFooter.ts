import { defineArrayMember, defineField, defineType } from 'sanity'

export const siteFooterSchema = defineType({
  name: 'siteFooter',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({ name: 'brandName',    title: 'Tên thương hiệu',  type: 'string' }),
    defineField({ name: 'tagline',      title: 'Tagline',           type: 'string' }),
    defineField({ name: 'description',  title: 'Mô tả ngắn',       type: 'text', rows: 2 }),
    defineField({
      name: 'shopLinks', title: 'Cột "Tiệm" — links', type: 'array',
      of: [defineArrayMember({
        type: 'object', name: 'shopLink',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'href',  title: 'Link',  type: 'string' }),
        ],
        preview: { select: { title: 'label', subtitle: 'href' } },
      })],
    }),
    defineField({ name: 'email',        title: 'Email liên hệ',    type: 'string' }),
    defineField({ name: 'phone',        title: 'Số điện thoại',    type: 'string' }),
    defineField({ name: 'zaloUrl',      title: 'Link Zalo',         type: 'string' }),
    defineField({ name: 'hours',        title: 'Giờ làm việc',      type: 'string' }),
    defineField({ name: 'facebookUrl',  title: 'Facebook URL',      type: 'string' }),
    defineField({ name: 'instagramUrl', title: 'Instagram URL',     type: 'string' }),
    defineField({ name: 'tiktokUrl',    title: 'TikTok URL',        type: 'string' }),
    defineField({ name: 'copyright',    title: 'Copyright text',    type: 'string' }),
  ],
  preview: { prepare: () => ({ title: '🦶 Footer' }) },
})
