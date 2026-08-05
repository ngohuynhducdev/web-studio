import type { HeroSection } from '@/types';
import { ArrowIcon } from './icons';
import styles from './ThaiSpa.module.css';

interface Props { data?: HeroSection }

export default function Hero({ data }: Props = {}) {
  const headingMain   = data?.headingMain   ?? 'Immerse Yourself In';
  const headingItalic = data?.headingItalic ?? 'Thai-Style Relaxation';
  const subtitle      = data?.subtitle      ?? 'Distinctive treatments — a genuine journey into the culture and art of Thai therapy.';
  const ctaLabel      = data?.ctaPrimary    ?? 'Begin Your Journey';

  return (
    <section className="bg-[var(--ts-ivory)] pt-14 pb-16 md:pt-20 md:pb-24" id="experience">
      <div className="max-w-[720px] mx-auto px-[26px] text-center flex flex-col items-center">
        <span className={styles.heroEyebrow}>Traditional Thai Massage &amp; Wellness</span>
        <h1 className={`${styles.heroTitle} text-center`}>
          {headingMain} <em>{headingItalic}</em>
        </h1>
        <p className="text-[var(--ts-bark)] text-[16px] leading-[1.65] max-w-[440px] m-0 mb-9">{subtitle}</p>
        <a href="#offer" className={styles.btn}>
          <span className={styles.btnDot}><ArrowIcon /></span>
          {ctaLabel}
        </a>
      </div>

    </section>
  );
}
