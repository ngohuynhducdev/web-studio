import { defineArrayMember, defineField } from 'sanity'

// ── Shared helpers ───────────────────────────────────────────────
// "enabled" is the ONLY lever the studio has at section level: show/hide.
// Order & layout are determined by the template code — cannot be changed in the CMS.
const enabledField = () =>
  defineField({
    name: 'enabled',
    title: 'Show this section',
    type: 'boolean',
    initialValue: true,
  })

// Preview attaches a "hidden" label so the studio can see at a glance which sections are off.
const sectionPreview = (icon: string, label: string) => ({
  select: { enabled: 'enabled' },
  prepare: ({ enabled }: { enabled?: boolean }) => ({
    title: `${icon} ${label}${enabled === false ? ' — hidden' : ''}`,
  }),
})

const headingFields = [
  defineField({ name: 'eyebrow', title: 'Eyebrow (small line above the heading)', type: 'string' }),
  defineField({ name: 'headingMain', title: 'Main heading', type: 'string' }),
  defineField({ name: 'headingItalic', title: 'Heading — italic line', type: 'string' }),
]

export const sectionTypes = [
  // ══ TIER 1 — CORE ═══════════════════════════════════════════════

  // ── Hero ──────────────────────────────────────────
  defineArrayMember({
    name: 'heroSection',
    title: 'Hero',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'subtitle', title: 'Short description', type: 'text', rows: 2 }),
      defineField({ name: 'ctaPrimary', title: 'Primary CTA button', type: 'string' }),
      defineField({ name: 'ctaSecondary', title: 'Secondary link', type: 'string' }),
      defineField({
        name: 'slides',
        title: 'Hero slides (carousel)',
        description: 'Leave empty to use the heading above as a single static slide. With 2+ slides, arrows and dots for switching slides turn on automatically. (Some templates render the hero as a carousel.)',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'heroSlide',
          fields: [
            defineField({ name: 'image', title: 'Background image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'eyebrow', title: 'Eyebrow (small line)', type: 'string' }),
            defineField({ name: 'headingMain', title: 'Main heading (press Enter for a line break)', type: 'text', rows: 2 }),
            defineField({ name: 'headingItalic', title: 'Italic heading (optional)', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Short description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'headingMain', subtitle: 'eyebrow', media: 'image' } },
        })],
      }),
      defineField({
        name: 'stats',
        title: 'Statistics',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'stat',
          fields: [
            defineField({ name: 'num', title: 'Number (e.g. 8, 600+)', type: 'string' }),
            defineField({ name: 'label', title: 'Label (e.g. years of experience)', type: 'string' }),
          ],
          preview: { select: { title: 'num', subtitle: 'label' } },
        })],
      }),
      defineField({
        name: 'features',
        title: 'Feature strip (highlights below)',
        type: 'array',
        of: [{ type: 'string' }],
      }),
    ],
    preview: sectionPreview('🦸', 'Hero'),
  }),

  // ── Features (trust bar / marquee / benefits / values) ────
  defineArrayMember({
    name: 'featuresSection',
    title: 'Highlights',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({
        name: 'items',
        title: 'Items',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'feature',
          fields: [
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'emoji', title: 'Emoji / icon (fallback if no image)', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'desc' } },
        })],
      }),
    ],
    preview: sectionPreview('✨', 'Highlights'),
  }),

  // ── About / Story ─────────────────────────────────
  defineArrayMember({
    name: 'aboutSection',
    title: 'About',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({
        name: 'paragraphs',
        title: 'Paragraphs',
        type: 'array',
        of: [{ type: 'text' }],
      }),
      defineField({ name: 'quote', title: 'Quote (optional)', type: 'text', rows: 2 }),
      defineField({ name: 'quoteAuthor', title: 'Attribution (e.g. — Ha, Head Barista)', type: 'string' }),
      defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    ],
    preview: sectionPreview('📖', 'About'),
  }),

  // ── Gallery ───────────────────────────────────────
  defineArrayMember({
    name: 'gallerySection',
    title: 'Gallery',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'note', title: 'Description note', type: 'text', rows: 2 }),
      defineField({
        name: 'items',
        title: 'Gallery items',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'galleryItem',
          fields: [
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'emoji', title: 'Emoji (fallback if no image)', type: 'string' }),
            defineField({ name: 'label', title: 'Label (e.g. reception area)', type: 'string' }),
            defineField({ name: 'wide', title: 'Wide tile (spans 2 columns)', type: 'boolean' }),
          ],
          preview: { select: { title: 'label' } },
        })],
      }),
    ],
    preview: sectionPreview('🖼', 'Gallery'),
  }),

  // ── Reviews ───────────────────────────────────────
  defineArrayMember({
    name: 'reviewsSection',
    title: 'Customer Reviews',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'review',
          fields: [
            defineField({ name: 'text', title: 'Review text', type: 'text', rows: 3 }),
            defineField({ name: 'name', title: 'Customer name', type: 'string' }),
            defineField({ name: 'location', title: 'Area (e.g. District 7)', type: 'string' }),
            defineField({ name: 'service', title: 'Service used', type: 'string' }),
            defineField({ name: 'rating', title: 'Star rating (1–5)', type: 'number', validation: (Rule) => Rule.min(1).max(5) }),
            defineField({ name: 'handle', title: 'Social handle (e.g. @minhkhoa)', type: 'string' }),
          ],
          preview: { select: { title: 'name', subtitle: 'service' } },
        })],
      }),
    ],
    preview: sectionPreview('⭐', 'Reviews'),
  }),

  // ── Booking / Location / Order CTA ────────────────
  defineArrayMember({
    name: 'bookingSection',
    title: 'Booking & Contact',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'subtitle', title: 'Description', type: 'text', rows: 2 }),
      defineField({ name: 'zaloUrl', title: 'Zalo link', type: 'string' }),
      defineField({ name: 'phone', title: 'Phone number', type: 'string' }),
      defineField({ name: 'email', title: 'Email', type: 'string' }),
      defineField({ name: 'address', title: 'Address', type: 'text', rows: 2 }),
      defineField({ name: 'mapLabel', title: 'Map label (e.g. business name on the map)', type: 'string' }),
      defineField({
        name: 'hours',
        title: 'Opening hours',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'hour',
          fields: [
            defineField({ name: 'day', title: 'Day (e.g. Mon – Fri)', type: 'string' }),
            defineField({ name: 'time', title: 'Time (e.g. 09:00 – 20:00)', type: 'string' }),
          ],
          preview: { select: { title: 'day', subtitle: 'time' } },
        })],
      }),
    ],
    preview: sectionPreview('📅', 'Booking'),
  }),

  // ══ TIER 2 — OFFERINGS (choose by business type) ═══════════════════════

  // ── Services / Menu (combines services + menu items) ──────
  defineArrayMember({
    name: 'servicesSection',
    title: 'Services / Menu',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'subtitle', title: 'Description', type: 'text', rows: 2 }),
      defineField({
        name: 'services',
        title: 'List of services / items',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'service',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
            defineField({ name: 'price', title: 'Price (e.g. 350,000 VND)', type: 'string' }),
            defineField({ name: 'duration', title: 'Duration (spa — e.g. 60 minutes)', type: 'string' }),
            defineField({ name: 'size', title: 'Size (cafe — e.g. S · M · L)', type: 'string' }),
            defineField({ name: 'tag', title: 'Tag (e.g. Best seller, New)', type: 'string' }),
            defineField({ name: 'emoji', title: 'Emoji (fallback if no image)', type: 'string' }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
            defineField({ name: 'includes', title: 'Treatment steps (shown on card hover)', type: 'array', of: [{ type: 'string' }] }),
          ],
          preview: { select: { title: 'name', subtitle: 'price' } },
        })],
      }),
    ],
    preview: sectionPreview('💆', 'Services / Menu'),
  }),

  // ── Menu / Price list (grouped list) ───────────────
  defineArrayMember({
    name: 'menuSection',
    title: 'Price list / Service menu',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'subtitle', title: 'Description', type: 'text', rows: 2 }),
      defineField({ name: 'note', title: 'Note below the price list', type: 'string' }),
      defineField({
        name: 'categories',
        title: 'Service groups',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'menuCategory',
          fields: [
            defineField({ name: 'title', title: 'Group name (e.g. Massage, Skin care)', type: 'string' }),
            defineField({
              name: 'items',
              title: 'Services',
              type: 'array',
              of: [defineArrayMember({
                type: 'object',
                name: 'menuItem',
                fields: [
                  defineField({ name: 'name', title: 'Service name', type: 'string' }),
                  defineField({ name: 'duration', title: 'Duration (e.g. 60 minutes)', type: 'string' }),
                  defineField({ name: 'price', title: 'Price', type: 'string' }),
                ],
                preview: { select: { title: 'name', subtitle: 'price' } },
              })],
            }),
          ],
          preview: { select: { title: 'title' } },
        })],
      }),
    ],
    preview: sectionPreview('📋', 'Price list'),
  }),

  // ── Pricing ───────────────────────────────────────
  defineArrayMember({
    name: 'pricingSection',
    title: 'Service packages',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'subtitle', title: 'Description', type: 'text', rows: 2 }),
      defineField({
        name: 'packages',
        title: 'Packages',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'package',
          fields: [
            defineField({ name: 'name', title: 'Package name', type: 'string' }),
            defineField({ name: 'desc', title: 'Short description', type: 'string' }),
            defineField({ name: 'price', title: 'Price', type: 'string' }),
            defineField({ name: 'duration', title: 'Duration', type: 'string' }),
            defineField({ name: 'includes', title: 'Includes', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'featured', title: 'Most popular', type: 'boolean' }),
          ],
          preview: { select: { title: 'name', subtitle: 'price' } },
        })],
      }),
    ],
    preview: sectionPreview('💰', 'Service packages'),
  }),

  // ── Team (multiple team members) ────────────────────
  defineArrayMember({
    name: 'teamSection',
    title: 'Team',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({
        name: 'members',
        title: 'Members',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'member',
          fields: [
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'emoji', title: 'Emoji (fallback if no image)', type: 'string' }),
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'role', title: 'Role', type: 'string' }),
            defineField({ name: 'specialty', title: 'Specialty', type: 'string' }),
            defineField({ name: 'exp', title: 'Experience (e.g. 8 years)', type: 'string' }),
            defineField({ name: 'cert', title: 'Certifications', type: 'string' }),
          ],
          preview: { select: { title: 'name', subtitle: 'role' } },
        })],
      }),
    ],
    preview: sectionPreview('👥', 'Team'),
  }),

  // ── Founder (single specialist — different from Team) ────────────
  defineArrayMember({
    name: 'founderSection',
    title: 'Specialist / Founder',
    type: 'object',
    fields: [
      enabledField(),
      defineField({ name: 'eyebrow', title: 'Eyebrow (e.g. Therapy Specialist)', type: 'string' }),
      defineField({ name: 'name', title: 'Name', type: 'string' }),
      defineField({ name: 'role', title: 'Title', type: 'string' }),
      defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
      defineField({
        name: 'credentials',
        title: 'Certifications / highlights',
        type: 'array',
        of: [{ type: 'string' }],
      }),
      defineField({
        name: 'socials',
        title: 'Social media',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'social',
          fields: [
            defineField({ name: 'platform', title: 'Platform (facebook / instagram / phone)', type: 'string' }),
            defineField({ name: 'url', title: 'Link / number', type: 'string' }),
          ],
          preview: { select: { title: 'platform', subtitle: 'url' } },
        })],
      }),
    ],
    preview: {
      select: { name: 'name', enabled: 'enabled' },
      prepare: ({ name, enabled }: { name?: string; enabled?: boolean }) => ({
        title: `🧑‍⚕️ Specialist${name ? ' — ' + name : ''}${enabled === false ? ' — hidden' : ''}`,
      }),
    },
  }),

  // ── Steps (process / steps) ──────────────────
  defineArrayMember({
    name: 'stepsSection',
    title: 'Steps / Process',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({
        name: 'steps',
        title: 'Steps',
        type: 'array',
        of: [defineArrayMember({
          type: 'object',
          name: 'step',
          fields: [
            defineField({ name: 'num', title: 'Number (e.g. 01)', type: 'string' }),
            defineField({ name: 'title', title: 'Title / caption', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
          ],
          preview: { select: { title: 'title', subtitle: 'num' } },
        })],
      }),
    ],
    preview: sectionPreview('🔢', 'Steps'),
  }),

  // ── Callout (offer / custom order / highlight) ──────
  defineArrayMember({
    name: 'calloutSection',
    title: 'Offer / Call to action',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'body', title: 'Content', type: 'text', rows: 3 }),
      defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
      defineField({ name: 'bullets', title: 'Bullet points', type: 'array', of: [{ type: 'string' }] }),
      defineField({ name: 'ctaLabel', title: 'CTA button label', type: 'string' }),
      defineField({ name: 'ctaHref', title: 'CTA link', type: 'string' }),
      defineField({ name: 'showLeadForm', title: 'Show lead capture form (name + phone)', type: 'boolean', initialValue: false }),
      defineField({ name: 'web3formsKey', title: 'Web3Forms Access Key (if form is enabled)', type: 'string' }),
      defineField({ name: 'successMessage', title: 'Message shown after form submission', type: 'string' }),
    ],
    preview: sectionPreview('📣', 'Offer / Call to action'),
  }),

  // ── Banner Carousel (promo / offers) ─────────
  defineArrayMember({
    name: 'bannerCarouselSection',
    title: 'Banner Carousel',
    type: 'object',
    fields: [
      enabledField(),
      defineField({
        name: 'slides',
        title: 'Slides',
        type: 'array',
        validation: (Rule) => Rule.min(1),
        of: [defineArrayMember({
          type: 'object',
          name: 'slide',
          fields: [
            defineField({ name: 'heading',  title: 'Heading',                          type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'subtext',  title: 'Short description',                       type: 'text', rows: 2 }),
            defineField({ name: 'ctaLabel', title: 'CTA button (e.g. Book now)',      type: 'string' }),
            defineField({ name: 'ctaUrl',   title: 'CTA link (e.g. #booking / URL)',     type: 'string' }),
            defineField({ name: 'bgColor',  title: 'Background hex color (e.g. #1a0a0a)',         type: 'string' }),
            defineField({ name: 'image',    title: 'Background image (takes priority over background color)',     type: 'image', options: { hotspot: true } }),
          ],
          preview: {
            select: { title: 'heading' },
            prepare: ({ title }: { title?: string }) => ({ title: `🖼 ${title ?? 'Slide'}` }),
          },
        })],
      }),
    ],
    preview: sectionPreview('🎠', 'Banner Carousel'),
  }),

  // ── Contact Form (standalone contact form) ───────────
  defineArrayMember({
    name: 'contactFormSection',
    title: 'Contact form',
    type: 'object',
    fields: [
      enabledField(),
      ...headingFields,
      defineField({ name: 'subtitle', title: 'Description', type: 'text', rows: 2 }),
      defineField({
        name: 'web3formsKey',
        title: 'Web3Forms Access Key',
        type: 'string',
        description: "Get one for free at web3forms.com — leave blank and the form will send to the studio's email",
      }),
      defineField({
        name: 'successMessage',
        title: 'Message shown after successful submission',
        type: 'string',
      }),
    ],
    preview: sectionPreview('📋', 'Contact form'),
  }),
]
