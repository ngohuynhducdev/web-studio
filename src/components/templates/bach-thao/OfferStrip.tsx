import Image from 'next/image';
import styles from './BachThao.module.css';
import { ArrowRightIcon, StoneStackIcon } from './icons';

// Velura offer band — contained (not full-bleed): dark-green block over a faint
// spa photo + marquee, sitting on the cream page with side margins. Code-only.
const OFFER_BG =
  'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1600&q=80&fit=crop&auto=format';
const MARQUEE = Array.from({ length: 6 }, (_, i) => i);

export default function OfferStrip() {
  return (
    <section aria-label="Offer" className="bg-[var(--bt-bg)] py-12 md:py-16">
      <div className="mx-auto max-w-container px-5 md:px-10">
        <div className={styles.offerFrame}>
        <div className={styles.offerBand}>
          <Image src={OFFER_BG} alt="" fill sizes="(min-width: 1200px) 1200px, 100vw" className="object-cover" />
          <div className={styles.offerScrim} aria-hidden="true" />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-8 px-6 py-11 md:flex-row md:justify-between md:gap-6 md:px-12 md:py-14">

            {/* Left — icon + heading */}
            <div className="flex items-center gap-5 text-center md:text-left">
              <StoneStackIcon className="hidden h-14 w-14 flex-shrink-0 text-[var(--bt-light)] opacity-90 sm:block" />
              <h2 className={`${styles.serif} m-0 text-[28px] leading-[1.15] text-[var(--bt-light)] md:text-[34px]`}>
                Special Offer<br />on every treatment
              </h2>
            </div>

            {/* Center — offer circle */}
            <span className={styles.offerCircle}>
              <span className="text-[26px] font-medium leading-none">20%</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">Off</span>
            </span>

            {/* Right — CTA */}
            <a href="#pricing" className={styles.btnOutlineRectLight}>
              View Offer Packages <ArrowRightIcon />
            </a>
          </div>

          {/* Marquee — inside the band */}
          <div className={`relative ${styles.marquee}`} aria-hidden="true">
            <div className={styles.marqueeTrack}>
              {MARQUEE.map((i) => (
                <span key={`a${i}`} className={styles.marqueeItem}>Offer ending soon ·</span>
              ))}
              {MARQUEE.map((i) => (
                <span key={`b${i}`} className={styles.marqueeItem}>Offer ending soon ·</span>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
