// Single source of truth for industries — Sanity schemas derive their option
// lists from this, and the Industry union is derived from the values.
export const INDUSTRY_OPTIONS = [
  { title: "Nail", value: "nail" },
  { title: "Spa", value: "spa" },
  { title: "Cà phê", value: "cafe" },
  { title: "Gym", value: "gym" },
  { title: "Tiệm bánh", value: "bakery" },
  { title: "Barber", value: "barber" },
  { title: "Studio", value: "studio" },
  { title: "Khác", value: "other" },
] as const;

export type Industry = (typeof INDUSTRY_OPTIONS)[number]["value"];

export interface Template {
  _id: string;
  title: string;
  slug: string;
  componentKey?: string;
  description: string;
  industry: Industry;
  price: number;
  demoUrl: string;
  thumbnailUrl: string;
  features: string[];
  isFeatured: boolean;
  isActive: boolean;
  sections?: PageSection[];
}

export interface Testimonial {
  _id: string;
  clientName: string;
  shopName: string;
  industry: Industry;
  content: string;
  rating: number;
  avatarUrl?: string;
}


export type OrderStatus =
  | "new"
  | "in_progress"
  | "review"
  | "delivered"
  | "cancelled";

// ── Page section types ─────────────────────────────────────────────────────

interface SectionBase { _type: string; _key: string; enabled?: boolean }

export interface HeroSection extends SectionBase {
  _type: "heroSection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  stats?: Array<{ _key: string; num: string; label: string }>;
  features?: string[];
  // Carousel slides (tùy chọn) — ≥2 slide bật mũi tên + dots; để trống = 1 slide tĩnh.
  slides?: Array<{
    _key: string;
    imageUrl?: string;
    eyebrow?: string;
    headingMain?: string;
    headingItalic?: string;
    subtitle?: string;
  }>;
}

export interface ServicesSection extends SectionBase {
  _type: "servicesSection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  subtitle?: string;
  services?: Array<{
    _key: string;
    name: string;
    desc?: string;
    price?: string;
    duration?: string;
    size?: string;
    tag?: string;
    emoji?: string;
    imageUrl?: string;
    featured?: boolean;
    includes?: string[];
  }>;
}

export interface MenuSection extends SectionBase {
  _type: "menuSection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  subtitle?: string;
  note?: string;
  categories?: Array<{
    _key: string;
    title?: string;
    items?: Array<{ _key: string; name: string; duration?: string; price?: string }>;
  }>;
}

export interface PricingSection extends SectionBase {
  _type: "pricingSection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  subtitle?: string;
  packages?: Array<{
    _key: string;
    name: string;
    desc: string;
    price: string;
    duration: string;
    includes?: string[];
    featured?: boolean;
  }>;
}

export interface TeamSection extends SectionBase {
  _type: "teamSection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  members?: Array<{ _key: string; imageUrl?: string; emoji?: string; name: string; role: string; specialty: string; exp: string; cert: string }>;
}

export interface GallerySection extends SectionBase {
  _type: "gallerySection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  note?: string;
  items?: Array<{ _key: string; imageUrl?: string; emoji?: string; label: string; wide?: boolean }>;
}

export interface ReviewsSection extends SectionBase {
  _type: "reviewsSection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  reviews?: Array<{ _key: string; text: string; name: string; location?: string; service?: string; rating?: number; handle?: string; avatarUrl?: string }>;
}

export interface ContactFormSection extends SectionBase {
  _type: "contactFormSection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  subtitle?: string;
  web3formsKey?: string;
  successMessage?: string;
}

export type SocialPlatform =
  | "facebook" | "instagram" | "zalo" | "tiktok" | "youtube"
  | "twitter" | "linkedin" | "threads" | "whatsapp" | "telegram";

export interface BookingSection extends SectionBase {
  _type: "bookingSection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  subtitle?: string;
  zaloUrl?: string;
  messengerUrl?: string;
  phone?: string;
  email?: string;
  address?: string;
  mapLabel?: string;
  hours?: Array<{ _key: string; day: string; time: string }>;
  /** Empty/undefined url = icon won't render. Editor fills only what client has. */
  socials?: Array<{ _key: string; platform: SocialPlatform; url?: string }>;
  /** Optional last-call note in Hours card (e.g., "last booking 90 min before close") */
  closingNote?: string;
}

export interface FeaturesSection extends SectionBase {
  _type: "featuresSection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  items?: Array<{ _key: string; emoji?: string; imageUrl?: string; title?: string; desc?: string }>;
}

export interface AboutSection extends SectionBase {
  _type: "aboutSection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  paragraphs?: string[];
  quote?: string;
  quoteAuthor?: string;
  imageUrl?: string;
}

export interface FounderSection extends SectionBase {
  _type: "founderSection";
  eyebrow?: string;
  name?: string;
  role?: string;
  imageUrl?: string;
  credentials?: string[];
  socials?: Array<{ _key: string; platform: string; url: string }>;
}

export interface StepsSection extends SectionBase {
  _type: "stepsSection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  steps?: Array<{ _key: string; num?: string; title?: string; desc?: string; imageUrl?: string }>;
}

export interface CalloutSection extends SectionBase {
  _type: "calloutSection";
  eyebrow?: string;
  headingMain?: string;
  headingItalic?: string;
  body?: string;
  imageUrl?: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  showLeadForm?: boolean;
  web3formsKey?: string;
  successMessage?: string;
}

export interface BannerCarouselSection extends SectionBase {
  _type: "bannerCarouselSection";
  slides?: Array<{
    _key: string;
    heading: string;
    subtext?: string;
    ctaLabel?: string;
    ctaUrl?: string;
    bgColor?: string;
    imageUrl?: string;
  }>;
}

export type PageSection =
  | HeroSection
  | FeaturesSection
  | AboutSection
  | ServicesSection
  | MenuSection
  | PricingSection
  | TeamSection
  | FounderSection
  | GallerySection
  | StepsSection
  | CalloutSection
  | ReviewsSection
  | ContactFormSection
  | BookingSection
  | BannerCarouselSection;

// ── Homepage section types ─────────────────────────────────────────────────

export type StepIcon = "grid" | "chat" | "pulse";
export interface Step { _key: string; title: string; desc: string; icon: StepIcon }

export interface TestimonialItem {
  _key?: string;
  clientName: string;
  shopName: string;
  content: string;
  rating: number;
  date?: string;
}

export interface PricingFeature {
  _key: string;
  text: string;
  included: boolean;
}

export interface PricingPlan {
  _key: string;
  name: string;
  description: string;
  price: number;
  features: PricingFeature[];
  cta: string;
  footnote: string;
  featured?: boolean;
}

// ── Site (đơn hàng / trang khách) ────────────────────────────────────────────

export interface Site {
  _id: string;
  clientName: string;
  businessName: string;
  phone: string;
  email?: string;
  businessType?: string;
  chosenTemplate?: { _id: string; title: string; slug: string };
  status: OrderStatus;
  orderDate?: string;
  deliveryDate?: string;
  previewSlug?: string;
  customDomain?: string;
  domainStatus?: "none" | "setting_up" | "live";
  dnsNote?: string;
  isActive?: boolean;
  servicePlan?: 'basic' | 'premium';
  setupFee?: number;
  renewalDate?: string;
  intakeReceived?: string[];
  qaChecks?: string[];
  brandColor?: string;
  seoTitle?: string;
  seoDescription?: string;
  notes?: string;
  sections?: PageSection[];
}
