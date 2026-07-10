'use client';

// SIGNATURE SECTION — membership tiers as a SaaS-style pricing panel.

import { useInView } from '@/hooks/useInView';
import styles from './ZenWellness.module.css';
import type { PricingSection } from '@/types';
import { ArrowIcon, CheckIcon } from './icons';

export default function MemberProgram({ s }: { s: PricingSection }) {
  const [ref, inView] = useInView<HTMLElement>();
  if (!s.packages || s.packages.length === 0) return null;

  return (
    <section ref={ref} id="membership" className={`bg-[var(--zw-bg)] py-20 md:py-28 ${inView ? styles.inView : ''}`}>
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Deep moss panel — the template's single dark statement */}
        <div className="rounded-[2.5rem] bg-[var(--zw-accent-deep)] p-6 md:p-12 lg:p-14">
          {/* Head */}
          <div className={`${styles.reveal} mb-10 md:mb-14 flex flex-col items-start gap-5`}>
            {s.eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-[var(--zw-lime)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--zw-lime)]" aria-hidden="true" />
                {s.eyebrow}
              </span>
            )}
            <h2 className={`${styles.h2} m-0 text-white`}>
              {s.headingMain} {s.headingItalic && <span className={styles.marker}>{s.headingItalic}</span>}
            </h2>
            {s.subtitle && (
              <p className="m-0 max-w-[52ch] text-[0.92rem] leading-[1.75] text-white/65">
                {s.subtitle}
              </p>
            )}
          </div>

          {/* Tier cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {s.packages.map((p, i) => {
              const isFeatured = p.featured;
              return (
                <article
                  key={p._key}
                  style={{ '--zw-delay': `${i * 100}ms` } as React.CSSProperties}
                  className={`${styles.reveal} relative flex flex-col gap-6 rounded-3xl p-7 md:p-8 ${
                    isFeatured
                      ? 'bg-white text-[var(--zw-ink)]'
                      : 'border border-white/12 bg-white/[0.05] text-white'
                  }`}
                >
                  {isFeatured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-[var(--zw-lime)] px-3.5 py-1 text-[0.66rem] font-bold tracking-[0.08em] uppercase text-[var(--zw-ink)]">
                      Most popular
                    </span>
                  )}

                  <header className="flex flex-col gap-2">
                    <h3 className="m-0 font-[family-name:var(--zw-font-display)] text-[1.3rem] font-medium tracking-[-0.02em]">
                      {p.name}
                    </h3>
                    <p className={`m-0 text-[0.8rem] leading-[1.6] ${isFeatured ? 'text-[var(--zw-mut)]' : 'text-white/55'}`}>{p.desc}</p>
                  </header>

                  {/* Price */}
                  <div className={`flex items-baseline gap-2 border-y py-5 ${isFeatured ? 'border-[var(--zw-line)]' : 'border-white/10'}`}>
                    <span className={`${styles.num} font-[family-name:var(--zw-font-display)] text-[2.4rem] font-bold leading-none tracking-[-0.04em] ${isFeatured ? 'text-[var(--zw-accent)]' : 'text-[var(--zw-lime)]'}`}>
                      {p.price}
                    </span>
                    <span className={`text-[0.78rem] font-medium ${isFeatured ? 'text-[var(--zw-mut)]' : 'text-white/50'}`}>
                      {p.duration}
                    </span>
                  </div>

                  {/* Includes */}
                  {p.includes && p.includes.length > 0 && (
                    <ul className="m-0 flex list-none flex-col gap-2.5 p-0 flex-1">
                      {p.includes.map((inc, j) => (
                        <li key={j} className={`flex items-start gap-2.5 text-[0.82rem] leading-[1.55] ${isFeatured ? 'text-[var(--zw-ink)]/80' : 'text-white/75'}`}>
                          <span className={`mt-[2px] flex h-4.5 w-4.5 shrink-0 items-center justify-center ${isFeatured ? 'text-[var(--zw-accent)]' : 'text-[var(--zw-lime)]'}`}>
                            <CheckIcon />
                          </span>
                          {inc}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* CTA */}
                  <a
                    href="#book"
                    className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.82rem] font-semibold no-underline transition-[background,border-color,transform] duration-200 active:scale-[0.98] ${
                      isFeatured
                        ? 'bg-[var(--zw-accent)] text-white hover:bg-[var(--zw-ink)]'
                        : 'border border-white/20 text-white hover:border-[var(--zw-lime)] hover:text-[var(--zw-lime)]'
                    }`}
                  >
                    Join {p.name}
                    <ArrowIcon />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
