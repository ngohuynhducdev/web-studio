import type { ReviewsSection } from '@/types';
import styles from './ThaiSpa.module.css';

// Avatar gradients assigned by position — Thai Spa design detail.
const GRADIENTS = [
  'linear-gradient(135deg,#cba98a,#3a2618)',
  'linear-gradient(135deg,#a48562,#251612)',
  'linear-gradient(135deg,#8e6a4a,#1e0f0b)',
  'linear-gradient(135deg,#bb9774,#3d2418)',
];

interface Props { data?: ReviewsSection }

export default function Testimonials({ data }: Props = {}) {
  const heading = [data?.headingMain, data?.headingItalic].filter(Boolean).join(' ') || 'Khách Hàng Nói Gì';
  const reviews = data?.reviews ?? [];

  return (
    <section className="bg-[var(--ts-ivory)] pb-24" id="reviews">
      <div className="max-w-container mx-auto px-[26px]">
        <h2 className={styles.sectionTitle}>{heading}</h2>
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {reviews.map((t, i) => (
            <article key={t._key} className="bg-[var(--ts-ivory-soft)] rounded-[24px] p-5 shadow-[var(--ts-shadow-1)]">
              <div className="flex items-center gap-[10px] mb-3">
                <div
                  className="w-9 h-9 rounded-full shrink-0"
                  style={{ background: GRADIENTS[i % GRADIENTS.length] }}
                  aria-hidden="true"
                />
                <span className="font-semibold text-[13px] text-[var(--ts-espresso)]">{t.name}</span>
              </div>
              <p className="text-[13px] leading-[1.55] text-[var(--ts-bark)] m-0">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
