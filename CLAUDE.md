# Web Studio — Project Context

## Overview

Vietnamese web design studio. Template-based
landing pages for small businesses (nail, spa,
café, gym). Client chooses template → we customize.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- next-sanity (Sanity CMS)
- swiper (carousel), resend (email đơn hàng)
- Icon: SVG tự định nghĩa trong từng `icons.tsx` (không dùng icon lib)
- Ảnh: `next/image` + full URL (remotePatterns: cdn.sanity.io, images.unsplash.com)
- pnpm (package manager)

## Brand Colors

Định nghĩa trong `globals.css` — single source of truth là `@theme`:

- Mocha Brown: #6F4E37 (primary, CTAs)
- Terracotta: #D97757 (accent)
- Cream: #FAF6F0 (background)
- Dark Brown: #2D2419 (text)
- Sage Green: #87976A (secondary)
- Beige: #E8DDD0 (borders)

Dùng qua Tailwind class: `bg-brand-mocha`, `text-brand-cream`...
Dùng trong CSS module: `var(--color-brand-mocha)`, `var(--color-brand-cream)`...

## Fonts

Site-wide (load trong `app/layout.tsx`):
- Display/Headlines: Fraunces → `var(--font-serif)`
- Body: Inter → `var(--font-body)`

Template-specific (load trong từng template component):
- ThaiSpa: Playfair Display + Source Sans 3 (load trong `thai-spa/index.tsx`)
- ShizenSpa: Fraunces + Be Vietnam Pro (load trong `shizen-spa/index.tsx`, expose qua `--sz-font-display`/`--sz-font-body`)
- SuoiMay: Cormorant Garamond + Manrope (load trong `suoi-may/index.tsx`, expose qua `--sm-font-display`/`--sm-font-body`)
- ZenWellness: Space Grotesk + Archivo (load trong `zen-wellness/index.tsx`, expose qua `--zw-font-display`/`--zw-font-body`)

## Architecture

> Toàn bộ source nằm trong `src/` (import alias `@/` → `src/`).
> Các cây thư mục dưới đây bỏ prefix `src/` cho gọn (vd. `app/` = `src/app/`).

### Route Groups

```
app/
├── layout.tsx              — Root: fonts, globals.css, metadata + OG defaults
├── not-found.tsx           — Custom 404 (+ .module.css)
├── global-error.tsx        — Error boundary cuối cùng, thay cả root layout (+ .module.css, style tự chứa)
├── opengraph-image.tsx     — Default branded OG image (1200×630)
├── sitemap.ts              — Dynamic /sitemap.xml (static + template slugs)
├── robots.ts               — /robots.txt
├── (site)/
│   ├── layout.tsx          — Site layout: Navbar + Footer + ZaloBubble + BackToTop
│   ├── error.tsx           — Error boundary cho các trang site (+ .module.css)
│   ├── page.tsx            — Homepage (/)
│   ├── templates/          — /templates
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── projects/            — /projects
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
├── admin/don-hang/         — /admin/don-hang (read-only order overview; HTTP Basic Auth via proxy)
│   ├── page.tsx
│   └── OrderList.tsx
├── api/
│   ├── create-order/       — POST: tạo site document từ form liên hệ
│   ├── seed-order/         — POST: copy DEFAULT_SECTIONS (header x-seed-secret)
│   ├── admin/seed-order/   — POST: copy DEFAULT_SECTIONS (admin UI, no secret)
│   └── sync-domain/        — POST: đồng bộ domain → Vercel Edge Config
└── studio/[[...tool]]/     — Sanity Studio
    └── page.tsx

proxy.ts                    — (convention Next 16, trước là middleware.ts) Basic Auth cho /admin (ADMIN_PASSWORD) + domain khách → rewrite /preview/[slug] (Edge Config)
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
│   ├── HomeTemplateGrid.tsx      — grid teaser template trên trang chủ
│   ├── TemplatesPageCatalog.tsx  — catalog đầy đủ + filter trên /templates
│   ├── TapeStrip.tsx
│   ├── Testimonials.tsx
│   ├── PricingSection.tsx
│   ├── CTASection.tsx
│   └── ContactForm.tsx     — nhận prop defaultTemplate (từ ?template= URL param)
├── templates/              — Each template is folder-based
│   ├── thai-spa/           — ✅ CMS-driven, folder-based
│   │   ├── index.tsx + ThaiSpa.module.css + navLinks.ts
│   │   ├── Header / Hero / LovingTouch / Benefits / HarmonyIntro /
│   │   │   AfterMassage / Founder / Testimonials / Pricing / Offer / Footer
│   │   └── icons.tsx
│   ├── shizen-spa/         — ✅ CMS-driven, folder-based
│   │   ├── index.tsx + ShizenSpa.module.css + navLinks.ts
│   │   ├── Header / Hero / Benefits / Services / Pricing / Team /
│   │   │   Gallery / Reviews / Process / OfferStrip / Booking / Footer
│   │   ├── FloatingActions.tsx + icons.tsx
│   ├── zen-wellness/       — ✅ CMS-driven, folder-based
│   ├── bach-thao/          — ✅ CMS-driven, folder-based (Bách Thảo Spa)
│   ├── suoi-may/           — ✅ CMS-driven, folder-based (Suối Mây — spa sáng, Lumera-style)
│   └── BannerCarousel.tsx + BannerCarousel.module.css  — shared across templates
├── preview/                — Site chrome phủ lên trang template (KHÔNG phải template giao khách)
│   ├── TemplatePreviewBar.tsx + .module.css
│   └── TemplateComingSoon.tsx + .module.css
└── ui/
    ├── TemplateCard.tsx + TemplateCard.module.css
    ├── BackToTop.tsx
    ├── ZaloBubble.tsx
```

