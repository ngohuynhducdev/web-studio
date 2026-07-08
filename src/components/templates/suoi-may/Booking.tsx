'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './SuoiMay.module.css';
import type { BookingSection } from '@/types';
import { ChatIcon, PhoneIcon, CheckIcon } from './icons';

const PERKS = ['Không cần đặt cọc trước', 'Phản hồi nhanh trong ngày', 'Ưu đãi 10% cho lần đầu'];

export default function Booking({ s, businessName = 'Spa' }: { s: BookingSection; businessName?: string }) {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';
  const isExternal = !!s.zaloUrl && !s.zaloUrl.startsWith('#');

  return (
    <section ref={ref} id="booking" className={`${styles.bkSection} py-20 md:py-[6.5rem] bg-[var(--sm-bg)] ${v}`}>
      <div className={styles.sectionInner}>
        <div className={styles.bkInner}>
          {/* Content */}
          <div className={styles.bkContent}>
            <h2 className="font-[family-name:var(--sm-serif)] font-light text-[clamp(2rem,3.8vw,3rem)] leading-[1.12] text-[var(--sm-light)] tracking-[-0.01em] [text-wrap:balance]">
              {s.headingMain} {s.headingItalic && <em className="italic">{s.headingItalic}</em>}
            </h2>
            {s.subtitle && (
              <p className="text-[0.95rem] leading-[1.8] text-[var(--sm-light)]/70 mt-5 max-w-[32rem]">{s.subtitle}</p>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-8">
              <a
                href={s.zaloUrl ?? '#'}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center justify-center gap-3 text-[0.9rem] font-semibold tracking-[0.04em] text-[var(--sm-light)] bg-[var(--sm-accent)] rounded-full no-underline px-8 py-4 transition-[filter] duration-200 hover:brightness-105 active:translate-y-px"
              >
                <ChatIcon /> Nhắn Zalo giữ chỗ
              </a>
              {s.phone && (
                <a
                  href={`tel:${s.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-2.5 text-[0.9rem] font-medium text-[var(--sm-light)]/90 no-underline rounded-full px-6 py-4 border border-[var(--sm-light)]/[0.28] transition-colors duration-200 hover:border-[var(--sm-light)]/60 active:translate-y-px"
                >
                  <PhoneIcon /> {s.phone}
                </a>
              )}
            </div>

            <ul className="flex flex-col gap-3 mt-9 list-none p-0">
              {PERKS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[0.875rem] text-[var(--sm-light)]/80">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--sm-accent)]/20 text-[var(--sm-accent)] shrink-0"><CheckIcon /></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Media */}
          <div className={styles.bkMedia}>
            <Image
              src="https://images.unsplash.com/photo-1552395166-ab340cc8935b?w=1400&q=85&fit=crop&auto=format"
              alt={`Không gian thư giãn tại ${businessName}`}
              fill
              sizes="(max-width: 767px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
