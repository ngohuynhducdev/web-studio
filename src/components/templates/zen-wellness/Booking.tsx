'use client';

import { useInView } from '@/hooks/useInView';
import styles from './ZenWellness.module.css';
import type { BookingSection } from '@/types';
import { ClockIcon } from './icons';

export default function Booking({ s }: { s: BookingSection }) {
  const [ref, inView] = useInView<HTMLElement>();
  const isExternal = !!s.zaloUrl && !s.zaloUrl.startsWith('#');

  return (
    <section ref={ref} className={`py-20 md:py-28 bg-[var(--zw-bg)] ${inView ? styles.inView : ''}`} id="book">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Deep moss panel mirrors the membership statement */}
        <div className={`${styles.reveal} rounded-[2.5rem] bg-[var(--zw-accent-deep)] p-6 md:p-12 lg:p-14 grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16 md:items-center`}>
          {/* Left — copy + CTA */}
          <div>
            {s.eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.08em] uppercase text-[var(--zw-lime)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--zw-lime)]" aria-hidden="true" />
                {s.eyebrow}
              </span>
            )}
            <h2 className={`${styles.h2} mt-5 mb-5 text-white`}>
              {s.headingMain}{' '}
              {s.headingItalic && <span className={styles.marker}>{s.headingItalic}</span>}
            </h2>
            {s.subtitle && (
              <p className="m-0 max-w-[44ch] text-[0.92rem] leading-[1.78] text-white/65">{s.subtitle}</p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={s.zaloUrl ?? '#'}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2.5 rounded-full bg-[var(--zw-lime)] px-7 py-[0.9375rem] text-[0.88rem] font-bold text-[var(--zw-ink)] no-underline transition-[filter,transform] duration-200 hover:brightness-105 active:scale-[0.98]"
              >
                Nhắn Zalo đặt lịch
              </a>
              {s.phone && (
                <a
                  href={`tel:${s.phone.replace(/\s/g, '')}`}
                  className={`${styles.num} text-[0.9rem] font-semibold text-white/80 no-underline transition-colors duration-200 hover:text-white`}
                >
                  hoặc gọi {s.phone}
                </a>
              )}
            </div>
            {s.address && (
              <p className="m-0 mt-6 text-[0.82rem] text-white/50">{s.address}</p>
            )}
          </div>

          {/* Right — schedule card */}
          <div className="rounded-3xl bg-white p-7 md:p-8 flex flex-col gap-5">
            <p className="m-0 flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-[var(--zw-mut)]">
              <span className="text-[var(--zw-accent)]"><ClockIcon /></span> Giờ mở cửa
            </p>
            <div className="flex flex-col">
              {(s.hours ?? []).map((h) => (
                <div key={h._key} className="flex justify-between items-center gap-4 py-3 border-b border-[var(--zw-line)] last:border-b-0">
                  <span className="text-[0.85rem] text-[var(--zw-mut)]">{h.day}</span>
                  <span className={`${styles.num} text-[0.85rem] font-semibold text-[var(--zw-ink)]`}>{h.time}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[var(--zw-tint)] px-5 py-4 flex items-center justify-between gap-4">
              <span className="text-[0.8rem] font-medium text-[var(--zw-accent)]">Buổi trial 60 phút</span>
              <span className={`${styles.num} font-[family-name:var(--zw-font-display)] text-[1.2rem] font-bold text-[var(--zw-ink)]`}>380k</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
