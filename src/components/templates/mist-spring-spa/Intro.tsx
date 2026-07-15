'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './MistSpringSpa.module.css';
import { CheckIcon } from './icons';

const POINTS = [
  'Fully trained therapists with over 10 years of experience',
  'Organic oils & herbs, carefully sourced batch by batch',
  'Private rooms and a relaxing herbal steam room',
  'Treatments personalized to every guest\'s needs',
];

export default function Intro({ businessName }: { businessName: string }) {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';

  return (
    <section
      ref={ref}
      id="about"
      className={`${styles.intro} py-20 md:py-[7.5rem] bg-[var(--sm-bg2)] border-t border-[var(--sm-line)] ${v}`}
    >
      <div className={`${styles.sectionInner} grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-16`}>
        {/* Layered image cluster */}
        <div className={styles.introMedia}>
          <div className={styles.introImg1}>
            <Image
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1100&q=85&fit=crop&auto=format"
              alt={`Treatment space at ${businessName}`}
              fill
              sizes="(max-width: 1023px) 100vw, 40rem"
              className="object-cover"
            />
          </div>
          <div className={styles.introImg2}>
            <Image
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=700&q=85&fit=crop&auto=format"
              alt="Oils and herbs used in our treatments"
              fill
              sizes="(max-width: 1023px) 60vw, 18rem"
              className="object-cover"
            />
          </div>
        </div>

        {/* Copy */}
        <div className={styles.introCopy}>
          <h2 className="font-[family-name:var(--sm-serif)] font-light text-[clamp(2rem,4vw,3.1rem)] leading-[1.14] tracking-[-0.01em] text-[var(--sm-ivory)] [text-wrap:balance]">
            A quiet refuge for <em className="italic">body and mind</em>
          </h2>
          <p className="text-[0.95rem] leading-[1.85] text-[var(--sm-muted)] mt-5 max-w-[32rem]">
            {businessName} is a pause in the middle of the city, where time-honored rituals
            meet a warm, modern, and tranquil space. Every treatment is designed around
            your breath and your own relaxation.
          </p>

          <ul className="flex flex-col gap-3.5 mt-8 list-none p-0">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[0.9rem] leading-[1.6] text-[var(--sm-ivory)]/85">
                <span className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-[var(--sm-accent-14)] text-[var(--sm-accent)] shrink-0">
                  <CheckIcon />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <a
            href="#services"
            className="inline-flex items-center gap-2.5 mt-9 text-[0.85rem] font-semibold tracking-[0.04em] text-[var(--sm-light)] bg-[var(--sm-accent-btn)] rounded-full no-underline px-7 py-3.5 transition-[filter] duration-200 hover:brightness-105 active:translate-y-px"
          >
            Explore Treatments <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
