import Image from "next/image";
import type { Template, Industry } from "@/types";
import styles from "./TemplateCard.module.css";

const industryLabel: Record<Industry, string> = {
  nail: "Nail",
  spa: "Spa",
  cafe: "Cafe",
  gym: "Gym",
  bakery: "Bakery",
  barber: "Barber",
  studio: "Studio",
  other: "Other",
};

function formatPrice(price: number) {
  return `$${new Intl.NumberFormat("en-US").format(price)}`;
}

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
    price,
    thumbnailUrl,
    isFeatured,
    componentKey,
  } = template;

  const href = `/templates/${slug}`;

  return (
    <article className={styles.templateCard}>
      {/* Image area — opens in new tab */}
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles.templateCardImage} tabIndex={-1} aria-hidden="true">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
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
            {industryLabel[industry]}
          </span>
        )}
      </a>

      {/* Content */}
      <div className={styles.templateCardBody}>
        <div className={styles.templateCardInfo}>
          <a href={href} target="_blank" rel="noopener noreferrer" className={styles.templateCardTitleLink}>
            <h2 className={styles.templateCardTitle}>{title}</h2>
          </a>
          <p className={styles.templateCardDesc}>{description}</p>
        </div>

        <div className={styles.templateCardFooter}>
          <span className={styles.templateCardPrice}>{formatPrice(price)}</span>
          <span className={styles.templateCardPriceUnit}>/mo</span>
        </div>

        <div className={styles.templateCardActions}>
          <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
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
