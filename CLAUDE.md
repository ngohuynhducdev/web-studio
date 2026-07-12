# Web Studio — Project Context

## Overview

Web design studio. Template-based
landing pages for small businesses (nail, spa,
cafe, gym). Client chooses template → we customize.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- next-sanity (Sanity CMS)
- swiper (carousel), resend (order email)
- Icons: custom SVG defined in each `icons.tsx` (no icon library)
- Images: `next/image` + full URL (remotePatterns: cdn.sanity.io, images.unsplash.com)
- pnpm (package manager)

## Brand Colors

Defined in `globals.css` — single source of truth is `@theme`:

- Mocha Brown: #6F4E37 (primary, CTAs)
- Terracotta: #D97757 (accent)
- Cream: #FAF6F0 (background)
- Dark Brown: #2D2419 (text)
- Sage Green: #87976A (secondary)
- Beige: #E8DDD0 (borders)

Used via Tailwind class: `bg-brand-mocha`, `text-brand-cream`...
Used in CSS module: `var(--color-brand-mocha)`, `var(--color-brand-cream)`...

## Fonts

Site-wide (loaded in `app/layout.tsx`):
- Display/Headlines: Fraunces → `var(--font-serif)`
- Body: Inter → `var(--font-body)`

Template-specific (loaded in each template component):
- ThaiSpa: Playfair Display + Source Sans 3 (loaded in `thai-spa/index.tsx`)
- MistSpringSpa: Cormorant Garamond + Manrope (loaded in `mist-spring-spa/index.tsx`, exposed via `--sm-font-display`/`--sm-font-body`)

## Architecture

> All source lives in `src/` (import alias `@/` → `src/`).
> The directory trees below drop the `src/` prefix for brevity (e.g. `app/` = `src/app/`).

### Route Groups

```
app/
├── layout.tsx              — Root: fonts, globals.css, metadata + OG defaults
├── not-found.tsx           — Custom 404 (+ .module.css)
├── global-error.tsx        — Final error boundary, replaces the entire root layout (+ .module.css, self-contained style)
├── opengraph-image.tsx     — Default branded OG image (1200×630)
├── sitemap.ts              — Dynamic /sitemap.xml (static + template slugs)
├── robots.ts               — /robots.txt
├── (site)/
│   ├── layout.tsx          — Site layout: Navbar + Footer + ZaloBubble + BackToTop
│   ├── error.tsx           — Error boundary for site pages (+ .module.css)
│   ├── page.tsx            — Homepage (/)
│   ├── templates/          — /templates
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── contact/            — /contact?template=<slug> pre-selects template dropdown
│   │   ├── page.tsx
│   │   └── page.module.css
│   └── about/              — /about
│       ├── page.tsx
│       └── page.module.css
├── templates/[slug]/       — /templates/:slug (fullscreen, no Navbar)
│   ├── layout.tsx
│   └── page.tsx
├── preview/[slug]/         — /preview/:slug (preview mode)
│   └── page.tsx
├── admin/orders/           — /admin/orders (read-only order overview; HTTP Basic Auth via proxy)
│   ├── page.tsx
│   └── OrderList.tsx
├── api/
│   ├── create-order/       — POST: creates a site document from the contact form
│   ├── seed-order/         — POST: copy DEFAULT_SECTIONS (header x-seed-secret)
│   ├── admin/seed-order/   — POST: copy DEFAULT_SECTIONS (admin UI, no secret)
│   └── sync-domain/        — POST: syncs domain → Vercel Edge Config
└── studio/[[...tool]]/     — Sanity Studio
    └── page.tsx

proxy.ts                    — (Next 16 convention, formerly middleware.ts) Basic Auth for /admin (ADMIN_PASSWORD) + customer domain → rewrite to /preview/[slug] (Edge Config)
```

### Components

```
components/
├── layout/
│   ├── Navbar.tsx + Navbar.module.css
│   ├── Footer.tsx + Footer.module.css
│   └── MobileMenu.tsx + MobileMenu.module.css
├── sections/               — Each has co-located .module.css
│   ├── HeroSection.tsx
│   ├── HowItWorks.tsx
│   ├── HomeTemplateGrid.tsx      — template teaser grid on the homepage
│   ├── TemplatesPageCatalog.tsx  — full catalog + filter on /templates
│   ├── Testimonials.tsx
│   ├── PricingSection.tsx
│   ├── CTASection.tsx
│   └── ContactForm.tsx     — receives defaultTemplate prop (from the ?template= URL param)
├── templates/              — Each template is folder-based
│   ├── thai-spa/           — ✅ CMS-driven, folder-based
│   │   ├── index.tsx + ThaiSpa.module.css + navLinks.ts
│   │   ├── Header / Hero / LovingTouch / Benefits / HarmonyIntro /
│   │   │   AfterMassage / Founder / Testimonials / Pricing / Offer / Footer
│   │   └── icons.tsx
│   ├── herbal-grove-spa/          — ✅ CMS-driven, folder-based (Herbal Grove Spa)
│   ├── mist-spring-spa/           — ✅ CMS-driven, folder-based (Mist Spring Spa — bright spa, Lumera-style)
│   └── BannerCarousel.tsx + BannerCarousel.module.css  — shared across templates
├── preview/                — Site chrome layered over the template page (NOT the template delivered to the client)
│   ├── TemplatePreviewBar.tsx + .module.css
│   └── TemplateComingSoon.tsx + .module.css
└── ui/
    ├── TemplateCard.tsx + TemplateCard.module.css
    ├── BackToTop.tsx
    ├── ZaloBubble.tsx
```

