'use client';

import { useInView } from '@/hooks/useInView';
import styles from './ShizenSpa.module.css';

const STEPS = [
  {
    num: '01',
    title: 'Choose a Treatment',
    desc: 'Browse our service list and choose the treatment that fits your needs — relaxation, recovery, or intensive care.',
    note: 'See pricing above',
  },
  {
    num: '02',
    title: 'Book via Zalo',
    desc: 'Message us on Zalo, and we\'ll confirm your appointment within 30 minutes. No deposit required for your first visit.',
    note: 'Response within 30 minutes',
  },
  {
    num: '03',
    title: 'Arrive and Relax',
    desc: 'Arrive on time, and our therapist will welcome and guide you. Turn off your phone — this time is yours alone.',
    note: 'Arrive 10 minutes early',
  },
] as const;

export default function Process() {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';

  return (
    <section ref={ref} className={`${styles.process} py-[4.5rem] md:py-[6.25rem] bg-[var(--sz-off)] border-t border-[var(--sz-border)] ${v}`}>
      <div className={styles.sectionInner}>
        {/* Section head */}
        <div className={`${styles.sectionHead} pb-[3.75rem]`}>
          <p className={styles.eyebrow}>Booking Process</p>
          <h2 className={styles.h2}>
            Easy in <em>3 steps</em>
          </h2>
        </div>

        {/* Open steps — hairline rule with the number sitting on it, no boxed cards */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className={`${styles.processStep} relative flex flex-col gap-4 border-t border-[var(--sz-ink)]/15 pt-8`}
            >
              {/* Number interrupting the hairline */}
              <span
                className="absolute -top-[1.15rem] left-0 bg-[var(--sz-off)] pr-5 font-[family-name:var(--sz-serif)] font-light italic text-[1.8rem] leading-none text-[var(--sz-earth)] select-none"
                aria-hidden="true"
              >
                {step.num}
              </span>
              <h3 className="font-[family-name:var(--sz-serif)] font-normal text-[1.2rem] text-[var(--sz-ink)] tracking-[-0.01em] leading-[1.25]">
                {step.title}
              </h3>
              <p className="text-[0.875rem] leading-[1.75] text-[var(--sz-muted)] flex-1">{step.desc}</p>
              <span className="text-[0.72rem] tracking-[0.1em] uppercase text-[var(--sz-earth)]">{step.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
