'use client';

import { useInView } from '@/hooks/useInView';
import styles from './ShizenSpa.module.css';
import type { PricingSection } from '@/types';
import { ArrowIcon, CheckIcon } from './icons';

export default function Pricing({ s }: { s: PricingSection }) {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';

  return (
    <section ref={ref} className={`${styles.pricing} py-20 md:py-[6.875rem] bg-[var(--sz-cream)] ${v}`} id="pricing">
      <div className={styles.sectionInner}>
        {/* Section head */}
        <div className={`${styles.sectionHead} pb-[3.75rem] text-center`}>
          <p className={`${styles.eyebrow} ${styles.eyebrowCenter}`}>{s.eyebrow}</p>
          <h2 className={`${styles.h2} ${styles.h2Center}`}>
            {s.headingMain}<br />
            {s.headingItalic && <em>{s.headingItalic}</em>}
          </h2>
          {s.subtitle && (
            <p className="text-[0.9rem] text-[var(--sz-muted)] max-w-[27.5rem] mt-4 mx-auto leading-[1.78] text-center">{s.subtitle}</p>
          )}
        </div>

        {/* Pricing grid — 1-col mobile, 3-col md */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-[4.25rem] bg-[var(--sz-border)] border border-[var(--sz-border)]">
          {(s.packages ?? []).map((pkg) => (
            <div
              key={pkg._key}
              className={`${styles.pkgCard} flex flex-col gap-6 p-11 relative ${pkg.featured ? 'bg-[var(--sz-earth)]' : 'bg-[var(--sz-off)]'}`}
            >
              {pkg.featured && (
                <div className="self-start text-[0.62rem] tracking-[0.14em] uppercase text-[var(--sz-earth)] bg-[rgba(250,247,242,0.92)] border border-transparent px-3 py-1 font-medium -mb-2">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className={`font-[family-name:var(--sz-serif)] font-light text-[1.6rem] tracking-[-0.01em] ${pkg.featured ? 'text-white/95' : 'text-[var(--sz-ink)]'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-[0.85rem] leading-[1.65] mt-2 ${pkg.featured ? 'text-white/60' : 'text-[var(--sz-muted)]'}`}>
                  {pkg.desc}
                </p>
              </div>

              {/* Price row */}
              <div className={`flex items-baseline gap-[0.625rem] py-5 border-y ${pkg.featured ? 'border-white/20' : 'border-[var(--sz-border)]'}`}>
                <span className={`font-[family-name:var(--sz-serif)] font-normal text-[1.85rem] ${pkg.featured ? 'text-white/95' : 'text-[var(--sz-earth)]'}`}>
                  {pkg.price}
                </span>
                <span className={`text-[0.8rem] ${pkg.featured ? 'text-white/50' : 'text-[var(--sz-muted)]'}`}>{pkg.duration}</span>
              </div>

              {/* Includes list */}
              <ul className="list-none m-0 p-0 flex flex-col gap-[0.625rem] flex-1">
                {(pkg.includes ?? []).map((item, j) => (
                  <li key={j} className={`flex items-start gap-[0.625rem] text-[0.85rem] leading-[1.5] ${pkg.featured ? 'text-white/70' : 'text-[var(--sz-muted)]'}`}>
                    <span className={`mt-0.5 shrink-0 ${pkg.featured ? 'text-white/70' : 'text-[var(--sz-earth)]'}`}>
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#booking"
                className={`inline-flex items-center gap-[0.625rem] text-[0.82rem] font-medium tracking-[0.04em] no-underline pt-2 mt-auto transition-[gap] duration-200 hover:gap-4 ${pkg.featured ? 'text-white/85' : 'text-[var(--sz-earth)]'}`}
              >
                Choose This Package <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
