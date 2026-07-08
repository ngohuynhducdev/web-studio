import styles from './LuaNail.module.css';
import type { BookingSection } from '@/types';
import { ZaloIcon, PhoneIcon, MapPinIcon, ClockIcon, ArrowRightIcon } from './icons';

export default function Booking({ s }: { s: BookingSection }) {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[var(--ln-ink)] py-20 text-[var(--ln-bg)] md:py-28"
    >
      {/* Dot grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--ln-yellow) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-[1] mx-auto grid max-w-container grid-cols-1 gap-12 px-5 md:px-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">

        {/* LEFT — pitch + CTA */}
        <div className="flex flex-col gap-7">
          {s.eyebrow && (
            <span className={`${styles.eyebrow} bg-[var(--ln-yellow)]`}>{s.eyebrow}</span>
          )}
          <h2 className={`${styles.h2} text-[var(--ln-bg)]`}>
            {s.headingMain}
            {s.headingItalic && <> <em className="bg-[var(--ln-pink)] text-[var(--ln-bg)]">{s.headingItalic}</em></>}
          </h2>
          {s.subtitle && (
            <p className="m-0 max-w-[50ch] text-[16px] leading-[1.6] text-[var(--ln-bg)]/75">
              {s.subtitle}
            </p>
          )}

          {/* Mega Zalo CTA */}
          {s.zaloUrl && (
            <a
              href={s.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btnSticker} mt-2 w-fit !bg-[var(--ln-pink)] !text-[var(--ln-bg)] !text-[16px] !py-5 !px-8`}
              style={{ boxShadow: '6px 6px 0 var(--ln-yellow)' }}
            >
              <ZaloIcon />
              Đặt qua Zalo ngay
              <ArrowRightIcon />
            </a>
          )}

          <p className={`${styles.script} mt-1 text-[22px] text-[var(--ln-yellow)]`}>
            ⚡ trả lời trong 5 phút
          </p>
        </div>

        {/* RIGHT — info card */}
        <aside className="rotate-[1.5deg] self-start border-[4px] border-[var(--ln-yellow)] bg-[var(--ln-bg)] p-7 text-[var(--ln-ink)] shadow-[8px_8px_0_var(--ln-pink)] md:p-8">

          {s.address && (
            <div className="flex items-start gap-4 border-b-2 border-dashed border-[var(--ln-ink)] pb-5">
              <span className="mt-1 text-[var(--ln-pink)]"><MapPinIcon /></span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ln-ink)]/60">Địa chỉ</div>
                <div className={`${styles.serif} text-[20px] font-extrabold uppercase leading-tight`}>{s.address}</div>
              </div>
            </div>
          )}

          {s.phone && (
            <div className="flex items-start gap-4 border-b-2 border-dashed border-[var(--ln-ink)] py-5">
              <span className="mt-1 text-[var(--ln-pink)]"><PhoneIcon /></span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ln-ink)]/60">Hotline</div>
                <a href={`tel:${s.phone.replace(/\s/g, '')}`} className={`${styles.serif} text-[20px] font-extrabold no-underline hover:text-[var(--ln-pink)]`}>
                  {s.phone}
                </a>
              </div>
            </div>
          )}

          {s.hours && s.hours.length > 0 && (
            <div className="flex items-start gap-4 pt-5">
              <span className="mt-1 text-[var(--ln-pink)]"><ClockIcon /></span>
              <div className="flex-1">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--ln-ink)]/60">Giờ mở cửa</div>
                <ul className="m-0 flex list-none flex-col gap-1 p-0">
                  {s.hours.map((h) => (
                    <li key={h._key} className="flex items-baseline justify-between gap-4 text-[13px]">
                      <span className="font-medium">{h.day}</span>
                      <span className={`${styles.serif} text-[15px] font-extrabold`}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
