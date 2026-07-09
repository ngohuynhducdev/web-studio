// ── Helpers ──────────────────────────────────────────────────────────────────

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/đ/g, "d")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// ── Types ────────────────────────────────────────────────────────────────────

export interface Project {
  _id: string;
  shopName: string;
  industry: string;
  industryLabel: string;
  location: string;
  templateUsed: string;
  imageUrl?: string;
  liveUrl?: string;
  highlight: string;
}

export interface DuAnPageContent {
  heroEyebrow?: string;
  heroTitle?: string;
  heroTitleItal?: string;
  heroSub?: string;
  metaLocation?: string;
  ctaEyebrow?: string;
  ctaTitle?: string;
  ctaTitleItal?: string;
  ctaBody?: string;
}

// ── Fallback data ─────────────────────────────────────────────────────────────

export const FALLBACK_PROJECTS: Project[] = [
  {
    _id: "1",
    shopName: "Kim Anh Nails",
    industry: "nail",
    industryLabel: "Nail salon",
    location: "District 7, HCMC",
    templateUsed: "Pink Luxury",
    imageUrl: "/images/nail-salon-shelves.jpg",
    highlight: "Online bookings went from 0 to 40 a month in the first 3 weeks.",
  },
  {
    _id: "2",
    shopName: "Peach Blossom Spa",
    industry: "spa",
    industryLabel: "Spa",
    location: "District 3, HCMC",
    templateUsed: "Zen Wellness",
    imageUrl: "/images/spa-massage.jpg",
    liveUrl: "/templates/zen-wellness",
    highlight: "New clients finding them through Google jumped noticeably once the SEO-ready site launched.",
  },
  {
    _id: "3",
    shopName: "Brown Coffee",
    industry: "cafe",
    industryLabel: "Café",
    location: "District 1, HCMC",
    templateUsed: "Vintage Cozy",
    imageUrl: "/images/cafe-interior-01.jpg",
    highlight: "The site fully replaced their Facebook page — menu, hours, address, all in one place.",
  },
  {
    _id: "4",
    shopName: "Gym 365",
    industry: "gym",
    industryLabel: "Gym",
    location: "Binh Thanh, HCMC",
    templateUsed: "Bold Energy",
    imageUrl: "/images/gym-fitness.jpg",
    highlight: "The landing page for the free 7-day trial signup cut ad spend by 30%.",
  },
  {
    _id: "5",
    shopName: "Rose Nails",
    industry: "nail",
    industryLabel: "Nail salon",
    location: "Thu Duc, HCMC",
    templateUsed: "Blossom Nails",
    imageUrl: "/images/nail-polish-wall.jpg",
    highlight: "A youthful design that clicks with Gen Z clients — booking straight from their phone.",
  },
  {
    _id: "6",
    shopName: "The Calm Studio",
    industry: "spa",
    industryLabel: "Spa",
    location: "Phu Nhuan, HCMC",
    templateUsed: "Lotus Spa",
    imageUrl: "/images/atmosphere-01.jpg",
    highlight: "The premium look raised the perceived value of their service — clients are willing to pay more.",
  },
];

export const FALLBACK_PAGE: DuAnPageContent = {
  heroEyebrow:  "PROJECTS WE'VE SHIPPED",
  heroTitle:    "real work — not",
  heroTitleItal: "mockups.",
  heroSub:      "Every site here passed through our hands — from picking colors to connecting the domain. No two projects look alike.",
  metaLocation: "all in HCMC",
  ctaEyebrow:   "WHAT'S NEXT",
  ctaTitle:     "your business could be",
  ctaTitleItal: "the next project.",
  ctaBody:      "Every business has a different story — we'll listen and build a site that actually fits yours, no copy-paste.",
};
