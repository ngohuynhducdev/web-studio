'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './ZenWellness.module.css';
import type { ServicesSection } from '@/types';
import { ClockIcon, ArrowIcon } from './icons';

export default function Services({ s }: { s: ServicesSection }) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} className={`bg-[var(--zw-bg)] py-20 md:py-28 ${inView ? styles.inView : ''}`} id="services">
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Head */}
        <div className={`${styles.reveal} mb-12 md:mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end md:gap-12`}>
          <div className="flex flex-col items-start gap-5">
            {s.eyebrow && <span className={styles.chip}>{s.eyebrow}</span>}
            <h2 className={`${styles.h2} m-0 text-[var(--zw-ink)]`}>
              {s.headingMain}{' '}
              {s.headingItalic && <span className={styles.marker}>{s.headingItalic}</span>}
            </h2>
          </div>
          {s.subtitle && (
            <p className="m-0 self-end text-[0.92rem] leading-[1.75] text-[var(--zw-mut)]">{s.subtitle}</p>
          )}
        </div>

        {/* Product-style service cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {(s.services ?? []).map((svc, i) => (
            <article
              key={svc._key ?? i}
              style={{ '--zw-delay': `${i * 90}ms` } as React.CSSProperties}
              className={`${styles.reveal} ${styles.cardHover} group flex flex-col overflow-hidden rounded-3xl border border-[var(--zw-line)] bg-white`}
            >
              {/* Photo */}
              <div className="relative m-3 mb-0 aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--zw-tint)]">
                {svc.imageUrl && (
                  <Image
                    src={svc.imageUrl}
                    alt={svc.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                )}
                {svc.duration && (
                  <span className={`${styles.num} absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[0.72rem] font-semibold text-[var(--zw-ink)]`}>
                    <ClockIcon /> {svc.duration}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
                <h3 className="m-0 font-[family-name:var(--zw-font-display)] text-[1.25rem] font-medium tracking-[-0.02em] leading-tight text-[var(--zw-ink)]">
                  {svc.name}
                </h3>
                {svc.desc && (
                  <p className="m-0 flex-1 text-[0.85rem] leading-[1.7] text-[var(--zw-mut)]">
                    {svc.desc}
                  </p>
                )}
                <div className="mt-3 flex items-center justify-between gap-4 border-t border-[var(--zw-line)] pt-4">
                  {svc.price && (
                    <span className={`${styles.num} font-[family-name:var(--zw-font-display)] text-[1.25rem] font-bold tracking-[-0.02em] text-[var(--zw-ink)]`}>
                      {svc.price}
                    </span>
                  )}
                  <a
                    href="#book"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--zw-line)] px-4 py-2 text-[0.78rem] font-semibold text-[var(--zw-accent)] no-underline transition-[background,border-color] duration-200 hover:bg-[var(--zw-tint)] hover:border-[var(--zw-accent)]"
                  >
                    Book trial <ArrowIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
