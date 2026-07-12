import type { Template, Step, TestimonialItem, PricingFeature, PricingPlan } from "@/types";
import { STUDIO_ZALO_URL } from "@/data/layout";

export type { Step, TestimonialItem, PricingFeature, PricingPlan };

// ── TapeStrip ────────────────────────────────────────────────────────────────

export const DEFAULT_TAPE_ITEMS = [
  "Nail Salons", "Spa & Massage", "Cafes", "Gyms", "Hair Salons",
];

// ── Hero ─────────────────────────────────────────────────────────────────────

export const DEFAULT_HERO = {
  heroEyebrow:      "WEB STUDIO · SINCE 2024",
  heroHeading:      "pick a template — tailor it —",
  heroHeadingItal:  "in 5 days.",
  heroLede:         "web studio makes beautiful ready-made templates for nail salons, spas, cafes, gyms.",
  heroBadge:        "delivered in 5 days",
  heroCtaPrimary:   "browse templates",
  heroCtaSecondary: "about us",
  heroMeta: ["no hidden fees", "30 days of free edits", "domain & hosting for year one"],
};

// ── HowItWorks ───────────────────────────────────────────────────────────────

export const DEFAULT_HIW_HEADINGS = {
  hiwEyebrow:    "HOW IT WORKS",
  hiwHeading:    "three steps,",
  hiwHeadingItal: "nice and slow.",
};

export const DEFAULT_STEPS: Step[] = [
  { _key: "h1", title: "pick a template",     icon: "grid",  desc: "browse our designs and pick the one that fits — not sure yet? we'll help you decide." },
  { _key: "h2", title: "send us your info",   icon: "chat",  desc: "logo, photos, pricing — send it over on zalo and we'll handle the rest." },
  { _key: "h3", title: "your site, in 5 days", icon: "pulse", desc: "we deploy, connect your domain, and hand everything over with a quick guide." },
];

// ── TemplatesSection ─────────────────────────────────────────────────────────

export const DEFAULT_TEMPLATES_SECTION = {
  tplEyebrow:     "FEATURED TEMPLATES",
  tplHeading:     "three templates,",
  tplHeadingItal: "each one built with care.",
};

// ── Testimonials ─────────────────────────────────────────────────────────────

export const DEFAULT_TESTI_HEADINGS = {
  testiEyebrow: "WHAT CLIENTS SAY",
  testiHeading: "don't just take our word for it.",
};

export const FALLBACK_TESTIMONIALS: TestimonialItem[] = [
  { _key: "t1", clientName: "Ms. Huong", shopName: "Lily Nail Studio", content: "The best-looking nail salon I've ever been to. Once the site launched, clients started booking themselves — no more back-and-forth in the inbox. Saves me an hour a day.", rating: 5, date: "April 2025" },
  { _key: "t2", clientName: "Mr. Nam",   shopName: "Zen Spa",           content: "A calming space, and the site nails the vibe. It makes my spa look so much more professional. New clients have been booking a lot more since we launched.", rating: 5, date: "March 2025" },
  { _key: "t3", clientName: "Ms. Lan",   shopName: "Moonlight Cafe",    content: "Way more customers reserving tables online now. The site was ready in 5 days, right on schedule, no extra fees. They're great to work with — I've already referred several friends.", rating: 5, date: "February 2025" },
];

// ── Pricing ──────────────────────────────────────────────────────────────────

export const DEFAULT_PRICING_HEADINGS = {
  pricingEyebrow:     "PRICING",
  pricingHeading:     "three plans —",
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
    description: "3 pages — landing, services, contact. plenty for 90% of businesses.",
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
    footnote: "8 out of 10 clients pick this plan",
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

export const DEFAULT_CTA = {
  ctaEyebrow:     "LET'S GET STARTED",
  ctaHeading:     "your business deserves",
  ctaHeadingItal: "a website done right.",
  ctaBody:        "not sure what you need? just reach out — we'll walk you through it for free.",
  ctaZaloUrl:     STUDIO_ZALO_URL,
  ctaPhone:       "0901 234 567",
  ctaHours:       "Mon – Sat, 9am–6pm",
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
    demoUrl: "/templates/mist-spring-spa",
    thumbnailUrl: "/images/spa-flowers.jpg",
    features: ["hero carousel", "menu-style pricing", "zalo booking"],
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
    demoUrl: "/templates/thai-spa",
    thumbnailUrl: "/images/spa-massage.jpg",
    features: ["treatment price list", "founder introduction", "zalo booking"],
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
    demoUrl: "/templates/herbal-grove-spa",
    thumbnailUrl: "/images/atmosphere-02.jpg",
    features: ["herbal treatment menu", "remedy storytelling", "zalo booking"],
    isFeatured: false,
    isActive: true,
  },
];
