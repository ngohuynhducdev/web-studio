import Link from "next/link";
import { DEFAULT_PRICING_PLANS, DEFAULT_PRICING_HEADINGS, DEFAULT_FAQ_ITEMS } from "@/data/homepage";
import type { PricingCms } from "@/types/cms";
import type { PricingPlan } from "@/types";
import { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import styles from "./PricingSection.module.css";

function formatPrice(price: number) {
  return `$${new Intl.NumberFormat("en-US").format(price)}`;
}

function CheckIcon() {
  return (
    <svg
      width={15}
      height={15}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      width={15}
      height={15}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function PricingSection({ cms }: { cms?: PricingCms }) {
  const eyebrow    = cms?.pricingEyebrow     ?? DEFAULT_PRICING_HEADINGS.pricingEyebrow;
  const heading    = cms?.pricingHeading     ?? DEFAULT_PRICING_HEADINGS.pricingHeading;
  const headingItal= cms?.pricingHeadingItal ?? DEFAULT_PRICING_HEADINGS.pricingHeadingItal;
  const plans      = cms?.pricingPlans?.length ? cms.pricingPlans : DEFAULT_PRICING_PLANS;

  return (
    <section className="section" id="pricing">
      <div className="container-site">
        <div className={styles.pricingSectionHead}>
          <h2 className="h2-heading">
            {heading}{" "}
            <span className="italic-acc">{headingItal}</span>
            <br />
            đủ chỗ để lớn lên.
          </h2>
        </div>

        {/* Pricing grid */}
        <RevealStagger className={styles.pricingGrid}>
          {plans.map((plan) => (
            <RevealItem key={plan._key} className="grid">
              {plan.featured ? (
                <FeaturedCard plan={plan} />
              ) : (
                <RegularCard plan={plan} />
              )}
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Footer link */}
        <div className={styles.pricingFoot}>
          <Link href="/contact" className="btn-link">
            xem chi tiết bảng giá
            <svg
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
          </Link>
        </div>

        {/* FAQ */}
        <div className={styles.faqWrap}>
          <h3 className={styles.faqHeading}>câu hỏi thường gặp</h3>
          <dl className={styles.faqList}>
            {DEFAULT_FAQ_ITEMS.map((item) => (
              <details key={item._key} className={styles.faqItem}>
                <summary className={styles.faqQ}>
                  {item.q}
                  <svg className={styles.faqChevron} width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <dd className={styles.faqA}>{item.a}</dd>
              </details>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function RegularCard({ plan }: { plan: PricingPlan }) {
  return (
    <article className="bg-white border border-brand-beige rounded-2xl p-8 flex flex-col relative">
      {/* Name + description */}
      <div>
        <div className={styles.priceName}>{plan.name}</div>
        <p className={styles.priceDesc}>{plan.description}</p>
      </div>

      {/* Price */}
      <div className={styles.priceAmtRow}>
        <span className={styles.priceAmt}>{formatPrice(plan.price)}</span>
        <span className={styles.priceUnit}>/mo</span>
      </div>

      {/* Features */}
      <ul className={styles.priceList}>
        {plan.features.map((f) => (
          <li key={f._key} className={styles.priceFeatureItem}>
            <span
              className={
                f.included ? styles.priceFeatureCheck : styles.priceFeatureCross
              }
            >
              {f.included ? <CheckIcon /> : <CrossIcon />}
            </span>
            <span className={f.included ? "" : styles.priceFeatureExcluded}>
              {f.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="/contact" className="btn btn-outline btn-full">
        {plan.cta}
      </a>

      {/* Footnote */}
      <p className={styles.priceFoot}>{plan.footnote}</p>
    </article>
  );
}

function FeaturedCard({ plan }: { plan: PricingPlan }) {
  return (
    <article className={`${styles.priceCardFeatured} rounded-2xl p-8 flex flex-col relative -translate-y-3`}>
      {/* Badge */}
      <span className={styles.priceFlag}>PHỔ BIẾN NHẤT</span>

      {/* Name + description */}
      <div>
        <div className={styles.priceName}>{plan.name}</div>
        <p className={styles.priceDesc}>{plan.description}</p>
      </div>

      {/* Price */}
      <div className={styles.priceAmtRow}>
        <span className={styles.priceAmt}>{formatPrice(plan.price)}</span>
        <span className={styles.priceUnit}>/mo</span>
      </div>

      {/* Features */}
      <ul className={styles.priceList}>
        {plan.features.map((f) => (
          <li key={f._key} className={styles.priceFeatureItem}>
            <span className={styles.priceFeatureCheck}>
              <CheckIcon />
            </span>
            <span>{f.text}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="/contact" className="btn btn-accent btn-full">
        {plan.cta}
      </a>

      {/* Footnote */}
      <p className={styles.priceFoot}>{plan.footnote}</p>
    </article>
  );
}
