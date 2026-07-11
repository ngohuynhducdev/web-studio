import type { PageSection } from "@/types";

// Thai Spa — default content (demo). TEXT only.
// Default images, crop position and layout live in each component (that's design,
// not content). When a client uploads images via CMS, `imageUrl` will override.
// The template renders in a fixed order in code and picks sections by `_key`.
export const DEFAULT_SECTIONS: PageSection[] = [
  {
    _type: "bannerCarouselSection", _key: "carousel",
    enabled: false,
    slides: [
      {
        _key: "s1",
        heading: "This Month's Offer — 20% Off",
        subtext: "Applies to all body massage packages. Book before the 30th to get the discount.",
        ctaLabel: "Book Now",
        ctaUrl: "#booking",
        bgColor: "#2d1200",
      },
      {
        _key: "s2",
        heading: "Couple Massage Package",
        subtext: "A shared experience — 90 minutes of full-body relaxation in a private room.",
        ctaLabel: "See Details",
        ctaUrl: "#services",
        bgColor: "#1a0a0a",
      },
      {
        _key: "s3",
        heading: "New Facial Treatment",
        subtext: "Deep skin-renewal technology paired with traditional Thai herbal remedies.",
        ctaLabel: "Learn More",
        ctaUrl: "#services",
        bgColor: "#3d1500",
      },
    ],
  },
  {
    _type: "heroSection", _key: "hero",
    headingMain: "Immerse Yourself In",
    headingItalic: "Thai-Style Relaxation",
    subtitle:
      "Distinctive treatments — a genuine journey into the culture and art of Thai therapy.",
    ctaPrimary: "Begin Your Journey",
  },
  {
    _type: "aboutSection", _key: "loving-touch",
    headingMain: "Healing Through",
    headingItalic: "Every Gentle Touch",
    paragraphs: [
      "Fully trained therapists, ready to care for both body and mind — every treatment is a journey toward complete restoration.",
    ],
  },
  {
    _type: "featuresSection", _key: "benefits",
    headingMain: "Thai Massage Helps If You:",
    items: [
      { _key: "b1", title: "Feel Lighter",                desc: "Want a more supple, flexible body" },
      { _key: "b2", title: "Relief From Pain",             desc: "Are living with chronic pain" },
      { _key: "b3", title: "Sleep Better, Full Of Energy", desc: "Struggle with insomnia and wake up tired every day" },
      { _key: "b4", title: "Release Stress",               desc: "Feel constantly tense and unable to relax" },
      { _key: "b5", title: "More Confidence In Life",      desc: "Want to find balance and clarity of mind again" },
    ],
  },
  {
    _type: "aboutSection", _key: "harmony",
    headingMain: "Where Stress Dissolves\nAnd",
    headingItalic: "Harmony Begins",
    paragraphs: [
      "Experience the healing power of Thai massage — a blend of tradition and the art of care, designed to release tension, improve circulation, and restore inner peace.",
    ],
  },
  {
    _type: "stepsSection", _key: "welcome-ritual",
    eyebrow: "Welcome Ritual",
    headingMain: "The Moment You",
    headingItalic: "Step In.",
    steps: [
      { _key: "wr1", num: "01", title: "Greeted With The Wai", desc: "A traditional Thai Wai greeting — unhurried, never perfunctory. It sets the mood right from the doorway." },
      { _key: "wr2", num: "02", title: "Warm Lemongrass-Ginger Tea", desc: "A cup of lemongrass-ginger tea with palm sugar, brewed on the spot. It warms you from within and helps you unwind before entering the room." },
      { _key: "wr3", num: "03", title: "Herbal Foot Soak", desc: "Feet are soaked in fresh lemongrass water, kaffir lime leaves, and Himalayan pink salt — awakening circulation before the main massage." },
      { _key: "wr4", num: "04", title: "Guided Into The Room", desc: "Your therapist personally guides you into the treatment room, introduces the oils to be used, and invites you to choose the ambient music and lighting." },
    ],
  },
  {
    _type: "stepsSection", _key: "after-massage",
    headingMain: "After Your Treatment",
    steps: [
      { _key: "s1", num: "01", title: "Fully at ease, drifting into deep rest" },
      { _key: "s2", num: "02", title: "Enter a world of healing for body and mind" },
      { _key: "s3", num: "03", title: "Feel lightness spreading through every muscle and joint" },
      { _key: "s4", num: "04", title: "Begin a lasting journey of renewal and recovery" },
    ],
  },
  {
    _type: "founderSection", _key: "founder",
    eyebrow: "Lead Therapist",
    name: "Linh Phuong",
    credentials: [
      "Internationally certified Thai massage therapist",
      "Over 10 years of experience in body therapy",
      "Trained in Bangkok — The Traditional Thai Massage School",
      "Combines traditional medicine with modern therapeutic techniques",
      "Welcomes clients of every age and background",
      "Gently activates the body's natural self-healing process",
    ],
    socials: [
      { _key: "fb", platform: "facebook",  url: "#" },
      { _key: "ig", platform: "instagram", url: "#" },
      { _key: "ph", platform: "phone",     url: "#" },
    ],
  },
  {
    _type: "reviewsSection", _key: "reviews",
    headingMain: "What Our Guests Say",
    reviews: [
      { _key: "r1", name: "Lan Anh",   text: "The therapist was truly wonderful. My body felt light for a whole week after the massage. The space is quiet, no one rushes you — that's what I appreciate most." },
      { _key: "r2", name: "Minh Khoa", text: "The atmosphere at the spa is deeply relaxing from the very first minute. After the treatment, I felt not just physically lighter but mentally more balanced too. More than just a massage." },
      { _key: "r3", name: "Thu Ha",    text: "My chronic back pain noticeably improved after 3 sessions. Every time I leave, I feel refreshed and full of energy." },
      { _key: "r4", name: "Phuc Binh", text: "The therapist listens, adjusts to your needs, and never rushes. This is where I come every month to fully reset." },
    ],
  },
  {
    _type: "pricingSection", _key: "pricing",
    headingMain: "Treatments For Every Need",
    packages: [
      {
        _key: "p1", name: "Basic", desc: "", price: "350,000 VND / session", duration: "", featured: false,
        includes: [
          "60-minute traditional Thai massage",
          "Pure herbal essential oils",
          "Herbal tea after the treatment",
        ],
      },
      {
        _key: "p2", name: "Standard", desc: "", price: "550,000 VND / session", duration: "", featured: true,
        includes: [
          "90-minute traditional Thai massage",
          "Pure herbal essential oils",
          "Warm herbal compress",
          "Foot reflexology (15 minutes)",
        ],
      },
      {
        _key: "p3", name: "Complete", desc: "", price: "780,000 VND / session", duration: "", featured: false,
        includes: [
          "120-minute premium Thai massage",
          "Pure herbal essential oils",
          "Warm herbal compress",
          "Foot reflexology (15 minutes)",
          "Hot stone therapy",
        ],
      },
    ],
  },
  {
    _type: "calloutSection", _key: "offer",
    headingMain: "10% Off Your",
    headingItalic: "First Visit",
    body: "Fill in your details and we'll contact you within 30 minutes.",
    ctaLabel: "Claim Your Offer",
    showLeadForm: true,
    successMessage: "Thank you — we'll be in touch soon.",
  },
  {
    _type: "bookingSection", _key: "booking",
    headingMain: "Contact Us",
    zaloUrl: "https://zalo.me/0901234567",
    phone: "0901 234 567",
    email: "hello@lotusthai.vn",
    address: "88 Le Loi, District 1, HCMC",
  },
];
