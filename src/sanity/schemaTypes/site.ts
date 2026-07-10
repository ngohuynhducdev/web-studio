import { defineField, defineType } from 'sanity'
import { sectionTypes } from './sections'
import { INDUSTRY_OPTIONS } from '@/types'
import { AutoSeedSiteInput } from '@/sanity/components/AutoSeedSiteInput'
import { ChecklistWithProgress } from '@/sanity/components/ChecklistWithProgress'
import { RenewalDateInput } from '@/sanity/components/RenewalDateInput'
import { IsActiveInput } from '@/sanity/components/IsActiveInput'

export const siteSchema = defineType({
  name: 'site',
  title: 'Order',
  type: 'document',
  groups: [
    { name: 'info', title: 'Order info' },
    { name: 'workflow', title: 'Workflow & billing' },
    { name: 'content', title: 'Landing page content' },
  ],
  fields: [
    // ── Order info ────────────────────────────
    defineField({
      name: 'clientName',
      title: 'Client name',
      type: 'string',
      group: 'info',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'businessName',
      title: 'Business name',
      type: 'string',
      group: 'info',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone / Zalo',
      type: 'string',
      group: 'info',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'info',
    }),
    defineField({
      name: 'businessType',
      title: 'Business type',
      type: 'string',
      group: 'info',
      options: { list: [...INDUSTRY_OPTIONS] },
    }),
    defineField({
      name: 'chosenTemplate',
      title: 'Chosen template',
      type: 'reference',
      group: 'info',
      to: [{ type: 'template' }],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'info',
      initialValue: 'in_progress',
      options: {
        list: [
          { title: '🆕 New', value: 'new' },
          { title: '⚙️ In progress', value: 'in_progress' },
          { title: '✅ Awaiting review', value: 'review' },
          { title: '🎉 Delivered', value: 'delivered' },
          { title: '❌ Cancelled', value: 'cancelled' },
        ],
      },
    }),
    defineField({
      name: 'orderDate',
      title: 'Order date',
      type: 'date',
      group: 'info',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'deliveryDate',
      title: 'Delivery date (expected)',
      type: 'date',
      group: 'info',
      initialValue: () => {
        const d = new Date()
        d.setDate(d.getDate() + 2)
        return d.toISOString().split('T')[0]
      },
    }),
    defineField({
      name: 'previewSlug',
      title: 'Preview slug (demo URL)',
      type: 'slug',
      group: 'info',
      description: 'Demo link: web-studio.vercel.app/preview/[slug]',
      options: { source: 'businessName' },
    }),
    defineField({
      name: 'customDomain',
      title: 'Client custom domain',
      type: 'string',
      group: 'info',
      description: 'Example: tiemnailcuanam.com — no https://',
    }),
    defineField({
      name: 'domainStatus',
      title: 'Domain status',
      type: 'string',
      group: 'info',
      initialValue: 'none',
      options: {
        list: [
          { title: '— None yet', value: 'none' },
          { title: '🔧 Setting up', value: 'setting_up' },
          { title: '🟢 Live', value: 'live' },
        ],
      },
    }),
    defineField({ name: 'dnsNote', title: 'DNS / domain provider notes', type: 'text', rows: 2, group: 'info' }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      group: 'info',
      description: 'Title shown on Google. Leave blank to use the business name.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 2,
      group: 'info',
      description: 'Short description shown on Google (120–160 characters).',
      validation: (Rule) => Rule.max(160).warning('Keep it under 160 characters so it displays fully on Google.'),
    }),
    defineField({ name: 'notes', title: 'Internal notes', type: 'text', rows: 3, group: 'info' }),

    // ── Workflow & billing ─────────────────────────
    defineField({
      name: 'isActive',
      title: 'Site is active',
      type: 'boolean',
      group: 'workflow',
      initialValue: false,
      description: 'Turn off manually to lock the site immediately. Once renewalDate passes, the site also turns off automatically even if this is on.',
      components: { input: IsActiveInput },
    }),
    defineField({
      name: 'renewalDate',
      title: 'Next renewal date',
      type: 'date',
      group: 'workflow',
      description: 'Use the calculator above to auto-fill, or set it manually if needed.',
      components: { input: RenewalDateInput },
    }),
    defineField({
      name: 'servicePlan',
      title: 'Service plan',
      type: 'string',
      group: 'workflow',
      options: {
        list: [
          { title: 'Basic — 399k/month', value: 'basic' },
          { title: 'Premium — 699k/month', value: 'premium' },
        ],
      },
    }),
    defineField({
      name: 'setupFee',
      title: 'Setup fee collected (VND)',
      type: 'number',
      group: 'workflow',
      description: 'Basic plan: 500k. Premium plan: 500k + actual domain cost.',
    }),
    defineField({
      name: 'intakeReceived',
      title: 'Content received from client',
      type: 'array',
      group: 'workflow',
      of: [{ type: 'string' }],
      description: 'Check off what the client has sent — a checklist so nothing is missed during build.',
      components: { input: ChecklistWithProgress },
      options: {
        layout: 'grid',
        list: [
          { title: 'Logo / brand identity', value: 'logo' },
          { title: 'Photos of space / products', value: 'photos' },
          { title: 'Service list / menu + prices', value: 'services' },
          { title: 'Contact info (address, phone, Zalo)', value: 'contact' },
          { title: 'Opening hours', value: 'hours' },
          { title: 'About content / story', value: 'about' },
          { title: 'Customer reviews', value: 'reviews' },
        ],
      },
    }),
    defineField({
      name: 'qaChecks',
      title: 'QA before delivery',
      type: 'array',
      group: 'workflow',
      of: [{ type: 'string' }],
      description: 'Check all 5 items before moving to "Awaiting review".',
      components: { input: ChecklistWithProgress },
      options: {
        layout: 'grid',
        list: [
          { title: 'Content is correct (business name, prices...)', value: 'content' },
          { title: 'All images display correctly', value: 'images' },
          { title: 'Zalo link / phone number work correctly', value: 'contact' },
          { title: 'Form works (submissions received)', value: 'form' },
          { title: 'Displays well on mobile', value: 'mobile' },
        ],
      },
    }),

    // ── Appearance customization ────────────────────────────
    defineField({
      name: 'brandColor',
      title: 'Brand color',
      type: 'string',
      group: 'content',
      description: 'Hex color code — e.g. #d4a373. Leave blank to use the template default color.',
      validation: (Rule) =>
        Rule.custom((val) => {
          if (!val) return true;
          return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(val)
            ? true
            : 'Enter a valid hex code, e.g. #d4a373';
        }),
    }),

    // ── Landing page content ─────────────────────────
    defineField({
      name: 'sections',
      title: 'Section content',
      type: 'array',
      group: 'content',
      description:
        'Auto-filled when "Chosen template" is selected. ' +
        'Order & layout are fixed in code — only edit content here.',
      of: sectionTypes,
      options: { sortable: false },
      components: { input: AutoSeedSiteInput },
    }),
  ],
  preview: {
    select: {
      title: 'businessName',
      status: 'status',
      clientName: 'clientName',
      intakeReceived: 'intakeReceived',
      qaChecks: 'qaChecks',
      domainStatus: 'domainStatus',
      isActive: 'isActive',
      renewalDate: 'renewalDate',
    },
    prepare({ title, status, clientName, intakeReceived, qaChecks, domainStatus, isActive, renewalDate }) {
      const statusLabel: Record<string, string> = {
        new: '🆕', in_progress: '⚙️', review: '✅', delivered: '🎉', cancelled: '❌',
      }
      const today = new Date().toISOString().split('T')[0]
      const isExpired = renewalDate != null && (renewalDate as string) < today
      const suspended = isActive === false
      const intake = (intakeReceived as string[] | undefined)?.length ?? 0
      const qa = (qaChecks as string[] | undefined)?.length ?? 0
      const domIcon = ({ none: '', setting_up: '🔧', live: '🌐🟢' } as Record<string, string>)[domainStatus as string] ?? ''
      const statusIcon = statusLabel[status as string] ?? status
      const parts = [`${clientName} · ${statusIcon}`, `📋${intake}/7`, `✅${qa}/5`]
      if (domIcon) parts.push(domIcon)
      if (isExpired) parts.push('🔴 Expired')
      else if (suspended) parts.push('💤 Suspended')
      return {
        title: title || 'Untitled',
        subtitle: parts.join(' · '),
      }
    },
  },
})
