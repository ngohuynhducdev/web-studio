import Image from 'next/image';
import styles from './TsukiCoffee.module.css';
import type { BookingSection } from '@/types';
import Reveal from '@/components/ui/motion/Reveal';
import { ArrowRightIcon, ClockIcon, MapPinIcon, PhoneIcon, ZaloIcon } from './icons';

const BOOKING_BG =
  'https://images.unsplash.com/photo-1564759254519-75290ce0af79?w=2000&q=85&fit=crop&auto=format';

export default function Booking({ s }: { s: BookingSection }) {
  return (
    <section
      id="booking"
      className="relative isolate overflow-hidden bg-[var(--tc-bg)] py-32 md:py-40"
    >
      {/* Atmospheric backdrop */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 opacity-[0.35]">
        <Image src={BOOKING_BG} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--tc-bg)] via-[var(--tc-bg-soft)] to-[var(--tc-bg)]" />

      {/* Glow */}
      <div
        aria-hidden="true"
        className={`${styles.glow} -z-10`}
        style={{
          width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(240,198,116,0.12) 0%, transparent 70%)',
          bottom: '-200px', left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      <div className="relative z-[1] mx-auto grid max-w-container grid-cols-1 gap-14 px-5 md:px-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">

        {/* LEFT — pitch */}
        <Reveal className="flex flex-col gap-7">
          {s.eyebrow && <span className={styles.eyebrow}>{s.eyebrow}</span>}
          <h2 className={styles.h2}>
            {s.headingMain}
            {s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>
          {s.subtitle && (
            <p className={`${styles.lede} text-[16px] md:text-[17px]`}>{s.subtitle}</p>
          )}

          {s.zaloUrl && (
            <a
              href={s.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnPrimary} mt-3 w-fit`}
            >
              <ZaloIcon />
              Đặt chỗ qua Zalo
              <ArrowRightIcon />
            </a>
          )}
        </Reveal>

        {/* RIGHT — info card (glassmorphism) */}
        <Reveal delay={0.15}>
          <aside className={`${styles.glass} flex flex-col gap-6 rounded-[2px] p-8 md:p-10`}>

            {s.address && (
              <div className="flex items-start gap-4 border-b border-[var(--tc-line)] pb-6">
                <span className="mt-1 text-[var(--tc-gold)]"><MapPinIcon /></span>
                <div>
                  <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-[var(--tc-muted)]">Địa chỉ</div>
                  <div className={`${styles.serif} mt-1 text-[20px] leading-tight text-[var(--tc-cream)]`}>
                    {s.address}
                  </div>
                </div>
              </div>
            )}

            {s.phone && (
              <div className="flex items-start gap-4 border-b border-[var(--tc-line)] pb-6">
                <span className="mt-1 text-[var(--tc-gold)]"><PhoneIcon /></span>
                <div>
                  <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-[var(--tc-muted)]">Hotline</div>
                  <a href={`tel:${s.phone.replace(/\s/g, '')}`} className={`${styles.serif} mt-1 inline-block text-[20px] text-[var(--tc-cream)] no-underline transition-colors hover:text-[var(--tc-gold)]`}>
                    {s.phone}
                  </a>
                </div>
              </div>
            )}

            {s.hours && s.hours.length > 0 && (
              <div className="flex items-start gap-4">
                <span className="mt-1 text-[var(--tc-gold)]"><ClockIcon /></span>
                <div className="flex-1">
                  <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-[var(--tc-muted)]">Giờ mở cửa</div>
                  <ul className="m-0 mt-2 flex list-none flex-col gap-[6px] p-0">
                    {s.hours.map((h) => (
                      <li key={h._key} className="flex items-baseline justify-between gap-4 text-[14px]">
                        <span className="text-[var(--tc-cream-soft)]">{h.day}</span>
                        <span className={`${styles.serif} text-[16px] text-[var(--tc-cream)]`}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
