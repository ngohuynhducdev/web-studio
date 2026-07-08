'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './ShizenSpa.module.css';
import type { BookingSection } from '@/types';
import { PhoneIcon, MapPinIcon, ClockIcon, ChatIcon } from './icons';

export default function Booking({ s }: { s: BookingSection }) {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';
  const isExternal = !!s.zaloUrl && !s.zaloUrl.startsWith('#');

  return (
    <section ref={ref} className={`${styles.booking} py-20 md:py-[7.5rem] bg-[var(--sz-cream)] border-t border-[var(--sz-border)] ${v}`} id="booking">
      <div className="max-w-[75rem] mx-auto px-6 md:px-10 grid grid-cols-1 gap-12 items-start md:grid-cols-[1fr_23.75rem] md:gap-20">
        {/* Left — CTA info */}
        <div className={styles.bookingLeft}>
          <p className={styles.eyebrow}>{s.eyebrow}</p>
          <h2 className="font-[family-name:var(--sz-serif)] font-light text-[clamp(2.2rem,3.5vw,3rem)] leading-[1.12] text-[var(--sz-ink)] mb-5 tracking-[-0.01em] [&_em]:italic [&_em]:text-[var(--sz-earth)]">
            {s.headingMain}<br />{s.headingItalic && <em>{s.headingItalic}</em>}
          </h2>
          {s.subtitle && (
            <p className="text-[0.95rem] leading-[1.78] text-[var(--sz-muted)] max-w-[25rem] mb-11">{s.subtitle}</p>
          )}
          <a
            href={s.zaloUrl ?? '#'}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-3 text-[0.9rem] font-semibold text-[var(--sz-off)] no-underline tracking-[0.04em] px-8 py-4 bg-[var(--sz-ink)] transition-[background,color] duration-[220ms] hover:bg-[var(--sz-earth)] hover:text-white active:translate-y-px"
          >
            <ChatIcon /> Nhắn Zalo đặt lịch
          </a>
          <div className="flex flex-col gap-[0.875rem] mt-9">
            {s.phone   && (
              <a
                href={`tel:${s.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-[0.875rem] text-[var(--sz-muted)] no-underline transition-colors duration-200 hover:text-[var(--sz-ink)]"
              >
                <PhoneIcon /><span>{s.phone}</span>
              </a>
            )}
            {s.address && <div className="flex items-center gap-3 text-[0.875rem] text-[var(--sz-muted)]"><MapPinIcon /><span>{s.address}</span></div>}
          </div>
        </div>

        {/* Right — photo + hours card */}
        <div className={styles.bookingRight}>
          <div className="relative aspect-[16/10] overflow-hidden bg-[var(--sz-off)]">
            <Image
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=900&q=85&fit=crop&auto=format"
              alt=""
              fill
              sizes="(max-width: 767px) 100vw, 23.75rem"
              className="object-cover"
            />
          </div>
          <div className="bg-[var(--sz-off)] border border-[var(--sz-border)] border-t-0 p-9 flex flex-col gap-6">
            <p className="flex items-center gap-2 text-[0.72rem] tracking-[0.14em] uppercase text-[var(--sz-muted)]">
              <ClockIcon />Giờ mở cửa
            </p>
            <div className="flex flex-col">
              {(s.hours ?? []).map((h) => (
                <div key={h._key} className="flex justify-between items-center py-[0.625rem] border-b border-[var(--sz-border)] text-[0.85rem] last:border-b-0">
                  <span className="text-[var(--sz-muted)]">{h.day}</span>
                  <span className="text-[var(--sz-ink)]/85 font-medium">{h.time}</span>
                </div>
              ))}
            </div>
            <p className="text-[0.74rem] text-[var(--sz-muted)] leading-[1.55]">
              Liệu trình cuối nhận khách trước giờ đóng cửa 90 phút.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
