import styles from './SweetCorner.module.css';
import type { FeaturesSection } from '@/types';

export default function Policy({ s }: { s: FeaturesSection }) {
  return (
    <section className="py-[72px] md:py-[100px] bg-[#fff5f8]" id="policy">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Section head */}
        <div className="text-center max-w-[600px] mx-auto mb-14 flex flex-col gap-[14px]">
          {s.eyebrow && <p className={styles.eyebrow}>{s.eyebrow}</p>}
          <h2 className={styles.h2}>{s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}</h2>
        </div>

        {/* Policy grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(s.items ?? []).map((p) => (
            <div
              key={p._key}
              className="bg-white border border-[rgba(232,96,140,0.1)] rounded-[22px] px-[22px] py-7 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(232,96,140,0.25)] hover:shadow-[0_12px_36px_rgba(232,96,140,0.1)]"
            >
              <div className="text-[38px] leading-none">{p.emoji}</div>
              <h3 className="text-[16px] font-extrabold text-[#2a1220] m-0">{p.title}</h3>
              {p.desc && <p className="text-[14px] leading-[1.65] text-[#7d4560] m-0">{p.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
