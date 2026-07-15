import type { PricingSection } from '@/types';
import { ArrowIcon } from './icons';
import styles from './ThaiSpa.module.css';

interface Props { data?: PricingSection }

export default function Pricing({ data }: Props = {}) {
  const heading  = [data?.headingMain, data?.headingItalic].filter(Boolean).join(' ') || 'Treatments For Every Need';
  const packages = data?.packages ?? [];

  return (
    <section className="bg-[var(--ts-sand)] py-24" id="pricing">
      <div className="max-w-container-narrow mx-auto px-[26px]">
        <h2 className={styles.sectionTitle}>{heading}</h2>
        <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {packages.map((p) => (
            <article
              key={p._key}
              className={`bg-[var(--ts-ivory)] rounded-[28px] p-7 shadow-[var(--ts-shadow-2)] flex flex-col relative ${p.featured ? styles.pricingFeatured : ''}`}
            >
              {p.featured && <span className={styles.pricingBadge}>Most Popular</span>}
              <div className="text-center text-[13px] text-[var(--ts-bark)] tracking-[0.04em] mb-1">{p.name}</div>
              <div className="text-center font-['Playfair_Display',serif] font-medium text-[32px] leading-none text-[var(--ts-espresso)] mb-4">{p.price}</div>
              <div className="h-px bg-[var(--ts-border)] mb-4" />
              <ul className="list-none p-0 m-0 mb-5 flex flex-col gap-2 flex-1">
                {(p.includes ?? []).map((label, i) => (
                  <li key={i} className="flex items-center gap-[10px] text-[14px] text-[var(--ts-bark)]">
                    <span className="w-[10px] h-[10px] rounded-full border border-[var(--ts-border-strong)] shrink-0" />
                    {label}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center pt-1">
                <a href="#offer" className={styles.btn}>
                  <span className={styles.btnDot}><ArrowIcon /></span>
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
