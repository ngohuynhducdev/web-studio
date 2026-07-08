'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './ShizenSpa.module.css';
import type { ServicesSection } from '@/types';
import { ArrowIcon } from './icons';

// Data thumbnails ship at w=200 — request a bigger crop for the preview panel.
const previewUrl = (url: string) => url.replace(/([?&])w=\d+/, '$1w=900');

export default function Services({ s }: { s: ServicesSection }) {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';
  const services = s.services ?? [];
  const [activeIdx, setActiveIdx] = useState(0);
  const active = services[activeIdx];

  return (
    <section ref={ref} className={`${styles.services} py-20 md:py-[7.5rem] bg-[var(--sz-off)] ${v}`} id="services">
      <div className={styles.sectionInner}>
        <div className={`${styles.sectionHead} pb-[3.75rem]`}>
          <p className={styles.eyebrow}>{s.eyebrow}</p>
          <h2 className={styles.h2}>
            {s.headingMain}<br />
            {s.headingItalic && <em>{s.headingItalic}</em>}
          </h2>
        </div>

        <div className="md:grid md:grid-cols-[1fr_22rem] lg:grid-cols-[1fr_24rem] md:gap-14 lg:gap-20 md:items-start">
          {/* Service rows — hovering swaps the preview panel */}
          <div className="flex flex-col">
            {services.map((sv, i) => (
              <article
                key={sv._key}
                onMouseEnter={() => setActiveIdx(i)}
                onFocus={() => setActiveIdx(i)}
                className={`${styles.serviceRow} group grid grid-cols-[1fr_4.5rem] md:grid-cols-[4.5rem_1fr] gap-4 md:gap-6 items-center py-8 pl-4 -ml-4 border-b border-[var(--sz-border)] border-l-2 border-l-transparent hover:border-l-[var(--sz-earth)] hover:bg-[rgba(138,111,87,0.05)] ${i === 0 ? 'border-t border-t-[var(--sz-border)]' : ''}`}
              >
                {/* Number — desktop only, lightens on group hover */}
                <span className="hidden md:block font-[family-name:var(--sz-serif)] font-light italic text-[2.6rem] text-[rgba(138,111,87,0.18)] leading-none pt-px transition-colors duration-[250ms] group-hover:text-[rgba(138,111,87,0.42)]">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Body */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-[family-name:var(--sz-serif)] font-normal text-[1.15rem] md:text-[1.3rem] text-[var(--sz-ink)] tracking-[-0.01em]">{sv.name}</h3>
                  <p className="text-[0.875rem] leading-[1.72] text-[var(--sz-muted)] max-w-[31.25rem]">{sv.desc}</p>
                </div>

                {/* Thumbnail — mobile only; desktop uses the big preview panel */}
                {sv.imageUrl && (
                  <div className="relative overflow-hidden shrink-0 self-center w-[4.5rem] h-[4.5rem] md:hidden">
                    <Image src={sv.imageUrl} alt={sv.name} fill sizes="72px" className="object-cover" />
                  </div>
                )}

                {/* Meta */}
                <div className="flex flex-row items-center gap-2 col-span-full border-t border-[var(--sz-border)] pt-3 mt-1 md:col-start-2 md:border-t-0 md:pt-0 md:mt-0 md:gap-5">
                  <span className="text-[0.75rem] text-[var(--sz-muted)] tracking-[0.04em]">{sv.duration}</span>
                  <span className="font-[family-name:var(--sz-serif)] font-normal text-[1.2rem] text-[var(--sz-earth)]">{sv.price}</span>
                  <a
                    href="#booking"
                    className="ml-auto inline-flex items-center gap-[0.375rem] text-[0.75rem] font-medium text-[var(--sz-earth)] no-underline tracking-[0.05em] border-b border-[rgba(138,111,87,0.3)] pb-px transition-[gap,border-color] duration-200 hover:gap-[0.625rem] hover:border-[var(--sz-earth)]"
                  >
                    Đặt <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Sticky preview panel — desktop only, crossfades with the hovered row */}
          <div className="hidden md:block sticky top-28" aria-hidden="true">
            <div className="relative aspect-[3/4] overflow-hidden bg-[var(--sz-cream)]">
              {services.map((sv, i) =>
                sv.imageUrl ? (
                  <Image
                    key={sv._key}
                    src={previewUrl(sv.imageUrl)}
                    alt=""
                    fill
                    sizes="24rem"
                    className={`object-cover transition-opacity duration-500 ease-out ${i === activeIdx ? 'opacity-100' : 'opacity-0'}`}
                  />
                ) : null
              )}
            </div>
            {active && (
              <div className="flex items-baseline justify-between gap-4 pt-4 border-b border-[var(--sz-border)] pb-3">
                <span className="font-[family-name:var(--sz-serif)] font-light italic text-[1.05rem] text-[var(--sz-ink)]">{active.name}</span>
                <span className="text-[0.8rem] text-[var(--sz-earth)] whitespace-nowrap">{active.price}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
