import styles from './ZenWellness.module.css';
import type { HeroSection, FeaturesSection } from '@/types';
import { ArrowIcon, CheckIcon, MoonIcon } from './icons';

export default function Hero({
  s,
  trust,
}: {
  s: HeroSection;
  trust?: FeaturesSection;
}) {
  const lines = (s.headingMain ?? '').split('\n');

  return (
    <section id="top" className="bg-[var(--zw-bg)] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-container px-5 md:px-10 grid grid-cols-1 gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:items-center">
        {/* Left — copy */}
        <div className={styles.heroLeft}>
          {s.eyebrow && <span className={styles.chip}>{s.eyebrow}</span>}

          <h1 className={`${styles.h1} mt-6 mb-7 text-[var(--zw-ink)]`}>
            {lines[0]}
            {s.headingItalic && (
              <>
                <br /><span className={styles.marker}>{s.headingItalic}</span>
              </>
            )}
            {lines[1] && <><br />{lines[1]}</>}
          </h1>

          {s.subtitle && (
            <p className="m-0 max-w-[42ch] text-[0.95rem] md:text-[1.02rem] leading-[1.78] text-[var(--zw-mut)]">
              {s.subtitle}
            </p>
          )}

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#journey"
              className="inline-flex items-center gap-2.5 rounded-full bg-[var(--zw-accent)] px-7 py-[0.9375rem] text-[0.85rem] font-semibold text-white no-underline transition-[background,transform] duration-200 hover:bg-[var(--zw-accent-deep)] active:scale-[0.98]"
            >
              {s.ctaPrimary ?? 'Explore your journey'}
              <ArrowIcon />
            </a>
            <a
              href="#membership"
              className="inline-flex items-center rounded-full border border-[var(--zw-line)] bg-white px-7 py-[0.9375rem] text-[0.85rem] font-semibold text-[var(--zw-ink)] no-underline transition-[border-color,transform] duration-200 hover:border-[var(--zw-accent)] active:scale-[0.98]"
            >
              {s.ctaSecondary ?? 'View membership'}
            </a>
          </div>

          {/* Trust checklist */}
          {trust?.items && trust.items.length > 0 && (
            <ul className="mt-11 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none m-0 p-0 border-t border-[var(--zw-line)] pt-7">
              {trust.items.map((item) => (
                <li key={item._key} className="flex items-center gap-2.5 text-[0.82rem] font-medium text-[var(--zw-mut)]">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--zw-tint)] text-[var(--zw-accent)] shrink-0">
                    <CheckIcon />
                  </span>
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right — app widget stack */}
        <div className="relative">
          {/* Tinted backdrop panel */}
          <div className="absolute -inset-4 md:-inset-6 bg-[var(--zw-tint)] rounded-[2rem] rotate-[-1.5deg]" aria-hidden="true" />

          <div className="relative flex flex-col gap-4">
            {/* Widget — next appointment (decorative app mock) */}
            <div className={`${styles.widget} ${styles.widgetFloat1} p-5 md:p-6`} aria-hidden="true">
              <p className="m-0 text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[var(--zw-mut)]">Next appointment</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <div>
                  <p className="m-0 font-[family-name:var(--zw-font-display)] font-bold text-[1.05rem] tracking-[-0.02em] text-[var(--zw-ink)]">Hot Stone Deep Recovery</p>
                  <p className={`${styles.num} m-0 mt-1 text-[0.8rem] text-[var(--zw-mut)]`}>Thu · 6:30 PM · Room 04</p>
                </div>
                <span className="shrink-0 rounded-full bg-[var(--zw-lime)] px-3 py-1 text-[0.68rem] font-bold text-[var(--zw-ink)]">Confirmed</span>
              </div>
            </div>

            {/* Widget — journey progress ring (decorative app mock) */}
            <div className={`${styles.widget} ${styles.widgetFloat2} p-5 md:p-6 flex items-center gap-5`} aria-hidden="true">
              <svg width="76" height="76" viewBox="0 0 76 76" className="shrink-0 -rotate-90">
                <circle cx="38" cy="38" r="30" fill="none" strokeWidth="7" className={styles.ringTrack} />
                <circle cx="38" cy="38" r="30" fill="none" strokeWidth="7" strokeLinecap="round" className={styles.ringValue} />
              </svg>
              <div>
                <p className="m-0 flex items-center gap-2 text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[var(--zw-mut)]">
                  <span className="text-[var(--zw-accent)]"><MoonIcon /></span> Sleep Journey
                </p>
                <p className={`${styles.num} m-0 mt-1.5 font-[family-name:var(--zw-font-display)] font-bold text-[1.35rem] tracking-[-0.02em] text-[var(--zw-ink)]`}>Week 6/12</p>
                <p className="m-0 mt-0.5 text-[0.78rem] text-[var(--zw-mut)]">Deep sleep +38% vs. week 1</p>
              </div>
            </div>

            {/* Widget — stats (CMS-driven) */}
            {s.stats && s.stats.length > 0 && (
              <div className={`${styles.widget} ${styles.widgetFloat3} p-5 md:p-6 grid grid-cols-3 gap-4`}>
                {s.stats.map((stat) => (
                  <div key={stat._key}>
                    <p className={`${styles.num} m-0 font-[family-name:var(--zw-font-display)] font-bold text-[1.5rem] md:text-[1.7rem] tracking-[-0.03em] text-[var(--zw-accent)]`}>
                      {stat.num}
                    </p>
                    <p className="m-0 mt-1 text-[0.68rem] leading-[1.4] text-[var(--zw-mut)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