**Template architecture note:** all 3 templates are CMS-driven — they read content
via the `sections` prop and fall back to `DEFAULT_SECTIONS` in code.
`DEFAULT_SECTIONS_MAP` has all 3 entries. All are folder-based with `index.tsx` as the entry point.
- The section picker helper (`pickType`/`pick`/`shown`) lives in `lib/sections.ts` — do NOT copy it into each template
- Use `pick` by `_key` when a template has multiple sections of the same `_type`: thai-spa (2 `aboutSection`), herbal-grove-spa (2 `servicesSection`)
- Use `pickType` by `_type` when the section type is unique: mist-spring-spa
- Templates with multiple nav links: extract them into `navLinks.ts` in the same folder — single source of truth for both Header and Footer (applies to all 3 templates)

### Template Identity (each template's own archetype)

Principle: **identity lives in the component/CSS — data is shared.** A section type is a content
contract (semantic), not a description of appearance; the same `servicesSection` renders
completely differently per template. When new content types are needed: add the type to the shared
library (`sections.ts` + `types/index.ts` + image projection in `queries.ts`) — do NOT fork the schema per template.

Each template locks in its own archetype (typography system, color world, signature interaction) — to avoid drifting
into a shared "house style" (serif + italicized accent-colored words + hairlines + repeated imagery):

| Template | Archetype | Status |
|---|---|---|
| mist-spring-spa | Elegant bright spa (based on Lumera) → now a **mini-website**: hero **carousel** (swiper, CMS slides) + layered-image intro + **Services = 3 signature cards** (price + steps shown upfront) + **Pricing** (dedicated `menuSection`, menu-style dotted leader) + **Gallery** + 5-star Reviews + **Booking** (dark CTA panel: Zalo + call + 3 perks) + 4-column footer (hours, address links to Maps). Booking is Zalo-only by design. Deliberately NO "team"/"stats" section (Vietnamese spas rarely show faces; fake numbers feel off for a small shop) | done |
| thai-spa | Formal symmetric classic — deep red + turmeric gold, Thai pattern border | not started |
| herbal-grove-spa | Vietnamese folk/handcrafted — traditional handmade paper texture, herbal-leaf SVG illustrations, old-book type | not started |

