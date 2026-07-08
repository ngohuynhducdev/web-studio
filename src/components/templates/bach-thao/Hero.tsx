import Image from 'next/image';
import styles from './BachThao.module.css';
import type { HeroSection } from '@/types';
import { ChevronLeftIcon, ChevronRightIcon, SparkleIcon } from './icons';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1920&q=85&fit=crop&auto=format';

// Hero info bar — kept in code (identity, not CMS).
const INFO = [
  { label: 'Vị trí', lines: ['128 Cao Thắng, Quận 3', 'TP. Hồ Chí Minh'] },
  { label: 'Giờ mở cửa', lines: ['T2–T6 · 10:00 – 22:00', 'T7–CN · 09:00 – 22:30'] },
  { label: 'Liên hệ', lines: ['0901 234 567', 'bachthao.spa@gmail.com'] },
];

export default function Hero({ s, businessName }: { s: HeroSection; businessName: string }) {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[var(--bt-dark)]"
    >
      {/* Full-bleed background photo */}
      <Image
        src={HERO_IMAGE}
        alt={`${businessName} — spa thảo mộc truyền thống`}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Dark forest-green scrim */}
      <div aria-hidden="true" className={styles.heroScrim} />

      {/* Decorative slider arrows */}
      <button type="button" aria-hidden="true" tabIndex={-1} className={`${styles.heroArrow} left-6`}>
        <ChevronLeftIcon />
      </button>
      <button type="button" aria-hidden="true" tabIndex={-1} className={`${styles.heroArrow} right-6`}>
        <ChevronRightIcon />
      </button>

      {/* Content — centered */}
      <div className="relative z-[1] w-full px-5 pb-28 pt-32 text-center md:px-10 md:pb-32 md:pt-40">
        <div className="mx-auto flex max-w-[780px] flex-col items-center gap-6">

          {/* Heading */}
          <h1 className={`${styles.heroTitle} ${styles.heroAnim} ${styles.hd2}`}>
            {s.headingMain ?? businessName}
            {s.headingItalic && <><br /><em>{s.headingItalic}</em></>}
          </h1>

          {/* Subtitle */}
          {s.subtitle && (
            <p className={`${styles.heroAnim} ${styles.hd3} m-0 max-w-[52ch] text-[16px] leading-[1.8] text-[var(--bt-light)]/85`}>
              {s.subtitle}
            </p>
          )}

          {/* CTA — single outline button + offer line */}
          <div className={`${styles.heroAnim} ${styles.hd4} mt-2 flex flex-col items-center gap-4`}>
            <a href="#services" className={styles.btnOutlineRectLight}>
              {s.ctaPrimary ?? 'Xem dịch vụ'}
            </a>
            <span className="flex items-center gap-2 text-[12px] tracking-[0.04em] text-[var(--bt-light)]/85">
              <SparkleIcon className="h-3.5 w-3.5 text-[var(--bt-amber-light)]" />
              Ưu đãi 20% cho khách lần đầu
            </span>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className={styles.heroInfoBar}>
        <div className="mx-auto max-w-container px-5 md:px-10">
          <div className={styles.heroInfoGrid}>
            {INFO.map((it) => (
              <div key={it.label} className={styles.heroInfoCell}>
                <span className={styles.heroInfoLabel}>{it.label}</span>
                <span className={styles.heroInfoValue}>
                  {it.lines.map((ln, i) => (
                    <span key={i} className="block">{ln}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
