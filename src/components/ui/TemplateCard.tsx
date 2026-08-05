import Image from "next/image";
import type { Template } from "@/types";
import { INDUSTRY_TITLE } from "@/types";
import { fromEntryPrice } from "@/lib/pricing";
import { sanityImageUrl } from "@/lib/sanityImage";
import styles from "./TemplateCard.module.css";

// 4:3 to match .templateCardImage, at ~2× the widest the card ever gets, so
// the CDN does the cropping and `object-fit: cover` has nothing left to cut.
const THUMB = { width: 800, height: 600 };

interface TemplateCardProps {
  template: Template;
  /** Homepage variant: single View action, no industry badge */
  compact?: boolean;
}

export default function TemplateCard({ template, compact = false }: TemplateCardProps) {
  const {
    title,
    slug,
    description,
    industry,
    thumbnailUrl,
    thumbnail,
    isFeatured,
    componentKey,
  } = template;

  // A CMS image wins, cropped to the editor's hotspot. The fallback catalog
  // ships plain URLs, which have no hotspot to honour.
  const imgSrc = sanityImageUrl(thumbnail, THUMB) ?? thumbnailUrl;

  // Internal route, opened in a new tab on purpose: the demo is a fullscreen
  // page with no site chrome, and the visitor is mid-browse in the catalog.
  // No `rel` — `noreferrer` would drop the referrer on our own domain, and
  // `noopener` is implied for target="_blank". See rule 9 in CLAUDE.md.
  const href = `/templates/${slug}`;

  return (
    <article className={styles.templateCard}>
      {/* Image area — opens in new tab */}
      <a href={href} target="_blank" className={styles.templateCardImage} tabIndex={-1} aria-hidden="true">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={`${title} template`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.templateCardImg}
          />
        ) : (
          <div className={styles.templateCardPlaceholder} data-tpl={componentKey ?? ""} aria-hidden="true" />
        )}

        {isFeatured && (
          <span className={styles.templateCardBadgeFeatured}>FEATURED</span>
        )}
        {!compact && (
          <span className={styles.templateCardBadgeIndustry}>
            {INDUSTRY_TITLE[industry]}
          </span>
        )}
      </a>

      {/* Content */}
      <div className={styles.templateCardBody}>
        <div className={styles.templateCardInfo}>
          <a href={href} target="_blank" className={styles.templateCardTitleLink}>
            <h2 className={styles.templateCardTitle}>{title}</h2>
          </a>
          <p className={styles.templateCardDesc}>{description}</p>
        </div>

        <div className={styles.templateCardFooter}>
          {/* The entry plan, not a per-template price — see lib/pricing.ts. */}
          <span className={styles.templateCardPrice}>{fromEntryPrice()}</span>
          <span className={styles.templateCardPriceUnit}>/mo</span>
        </div>

        <div className={styles.templateCardActions}>
          <a href={href} target="_blank" className="btn btn-ghost">
            View template
          </a>
          {!compact && componentKey && (
            <a href={`/contact?template=${componentKey}`} className="btn btn-primary">
              Order this template
              <svg
                className="btn-arrow"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
