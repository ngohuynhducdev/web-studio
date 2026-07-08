'use client';

// Team section — merged with About (story + quote + therapists).

import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import styles from './ZenWellness.module.css';
import type { TeamSection, AboutSection } from '@/types';

export default function Team({
  s,
  about,
}: {
  s: TeamSection;
  about?: AboutSection;
}) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <section ref={ref} id="team" className={`bg-white py-20 md:py-28 ${inView ? styles.inView : ''}`}>
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Story + quote (from old About) */}
        {about && (
          <div className={`${styles.reveal} mb-16 md:mb-24 grid grid-cols-1 gap-10 md:grid-cols-[1.05fr_1fr] md:gap-16 md:items-end`}>
            <div className="flex flex-col items-start gap-5">
              {about.eyebrow && <span className={styles.chip}>{about.eyebrow}</span>}
              <h2 className={`${styles.h2} m-0 text-[var(--zw-ink)]`}>
                {(about.headingMain ?? '').split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}
              </h2>
              {(about.paragraphs ?? []).map((p, i) => (
                <p key={i} className="m-0 max-w-[52ch] text-[0.92rem] leading-[1.78] text-[var(--zw-mut)]">{p}</p>
              ))}
            </div>

            {about.quote && (
              <figure className="m-0 rounded-3xl border border-[var(--zw-line)] bg-[var(--zw-bg)] p-8 md:p-10">
                <blockquote className="m-0">
                  <p className="m-0 font-[family-name:var(--zw-font-display)] text-[1.15rem] md:text-[1.35rem] font-medium leading-[1.5] tracking-[-0.01em] text-[var(--zw-ink)]">
                    &ldquo;{about.quote}&rdquo;
                  </p>
                  {about.quoteAuthor && (
                    <footer className="mt-5 text-[0.72rem] font-semibold tracking-[0.1em] uppercase text-[var(--zw-accent)]">
                      — {about.quoteAuthor}
                    </footer>
                  )}
                </blockquote>
              </figure>
            )}
          </div>
        )}

        {/* Team head */}
        <div className={`${styles.reveal} mb-10 md:mb-14 flex flex-col items-start gap-5`}>
          {s.eyebrow && <span className={styles.chip}>{s.eyebrow}</span>}
          <h3 className={`${styles.h2} m-0 text-[var(--zw-ink)]`}>
            {s.headingMain} {s.headingItalic && <span className={styles.marker}>{s.headingItalic}</span>}
          </h3>
        </div>

        {/* Therapist cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {(s.members ?? []).map((member, i) => (
            <article
              key={member._key}
              style={{ '--zw-delay': `${i * 100}ms` } as React.CSSProperties}
              className={`${styles.reveal} ${styles.cardHover} flex flex-col gap-4 rounded-3xl border border-[var(--zw-line)] bg-[var(--zw-bg)] p-3`}
            >
              {/* Portrait */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--zw-tint)]">
                {member.imageUrl && (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                )}
                <span className={`${styles.num} absolute bottom-3 left-3 inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[0.7rem] font-bold text-[var(--zw-ink)]`}>
                  {member.exp}
                </span>
              </div>

              <div className="flex flex-col gap-3 px-4 pb-4">
                <div>
                  <h4 className="m-0 font-[family-name:var(--zw-font-display)] text-[1.15rem] font-medium tracking-[-0.02em] text-[var(--zw-ink)]">
                    {member.name}
                  </h4>
                  <p className="m-0 mt-0.5 text-[0.8rem] text-[var(--zw-mut)]">{member.role}</p>
                </div>

                {/* Specialty chips */}
                {member.specialty && (
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialty.split('·').map((sp, j) => (
                      <span key={j} className="rounded-full bg-[var(--zw-tint)] px-2.5 py-1 text-[0.7rem] font-semibold text-[var(--zw-accent)]">
                        {sp.trim()}
                      </span>
                    ))}
                  </div>
                )}

                {member.cert && (
                  <p className="m-0 text-[0.8rem] leading-[1.6] text-[var(--zw-mut)]">{member.cert}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
