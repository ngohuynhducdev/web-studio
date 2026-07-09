import Image from 'next/image';
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
    <section className="bg-[var(--ts-ivory)] pt-10 pb-16 md:pt-16 md:pb-24" id="experience">
      <div className="max-w-container mx-auto px-[26px] grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className={styles.heroTitle}>
            {headingMain} <em>{headingItalic}</em>
          </h1>
          <p className="text-[var(--ts-bark)] text-[16px] leading-[1.65] max-w-[440px] m-0 mb-8">{subtitle}</p>
          <a href="#offer" className={styles.btn}>
            <span className={styles.btnDot}><ArrowIcon /></span>
            {ctaLabel}
          </a>
        </div>
        <div className="aspect-[1.1/1] rounded-[32px] overflow-hidden shadow-[var(--ts-shadow-2)] relative bg-[var(--ts-espresso)]">
          <Image
            src="https://images.unsplash.com/photo-1737352777897-e22953991a32?w=1400&q=85&fit=crop&auto=format"
            alt="Relaxation space"
            fill
            className="object-cover object-[60%_center]"
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
