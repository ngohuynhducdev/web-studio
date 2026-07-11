import type { Template, Step, TestimonialItem, PricingFeature, PricingPlan } from "@/types";
import { STUDIO_ZALO_URL } from "@/data/layout";

export type { Step, TestimonialItem, PricingFeature, PricingPlan };

// ── TapeStrip ────────────────────────────────────────────────────────────────

export const DEFAULT_TAPE_ITEMS = [
  "Nail Salons", "Spa & Massage", "Cafes", "Gyms",
  "Hair Salons", "Dental Clinics", "Restaurants", "Photo Studios",
];

// ── Hero ─────────────────────────────────────────────────────────────────────

export const DEFAULT_HERO = {
  heroEyebrow:      "WEB STUDIO · SINCE 2024",
  heroHeading:      "pick a template — tailor it —",
  heroHeadingItal:  "in 5 days.",
  heroLede:         "web studio has 15+ beautiful ready-made templates for nail salons, spas, cafes, gyms. you pick a template, we customize it for your business — no rush, no shortcuts.",
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
  { _key: "h1", title: "pick a template",     icon: "grid",  desc: "browse 15+ ready-made designs. pick the one that fits your business — colors, mood, typography. not sure yet? we'll help you decide." },
  { _key: "h2", title: "send us your info",   icon: "chat",  desc: "logo, photos, copy, pricing — just send it over on zalo. we'll handle the rest: layout, copywriting, image placement." },
  { _key: "h3", title: "your site, in 5 days", icon: "pulse", desc: "we deploy it, connect your domain, and hand over the accounts. plus a quick guide so you can make updates yourself later." },
];

// ── TemplatesSection ─────────────────────────────────────────────────────────

export const DEFAULT_TEMPLATES_SECTION = {
  tplEyebrow:     "FEATURED TEMPLATES",
  tplHeading:     "four templates,",
  tplHeadingItal: "picked the most this month.",
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
    title: "Pink Luxury",
    slug: "pink-luxury",
    description: "An elegant design in soft pastel pink — perfect for upscale nail salons that want to make an impression from the first glance.",
    industry: "nail",
    price: 39,
    demoUrl: "#",
    thumbnailUrl: "/images/nail-polish-wall.jpg",
    features: ["online booking", "photo gallery", "pricing"],
    isFeatured: true,
    isActive: true,
  },
  {
    _id: "2",
    title: "Zen Wellness",
    slug: "zen-wellness",
    description: "A soft sage-green palette with an airy layout — creating a sense of calm from the homepage on, for spas and massage studios.",
    industry: "spa",
    price: 39,
    demoUrl: "#",
    thumbnailUrl: "/images/spa-flowers.jpg",
    features: ["appointment booking", "treatments", "service packages"],
    isFeatured: true,
    isActive: true,
  },
  {
    _id: "3",
    title: "Vintage Cozy",
    slug: "vintage-cozy",
    description: "Warm browns and a gentle serif typeface — capturing the slow, thoughtful atmosphere of a specialty coffee shop.",
    industry: "cafe",
    price: 39,
    demoUrl: "#",
    thumbnailUrl: "/images/cafe-interior-01.jpg",
    features: ["menu", "brand story", "table reservations"],
    isFeatured: true,
    isActive: true,
  },
  {
    _id: "4",
    title: "Bold Energy",
    slug: "bold-energy",
    description: "Dark, bold, and decisive — for gyms and fitness studios that want to radiate energy straight from the homepage.",
    industry: "gym",
    price: 39,
    demoUrl: "#",
    thumbnailUrl: "/images/gym-fitness.jpg",
    features: ["class schedule", "trial signup", "trainers"],
    isFeatured: false,
    isActive: true,
  },
];
