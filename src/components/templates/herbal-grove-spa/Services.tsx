'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './HerbalGroveSpa.module.css';
import type { ServicesSection } from '@/types';
import { PlumeriaIcon, BotanicalSprigIcon } from './icons';

export default function Services({ s }: { s: ServicesSection }) {
  const [sectionRef, inView] = useInView<HTMLElement>();

  if (!s.services || s.services.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`relative overflow-hidden bg-[var(--bt-bg)] py-24 md:py-32 ${inView ? styles.inView : ''}`}
    >
      {/* Faint botanical line-art in the margins */}
      <BotanicalSprigIcon aria-hidden="true" className="pointer-events-none absolute left-[-12px] top-1/3 hidden h-48 w-32 -rotate-12 text-[var(--bt-amber)] opacity-[0.12] lg:block" />
      <BotanicalSprigIcon aria-hidden="true" className="pointer-events-none absolute right-[-12px] top-1/2 hidden h-48 w-32 rotate-12 text-[var(--bt-amber)] opacity-[0.12] lg:block" />

      <div className="relative mx-auto max-w-container px-5 md:px-10">

        {/* Head — centered */}
        <div className={`${styles.revealElem} ${styles.rd1} mx-auto mb-12 flex max-w-[640px] flex-col items-center text-center md:mb-16`}>
          <PlumeriaIcon className="mb-6 h-12 w-12" />
          <h2 className={`${styles.h2} ${styles.h2Plain}`}>
            {s.headingMain}
            {s.headingItalic && <> <em>{s.headingItalic}</em></>}
          </h2>
        </div>

        {/* Editorial rows */}
        <div className={`${styles.revealElem} ${styles.rd2}`}>
          {s.services.map((sv) => (
            <article key={sv._key} className={styles.velRow}>
              <div>
                <h3 className={styles.velRowName}>{sv.name}</h3>
                {sv.desc && <p className={styles.velRowDesc}>{sv.desc}</p>}
              </div>
              <div className={styles.velMeta}>
                {(sv.duration || sv.price) && (
                  <span className={styles.velPill2}>
                    {sv.duration && <span>{sv.duration}</span>}
                    {sv.price && <span className={styles.velPill2Price}>{sv.price}</span>}
                  </span>
                )}
                {sv.imageUrl && (
                  <span className={styles.velOval}>
                    <Image
                      src={sv.imageUrl}
                      alt={sv.name}
                      fill
                      sizes="180px"
                      className={`${styles.velThumbImg} object-cover`}
                    />
                  </span>
                )}
                <a href="#booking" className={styles.velCircle} aria-label={`Book ${sv.name}`}>
                  <span>Explore</span>
                  <span>Service</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
