import styles from './LuaNail.module.css';
import type { PricingSection } from '@/types';
import { ArrowRightIcon, SparkleIcon } from './icons';

export default function Pricing({ s }: { s: PricingSection }) {
  if (!s.packages || s.packages.length === 0) return null;

  return (
    <section id="pricing" className="relative bg-[var(--ln-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Section head */}
        <div className="mb-14 flex flex-col items-start gap-5 md:mb-16 md:items-center md:text-center">
          {s.eyebrow && <span className={styles.eyebrow}>{s.eyebrow}</span>}
          <h2 className={styles.h2}>
            {s.headingMain}
            {s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>
          {s.subtitle && (
            <p className="m-0 max-w-[58ch] text-[16px] leading-[1.6] text-[var(--ln-ink)]">
              {s.subtitle}
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-7">
          {s.packages.map((p) => {
            const isFeatured = p.featured;
            return (
              <article
                key={p._key}
                className={`${styles.stickerCard} relative flex flex-col gap-5 ${
                  isFeatured ? 'bg-[var(--ln-pink)] text-[var(--ln-bg)] md:-translate-y-3 md:rotate-[1deg]' : 'bg-[var(--ln-surface)]'
                }`}
              >
                {/* Featured badge */}
                {isFeatured && (
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 -rotate-3 bg-[var(--ln-yellow)] border-[3px] border-[var(--ln-ink)] px-4 py-[6px] text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ln-ink)] shadow-[3px_3px_0_var(--ln-ink)]">
                    ★ Hit nhất ★
                  </span>
                )}

                {/* Name + desc */}
                <header className="flex flex-col gap-2">
                  <h3 className={`${styles.serif} m-0 text-[28px] font-extrabold uppercase ${isFeatured ? 'text-[var(--ln-bg)]' : 'text-[var(--ln-ink)]'}`}>
                    {p.name}
                  </h3>
                  <p className={`m-0 text-[13px] leading-[1.55] ${isFeatured ? 'text-[var(--ln-bg)]/85' : 'text-[var(--ln-ink)]/75'}`}>
                    {p.desc}
                  </p>
                </header>

                {/* Price */}
                <div className={`flex items-baseline gap-2 border-y-[3px] border-current py-4 ${isFeatured ? 'border-[var(--ln-yellow)]' : 'border-[var(--ln-ink)]'}`}>
                  <span className={`${styles.serif} text-[56px] font-extrabold leading-none ${isFeatured ? 'text-[var(--ln-yellow)]' : 'text-[var(--ln-pink)]'}`}>{p.price}</span>
                  <span className={`text-[11px] font-bold uppercase tracking-[0.16em] ${isFeatured ? 'text-[var(--ln-bg)]' : 'text-[var(--ln-ink)]'}`}>
                    {p.duration}
                  </span>
                </div>

                {/* Includes */}
                {p.includes && p.includes.length > 0 && (
                  <ul className="m-0 flex list-none flex-col gap-3 p-0">
                    {p.includes.map((inc, j) => (
                      <li key={j} className={`flex items-start gap-3 text-[14px] leading-[1.5] ${isFeatured ? 'text-[var(--ln-bg)]' : 'text-[var(--ln-ink)]'}`}>
                        <span className={`mt-[3px] flex-shrink-0 ${isFeatured ? 'text-[var(--ln-yellow)]' : 'text-[var(--ln-pink)]'}`}>
                          <SparkleIcon className="h-4 w-4" />
                        </span>
                        {inc}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <a
                  href="#booking"
                  className={`mt-auto inline-flex items-center justify-center gap-3 rounded-full border-[3px] border-[var(--ln-ink)] px-5 py-[12px] text-[12px] font-bold uppercase tracking-[0.16em] no-underline transition-transform ${
                    isFeatured
                      ? 'bg-[var(--ln-ink)] text-[var(--ln-yellow)] hover:-rotate-2'
                      : 'bg-[var(--ln-yellow)] text-[var(--ln-ink)] hover:rotate-2'
                  }`}
                >
                  Đặt gói này <ArrowRightIcon />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
