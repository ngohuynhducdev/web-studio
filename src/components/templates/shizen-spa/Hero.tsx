'use client';

import Image from 'next/image';
import { useParallax } from '@/hooks/useParallax';
import styles from './ShizenSpa.module.css';
import type { HeroSection } from '@/types';

interface Props {
  s: HeroSection;
  businessName: string;
}

export default function Hero({ s, businessName }: Props) {
  const lines = (s.headingMain ?? '').split('\n');
  const parallaxRef = useParallax<HTMLDivElement>(0.08);

  return (
    <section className="bg-[var(--sz-off)] relative overflow-hidden">
      {/* Vertical kanji accent — decorative, desktop only */}
      <span className={styles.heroVertical} aria-hidden="true">
        自然 · shizen · nature
      </span>

      <div className="relative max-w-[85rem] mx-auto w-full px-6 md:px-10">
        <div className="md:grid md:grid-cols-12 md:items-stretch">
          {/* Left — eyebrow, oversized headline (overlaps the photo), copy, CTAs */}
          <div className="relative z-10 md:col-span-7 pt-12 md:pt-[clamp(4rem,8vw,6.5rem)] pb-2 md:pb-14 flex flex-col">
            <p className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowLine} aria-hidden="true" />
              {s.eyebrow ?? `${businessName} SPA`}
            </p>

            <h1 className={styles.heroTitle}>
              {lines.map((line, i) => (
                <span key={i} className={styles.heroTitleLine}>
                  <span className={styles.heroTitleInner}>{line}</span>
                </span>
              ))}
              {s.headingItalic && (
                <em className={styles.heroTitleItalic}>
                  <span className={styles.heroTitleInner}>{s.headingItalic}</span>
                </em>
              )}
            </h1>

            <div className="mt-4 md:mt-auto md:pt-10">
              {s.subtitle && <p className={styles.heroSub}>{s.subtitle}</p>}
              <div className={styles.heroActions}>
                <a href="#booking" className={styles.heroCta}>
                  {s.ctaPrimary ?? 'Book Now'}
                  <span className={styles.heroCtaArrow} aria-hidden="true">→</span>
                </a>
                <a href="#services" className={styles.heroLearn}>
                  {s.ctaSecondary ?? 'Explore Services'}
                </a>
              </div>
            </div>
          </div>

          {/* Right — tall photo bleeding to the top and right edge */}
          <div className="relative md:col-span-5 mt-10 md:mt-0 md:min-h-[36rem]">
            <div className={`${styles.heroPhotoWrap} aspect-[4/5] md:aspect-auto md:absolute md:inset-y-0 md:left-0 md:-right-10`}>
              {/* Parallax layer — oversized so the translate never shows edges */}
              <div ref={parallaxRef} className="absolute -inset-y-12 inset-x-0">
                <Image
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&q=85&fit=crop&auto=format"
                  alt={`Treatment space at ${businessName}`}
                  fill
                  sizes="(max-width: 767px) 100vw, 42rem"
                  className={styles.heroPhotoImg}
                  priority
                />
              </div>
              <span className={styles.heroPhotoCaption}>est. 2018 · {businessName}</span>
            </div>
          </div>
        </div>

        {/* Stats — hairline row */}
        {s.stats && s.stats.length > 0 && (
          <div className={`${styles.heroStats} pb-14 md:pb-20`}>
            <div className={styles.heroStatsInner}>
              {s.stats.map((stat) => (
                <div key={stat._key} className={styles.heroStat}>
                  <span className={styles.heroStatNum}>{stat.num}</span>
                  <span className={styles.heroStatLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