**Lưu ý kiến trúc template:** tất cả 5 template đều CMS-driven — đọc nội dung
qua `sections` prop và fallback về `DEFAULT_SECTIONS` trong code.
`DEFAULT_SECTIONS_MAP` có đủ 5 entry. Tất cả đều folder-based với `index.tsx` là entry point.
- Helper chọn section (`pickType`/`pick`/`shown`) nằm trong `lib/sections.ts` — KHÔNG copy vào từng template
- Dùng `pick` theo `_key` khi template có nhiều section cùng `_type`: thai-spa (2 `aboutSection`), zen-wellness (2 `featuresSection`), bach-thao (2 `servicesSection`)
- Dùng `pickType` theo `_type` khi section type là duy nhất: shizen-spa, suoi-may
- Template có nhiều nav link: extract ra `navLinks.ts` trong cùng folder — single source of truth cho cả Header lẫn Footer (áp dụng cho cả 5 template)

### Template Identity (archetype riêng từng template)

Nguyên tắc: **identity sống ở component/CSS — data dùng chung.** Section type là hợp đồng
nội dung (semantic), không phải mô tả giao diện; cùng một `servicesSection` mỗi template
render một kiểu khác hẳn. Khi cần loại nội dung mới: thêm type vào thư viện chung
(`sections.ts` + `types/index.ts` + projection ảnh trong `queries.ts`) — KHÔNG fork schema theo template.

Mỗi template khóa một archetype riêng (hệ chữ, thế giới màu, tương tác chữ ký) — tránh trượt
về "house style" chung (serif + từ nghiêng màu accent + hairline + ảnh trùng nhau):

| Template | Archetype | Trạng thái |
|---|---|---|
| shizen-spa | Japandi sáng — giấy ấm, headline đè ảnh, mask reveal, hover-preview services | ✅ |
| suoi-may | Spa sáng thanh lịch (gốc Lumera) → nay là **mini-website**: hero **carousel** (swiper, CMS slides) + intro xếp lớp ảnh + **Dịch vụ = 3 card signature** (giá + các bước hiện sẵn) + **Bảng giá** (`menuSection` riêng, kiểu thực đơn in dotted leader) + **Gallery** + Reviews 5 sao + **Booking** (panel tối CTA: Zalo + gọi + 3 perk) + footer 4 cột (có giờ, địa chỉ bấm → Maps). Đặt lịch CHỈ qua Zalo. Cố ý KHÔNG có "đội ngũ"/"số liệu" (spa VN ít show mặt; số liệu giả phản cảm shop nhỏ) | ✅ |
| zen-wellness | Calm-tech (wellness OS) — toàn sans Space Grotesk, bone + moss + matcha, pill nav nổi, widget app, panel SaaS, chấm "thở" | ✅ |
| thai-spa | Cổ điển đối xứng trang trọng — đỏ trầm + vàng nghệ, viền hoa văn Thái | 📋 chưa làm |
| bach-thao | Dân gian VN thủ công — giấy dó, minh họa lá thuốc SVG, chữ in sách cũ | 📋 chưa làm |

Section "chữ ký" code-only (intro xếp lớp ảnh + Booking panel tối
của suoi-may, hero widgets của zen-wellness, Benefits/Process của shizen-spa) thuộc về identity —
khách KHÔNG sửa qua CMS, đó là chủ đích. Mỗi template dùng một bộ ảnh Unsplash riêng, không trùng template khác.

