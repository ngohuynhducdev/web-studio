import styles from './UrbanBrew.module.css';
import type { BookingSection } from '@/types';
import { MapPinIcon, PhoneIcon, ClockIcon, ArrowRightIcon } from './icons';

export default function Location({ s, displayName }: { s: BookingSection; displayName: string }) {
  return (
    <section className="bg-[var(--cf-bg)] py-[72px] md:py-[100px]" id="location">
      <div className="mx-auto max-w-container px-5 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">

          {/* Map placeholder */}
          <div
            className={`${styles.locationMap} relative flex aspect-[4/3] flex-col items-center justify-center gap-[14px] overflow-hidden rounded-[22px] border border-[var(--cf-border)] bg-[var(--cf-surface)]`}
            aria-label="Bản đồ vị trí"
          >
            <span className="relative z-[1] text-[64px] leading-none">🗺️</span>
            <div className="relative z-[1] flex items-center gap-[6px] rounded-full bg-[var(--cf-accent)] px-[14px] py-[7px] text-[12px] font-extrabold text-[var(--cf-bg)]">
              <MapPinIcon /><span>{displayName}</span>
            </div>
          </div>

          {/* Info column */}
          <div className="flex flex-col gap-6">
            {s.eyebrow && <p className={styles.eyebrow}>{s.eyebrow}</p>}
            <h2 className={styles.locationH2}>{s.headingMain ?? 'Ghé tụi mình nào!'}</h2>

            {/* Details */}
            <div className="flex flex-col gap-3">
              {s.address && (
                <div className="flex items-center gap-3 text-[15px] font-medium text-[var(--cf-muted)]">
                  <span className="text-[var(--cf-accent)]"><MapPinIcon /></span><span>{s.address}</span>
                </div>
              )}
              {s.phone && (
                <div className="flex items-center gap-3 text-[15px] font-medium text-[var(--cf-muted)]">
                  <span className="text-[var(--cf-accent)]"><PhoneIcon /></span><span>{s.phone}</span>
                </div>
              )}
              {s.hours && s.hours.length > 0 && (
                <div className="flex items-center gap-3 text-[15px] font-medium text-[var(--cf-muted)]">
                  <span className="text-[var(--cf-accent)]"><ClockIcon /></span><span>Mở cửa 7 ngày / tuần</span>
                </div>
              )}
            </div>

            {/* Hours table */}
            {s.hours && s.hours.length > 0 && (
              <div className="flex flex-col overflow-hidden rounded-[14px] border border-[var(--cf-border)]">
                {s.hours.map((h) => (
                  <div
                    key={h._key}
                    className="flex items-center justify-between border-b border-[var(--cf-border)] px-[18px] py-3 transition-colors duration-150 last:border-b-0 hover:bg-[var(--cf-elevated)]"
                  >
                    <span className="text-[13px] font-semibold text-[var(--cf-muted)]">{h.day}</span>
                    <span className="text-[13px] font-bold text-[var(--cf-text)]">{h.time}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Zalo CTA */}
            <a
              href={s.zaloUrl ?? '#'}
              target={s.zaloUrl ? '_blank' : undefined}
              rel={s.zaloUrl ? 'noopener noreferrer' : undefined}
              className="mt-1 inline-flex items-center gap-2 border-2 border-[var(--cf-accent)] bg-[var(--cf-accent)] px-6 py-[14px] text-[14px] font-extrabold tracking-[0.04em] uppercase text-[var(--cf-bg)] no-underline transition-colors duration-200 hover:bg-transparent hover:text-[var(--cf-accent)]"
            >
              💬 Nhắn Zalo đặt bàn <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
