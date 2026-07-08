import { groq } from "next-sanity";

export const homepageQuery = groq`
  *[_type == "homepage" && _id == "homepage"][0] {
    ...,
    "heroImageUrl": heroImage.asset->url
  }
`;

export const siteHeaderQuery = groq`
  *[_type == "siteHeader" && _id == "siteHeader"][0] {
    brandName, "logoUrl": logo.asset->url, navLinks, ctaLabel, ctaHref
  }
`;

export const siteFooterQuery = groq`
  *[_type == "siteFooter" && _id == "siteFooter"][0] {
    brandName, tagline, description, shopLinks,
    email, phone, zaloUrl, hours,
    facebookUrl, instagramUrl, tiktokUrl, copyright
  }
`;

const templateFields = groq`
  _id,
  title,
  "slug": slug.current,
  componentKey,
  description,
  industry,
  price,
  demoUrl,
  "thumbnailUrl": thumbnail.asset->url,
  features,
  isFeatured,
  isActive
`;

export const featuredTemplatesQuery = groq`
  *[_type == "template" && isFeatured == true && isActive != false]
  | order(_createdAt desc)[0...6] {
    ${templateFields}
  }
`;

export const allTemplatesQuery = groq`
  *[_type == "template" && isActive != false]
  | order(isFeatured desc, _createdAt desc) {
    ${templateFields}
  }
`;

export const templatesByIndustryQuery = groq`
  *[_type == "template" && industry == $industry && isActive != false]
  | order(isFeatured desc, _createdAt desc) {
    ${templateFields}
  }
`;

export const templateBySlugQuery = groq`
  *[_type == "template" && slug.current == $slug][0] {
    ${templateFields},
    sections[] {
      ...,
      "imageUrl": coalesce(imageUrl, image.asset->url),
      slides[]   { ..., "imageUrl": coalesce(imageUrl, image.asset->url) },
      members[]  { ..., "imageUrl": coalesce(imageUrl, image.asset->url) },
      items[]    { ..., "imageUrl": coalesce(imageUrl, image.asset->url) },
      services[] { ..., "imageUrl": coalesce(imageUrl, image.asset->url) },
      steps[]    { ..., "imageUrl": coalesce(imageUrl, image.asset->url) }
    }
  }
`;


export const zaloUrlQuery = groq`
  *[_type == "siteFooter" && _id == "siteFooter"][0].zaloUrl
`;

export const ctaSectionQuery = groq`
  *[_type == "homepage" && _id == "homepage"][0] {
    ctaEyebrow, ctaHeading, ctaHeadingItal, ctaBody, ctaZaloUrl, ctaPhone, ctaHours
  }
`;

export const templatesPageQuery = groq`
  *[_type == "templatesPage" && _id == "templatesPage"][0] {
    heroEyebrow, heroHeadingLine1, heroHeadingItal, heroHeadingLine3,
    heroDesc, metaUpdateNote, metaStartingPrice
  }
`;

export const contactPageQuery = groq`
  *[_type == "contactPage" && _id == "contactPage"][0] {
    heroEyebrow, heroTitle, heroSub,
    formCardTitle, formCardDesc,
    zaloCardLabel, zaloCardNote,
    promisesTitle, promises
  }
`;

export const aboutPageQuery = groq`
  *[_type == "aboutPage" && _id == "aboutPage"][0] {
    heroEyebrow, heroTitle, heroTitleItal, heroSub,
    storyTitle, storyParagraphs, storyQuote, storyQuoteSource,
    "storyImageUrl": storyImage.asset->url,
    values[] { num, title, body },
    stats[] { value, label }
  }
`;

export const duAnPageQuery = groq`
  *[_type == "duAnPage" && _id == "duAnPage"][0] {
    heroEyebrow, heroTitle, heroTitleItal, heroSub, metaLocation,
    ctaEyebrow, ctaTitle, ctaTitleItal, ctaBody
  }
`;

export const allProjectsQuery = groq`
  *[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    shopName,
    industry,
    industryLabel,
    location,
    templateUsed,
    "imageUrl": image.asset->url,
    liveUrl,
    highlight
  }
`;

export const siteBySlugQuery = groq`
  *[_type == "site" && previewSlug.current == $slug][0] {
    _id,
    businessName,
    brandColor,
    isActive,
    renewalDate,
    seoTitle,
    seoDescription,
    "componentKey": chosenTemplate->componentKey,
    sections[] {
      ...,
      "imageUrl": coalesce(imageUrl, image.asset->url),
      slides[]   { ..., "imageUrl": coalesce(imageUrl, image.asset->url) },
      members[]  { ..., "imageUrl": coalesce(imageUrl, image.asset->url) },
      items[]    { ..., "imageUrl": coalesce(imageUrl, image.asset->url) },
      services[] { ..., "imageUrl": coalesce(imageUrl, image.asset->url) },
      steps[]    { ..., "imageUrl": coalesce(imageUrl, image.asset->url) }
    }
  }
`;

export const sitesQuery = groq`
  *[_type == "site"]
  | order(_createdAt desc) {
    _id,
    clientName,
    businessName,
    phone,
    email,
    businessType,
    "chosenTemplate": chosenTemplate->{
      _id,
      title,
      "slug": slug.current
    },
    status,
    orderDate,
    deliveryDate,
    "previewSlug": previewSlug.current,
    customDomain,
    domainStatus,
    isActive,
    servicePlan,
    setupFee,
    renewalDate,
    intakeReceived,
    qaChecks,
    notes
  }
`;
