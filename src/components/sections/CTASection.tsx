import { client } from "@/sanity/lib/client";
import { ctaSectionQuery } from "@/lib/queries";
import { DEFAULT_CTA } from "@/data/homepage";
import type { CtaCms } from "@/types/cms";
import Reveal from "@/components/ui/motion/Reveal";
import styles from "./CTASection.module.css";

export default async function CTASection() {
  const cms = await client.fetch<CtaCms>(ctaSectionQuery, {}, { next: { revalidate: 60 } });

  const heading    = cms?.ctaHeading     ?? DEFAULT_CTA.ctaHeading;
  const headingItal= cms?.ctaHeadingItal ?? DEFAULT_CTA.ctaHeadingItal;
  const body       = cms?.ctaBody        ?? DEFAULT_CTA.ctaBody;
  const zaloUrl    = cms?.ctaZaloUrl     ?? DEFAULT_CTA.ctaZaloUrl;
  const phone      = cms?.ctaPhone       ?? DEFAULT_CTA.ctaPhone;
  const hours      = cms?.ctaHours       ?? DEFAULT_CTA.ctaHours;

  return (
    <section className={styles.ctaMocha} id="contact">
      <div className={`container-site ${styles.ctaContainer}`}>
        <Reveal className={styles.ctaStatement}>
          <p className={styles.ctaLine}>
            {heading} <em>{headingItal}</em>
          </p>
          <a href={zaloUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            <svg width={17} height={17} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
            </svg>
            message us on zalo
            <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <p className={styles.ctaSub}>
            {body}
            <br />
            or call <span className={styles.ctaPhone}>{phone}</span> · {hours}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
