import { client } from "@/sanity/lib/client";
import { ctaSectionQuery } from "@/lib/queries";
import { DEFAULT_CTA } from "@/data/homepage";
import type { CtaCms } from "@/types/cms";
import Reveal from "@/components/ui/motion/Reveal";
import PostmarkStamp from "@/components/ui/PostmarkStamp";
import styles from "./CTASection.module.css";

export default async function CTASection() {
  const cms = await client.fetch<CtaCms>(ctaSectionQuery, {}, { next: { revalidate: 60 } });

  const eyebrow    = cms?.ctaEyebrow     ?? DEFAULT_CTA.ctaEyebrow;
  const heading    = cms?.ctaHeading     ?? DEFAULT_CTA.ctaHeading;
  const headingItal= cms?.ctaHeadingItal ?? DEFAULT_CTA.ctaHeadingItal;
  const body       = cms?.ctaBody        ?? DEFAULT_CTA.ctaBody;
  const zaloUrl    = cms?.ctaZaloUrl     ?? DEFAULT_CTA.ctaZaloUrl;
  const phone      = cms?.ctaPhone       ?? DEFAULT_CTA.ctaPhone;
  const hours      = cms?.ctaHours       ?? DEFAULT_CTA.ctaHours;

  return (
    <section className={styles.ctaMocha} id="contact">
      <div aria-hidden="true" className={styles.ctaGradientDecoration} />
      <div className={`container-site ${styles.ctaContainer}`}>
        <div className={styles.ctaLayout}>
          <Reveal className={styles.ctaCopy}>
            <span className={`eyebrow ${styles.ctaEyebrow}`}>{eyebrow}</span>
            <h2 className={styles.ctaHeading}>
              {heading}<br /><em>{headingItal}</em>
            </h2>
            <p className={styles.ctaBody}>{body}</p>
          </Reveal>
          <Reveal className={styles.ctaActions} delay={0.12}>
            <PostmarkStamp ring="· tư vấn miễn phí · zalo " top="1–2" bottom="giờ" className={styles.ctaPostmark} />
            <a href={zaloUrl} target="_blank" rel="noopener noreferrer" className={styles.ctaZaloBtn}>
              💬 Nhắn Zalo ngay
              <svg className="btn-arrow" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <p className={styles.ctaNote}>
              hoặc gọi <span className={styles.ctaPhone}>{phone}</span><br />{hours}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
