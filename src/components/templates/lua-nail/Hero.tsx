import Image from 'next/image';
import styles from './LuaNail.module.css';
import type { HeroSection } from '@/types';
import { ArrowRightIcon, SparkleIcon, StarIcon } from './icons';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&q=85&fit=crop&auto=format';

export default function Hero({ s, businessName }: { s: HeroSection; businessName: string }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[var(--ln-bg)] pt-[110px] pb-20 md:pt-[140px] md:pb-28"
    >
      {/* Background dotted grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--ln-ink) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Floating decorative stars */}
      <span
        aria-hidden="true"
        className={`${styles.spinBadge} absolute top-[10%] right-[8%] text-[var(--ln-pink)] hidden md:block`}
      >
        <StarIcon filled />
      </span>
      <span
        aria-hidden="true"
        className={`${styles.floatBadge} absolute bottom-[18%] left-[6%] text-[var(--ln-cyan)] hidden md:block`}
      >
        <SparkleIcon className="h-8 w-8" />
      </span>

      <div className="relative z-[1] mx-auto grid w-full max-w-container grid-cols-1 items-center gap-10 px-5 md:px-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">

        {/* LEFT — huge typography */}
        <div className="flex flex-col gap-6 md:gap-8">

          {/* Eyebrow sticker */}
          {s.eyebrow && <span className={styles.eyebrow}>{s.eyebrow}</span>}

          {/* HUGE LỤA */}
          <h1 className={styles.heroTitle}>
            {s.headingMain ?? 'lụa'}
          </h1>

          {/* Italic-style subline written as script */}
          {s.headingItalic && (
            <p className={`${styles.script} m-0 text-[40px] leading-none text-[var(--ln-pink)] md:text-[56px]`}>
              {s.headingItalic}
              <span className="inline-block ml-2 text-[var(--ln-yellow)] -rotate-12 translate-y-[-6px]">!</span>
            </p>
          )}

          {/* Subtitle */}
          {s.subtitle && (
            <p className="m-0 max-w-[46ch] text-[16px] leading-[1.55] text-[var(--ln-ink)] md:text-[18px]">
              {s.subtitle}
            </p>
          )}

          {/* CTAs */}
          <div className="mt-2 flex flex-wrap items-center gap-5">
            <a href="#booking" className={styles.btnSticker}>
              {s.ctaPrimary ?? 'Đặt lịch'}
              <ArrowRightIcon />
            </a>
            <a
              href="#services"
              className={`${styles.script} text-[24px] text-[var(--ln-ink)] underline decoration-[var(--ln-pink)] decoration-[3px] underline-offset-4 hover:decoration-[var(--ln-yellow)]`}
            >
              {s.ctaSecondary ?? 'xem dịch vụ →'}
            </a>
          </div>

          {/* Stats — bold inline */}
          {s.stats && s.stats.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-6 border-t-[3px] border-[var(--ln-ink)] pt-6">
              {s.stats.map((stat) => (
                <div key={stat._key} className="flex items-baseline gap-2">
                  <span className={`${styles.serif} text-[32px] font-extrabold text-[var(--ln-pink)] md:text-[40px]`}>{stat.num}</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--ln-ink)]">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — photo with rotated border + sticker badges */}
        <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
          {/* Photo box */}
          <div className="relative aspect-[4/5] -rotate-3 overflow-hidden border-[5px] border-[var(--ln-ink)] bg-[var(--ln-pink)] shadow-[12px_12px_0_var(--ln-ink)]">
            <Image
              src={HERO_IMAGE}
              alt={`${businessName} — nail studio`}
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Floating yellow circular badge */}
          <div
            aria-hidden="true"
            className={`${styles.floatBadge} absolute -top-6 -left-8 z-10 flex h-28 w-28 items-center justify-center rounded-full border-[4px] border-[var(--ln-ink)] bg-[var(--ln-yellow)] text-center`}
          >
            <span className={`${styles.script} text-[24px] leading-tight text-[var(--ln-ink)]`}>
              new<br/>look!
            </span>
          </div>

          {/* Bottom-right cyan tag */}
          <div
            aria-hidden="true"
            className={`absolute -bottom-4 -right-4 z-10 rotate-[8deg] border-[3px] border-[var(--ln-ink)] bg-[var(--ln-cyan)] px-4 py-2 shadow-[4px_4px_0_var(--ln-ink)]`}
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--ln-ink)]">
              ✦ since &apos;24
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
