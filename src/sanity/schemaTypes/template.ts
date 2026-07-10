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
    { name: 'info', title: 'Info' },
    { name: 'content', title: 'Section content' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Template name', type: 'string', group: 'info', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'info',
      options: { source: 'title', maxLength: 96 },
      description: 'URL of the demo page — auto-generated from the name or entered manually.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'componentKey',
      title: 'UI template',
      type: 'string',
      group: 'info',
      description: 'Component used to render the landing page. Leave blank to show "Coming Soon".',
      options: {
        list: TEMPLATE_MANIFEST.map((t) => ({ title: t.label, value: t.slug })),
      },
    }),
    defineField({ name: 'description', title: 'Short description', type: 'text', rows: 3, group: 'info' }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      group: 'info',
      options: { list: [...INDUSTRY_OPTIONS] },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'price', title: 'Price (USD)', type: 'number', group: 'info', validation: (Rule) => Rule.required().min(0) }),
    defineField({ name: 'demoUrl', title: 'Demo link', type: 'url', group: 'info' }),
    defineField({ name: 'thumbnail', title: 'Thumbnail image', type: 'image', group: 'info', options: { hotspot: true } }),
    defineField({ name: 'features', title: 'Key features', type: 'array', group: 'info', of: [{ type: 'string' }] }),
    defineField({ name: 'isFeatured', title: 'Featured', type: 'boolean', group: 'info', initialValue: false }),
    defineField({ name: 'isActive', title: 'Active', type: 'boolean', group: 'info', initialValue: true }),
    defineField({
      name: 'sections',
      title: 'Section content',
      type: 'array',
      group: 'content',
      description:
        'Order & layout are determined by the template in code — cannot be changed by drag-and-drop. ' +
        "Only edit content here; to hide a section, use the 'Show this section' toggle within it.",
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
