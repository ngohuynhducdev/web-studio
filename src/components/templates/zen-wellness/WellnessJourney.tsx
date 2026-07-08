'use client';

// SIGNATURE SECTION — "wellness journey" picker, app-category style.
// Customer self-identifies their goal (Sleep / Detox / Stress / Beauty).

import { useInView } from '@/hooks/useInView';
import styles from './ZenWellness.module.css';
import type { FeaturesSection } from '@/types';
import { ArrowIcon, MoonIcon, LeafIcon, WaveIcon, DiamondIcon } from './icons';

// Map each journey item to a line-style SVG icon (no emoji).
const JOURNEY_ICONS = [MoonIcon, LeafIcon, WaveIcon, DiamondIcon];

export default function WellnessJourney({ s }: { s: FeaturesSection }) {
  const [ref, inView] = useInView<HTMLElement>();
  if (!s.items || s.items.length === 0) return null;

  return (
    <section ref={ref} id="journey" className={`bg-white py-20 md:py-28 ${inView ? styles.inView : ''}`}>
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Head */}
        <div className={`${styles.reveal} mb-12 md:mb-16 flex flex-col items-start gap-5`}>
          {s.eyebrow && <span className={styles.chip}>{s.eyebrow}</span>}
          <h2 className={`${styles.h2} m-0 text-[var(--zw-ink)]`}>
            {s.headingMain} {s.headingItalic && <span className={styles.marker}>{s.headingItalic}</span>}
          </h2>
        </div>

        {/* Journey cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {s.items.map((it, i) => {
            const Icon = JOURNEY_ICONS[i % JOURNEY_ICONS.length];
            return (
              <a
                key={it._key}
                href="#services"
                style={{ '--zw-delay': `${i * 90}ms` } as React.CSSProperties}
                className={`${styles.reveal} ${styles.cardHover} group relative flex flex-col gap-5 rounded-3xl border border-[var(--zw-line)] bg-[var(--zw-bg)] p-7 no-underline`}
              >
                {/* Icon squircle */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--zw-tint)] text-[var(--zw-accent)]">
                  <Icon />
                </div>

                <h3 className="m-0 font-[family-name:var(--zw-font-display)] text-[1.2rem] font-medium tracking-[-0.02em] leading-tight text-[var(--zw-ink)]">
                  {it.title}
                </h3>

                {it.desc && (
                  <p className="m-0 flex-1 text-[0.85rem] leading-[1.7] text-[var(--zw-mut)]">
                    {it.desc}
                  </p>
                )}

                <span className="mt-1 inline-flex items-center justify-between">
                  <span className={`${styles.num} text-[0.68rem] font-semibold tracking-[0.1em] uppercase text-[var(--zw-mut)]`}>
                    Journey {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[var(--zw-line)] text-[var(--zw-accent)] transition-[background,border-color] duration-200 group-hover:bg-[var(--zw-lime)] group-hover:border-[var(--zw-lime)] group-hover:text-[var(--zw-ink)]">
                    <ArrowIcon />
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
