import Image from "next/image";
import Link from "next/link";
import { DEFAULT_HERO } from "@/data/homepage";
import type { HeroCms } from "@/types/cms";
import Reveal from "@/components/ui/motion/Reveal";
import PostmarkStamp from "@/components/ui/PostmarkStamp";
import styles from "./HeroSection.module.css";

export default function HeroSection({ cms }: { cms?: HeroCms }) {
  // Distilled hero: type + photo + one CTA carry the message. The CMS still
  // stores eyebrow/meta/secondary-CTA fields; this section just doesn't render them.
  const d = {
    heading:     cms?.heroHeading      ?? DEFAULT_HERO.heroHeading,
    headingItal: cms?.heroHeadingItal  ?? DEFAULT_HERO.heroHeadingItal,
    lede:        cms?.heroLede         ?? DEFAULT_HERO.heroLede,
    ctaPrimary:  cms?.heroCtaPrimary   ?? DEFAULT_HERO.heroCtaPrimary,
  };

  return (
    <section className={`${styles.hero} grain`} id="top">
      <div className={`container-site ${styles.heroGrid}`}>

        {/* ── Copy ── */}
        <Reveal immediate className={styles.heroCopy}>
          <h1 className={styles.heroHeading}>
            {d.heading}<br />
            get a beautiful site{" "}
            <span className={styles.heroHeadingItal}>{d.headingItal}</span>
          </h1>
          <p className={styles.heroLede}>{d.lede}</p>
          <div className={styles.heroCta}>
            <Link href="/templates" className="btn btn-primary btn-lg">
              {d.ctaPrimary}
              <svg className="btn-arrow" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </Reveal>

        {/* ── Taped polaroid + postmark ── */}
        <Reveal immediate className={styles.heroStage} delay={0.12}>
          <div className={`${styles.heroBackPaper} note note-kraft`} aria-hidden="true" />

          <figure className={`${styles.polaroid} note lift`}>
            <span className={`tape ${styles.tapeA}`} aria-hidden="true" />
            <span className={`tape ${styles.tapeB}`} aria-hidden="true" />
            <div className={styles.polaroidPhoto}>
              <Image
                src={cms?.heroImageUrl ?? "/images/cafe-cozy.jpg"}
                alt="Landing page template for Brown Coffee Shop, District 3 — warm brown tones, food photos, table booking"
                fill
                sizes="(max-width: 1023px) 100vw, 46vw"
                priority
              />
            </div>
            <figcaption className={styles.polaroidCaption}>
              <span className={styles.polaroidHand}>brown coffee shop, d.3</span>
              <span className={styles.polaroidStamp}>cozy vintage template</span>
            </figcaption>
          </figure>

          <PostmarkStamp ring="· web studio · saigon " top="5" bottom="days" className={styles.heroPostmark} />
        </Reveal>

      </div>
    </section>
  );
}
