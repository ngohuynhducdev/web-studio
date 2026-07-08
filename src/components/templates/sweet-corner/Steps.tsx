import styles from './SweetCorner.module.css';
import type { StepsSection } from '@/types';

const STEP_EMOJIS = ['💬', '🎨', '💳', '🎁'];

export default function Steps({ s }: { s: StepsSection }) {
  return (
    <section className="py-[72px] md:py-[100px] bg-[linear-gradient(180deg,#fff5f8_0%,#fff0f5_100%)]" id="steps">
      <div className="max-w-container mx-auto px-5 md:px-10">
        {/* Section head */}
        <div className="text-center max-w-[600px] mx-auto mb-14 flex flex-col gap-[14px]">
          {s.eyebrow && <p className={styles.eyebrow}>{s.eyebrow}</p>}
          <h2 className={styles.h2}>{s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}</h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {(s.steps ?? []).map((step, i) => (
            <div key={step._key ?? i} className="bg-white border border-[rgba(232,96,140,0.12)] rounded-[24px] px-[22px] py-7 flex flex-col items-center gap-3 relative text-center">
              <div className="flex flex-col items-center gap-[10px]">
                <span className="text-[40px] leading-none">{STEP_EMOJIS[i] ?? '✦'}</span>
                <span className="font-[family-name:var(--font-pacifico)] text-[12px] text-[var(--sc-accent)] bg-[rgba(232,96,140,0.08)] border border-[rgba(232,96,140,0.15)] px-[10px] py-[3px] rounded-full leading-[1.6]">
                  {step.num ?? String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-pacifico)] text-[16px] text-[#2a1220] m-0 leading-[1.3]">{step.title}</h3>
              <p className="text-[14px] leading-[1.6] text-[#7d4560] m-0">{step.desc}</p>
              {/* Arrow — hidden on mobile, hidden on last step */}
              {i < (s.steps?.length ?? 0) - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-[-14px] -translate-y-1/2 text-[#f5afc8] text-[20px] z-[1] pointer-events-none" aria-hidden="true">→</div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-11 text-[15px] text-[#7d4560] bg-[rgba(232,96,140,0.06)] border border-[rgba(232,96,140,0.12)] px-7 py-[14px] rounded-full w-fit mx-auto">
          💌 Thường xác nhận đơn trong <strong className="text-[var(--sc-accent)]">30 phút</strong> — không cần chờ lâu!
        </p>
      </div>
    </section>
  );
}
