import { defineArrayMember, defineField, defineType } from 'sanity'

export const homepageSchema = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'hero',          title: 'Hero' },
    { name: 'howItWorks',    title: 'How It Works' },
    { name: 'templates',     title: 'Templates' },
    { name: 'testimonials',  title: 'Testimonials' },
    { name: 'pricing',       title: 'Pricing' },
    { name: 'cta',           title: 'CTA' },
  ],
  fields: [

    // ── Hero ──────────────────────────────────────────────────────────────
    // HeroSection renders heading + lede + one CTA over a full-bleed photo.
    // Eyebrow, badge, secondary CTA and the highlight list are deliberately
    // absent — do not re-add a field here unless the section renders it.
    defineField({ name: 'heroHeading',     title: 'Main heading',    type: 'string', group: 'hero' }),
    defineField({ name: 'heroHeadingItal', title: 'Heading (italic)',type: 'string', group: 'hero' }),
    defineField({ name: 'heroLede',        title: 'Description',            type: 'text', rows: 3, group: 'hero' }),
    defineField({ name: 'heroCtaPrimary',  title: 'Primary CTA button',    type: 'string', group: 'hero' }),
    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', group: 'hero',
      options: { hotspot: true },
    }),

    // ── How It Works ──────────────────────────────────────────────────────
    defineField({ name: 'hiwHeading',  title: 'Main heading',     type: 'string', group: 'howItWorks' }),
    defineField({ name: 'hiwHeadingItal', title: 'Heading (italic)', type: 'string', group: 'howItWorks' }),
    defineField({
      name: 'hiwSteps', title: 'Steps', type: 'array', group: 'howItWorks',
      of: [defineArrayMember({
        type: 'object', name: 'step',
        fields: [
          defineField({ name: 'title', title: 'Step title', type: 'string' }),
          defineField({ name: 'desc',  title: 'Description',         type: 'text', rows: 2 }),
          defineField({ name: 'icon',  title: 'Icon',           type: 'string',
            options: { list: [
              { title: 'Grid (choose template)',    value: 'grid' },
              { title: 'Chat (send info)', value: 'chat' },
              { title: 'Pulse (receive website)',   value: 'pulse' },
            ]},
          }),
        ],
        preview: { select: { title: 'title', subtitle: 'desc' } },
      })],
    }),

    // ── Templates section ─────────────────────────────────────────────────
    defineField({ name: 'tplHeading',     title: 'Heading',           type: 'string', group: 'templates' }),
    defineField({ name: 'tplHeadingItal', title: 'Heading (italic)', type: 'string', group: 'templates' }),

    // ── Testimonials ──────────────────────────────────────────────────────
    defineField({ name: 'testiHeading', title: 'Heading', type: 'string', group: 'testimonials' }),
    defineField({
      name: 'testiItems', title: 'Testimonials', type: 'array', group: 'testimonials',
      of: [defineArrayMember({
        type: 'object', name: 'testimonial',
        fields: [
          defineField({ name: 'clientName', title: 'Client name',     type: 'string' }),
          defineField({ name: 'shopName',   title: 'Business name',      type: 'string' }),
          defineField({ name: 'content',    title: 'Content',      type: 'text', rows: 3 }),
          defineField({ name: 'rating',     title: 'Star rating (1–5)',  type: 'number', initialValue: 5,
            validation: (Rule) => Rule.min(1).max(5).integer(),
          }),
          // Free text, not a date type — it renders verbatim next to the client
          // name ("Ms. Huong · June 2026"), so the editor controls the wording.
          defineField({ name: 'date',       title: 'Date (e.g. April 2026)', type: 'string' }),
        ],
        preview: { select: { title: 'clientName', subtitle: 'shopName' } },
      })],
    }),

    // ── Pricing ───────────────────────────────────────────────────────────
    defineField({ name: 'pricingHeading',     title: 'Heading',           type: 'string', group: 'pricing' }),
    defineField({ name: 'pricingHeadingItal', title: 'Heading (italic)', type: 'string', group: 'pricing' }),
    defineField({
      name: 'pricingPlans', title: 'Service plans', type: 'array', group: 'pricing',
      of: [defineArrayMember({
        type: 'object', name: 'plan',
        fields: [
          defineField({ name: 'name',        title: 'Plan name',       type: 'string' }),
          defineField({ name: 'description', title: 'Short description',   type: 'string' }),
          defineField({ name: 'price',       title: 'Price (number, USD)', type: 'number' }),
          defineField({
            name: 'features', title: 'Features', type: 'array',
            of: [defineArrayMember({
              type: 'object', name: 'feature',
              fields: [
                defineField({ name: 'text',     title: 'Feature name', type: 'string' }),
                defineField({ name: 'included', title: 'Included in plan', type: 'boolean', initialValue: true }),
              ],
              preview: { select: { title: 'text', subtitle: 'included' } },
            })],
          }),
          defineField({ name: 'cta',      title: 'CTA button label', type: 'string' }),
          defineField({ name: 'footnote', title: 'Small note',   type: 'string' }),
          defineField({ name: 'featured', title: 'Most popular plan',  type: 'boolean' }),
        ],
        preview: { select: { title: 'name', subtitle: 'price' } },
      })],
    }),

    // ── CTA ───────────────────────────────────────────────────────────────
    defineField({ name: 'ctaHeading',     title: 'Heading',           type: 'string', group: 'cta' }),
    defineField({ name: 'ctaHeadingItal', title: 'Heading (italic)', type: 'string', group: 'cta' }),
    defineField({ name: 'ctaBody',        title: 'Description',             type: 'text', rows: 2, group: 'cta' }),
    // Zalo link, phone and hours are edited on Site Footer and read from there
    // by this section, /contact and the footer alike. Duplicating them here
    // gave an editor two places to change one number.
  ],
  preview: { prepare: () => ({ title: '🏠 Homepage' }) },
})
