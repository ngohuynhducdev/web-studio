# SOUL STUDIO — Next.js + Tailwind Handoff

Drop-in files to bring the SOUL STUDIO design system into a Next.js 14/15 (App Router) + Tailwind v3.4+ project. Everything in this folder maps 1:1 to a path in your codebase.

## TL;DR — installation

```bash
# In your Next.js project root:
npx create-next-app@latest soul-studio --typescript --tailwind --app --src-dir=false
cd soul-studio

# Install fonts (next/font handles Google Fonts automatically — no extra install needed)
# Copy the files from this handoff folder into your project (see table below)
```

| Copy this file… | …to here in your Next.js project |
|---|---|
| `tailwind.config.ts` | `./tailwind.config.ts` (overwrite the default) |
| `globals.css` | `./app/globals.css` (overwrite) |
| `lib/tokens.ts` | `./lib/tokens.ts` |
| `lib/cn.ts` | `./lib/cn.ts` |
| `app/layout.tsx` | `./app/layout.tsx` (overwrite) |
| `app/page.tsx` | `./app/page.tsx` (sample home page) |
| `components/Button.tsx`      | `./components/Button.tsx` |
| `components/Icon.tsx`        | `./components/Icon.tsx` |
| `components/Header.tsx`      | `./components/Header.tsx` |
| `components/Hero.tsx`        | `./components/Hero.tsx` |
| `components/LovingTouch.tsx` | `./components/LovingTouch.tsx` |
| `components/Benefits.tsx`    | `./components/Benefits.tsx` |
| `components/HarmonyIntro.tsx`| `./components/HarmonyIntro.tsx` |
| `components/AfterMassage.tsx`| `./components/AfterMassage.tsx` |
| `components/Founder.tsx`     | `./components/Founder.tsx` |
| `components/Testimonials.tsx`| `./components/Testimonials.tsx` |
| `components/Pricing.tsx`     | `./components/Pricing.tsx` |
| `components/Offer.tsx`       | `./components/Offer.tsx` (client component — form state) |
| `components/Footer.tsx`      | `./components/Footer.tsx` |

Then install the runtime helpers used by `cn.ts`:

```bash
npm install clsx tailwind-merge lucide-react
```

`lucide-react` is the icon set — already referenced by `components/Icon.tsx`. If you don't want it, replace `Icon.tsx` with raw SVGs from `../../assets/icons/`.

## What about the images?

The handoff doesn't ship photography. From this design-system project:

- Drop `assets/moodboard/*.webp` into `public/images/moodboard/` in your Next.js app.
- Update component image paths (`/images/moodboard/hero-laptop-meditation.webp` etc.) — they're already wired that way in the handoff components.
- **Real production**: commission a spa photo shoot using the brief in the root `README.md` → "Imagery direction".

## Architecture choices baked in

1. **Tokens live in two places, deliberately.**
   - **CSS custom properties** in `globals.css` — for `var(--ivory)`-style usage, third-party libs, and direct overrides.
   - **Tailwind theme** in `tailwind.config.ts` — for `bg-ivory`, `text-espresso`, `font-display` utilities.
   Keep them in sync. The Tailwind theme reads the CSS vars where possible, so you only update one source of truth.

2. **`next/font` for type loading.** Eliminates layout-shift, self-hosts, no CSS `@import`. Configured in `app/layout.tsx`.

3. **`'use client'` only when needed.** Static sections (Hero, Benefits, Pricing display) are RSCs; only interactive bits (Header menu sheet, Offer form) opt into client.

4. **`cn()` for class merging** — composes Tailwind classes with conditional logic. Standard shadcn pattern.

5. **No CSS-in-JS, no styled-components.** Everything is Tailwind + a thin layer of CSS vars.

## Conventions to follow when extending

- **Primary CTA is always Deep Wine pill with ivory dot + arrow.** Never a square button, never another color. Use `<Button>` — don't roll your own.
- **Display type uses italic on ONE word per heading.** Wrap that word in `<em>`. The `font-display` class is Playfair.
- **Never add status colors.** Errors/warnings/success use Deep Wine with text and an icon — never green/red/yellow.
- **All buttons, inputs, nav chips, image masks → `rounded-full` or `rounded-3xl`**. Sharp corners break the brand.
- **Section vertical rhythm**: `py-24` (96px) minimum, `py-32` (128px) for major breaks. Listed as `--s-9` / `--s-10` in tokens.
- **No emoji. No backdrop-blur. No gradients (except the single dark hero scrim).**

## Type substitutions

- **Source Sans Pro → Source Sans 3** via `next/font/google`. If you license the original Pro family, swap in `localFont({...})` and drop the `.woff2` into `app/fonts/`.

## Test it loads correctly

```bash
npm run dev
# Open http://localhost:3000
# You should see the Hero with the meditation portrait, "Begin a New Chapter" CTA in Deep Wine pill.
```

If type looks wrong → check `next/font` import in `layout.tsx` and the `font-display`/`font-body` Tailwind classes.
If colors look wrong → check that `tailwind.config.ts` is being picked up (Next's default config path).

## Production checklist

- [ ] Replace moodboard mockups with real spa photography.
- [ ] Replace the `Standart Plan` copy with `Standard Plan` (typo in moodboard).
- [ ] Add `<meta>` tags, `metadata` export in `layout.tsx`.
- [ ] Configure Image domains if you load photos from a CDN.
- [ ] Wire the offer form to a real handler (Resend / SendGrid / Formspree).
- [ ] Add analytics, sitemap, robots.txt.
- [ ] Test on a real iPhone — the snap-carousels need `-webkit-overflow-scrolling: touch`.
