import styles from './SweetCorner.module.css';
import type { BookingSection } from '@/types';
import { HeartIcon, PhoneIcon, ClockIcon, MapPinIcon } from './icons';

export default function CTA({ s }: { s: BookingSection }) {
  return (
    <section className={`py-[72px] md:py-[100px] bg-[linear-gradient(135deg,#ffe4ee_0%,#ffd6e8_50%,#ffbfd8_100%)] ${styles.cta}`} id="order">
      <div className="max-w-container mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-9 lg:gap-[60px] items-center relative z-[1]">
        {/* Left */}
        <div className="flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.6)] text-[#c94d79] border border-[rgba(232,96,140,0.25)] text-[13px] font-bold px-[14px] py-[6px] rounded-full w-fit backdrop-blur-[8px]">
            <HeartIcon />{s.eyebrow ?? 'Sẵn sàng rồi nào!'}
          </div>
          <h2 className="font-[family-name:var(--font-pacifico)] text-[clamp(26px,4vw,42px)] leading-[1.3] text-[#2a1220] m-0 [&_em]:text-[#c94d79] [&_em]:not-italic">
            {s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}
          </h2>
          {s.subtitle && <p className="text-[16px] leading-[1.65] text-[#7d4560] m-0 max-w-[480px]">{s.subtitle}</p>}
        </div>

        {/* Right */}
        <div className="flex flex-col gap-[18px] min-w-0 lg:min-w-[280px]">
          <a
            href={s.zaloUrl ?? '#'}
            target={s.zaloUrl ? '_blank' : undefined}
            rel={s.zaloUrl ? 'noopener noreferrer' : undefined}
            className={`block bg-[var(--sc-accent)] text-white font-[family-name:var(--font-nunito)] text-[16px] font-extrabold no-underline text-center px-8 py-[18px] rounded-full shadow-[0_8px_24px_rgba(232,96,140,0.4)] ${styles.ctaZalo}`}
          >
            💬 Nhắn Zalo đặt bánh
          </a>
          <div className="flex flex-col gap-[10px] bg-[rgba(255,255,255,0.55)] border border-[rgba(232,96,140,0.15)] rounded-[16px] px-5 py-[18px] backdrop-blur-[8px]">
            {s.phone && (
              <div className="flex items-center gap-[10px] text-[14px] font-semibold text-[#7d4560]">
                <span className="text-[var(--sc-accent)] shrink-0"><PhoneIcon /></span>{s.phone}
              </div>
            )}
            {s.hours && s.hours.length > 0 && (
              <div className="flex items-center gap-[10px] text-[14px] font-semibold text-[#7d4560]">
                <span className="text-[var(--sc-accent)] shrink-0"><ClockIcon /></span>{s.hours.map(h => `${h.day} · ${h.time}`).join(' | ')}
              </div>
            )}
            {s.address && (
              <div className="flex items-center gap-[10px] text-[14px] font-semibold text-[#7d4560]">
                <span className="text-[var(--sc-accent)] shrink-0"><MapPinIcon /></span>{s.address}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
