import styles from './SweetCorner.module.css';
import type { AboutSection } from '@/types';

const ABOUT_VALUES = [
  { emoji: '🌿', text: 'Nguyên liệu sạch, an toàn' },
  { emoji: '🎨', text: '100% custom theo ý bạn' },
  { emoji: '❤️', text: 'Tâm huyết từng chi tiết nhỏ' },
  { emoji: '⚡', text: 'Xác nhận đơn trong 30 phút' },
];

export default function About({ s }: { s: AboutSection }) {
  return (
    <section className="py-[72px] md:py-[100px] bg-white" id="about">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[80px] items-center">
          {/* Visual column */}
          <div className="relative flex items-center justify-center min-h-0 lg:min-h-[380px]" aria-hidden="true">
            <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full bg-[linear-gradient(135deg,#ffe4ee_0%,#ffbfd8_100%)] flex items-center justify-center shadow-[0_20px_60px_rgba(232,96,140,0.2)] relative z-[1]">
              <span className="text-[72px] md:text-[100px] leading-none">🎂</span>
            </div>
            <div className="absolute flex items-center gap-[6px] bg-white border border-[rgba(232,96,140,0.15)] rounded-full px-4 py-2 text-[13px] font-bold text-[#c94d79] shadow-[0_4px_16px_rgba(232,96,140,0.12)] whitespace-nowrap z-[2] top-[10px] md:top-[30px] left-0 md:left-[10px]">
              <span>🌸</span> Làm tươi mỗi ngày
            </div>
            <div className="absolute flex items-center gap-[6px] bg-white border border-[rgba(232,96,140,0.15)] rounded-full px-4 py-2 text-[13px] font-bold text-[#c94d79] shadow-[0_4px_16px_rgba(232,96,140,0.12)] whitespace-nowrap z-[2] bottom-[10px] md:bottom-[30px] right-0 md:right-[10px]">
              <span>❤️</span> Từ năm 2020
            </div>
          </div>

          {/* Content column */}
          <div className="flex flex-col gap-5">
            {s.eyebrow && <p className={`${styles.eyebrow} !justify-start`}>{s.eyebrow}</p>}
            <h2 className={styles.h2}>
              {s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}
            </h2>
            {(s.paragraphs ?? []).map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.75] text-[#5d3048] m-0 [&_strong]:text-[var(--sc-accent)] [&_strong]:font-bold [&_em]:text-[#c94d79] [&_em]:not-italic [&_em]:font-semibold">{p}</p>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
              {ABOUT_VALUES.map((v, i) => (
                <div key={i} className="flex items-center gap-[10px] bg-[#fff5f8] border border-[rgba(232,96,140,0.12)] rounded-[14px] px-[14px] py-3 transition-all duration-200 hover:border-[rgba(232,96,140,0.3)] hover:shadow-[0_4px_12px_rgba(232,96,140,0.08)]">
                  <span className="text-[20px] shrink-0">{v.emoji}</span>
                  <span className="text-[13px] font-bold text-[#2a1220] leading-[1.4]">{v.text}</span>
                </div>
              ))}
            </div>
            <a href="#order" className={`${styles.btnPrimary} w-fit`}>💬 Nói chuyện với tụi mình</a>
          </div>
        </div>
      </div>
    </section>
  );
}
