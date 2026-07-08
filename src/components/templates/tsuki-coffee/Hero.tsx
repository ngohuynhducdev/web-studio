'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { m, useScroll, useTransform } from 'motion/react';
import styles from './TsukiCoffee.module.css';
import type { HeroSection } from '@/types';
import { ArrowRightIcon } from './icons';

// Tokyo night street backdrop + dark warm coffee close-up (verified Unsplash URLs).
const BACKDROP =
  'https://images.unsplash.com/photo-1617870314635-fc819547ec11?w=2000&q=85&fit=crop&auto=format';
const COFFEE =
  'https://images.unsplash.com/photo-1613158556069-e7d8eae76214?w=800&q=90&fit=crop&auto=format';

// Pre-computed particle positions to avoid hydration mismatch.
const PARTICLES = [
  { left: '8%',  top: '15%', delay: '0s',   duration: '14s' },
  { left: '22%', top: '40%', delay: '2s',   duration: '16s' },
  { left: '35%', top: '70%', delay: '5s',   duration: '13s' },
  { left: '48%', top: '25%', delay: '1s',   duration: '15s' },
  { left: '62%', top: '55%', delay: '3s',   duration: '14s' },
  { left: '75%', top: '20%', delay: '6s',   duration: '17s' },
  { left: '88%', top: '60%', delay: '4s',   duration: '13s' },
  { left: '15%', top: '85%', delay: '7s',   duration: '15s' },
  { left: '50%', top: '90%', delay: '2.5s', duration: '16s' },
  { left: '80%', top: '80%', delay: '5.5s', duration: '14s' },
];

export default function Hero({ s, businessName }: { s: HeroSection; businessName: string }) {
  const ref = useRef<HTMLElement>(null);

  // Parallax: backdrop translates slower than content as user scrolls past hero.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-dvh items-center overflow-hidden bg-[var(--tc-bg)]"
    >
      {/* Layer 1 — Tokyo backdrop with parallax */}
      <m.div
        aria-hidden="true"
        className="absolute inset-0 -z-30"
        style={{ y: bgY }}
      >
        <Image
          src={BACKDROP}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,9,8,0.4)_0%,rgba(10,9,8,0.85)_60%,rgba(10,9,8,1)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,9,8,0.6)] via-transparent to-[var(--tc-bg)]" />
      </m.div>

      {/* Layer 2 — Glow orbs (warm amber light pools) */}
      <div
        aria-hidden="true"
        className={`${styles.glow} -z-20`}
        style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(212,165,116,0.18) 0%, transparent 70%)',
          top: '-100px', right: '-100px',
        }}
      />
      <div
        aria-hidden="true"
        className={`${styles.glow} -z-20`}
        style={{
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(240,198,116,0.12) 0%, transparent 70%)',
          bottom: '-100px', left: '-50px',
          animationDelay: '2s',
        }}
      />

      {/* Layer 3 — Floating dust particles */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <m.div
        className="relative z-[1] mx-auto grid w-full max-w-container grid-cols-1 items-center gap-12 px-5 pt-[120px] pb-24 md:px-10 md:pt-[160px] md:pb-32 lg:grid-cols-[1.2fr_1fr] lg:gap-16"
        style={{ y: contentY, opacity: contentOpacity }}
      >

        {/* LEFT — copy */}
        <div className="flex flex-col gap-7">
          {s.eyebrow && <span className={styles.eyebrow}>{s.eyebrow}</span>}

          <h1 className={styles.heroTitle}>
            {s.headingMain ?? businessName}
            {s.headingItalic && <><br /><em>{s.headingItalic}</em></>}
          </h1>

          {/* Japanese kanji decoration */}
          <div className={styles.kanjiDivider}>
            <span className={styles.jp}>月 · 珈琲</span>
          </div>

          {s.subtitle && (
            <p className="m-0 max-w-[46ch] text-[17px] leading-[1.75] text-[var(--tc-cream-soft)]">
              {s.subtitle}
            </p>
          )}

          {/* CTAs */}
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <a href="#booking" className={styles.btnPrimary}>
              {s.ctaPrimary ?? 'Đặt chỗ ngay'}
              <ArrowRightIcon />
            </a>
            <a href="#menu" className={styles.btnGhost}>
              {s.ctaSecondary ?? 'Khám phá menu'}
            </a>
          </div>
        </div>

        {/* RIGHT — floating coffee cup with smoke */}
        <div className="relative mx-auto w-full max-w-[480px] lg:mx-0">
          <div className={`${styles.drift} relative aspect-square`}>
            {/* Soft gold glow behind cup */}
            <div
              aria-hidden="true"
              className={`${styles.glow} absolute inset-0`}
              style={{
                background: 'radial-gradient(circle, rgba(240,198,116,0.35) 0%, transparent 60%)',
              }}
            />

            {/* Cup photo with rounded frame */}
            <div className={`${styles.breathe} relative h-full w-full overflow-hidden rounded-full border border-[var(--tc-line)]`}>
              <Image
                src={COFFEE}
                alt={`${businessName} — specialty coffee`}
                fill
                sizes="(min-width: 1024px) 480px, 80vw"
                className="object-cover"
                priority
              />
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(240,198,116,0.18)_0%,transparent_60%)]" />
            </div>

            {/* Smoke wisps rising from cup */}
            <span
              aria-hidden="true"
              className={styles.smokeWisp}
              style={{ left: '42%', top: '20%' }}
            />
            <span
              aria-hidden="true"
              className={styles.smokeWispAlt}
              style={{ left: '52%', top: '18%' }}
            />
            <span
              aria-hidden="true"
              className={styles.smokeWisp}
              style={{ left: '48%', top: '22%', animationDelay: '3s' }}
            />
          </div>
        </div>
      </m.div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className={`${styles.drift} absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3`}
      >
        <span className="text-[10px] font-medium tracking-[0.32em] uppercase text-[var(--tc-muted)]">scroll</span>
        <span className="block h-12 w-px bg-gradient-to-b from-[var(--tc-gold)] to-transparent" />
      </div>
    </section>
  );
}