> ⚠️ **Lưu ý overlap:** suoi-may đã được làm lại từ "onsen tối" → "spa sáng có nét onsen" →
> (2026-06) **clone bố cục Lumera, bỏ HẲN mọi motif onsen/Nhật** (con dấu 湯, Ritual nóng–lạnh,
> rail "Private Onsen", Gallery, Pricing) theo yêu cầu khách. Hiện CHỒNG LẤN thế giới sáng với
> shizen-spa (Japandi sáng) — quyết định có chủ đích của chủ dự án. Phân hoá: suoi-may = spa
> phương Tây cao cấp (đồng/kem, intro xếp lớp); shizen-spa = Japandi giấy ấm,
> mask reveal, hover-preview. Nếu cần tách bạch hơn, đây là cặp cần phân hoá.

### Other

```
lib/
├── queries.ts            — GROQ queries
├── templates.ts          — TEMPLATE_MANIFEST (slug + label + tagline) + TemplateSlug type (single source of truth)
├── templateRegistry.ts   — TEMPLATE_COMPONENTS + DEFAULT_SECTIONS_MAP
├── sections.ts           — pickType / pick / shown — helper chọn section dùng chung cho mọi template
├── adminAuth.ts          — Basic Auth helpers (constant-time, dùng ở proxy + API route)
├── email.ts              — gửi email đơn hàng qua Resend
├── env.ts                — IS_PRODUCTION / DEPLOY_ENV (theo VERCEL_ENV)
└── og.tsx                — helper render OG image

data/                     — Single source of truth cho default/fallback content
├── homepage.ts
├── layout.ts             — DEFAULT_NAV, DEFAULT_HEADER, DEFAULT_FOOTER
├── du-an.ts
├── lien-he.ts
├── ve-chung-toi.ts
├── templates-page.ts
└── templates/
    ├── thai-spa.ts       — DEFAULT_SECTIONS
    ├── shizen-spa.ts     — DEFAULT_SECTIONS
    ├── zen-wellness.ts   — DEFAULT_SECTIONS
    ├── bach-thao.ts      — DEFAULT_SECTIONS
    ├── suoi-may.ts       — DEFAULT_SECTIONS
    └── index.ts          — DEFAULT_SECTIONS_MAP (data-only, dùng cho Studio + registry)

sanity/
├── env.ts
├── structure.ts          — Studio sidebar: singletons + template list + đơn hàng (lọc theo status)
├── lib/
│   ├── client.ts
│   ├── live.ts
│   └── writeClient.ts    — write client (uses SANITY_API_WRITE_TOKEN)
├── components/
│   ├── AutoSeedSectionsInput.tsx  — auto-seed sections khi chọn componentKey (dùng trong template schema)
│   └── AutoSeedSiteInput.tsx      — auto-seed sections khi chọn chosenTemplate (dùng trong site schema)
└── schemaTypes/
    ├── index.ts
    ├── template.ts       — có field componentKey (dropdown chọn component render)
    ├── site.ts           — đơn hàng khách (trước tên là clientOrder.ts)
    ├── homepage.ts
    ├── sections.ts
    ├── project.ts
    ├── aboutPage.ts
    ├── contactPage.ts
    ├── templatesPage.ts
    ├── duAnPage.ts
    ├── siteHeader.ts
    └── siteFooter.ts

types/
├── index.ts              — domain types + PageSection union
└── cms.ts                — CMS prop types cho page/section components
```

## Design System (`globals.css`)

File chứa design tokens, base styles, và **global reusable component classes** (trong `@layer components` — vd. `.btn`, `.section`, `.eyebrow`). Style **riêng cho từng component/page** thì KHÔNG để ở đây — đặt trong `.module.css` co-located cạnh component đó.

### Cấu trúc

- `@theme` — Tailwind v4 tokens: `--color-brand-*`, `--shadow-*`, `--radius-*`, `--max-width-*` → sinh ra utility classes (`bg-brand-mocha`, `max-w-container`...)
- `:root` — CSS custom properties không phải utility: `--bg-page`, `--fg-*`, `--font-serif`, `--ease-*`, `--dur-*`
- `@layer base` — Resets, html/body, focus-visible
- `@layer components` — Global classes: `.container-site`, `.btn*`, `.section*`, `.eyebrow`, `.h2-heading`, `.lede`, `.grain`, `.zalo-bubble*`, `.back-to-top*`

### Template CSS Independence

