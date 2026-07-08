import styles from './UrbanBrew.module.css';
import type { HeroSection } from '@/types';
import { ArrowRightIcon } from './icons';

export default function Hero({ s }: { s: HeroSection }) {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-[var(--cf-bg)] pt-[100px] pb-16 md:pb-20">
      {/* Background glow orbs */}
      <div className={styles.heroGlow1} aria-hidden="true" />
      <div className={styles.heroGlow2} aria-hidden="true" />

      {/* Content grid */}
      <div className="relative z-[1] mx-auto grid w-full max-w-container grid-cols-1 items-center gap-[60px] px-5 md:grid-cols-2 md:px-10">

        {/* Left column */}
        <div className="flex flex-col gap-7">
          {s.eyebrow && (
            <p className="m-0 flex items-center gap-[10px] text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--cf-muted)]">
              <span className="inline-block h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[var(--cf-accent)]" aria-hidden="true" />
              {s.eyebrow}
            </p>
          )}

          <h1 className="m-0 flex flex-col gap-0">
            {(s.headingMain ?? '').split('\n').map((line, i) => (
              <span key={i} className={styles.heroLineBold}>{line}</span>
            ))}
            {s.headingItalic && <span className={styles.heroLineItalic}>{s.headingItalic}</span>}
            <span className={`${styles.heroLineBold} text-[var(--cf-accent)]`}>NGÀY.</span>
          </h1>

          {s.subtitle && (
            <p className="m-0 max-w-[420px] text-[17px] leading-[1.65] text-[var(--cf-muted)]">{s.subtitle}</p>
          )}

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-[14px]">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 border-2 border-[var(--cf-accent)] bg-[var(--cf-accent)] px-6 py-[14px] text-[14px] font-extrabold tracking-[0.04em] uppercase text-[var(--cf-bg)] no-underline transition-colors duration-200 hover:bg-transparent hover:text-[var(--cf-accent)]"
            >
              {s.ctaPrimary ?? 'Xem menu'}<ArrowRightIcon />
            </a>
            <a
              href="#events"
              className="inline-flex items-center gap-2 border-b border-b-transparent border-l-2 border-l-transparent pl-[10px] py-[14px] text-[14px] font-semibold text-[var(--cf-muted)] no-underline transition-colors duration-200 hover:text-[var(--cf-text)] hover:border-l-[var(--cf-accent)] hover:border-b-[var(--cf-border)]"
            >
              {s.ctaSecondary ?? 'Sự kiện tháng này →'}
            </a>
          </div>

          {/* Stats */}
          {s.stats && s.stats.length > 0 && (
            <div className="flex flex-wrap items-center gap-5 pt-2 md:gap-7">
              {s.stats.map((stat, i) => (
                <span key={stat._key} style={{ display: 'contents' }}>
                  {i > 0 && <div className="hidden h-9 w-px flex-shrink-0 bg-[var(--cf-border)] md:block" aria-hidden="true" />}
                  <div className="flex flex-col gap-[2px]">
                    <span className="text-[22px] font-black tracking-[-0.03em] leading-none text-[var(--cf-text)]">{stat.num}</span>
                    <span className="text-[11px] font-medium tracking-[0.06em] uppercase text-[var(--cf-muted)]">{stat.label}</span>
                  </div>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right column — decorative visual (hidden on mobile) */}
        <div className="hidden items-center justify-center md:flex" aria-hidden="true">
          <div className="relative flex h-[400px] w-[400px] items-center justify-center">
            {/* Spinning outer ring */}
            <div className={`absolute rounded-full ${styles.heroRingOuter}`} />
            {/* Static inner ring */}
            <div className={`absolute rounded-full ${styles.heroRingInner}`} />
            {/* Coffee cup circle */}
            <div className={styles.heroCup}>
              <span className="text-[72px] leading-none">☕</span>
            </div>
            {/* Floating decorators */}
            <span className={`absolute text-[22px] leading-none select-none right-[12%] top-[10%] text-[var(--cf-accent)] ${styles.float1}`}>✦</span>
            <span className={`absolute text-[22px] leading-none select-none right-[8%] bottom-[18%] ${styles.float2}`}>🫧</span>
            <span className={`absolute text-[22px] leading-none select-none left-[10%] top-[22%] ${styles.float3}`}>🍃</span>
            <span className={`absolute text-[22px] leading-none select-none left-[16%] bottom-[10%] text-[var(--cf-accent)] ${styles.float4}`}>⚡</span>
          </div>
        </div>
      </div>
    </section>
  );
}
