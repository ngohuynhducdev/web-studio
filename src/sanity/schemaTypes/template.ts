import { defineField, defineType } from 'sanity'
import { sectionTypes } from './sections'
import { INDUSTRY_OPTIONS } from '@/types'
import { TEMPLATE_MANIFEST } from '@/lib/templates'
import { AutoSeedSectionsInput } from '@/sanity/components/AutoSeedSectionsInput'

export const templateSchema = defineType({
  name: 'template',
  title: 'Template',
  type: 'document',
  groups: [
    { name: 'info', title: 'Thông tin' },
    { name: 'content', title: 'Nội dung sections' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Tên template', type: 'string', group: 'info', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'info',
      options: { source: 'title', maxLength: 96 },
      description: 'URL của trang demo — tự tạo từ tên hoặc nhập tay.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'componentKey',
      title: 'Mẫu giao diện',
      type: 'string',
      group: 'info',
      description: 'Component dùng để render landing page. Để trống = hiển thị "Coming Soon".',
      options: {
        list: TEMPLATE_MANIFEST.map((t) => ({ title: t.label, value: t.slug })),
      },
    }),
    defineField({ name: 'description', title: 'Mô tả ngắn', type: 'text', rows: 3, group: 'info' }),
    defineField({
      name: 'industry',
      title: 'Ngành',
      type: 'string',
      group: 'info',
      options: { list: [...INDUSTRY_OPTIONS] },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'price', title: 'Giá (VND)', type: 'number', group: 'info', validation: (Rule) => Rule.required().min(0) }),
    defineField({ name: 'demoUrl', title: 'Link demo', type: 'url', group: 'info' }),
    defineField({ name: 'thumbnail', title: 'Ảnh thumbnail', type: 'image', group: 'info', options: { hotspot: true } }),
    defineField({ name: 'features', title: 'Tính năng nổi bật', type: 'array', group: 'info', of: [{ type: 'string' }] }),
    defineField({ name: 'isFeatured', title: 'Nổi bật', type: 'boolean', group: 'info', initialValue: false }),
    defineField({ name: 'isActive', title: 'Đang hoạt động', type: 'boolean', group: 'info', initialValue: true }),
    defineField({
      name: 'sections',
      title: 'Nội dung các section',
      type: 'array',
      group: 'content',
      description:
        'Thứ tự & layout do template quy định trong code — KHÔNG đổi được bằng kéo-thả. ' +
        "Ở đây chỉ sửa nội dung; muốn ẩn thì dùng nút 'Hiển thị section này' trong từng section.",
      of: sectionTypes,
      options: { sortable: false },
      components: { input: AutoSeedSectionsInput },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'industry',
      media: 'thumbnail',
    },
    prepare({ title, subtitle, media }) {
      const labels = Object.fromEntries(INDUSTRY_OPTIONS.map((o) => [o.value, o.title]))
      return { title, subtitle: labels[subtitle] ?? subtitle, media }
    },
  },
})
