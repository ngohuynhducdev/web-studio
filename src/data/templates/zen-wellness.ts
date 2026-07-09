import type { PageSection } from "@/types";

// Default content for Zen Wellness — Modern Wellness Clinic.
// Persona: CEO/professional clients, 35-50, hotel-style wellness journey.
// Signature sections: WellnessJourney (purpose-picker) + MemberProgram (subscription tiers).
export const DEFAULT_SECTIONS: PageSection[] = [
  {
    _type: "heroSection", _key: "default-hero",
    eyebrow: "Zen Wellness · Modern Sanctuary",
    headingMain: "your own\nspace.",
    headingItalic: "wellness",
    subtitle:
      "A modern wellness sanctuary — care that follows your personal roadmap, not a one-and-done visit. Built for busy people who take themselves seriously.",
    ctaPrimary: "Explore your journey",
    ctaSecondary: "View membership",
    stats: [
      { _key: "s1", num: "500+", label: "loyal members" },
      { _key: "s2", num: "8 years", label: "as a wellness sanctuary" },
      { _key: "s3", num: "92%",   label: "of guests become members" },
    ],
  },
  {
    _type: "featuresSection", _key: "default-trust",
    items: [
      { _key: "t1", emoji: "✦", title: "8 years as a wellness sanctuary" },
      { _key: "t2", emoji: "✦", title: "Internationally trained therapists" },
      { _key: "t3", emoji: "✦", title: "100% organic products" },
      { _key: "t4", emoji: "✦", title: "Membership-first model" },
    ],
  },
  {
    _type: "featuresSection", _key: "default-journey",
    eyebrow: "Wellness Journey",
    headingMain: "What are you looking for",
    headingItalic: "today?",
    items: [
      { _key: "j1", emoji: "💤", title: "Sleep & Rest",
        desc: "Deep stress-reduction treatments that improve sleep quality. Suited to chronic insomnia and prolonged anxiety." },
      { _key: "j2", emoji: "🌿", title: "Detox & Reset",
        desc: "Cleanse the body, restore your energy. For anyone coming off a long business trip or a high-pressure stretch." },
      { _key: "j3", emoji: "🧘", title: "Stress Relief",
        desc: "Release built-up tension. Hot stone, aromatherapy, acupressure — a combo built for desk-bound shoulders and necks." },
      { _key: "j4", emoji: "✨", title: "Beauty & Glow",
        desc: "Brighten skin, refine texture, anti-aging. Face and body care built on organic formulas." },
    ],
  },
  {
    _type: "servicesSection", _key: "default-services",
    eyebrow: "Treatments",
    headingMain: "the full",
    headingItalic: "library.",
    subtitle: "Every treatment maps to a journey — choose by goal, not by name.",
    services: [
      { _key: "sv1", name: "Hot Stone Deep Recovery",     duration: "90 min",  price: "780,000 VND", desc: "Heated basalt stones placed along the spine — deep muscle recovery, chronic pain relief. Built for the Stress Relief journey.",
        imageUrl: "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=1200&q=85&fit=crop&auto=format" },
      { _key: "sv2", name: "Aromatherapy Sleep Ritual",   duration: "75 min",  price: "620,000 VND", desc: "Lavender, chamomile, and bergamot essential oils — a slow massage paced to your breath. For the Sleep journey.",
        imageUrl: "https://images.unsplash.com/photo-1635575066917-e788c2bd06b7?w=1200&q=85&fit=crop&auto=format" },
      { _key: "sv3", name: "Detox Body Wrap & Scrub",     duration: "90 min",  price: "850,000 VND", desc: "Sea salt exfoliation plus an herbal body wrap — purifies and renews the skin. For the Detox journey.",
        imageUrl: "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?w=1200&q=85&fit=crop&auto=format" },
      { _key: "sv4", name: "Organic Facial Glow",         duration: "60 min",  price: "580,000 VND", desc: "A facial treatment with imported French organic serums — brightening, deeply hydrating. For the Beauty journey.",
        imageUrl: "https://images.unsplash.com/photo-1731514771613-991a02407132?w=1200&q=85&fit=crop&auto=format" },
    ],
  },
  {
    _type: "pricingSection", _key: "default-member",
    eyebrow: "Membership",
    headingMain: "Become a",
    headingItalic: "member.",
    subtitle:
      "Members save an average of 30% versus paying per session — plus priority booking, private events, and a monthly personal consult.",
    packages: [
      {
        _key: "mb1", name: "Silver",
        desc: "Your first step into the wellness journey — light, regular care.",
        price: "2,500,000 VND", duration: "/ month", featured: false,
        includes: [
          "2 sessions of 60-min treatments / month",
          "1 lifestyle consult",
          "Priority booking, 24h ahead",
          "Complimentary herbal tea to take home",
        ],
      },
      {
        _key: "mb2", name: "Gold",
        desc: "For people who take self-care seriously — most popular.",
        price: "4,500,000 VND", duration: "/ month", featured: true,
        includes: [
          "4 sessions of 90-min treatments / month",
          "2 skin/body care sessions",
          "Monthly lifestyle consult",
          "Priority booking, 48h ahead",
          "1 complimentary guest pass",
          "20% off in-studio products",
        ],
      },
      {
        _key: "mb3", name: "Platinum",
        desc: "The complete experience — unlimited access for people who expect more.",
        price: "8,500,000 VND", duration: "/ month", featured: false,
        includes: [
          "Unlimited treatments",
          "Unlimited skin/body care",
          "Personal wellness coach 1-1",
          "Private VIP room",
          "Quarterly member-only events",
          "30% off products",
        ],
      },
    ],
  },
  {
    _type: "teamSection", _key: "default-team",
    eyebrow: "Sanctuary Team",
    headingMain: "internationally trained",
    headingItalic: "therapists.",
    members: [
      { _key: "m1", name: "Minh Chau",   role: "Founder & Lead Therapist", specialty: "Hot stone · Deep tissue recovery", exp: "12 years", cert: "ITEC London + Bali certified — specializes in deep-tissue recovery for CEOs and desk-bound clients.",
        imageUrl: "https://images.unsplash.com/photo-1526231237819-de846f3a7e16?w=900&q=85&fit=crop&auto=format" },
      { _key: "m2", name: "Thanh Ha",    role: "Senior Skincare Specialist", specialty: "Aromatherapy · Organic facial",  exp: "7 years",  cert: "CIBTAC Aromatherapy certified — an expert in imported French organic skincare.",
        imageUrl: "https://images.unsplash.com/photo-1505460470885-c72830808c42?w=900&q=85&fit=crop&auto=format" },
      { _key: "m3", name: "Trong Nghia", role: "Wellness Coach",              specialty: "Sports recovery · Sleep ritual", exp: "5 years",  cert: "Vietnam Physiotherapy Association certified — recovery specialist for gym-goers and insomnia sufferers.",
        imageUrl: "https://images.unsplash.com/photo-1681097561932-36d0df02b379?w=900&q=85&fit=crop&auto=format" },
    ],
  },
  {
    _type: "gallerySection", _key: "default-gallery",
    eyebrow: "Sanctuary Space",
    headingMain: "a place",
    headingItalic: "to breathe.",
    items: [
      { _key: "g1", label: "deep tissue room",        wide: true,  imageUrl: "https://images.unsplash.com/photo-1641301315735-498855c6e3a8?w=1600&q=85&fit=crop&auto=format" },
      { _key: "g2", label: "warm welcome reception",   wide: false, imageUrl: "https://images.unsplash.com/photo-1649794349004-d6c8ddf347d3?w=800&q=85&fit=crop&auto=format" },
      { _key: "g3", label: "organic oil lab",          wide: false, imageUrl: "https://images.unsplash.com/photo-1676852148076-7a92002419f3?w=800&q=85&fit=crop&auto=format" },
      { _key: "g4", label: "private couples suite",    wide: false, imageUrl: "https://images.unsplash.com/photo-1690310588789-8fcee016f619?w=800&q=85&fit=crop&auto=format" },
      { _key: "g5", label: "between-session lounge",   wide: false, imageUrl: "https://images.unsplash.com/photo-1592324519748-98825f09ec29?w=800&q=85&fit=crop&auto=format" },
      { _key: "g6", label: "signature product shelf",  wide: true,  imageUrl: "https://images.unsplash.com/photo-1767360963892-3353defd6584?w=1600&q=85&fit=crop&auto=format" },
    ],
  },
  {
    _type: "reviewsSection", _key: "default-reviews",
    eyebrow: "Member Voices",
    headingMain: "what members",
    headingItalic: "are saying.",
    reviews: [
      { _key: "r1", name: "Phuong Anh", handle: "PA", text: "I've been on the Gold membership for 8 months. The difference shows clearly in my sleep quality and work energy. Worth every dong.", rating: 5, service: "Gold Member · Sleep Journey" },
      { _key: "r2", name: "Van Hung",   handle: "VH", text: "As a CEO who travels constantly, the Gold membership gives me a fixed schedule plus priority booking — one less thing to worry about. 5 stars.", rating: 5, service: "Gold Member · Stress Relief" },
      { _key: "r3", name: "Bao Ngoc",   handle: "BN", text: "Sensitive skin makes it hard to find products that work. The Beauty journey with therapist Thanh Ha showed a visible difference in my skin after 3 months.", rating: 5, service: "Silver Member · Beauty Journey" },
    ],
  },
  {
    _type: "bookingSection", _key: "default-booking",
    eyebrow: "Book a trial",
    headingMain: "try one session",
    headingItalic: "before you commit.",
    subtitle: "A 60-minute trial session for 380,000 VND — see if Zen is the right sanctuary for you. No membership commitment required.",
    zaloUrl: "https://zalo.me/0903000000",
    phone: "0903 000 000",
    address: "123 Nguyen Thi Minh Khai, District 1, HCMC",
    hours: [
      { _key: "h1", day: "Mon – Sat", time: "09:00 – 21:00" },
      { _key: "h2", day: "Sun",       time: "10:00 – 19:00 (members only)" },
    ],
  },
];