Templates **KHÔNG dùng** site design tokens (`--color-brand-*`).
Templates chỉ dùng:
- Tailwind utility classes (breakpoints `md:`, spacing `p-4`, container `max-w-container`...)
- CSS variables tự định nghĩa trong `.page { --own-token: value }`
- Font names dạng literal string (`"Playfair Display"`, `"Nunito"`)

## Sanity CMS

Content types: `template`, `site`, `homepage`, `sections`, `project`,
`aboutPage`, `contactPage`, `templatesPage`, `siteHeader`, `siteFooter`

### Template Schema

- `slug` — URL của trang demo, tự tạo từ tên (free field, không validate với manifest)
- `componentKey` — dropdown chọn component render (`TEMPLATE_MANIFEST` options); để trống = Coming Soon
- `sections[]` — CMS-editable content; **tự động điền DEFAULT_SECTIONS** khi chọn `componentKey`
  (qua `AutoSeedSectionsInput`; re-seed khi đổi componentKey)

### CMS Flow

- `template.sections[]` — nội dung demo CMS-editable cho từng template
- `site.sections[]` + `brandColor` — per-client customization
- **Auto-seed:** khi chọn `chosenTemplate` trong site document, sections tự điền từ
  template's CMS sections (nếu có) → fallback về `DEFAULT_SECTIONS` trong code
- Fallback render: `site.sections` → `template.sections` → `DEFAULT_SECTIONS` (code)
- API: `POST /api/seed-order` copy DEFAULT_SECTIONS vào site (header `x-seed-secret`);
  `POST /api/admin/seed-order` tương tự cho admin UI
- CMS flow áp dụng cho tất cả 5 template (xem `TEMPLATE_MANIFEST` trong `lib/templates.ts`)

### Template Registry

`lib/templates.ts` là **single source of truth** cho danh sách template:
```ts
export const TEMPLATE_MANIFEST = [
  { slug: "thai-spa",     label: "Thai Spa",     tagline: "Spa / Massage Thái" },
  { slug: "shizen-spa",   label: "Shizen Spa",   tagline: "Spa / Phong cách Nhật" },
  // ... (xem lib/templates.ts)
] as const
```

Dropdown template trong `ContactForm.tsx` derive từ manifest (label + tagline) — thêm template mới KHÔNG cần sửa form.

`templateRegistry.ts` map `componentKey → React component` và `componentKey → DEFAULT_SECTIONS`.
Thêm template mới: thêm vào `TEMPLATE_MANIFEST` → thêm vào registry.

Credentials: `.env.local` (xem `.env.example` để biết đủ danh sách env var — gồm Sanity, Resend, GA4, `ADMIN_PASSWORD` cho admin, và Edge Config cho domain routing)

## Coding Rules

1. Server components by default
2. `'use client'` only when needed (interactivity, hooks)
3. No inline styles — dùng Tailwind class hoặc CSS module class. Ngoại lệ duy nhất: dynamic CSS variable qua `style={{ '--token': value }}`
4. All props typed with TypeScript interfaces
5. No UI component library — dùng Tailwind utility thuần cho tất cả component
6. English text in UI
7. Mobile-first responsive — base styles = mobile, `@media (min-width: X)` cho desktop. Không dùng `max-width` query
8. Component styles in co-located `.module.css` — không để trong `globals.css`
9. External links: `target="_blank"` + `rel="noopener noreferrer"` chỉ khi URL thực sự là external (không phải `#anchor` hay fallback `'#'`)

## Communication Rules

Khi làm bất kỳ task nào, Claude phải:

1. THÔNG BÁO TRƯỚC KHI LÀM
   Nói rõ sắp làm gì bằng tiếng Việt

2. GIẢI THÍCH TỪNG BƯỚC
   Mỗi khi tạo/sửa file, giải thích ngắn gọn:
   - Đang làm gì
   - Tại sao làm vậy
   - Có gì đặc biệt cần lưu ý

3. TÓM TẮT SAU KHI XONG
   Sau mỗi task, tóm tắt:
   - Đã tạo/sửa file nào
   - Component có gì
   - Bước tiếp theo nên làm gì

4. BÁO LỖI RÕ RÀNG
   Nếu gặp vấn đề, giải thích:
   - Lỗi gì
   - Nguyên nhân
   - Cách fix

5. HỎI KHI KHÔNG CHẮC
   Nếu yêu cầu không rõ, hỏi lại
   trước khi làm — không tự đoán

Toàn bộ giải thích dùng tiếng Việt.
Code comments dùng tiếng Anh.
