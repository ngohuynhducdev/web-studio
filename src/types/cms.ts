import type { StepIcon, PricingPlan } from "@/types";

// ── Homepage section CMS props ────────────────────────────────────────────────

export interface HeroCms {
  heroEyebrow?: string;
  heroHeading?: string;
  heroHeadingItal?: string;
  heroLede?: string;
  heroBadge?: string;
  heroCtaPrimary?: string;
  heroCtaSecondary?: string;
  heroMeta?: string[];
  heroImageUrl?: string;
}

export interface HiwCms {
  hiwEyebrow?: string;
  hiwHeading?: string;
  hiwHeadingItal?: string;
  hiwSteps?: Array<{ _key: string; title: string; desc: string; icon: StepIcon }>;
}

export interface PricingCms {
  pricingEyebrow?: string;
  pricingHeading?: string;
  pricingHeadingItal?: string;
  pricingPlans?: PricingPlan[];
}

export interface CtaCms {
  ctaEyebrow?: string;
  ctaHeading?: string;
  ctaHeadingItal?: string;
  ctaBody?: string;
  ctaZaloUrl?: string;
  ctaPhone?: string;
  ctaHours?: string;
}

// ── Page CMS props ────────────────────────────────────────────────────────────

export interface AboutCms {
  heroEyebrow?: string;
  heroTitle?: string;
  heroTitleItal?: string;
  heroSub?: string;
  storyTitle?: string;
  storyParagraphs?: string[];
  storyQuote?: string;
  storyQuoteSource?: string;
  storyImageUrl?: string;
  values?: Array<{ _key?: string; num: string; title: string; body: string }>;
  stats?: Array<{ _key?: string; value: string; label: string }>;
}

export interface TemplatesPageCms {
  heroEyebrow?: string;
  heroHeadingLine1?: string;
  heroHeadingItal?: string;
  heroHeadingLine3?: string;
  heroDesc?: string;
  metaUpdateNote?: string;
  metaStartingPrice?: string;
}

export interface ContactCms {
  heroEyebrow?: string;
  heroTitle?: string;
  heroSub?: string;
  formCardTitle?: string;
  formCardDesc?: string;
  zaloCardLabel?: string;
  zaloCardNote?: string;
  promisesTitle?: string;
  promises?: string[];
}

export interface SiteHeaderCms {
  brandName?: string;
  logoUrl?: string;
  navLinks?: Array<{ _key: string; label: string; href: string }>;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface SiteFooterCms {
  brandName?: string;
  tagline?: string;
  description?: string;
  shopLinks?: Array<{ _key?: string; label: string; href: string }>;
  email?: string;
  phone?: string;
  zaloUrl?: string;
  hours?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
  copyright?: string;
}
