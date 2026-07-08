import styles from './SweetCorner.module.css';
import type { ServicesSection } from '@/types';

export default function Menu({ s }: { s: ServicesSection }) {
  return (
    <section className="py-[72px] md:py-[100px] bg-[#fff5f8]" id="menu">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Section head */}
        <div className="text-center max-w-[600px] mx-auto mb-14 flex flex-col gap-[14px]">
          {s.eyebrow && <p className={styles.eyebrow}>{s.eyebrow}</p>}
          <h2 className={styles.h2}>{s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}</h2>
          {s.subtitle && <p className="text-[16px] leading-[1.65] text-[#7d4560] m-0">{s.subtitle}</p>}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(s.services ?? []).map((cake, i) => (
            <article key={cake._key ?? i} className={`bg-white border border-[rgba(232,96,140,0.12)] rounded-[24px] p-7 flex flex-col gap-3 ${styles.menuCard}`}>
              {cake.tag && (
                <span className={`absolute top-4 right-4 text-[10px] font-extrabold tracking-[0.05em] uppercase px-[10px] py-1 rounded-full ${cake.featured ? 'bg-[var(--sc-accent)] text-white' : 'bg-[#fce4ee] text-[#c94d79] border border-[rgba(232,96,140,0.2)]'}`}>{cake.tag}</span>
              )}
              <div className={`w-[70px] h-[70px] bg-[#fff0f5] rounded-[18px] flex items-center justify-center shrink-0 ${styles.menuEmojiWrap}`}>
                <span className="text-[34px] leading-none">{cake.emoji ?? '🎂'}</span>
              </div>
              {cake.size && <p className="text-[10px] font-extrabold tracking-[0.15em] uppercase text-[var(--sc-accent)] m-0">{cake.size}</p>}
              <h3 className="font-[family-name:var(--font-pacifico)] text-[17px] text-[#2a1220] m-0 leading-[1.35]">{cake.name}</h3>
              {cake.desc && <p className="text-[14px] leading-[1.6] text-[#7d4560] m-0 flex-1">{cake.desc}</p>}
              <div className="flex items-center justify-between gap-[10px] mt-[6px] pt-[14px] border-t border-[rgba(232,96,140,0.1)]">
                {cake.price && (
                  <span className="text-[13px] text-[#7d4560]">
                    Từ <strong className="text-[14px] font-extrabold text-[var(--sc-accent)]">{cake.price}</strong>
                  </span>
                )}
                <a
                  href="#order"
                  className="text-[12px] font-extrabold text-[var(--sc-accent)] no-underline px-[14px] py-[6px] rounded-full bg-[rgba(232,96,140,0.08)] border border-[rgba(232,96,140,0.2)] transition-all duration-200 whitespace-nowrap shrink-0 hover:bg-[var(--sc-accent)] hover:text-white"
                >
                  Đặt ngay
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