Code-only "signature" sections (mist-spring-spa's layered-image intro + dark Booking panel)
belong to identity — clients do NOT edit these via CMS, by design. Each template uses
its own Unsplash image set, never shared across templates.

### Other

```
lib/
├── queries.ts            — GROQ queries
├── templates.ts          — TEMPLATE_MANIFEST (slug + label + tagline) + TemplateSlug type (single source of truth)
├── templateRegistry.ts   — TEMPLATE_COMPONENTS + DEFAULT_SECTIONS_MAP
├── sections.ts           — pickType / pick / shown — shared section picker helper for all templates
├── adminAuth.ts          — Basic Auth helpers (constant-time, used in proxy + API route)
├── email.ts              — sends order email via Resend
├── env.ts                — IS_PRODUCTION / DEPLOY_ENV (based on VERCEL_ENV)
└── og.tsx                — OG image render helper

data/                     — Single source of truth for default/fallback content
├── homepage.ts
├── layout.ts             — DEFAULT_NAV, DEFAULT_HEADER, DEFAULT_FOOTER
├── contact.ts
├── about.ts
├── templates-page.ts
└── templates/
    ├── thai-spa.ts       — DEFAULT_SECTIONS
    ├── herbal-grove-spa.ts      — DEFAULT_SECTIONS
    ├── mist-spring-spa.ts       — DEFAULT_SECTIONS
    └── index.ts          — DEFAULT_SECTIONS_MAP (data-only, used by Studio + registry)

sanity/
├── env.ts
├── structure.ts          — Studio sidebar: singletons + template list + orders (filtered by status)
├── lib/
│   ├── client.ts
│   ├── live.ts
│   └── writeClient.ts    — write client (uses SANITY_API_WRITE_TOKEN)
├── components/
│   ├── AutoSeedSectionsInput.tsx  — auto-seeds sections when componentKey is chosen (used in template schema)
│   └── AutoSeedSiteInput.tsx      — auto-seeds sections when chosenTemplate is chosen (used in site schema)
└── schemaTypes/
    ├── index.ts
    ├── template.ts       — has a componentKey field (dropdown to pick the rendering component)
    ├── site.ts           — client order (formerly named clientOrder.ts)
    ├── homepage.ts
    ├── sections.ts
    ├── aboutPage.ts
    ├── contactPage.ts
    ├── templatesPage.ts
    ├── siteHeader.ts
    └── siteFooter.ts

types/
├── index.ts              — domain types + PageSection union
└── cms.ts                — CMS prop types for page/section components
```

## Design System (`globals.css`)

File containing design tokens, base styles, and **global reusable component classes** (in `@layer components` — e.g. `.btn`, `.section`, `.eyebrow`). Styles **specific to one component/page** do NOT go here — put them in the co-located `.module.css` next to that component.

### Structure

- `@theme` — Tailwind v4 tokens: `--color-brand-*`, `--shadow-*`, `--radius-*`, `--max-width-*` → generate utility classes (`bg-brand-mocha`, `max-w-container`...)
- `:root` — CSS custom properties that aren't utilities: `--bg-page`, `--fg-*`, `--font-serif`, `--ease-*`, `--dur-*`
- `@layer base` — Resets, html/body, focus-visible
- `@layer components` — Global classes: `.container-site`, `.btn*`, `.section*`, `.eyebrow`, `.h2-heading`, `.lede`, `.grain`, `.zalo-bubble*`, `.back-to-top*`

### Template CSS Independence

Templates **do NOT use** site design tokens (`--color-brand-*`).
Templates only use:
- Tailwind utility classes (breakpoints `md:`, spacing `p-4`, container `max-w-container`...)
- CSS variables defined locally in `.page { --own-token: value }`
- Font names as literal strings (`"Playfair Display"`, `"Nunito"`)

## Sanity CMS

Content types: `template`, `site`, `homepage`, `sections`,
`aboutPage`, `contactPage`, `templatesPage`, `siteHeader`, `siteFooter`

### Template Schema

- `slug` — URL of the demo page, auto-generated from the name (free field, not validated against the manifest)
- `componentKey` — dropdown to pick the rendering component (`TEMPLATE_MANIFEST` options); empty = Coming Soon
- `sections[]` — CMS-editable content; **auto-fills DEFAULT_SECTIONS** when `componentKey` is chosen
  (via `AutoSeedSectionsInput`; re-seeds when componentKey changes)

### CMS Flow

- `template.sections[]` — CMS-editable demo content for each template
- `site.sections[]` + `brandColor` — per-client customization
- **Auto-seed:** when `chosenTemplate` is picked on a site document, sections auto-fill from
  the template's CMS sections (if any) → fall back to `DEFAULT_SECTIONS` in code
- Render fallback chain: `site.sections` → `template.sections` → `DEFAULT_SECTIONS` (code)
- API: `POST /api/seed-order` copies DEFAULT_SECTIONS onto a site (header `x-seed-secret`);
  `POST /api/admin/seed-order` does the same for the admin UI
- The CMS flow applies to all 3 templates (see `TEMPLATE_MANIFEST` in `lib/templates.ts`)

### Template Registry

`lib/templates.ts` is the **single source of truth** for the template list:
```ts
export const TEMPLATE_MANIFEST = [
  { slug: "thai-spa",     label: "Thai Spa",     tagline: "Thai spa & massage" },
  // ... (see lib/templates.ts)
] as const
```

The template dropdown in `ContactForm.tsx` derives from the manifest (label + tagline) — adding a new template does NOT require editing the form.

`templateRegistry.ts` maps `componentKey → React component` and `componentKey → DEFAULT_SECTIONS`.
Adding a new template: add it to `TEMPLATE_MANIFEST` → add it to the registry.

Credentials: `.env.local` (see `.env.example` for the full list of env vars — Sanity, Resend, GA4, `ADMIN_PASSWORD` for admin, and Edge Config for domain routing)

## Coding Rules

1. Server components by default
2. `'use client'` only when needed (interactivity, hooks)
3. No inline styles — use a Tailwind class or CSS module class. Sole exception: dynamic CSS variables via `style={{ '--token': value }}`
4. All props typed with TypeScript interfaces
5. No UI component library — use plain Tailwind utilities for every component
6. English text in UI
7. Mobile-first responsive — base styles = mobile, `@media (min-width: X)` for desktop. Do not use `max-width` queries
8. Component styles in co-located `.module.css` — not in `globals.css`
9. External links: `target="_blank"` + `rel="noopener noreferrer"` only when the URL is actually external (not a `#anchor` or a `'#'` fallback)

## Communication Rules

For every task, Claude must:

1. ANNOUNCE BEFORE STARTING
   State clearly what is about to be done, in Vietnamese

2. EXPLAIN EACH STEP
   When creating/editing a file, briefly explain:
   - What is being done
   - Why
   - Anything special to watch out for

3. SUMMARIZE WHEN DONE
   After each task, summarize:
   - Which files were created/changed
   - What the component contains
   - Suggested next steps

4. REPORT ERRORS CLEARLY
   When something goes wrong, explain:
   - What the error is
   - The cause
   - How to fix it

5. ASK WHEN UNSURE
   If the request is unclear, ask first —
   do not guess

All explanations in Vietnamese.
Code comments in English.
