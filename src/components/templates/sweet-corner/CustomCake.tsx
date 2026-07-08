import styles from './SweetCorner.module.css';
import type { CalloutSection } from '@/types';

const CUSTOM_STEPS = [
  { emoji: '📸', title: 'Gửi hình mẫu',       desc: 'Gửi hình bánh bạn thích qua Zalo — bất kỳ phong cách nào!' },
  { emoji: '💬', title: 'Tư vấn & báo giá',   desc: 'Tụi mình tư vấn và gửi báo giá chi tiết ngay trong ngày.' },
  { emoji: '✅', title: 'Xác nhận & đặt cọc',  desc: 'Đồng ý thiết kế → đặt cọc 50% → tụi mình bắt tay vào làm!' },
  { emoji: '🎁', title: 'Nhận bánh đẹp xỉu',   desc: 'Đến lấy hoặc ship tận nơi — đảm bảo y hình mẫu bạn gửi!' },
];

export default function CustomCake({ s }: { s: CalloutSection }) {
  return (
    <section className="py-[72px] md:py-[100px] bg-[linear-gradient(160deg,#fff5f8_0%,#ffe4ee_100%)]" id="custom">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-start">
          {/* Left */}
          <div className="flex flex-col gap-[22px]">
            <div className="text-[56px] leading-none">🎨</div>
            {s.eyebrow && <p className={`${styles.eyebrow} !justify-start`}>{s.eyebrow}</p>}
            <h2 className={styles.h2}>
              {s.headingMain} {s.headingItalic && <em>{s.headingItalic}</em>}
            </h2>
            {s.body && (
              <p className="text-[16px] leading-[1.75] text-[#5d3048] m-0 [&_strong]:text-[var(--sc-accent)] [&_strong]:font-bold">{s.body}</p>
            )}
            {s.bullets && s.bullets.length > 0 && (
              <div className="flex flex-col gap-2">
                {s.bullets.map((b, i) => (
                  <span key={i} className="text-[14px] font-bold text-[#7d4560] leading-[1.5]">✅ {b}</span>
                ))}
              </div>
            )}
            <a href={s.ctaHref ?? '#order'} className={styles.btnPrimary}>{s.ctaLabel ?? '🎨 Đặt bánh custom ngay'}</a>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col gap-[14px]">
            {CUSTOM_STEPS.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 bg-[rgba(255,255,255,0.75)] border border-[rgba(232,96,140,0.12)] rounded-[20px] px-[22px] py-5 backdrop-blur-[8px] transition-all duration-200 hover:translate-x-[6px] hover:border-[rgba(232,96,140,0.3)] hover:shadow-[0_8px_28px_rgba(232,96,140,0.1)]"
              >
                <div className="text-[32px] shrink-0 leading-none pt-[2px]">{step.emoji}</div>
                <div className="flex flex-col gap-1">
                  <div className="text-[11px] font-extrabold text-[var(--sc-accent)] tracking-[0.08em] uppercase m-0">Bước 0{i + 1}</div>
                  <h4 className="text-[15px] font-extrabold text-[#2a1220] m-0">{step.title}</h4>
                  <p className="text-[13px] leading-[1.6] text-[#7d4560] m-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
