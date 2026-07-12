import Image from "next/image";
import Link from "next/link";
import { DEFAULT_HERO } from "@/data/homepage";
import type { HeroCms } from "@/types/cms";
import Reveal from "@/components/ui/motion/Reveal";
import styles from "./HeroSection.module.css";

export default function HeroSection({ cms }: { cms?: HeroCms }) {
  // Full-bleed photo hero: the image is the design; type + one CTA over it.
  // The CMS still stores eyebrow/meta/secondary-CTA fields; this section
  // simply doesn't render them.
  const d = {
    heading:     cms?.heroHeading      ?? DEFAULT_HERO.heroHeading,
    headingItal: cms?.heroHeadingItal  ?? DEFAULT_HERO.heroHeadingItal,
    lede:        cms?.heroLede         ?? DEFAULT_HERO.heroLede,
    ctaPrimary:  cms?.heroCtaPrimary   ?? DEFAULT_HERO.heroCtaPrimary,
  };

  return (
    <section className={styles.hero} id="top">
      <Image
        src={cms?.heroImageUrl ?? "/images/hero-spa.jpg"}
        alt="Stone bathtub against a textured wall with palm leaves — the calm, upscale atmosphere our templates are made for"
        fill
        priority
        sizes="100vw"
        className={styles.heroImg}
      />
      <div className={styles.heroScrim} aria-hidden="true" />

      <div className={`container-site ${styles.heroContent}`}>
        <Reveal immediate className={styles.heroCopy}>
          <h1 className={styles.heroHeading}>
            {d.heading}<br />
            get a beautiful site{" "}
            <span className={styles.heroHeadingItal}>{d.headingItal}</span>
          </h1>
          <p className={styles.heroLede}>{d.lede}</p>
          <div className={styles.heroCta}>
            <Link href="/templates" className="btn btn-light btn-lg">
              {d.ctaPrimary}
              <svg className="btn-arrow" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
