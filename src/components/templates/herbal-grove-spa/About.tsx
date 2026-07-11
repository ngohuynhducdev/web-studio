'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './HerbalGroveSpa.module.css';
import type { AboutSection } from '@/types';
import { ArrowUpRightIcon, PhoneIcon, CalendarIcon, LotusIcon } from './icons';

// Right rectangular photo + left round photo (verified spa images).
const STUDIO_IMAGE =
  'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1000&q=85&fit=crop&auto=format';
const ROUND_IMAGE =
  'https://images.unsplash.com/photo-1559185590-879c66a55254?w=400&q=85&fit=crop&auto=format';

// Round wax-seal badge with circular text (LUXURY WELLNESS LOUNGE equivalent).
function StudioSeal() {
  return (
    <span className={styles.studioSeal} aria-hidden="true">
      <svg viewBox="0 0 120 120" width="100%" height="100%">
        <defs>
          <path id="bt-seal-arc" d="M60 60 m -44 0 a 44 44 0 1 1 88 0 a 44 44 0 1 1 -88 0" />
        </defs>
        <text className={styles.studioSealText}>
          <textPath href="#bt-seal-arc" startOffset="0%">
            HERBAL GROVE SPA · HERBAL FOOT SPA · HERBAL GROVE SPA · HERBAL FOOT SPA ·
          </textPath>
        </text>
      </svg>
      <LotusIcon className={styles.studioSealMark} />
    </span>
  );
}

export default function About({ s }: { s: AboutSection }) {
  const [sectionRef, inView] = useInView<HTMLElement>();

  const [intro, ...rest] = s.paragraphs ?? [];

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`bg-[var(--bt-dark)] py-24 md:py-32 ${inView ? styles.inView : ''}`}
    >
      <div className="mx-auto max-w-container px-5 md:px-10">

        {/* Head — centered */}
        <div className={`${styles.revealElem} ${styles.rd1} mx-auto mb-14 flex max-w-[720px] flex-col items-center text-center md:mb-16`}>
          <h2 className={`${styles.h2} ${styles.h2OnDark} ${styles.h2OnDarkPlain}`}>
            {s.headingMain}
            {s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2 md:gap-12 lg:gap-20">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            {intro && (
              <p className={`${styles.revealElem} ${styles.rd2} m-0 text-[16px] font-semibold leading-[1.7] text-[var(--bt-light)]`}>
                {intro}
              </p>
            )}
            {rest.length > 0 && (
              <div className={`${styles.revealElem} ${styles.rd3} flex flex-col gap-3`}>
                {rest.map((p, i) => (
                  <p key={i} className="m-0 text-[14.5px] leading-[1.8] text-[var(--bt-light)]">{p}</p>
                ))}
                <a href="#gallery" className={styles.studioLink}>
                  View the space <ArrowUpRightIcon />
                </a>
              </div>
            )}

            {/* CTA row */}
            <div className={`${styles.revealElem} ${styles.rd3} mt-1 flex flex-wrap items-center gap-7`}>
              <a href="#services" className={styles.btnOutlineRectLight}>Explore Services</a>
              <span className="flex items-center gap-3 text-[var(--bt-light)]">
                <PhoneIcon />
                <span className="flex flex-col leading-tight">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--bt-light)]">Book Now</span>
                  <a href="tel:0901234567" className={`${styles.serif} text-[18px] text-[var(--bt-light)] no-underline transition-colors hover:text-[var(--bt-amber-light)]`}>
                    0901 234 567
                  </a>
                </span>
              </span>
            </div>

            {/* Arch photo + experience stat */}
            <div className={`${styles.revealElem} ${styles.rd4} mt-6 flex items-center gap-7`}>
              <span className="relative h-[160px] w-[150px] flex-shrink-0 overflow-hidden rounded-t-full rounded-b-[16px] bg-[var(--bt-dark-raised)]">
                <Image src={ROUND_IMAGE} alt="Treatment at Herbal Grove Spa" fill sizes="150px" className="object-cover" />
              </span>
              <div className="flex flex-col">
                <CalendarIcon className="h-7 w-7 text-[var(--bt-light)]" />
                <span className={`${styles.serif} mt-3 text-[46px] leading-none text-[var(--bt-light)]`}>7+</span>
                <span className="mt-2 text-[13px] leading-snug text-[var(--bt-light)]">
                  Years of experience<br />in herbal care &amp; spa
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — rectangular photo + seal */}
          <div className={`${styles.revealElem} ${styles.rd2} relative`}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-[var(--bt-dark-raised)]">
              <Image
                src={STUDIO_IMAGE}
                alt="Herbal Grove Spa treatment space"
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className={`${styles.archedPhotoImg} object-cover`}
              />
            </div>
            <StudioSeal />
            <div className="mt-5 flex justify-end">
              <a href="#gallery" className={styles.studioLink}>
                Explore the space <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
