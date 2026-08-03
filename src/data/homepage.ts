import type { Template, Step, TestimonialItem, PricingFeature, PricingPlan } from "@/types";

export type { Step, TestimonialItem, PricingFeature, PricingPlan };

// Note on the headings below: the count-bearing half ("three steps,",
// "three templates,", "three plans —") is deliberately NOT stored here.
// Each section derives it from the real length of its list, so the copy
// cannot claim a stale number after one is added or removed. Storing it
// would defeat that — seeded values land in Sanity, and a CMS value always
// wins over the derived default.

// ── Hero ─────────────────────────────────────────────────────────────────────

export const DEFAULT_HERO = {
  heroHeading:      "pick a template — tailor it —",
  heroHeadingItal:  "in 5 days.",
  // Names only what the catalog has. It previously advertised nail salons,
  // cafes and gyms — roadmap industries with no template yet. Widen this line
  // when their templates ship, not before (checklist in CLAUDE.md).
  heroLede:         "web studio makes beautiful ready-made templates for spas and massage studios in vietnam.",
  heroCtaPrimary:   "browse templates",
};

// ── HowItWorks ───────────────────────────────────────────────────────────────

export const DEFAULT_HIW_HEADINGS = {
  hiwHeadingItal: "nice and slow.",
};

export const DEFAULT_STEPS: Step[] = [
  { _key: "h1", title: "pick a template",     icon: "grid",  desc: "browse our designs and pick the one that fits — not sure yet? we'll help you decide." },
  { _key: "h2", title: "send us your info",   icon: "chat",  desc: "logo, photos, pricing — send it over on zalo and we'll handle the rest." },
  { _key: "h3", title: "your site, in 5 days", icon: "pulse", desc: "we deploy, connect your domain, and hand everything over with a quick guide." },
];

// ── TemplatesSection ─────────────────────────────────────────────────────────

export const DEFAULT_TEMPLATES_SECTION = {
  tplHeadingItal: "each one built with care.",
};

// ── Testimonials ─────────────────────────────────────────────────────────────

export const DEFAULT_TESTI_HEADINGS = {
  testiHeading: "don't just take our word for it.",
};

// All three shops are spas: every template shipped so far is a spa, so
// testimonials from a nail salon and a cafe claimed delivered work in
// industries we cannot serve yet. Names and quotes are fictional (see README).
export const FALLBACK_TESTIMONIALS: TestimonialItem[] = [
  { _key: "t1", clientName: "Ms. Huong", shopName: "Lily Day Spa",   content: "Our old Facebook page never showed prices, so every message started from scratch. Now clients read the menu and book themselves — saves me an hour a day.", rating: 5, date: "June 2026" },
  { _key: "t2", clientName: "Mr. Nam",   shopName: "Zen Spa",         content: "A calming space, and the site captures it. My spa looks far more professional now, and new clients have been booking a lot more since we launched.", rating: 5, date: "May 2026" },
  { _key: "t3", clientName: "Ms. Lan",   shopName: "Moonlight Spa",   content: "Ready in 5 days, right on schedule, no extra fees. Appointments come in online now instead of over the phone. I've already referred several friends.", rating: 5, date: "April 2026" },
];

// ── Pricing ──────────────────────────────────────────────────────────────────

export const DEFAULT_PRICING_HEADINGS = {
  pricingHeadingItal: "plenty for small businesses,",
};

export const DEFAULT_PRICING_PLANS: PricingPlan[] = [
  {
    _key: "basic",
    name: "basic",
    description: "one page, everything you need to tell your story.",
    price: 19,
    features: [
      { _key: "f1", text: "1 full landing page",          included: true  },
      { _key: "f2", text: "call · zalo · directions buttons", included: true  },
      { _key: "f3", text: ".vn domain, first year",       included: true  },
      { _key: "f4", text: "30 days of free edits",        included: true  },
      { _key: "f5", text: "online booking",                included: false },
      { _key: "f6", text: "photo gallery & dynamic pricing", included: false },
    ],
    cta: "choose basic",
    footnote: "great for new businesses",
  },
  {
    _key: "standard",
    name: "standard",
    description: "3 pages — landing, services, contact. room for a full service list.",
    price: 39,
    features: [
      { _key: "f1", text: "3 custom pages",               included: true  },
      { _key: "f2", text: "online booking / zalo",         included: true  },
      { _key: "f3", text: "photo gallery & dynamic pricing", included: true  },
      { _key: "f4", text: "domain + hosting for year one", included: true  },
      { _key: "f5", text: "60 days of free edits",        included: true  },
      { _key: "f6", text: "blog · basic SEO",              included: false },
    ],
    cta: "choose standard",
    footnote: "for shops with a service menu",
    featured: true,
  },
  {
    _key: "pro",
    name: "pro",
    description: "5+ pages, blog, multiple languages — for businesses with an established customer base.",
    price: 59,
    features: [
      { _key: "f1", text: "5+ pages, deep customization",         included: true },
      { _key: "f2", text: "blog · basic SEO",                      included: true },
      { _key: "f3", text: "Vietnamese + English",                  included: true },
      { _key: "f4", text: "google maps · zalo OA integration",     included: true },
      { _key: "f5", text: "90 days of free edits",                 included: true },
      { _key: "f6", text: "priority support",                      included: true },
    ],
    cta: "choose pro",
    footnote: "for businesses with multiple locations",
  },
];

// ── CTA ──────────────────────────────────────────────────────────────────────

// Copy only. The Zalo link, phone and hours this section shows come from
// DEFAULT_FOOTER / the siteFooter document — they were duplicated here, and the
// phone number was written out a second time rather than referenced.
export const DEFAULT_CTA = {
  ctaHeading:     "your business deserves",
  ctaHeadingItal: "a website done right.",
  ctaBody:        "not sure what you need? just reach out — we'll walk you through it for free.",
};

// ── HomeTemplateGrid (fallback when CMS is empty) ────────────────────────────

export const FALLBACK_TEMPLATES: Template[] = [
  {
    _id: "1",
    title: "Mist Spring Spa",
    slug: "mist-spring-spa",
    componentKey: "mist-spring-spa",
    description: "Upscale spa & wellness — hero carousel, menu-style pricing, and a dark booking panel with Zalo at the center.",
    industry: "spa",
    price: 49,
    thumbnailUrl: "/images/spa-flowers.jpg",
    isFeatured: true,
    isActive: true,
  },
  {
    _id: "2",
    title: "Thai Spa",
    slug: "thai-spa",
    componentKey: "thai-spa",
    description: "Classic Thai massage spa with formal symmetry — deep red and turmeric gold, treatment price list, offers via Zalo.",
    industry: "spa",
    price: 29,
    thumbnailUrl: "/images/spa-massage.jpg",
    isFeatured: false,
    isActive: true,
  },
  {
    _id: "3",
    title: "Herbal Grove Spa",
    slug: "herbal-grove-spa",
    componentKey: "herbal-grove-spa",
    description: "Vietnamese folk herbal spa — handmade paper texture, herbal leaf illustrations, and remedy storytelling.",
    industry: "spa",
    price: 29,
    thumbnailUrl: "/images/atmosphere-02.jpg",
    isFeatured: false,
    isActive: true,
  },
];
