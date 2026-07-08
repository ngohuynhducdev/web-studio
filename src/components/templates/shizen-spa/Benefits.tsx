'use client';

import { useInView } from '@/hooks/useInView';
import styles from './ShizenSpa.module.css';

const BENEFITS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 17V10M10 10C10 6 7 3 3 4c1 3.5 4 6 7 6zM10 10C10 6 13 3 17 4c-1 3.5-4 6-7 6z" />
      </svg>
    ),
    title: 'Kỹ thuật Nhật Bản',
    desc: 'Phương pháp trị liệu truyền thống Nhật Bản, nghiên cứu chuyên biệt và chọn lọc kỹ lưỡng cho từng liệu trình.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10" cy="7.5" r="3.5" />
        <path d="M7 12l-2 6 5-1.8 5 1.8-2-6" />
      </svg>
    ),
    title: 'Chuyên viên chứng chỉ',
    desc: 'Đội ngũ đào tạo chuyên sâu, chứng nhận quốc tế — tận tâm với sức khỏe và trải nghiệm của từng khách.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 2C10 2 4 9 4 13a6 6 0 0 0 12 0c0-4-6-11-6-11z" />
        <path d="M10 16.5V13" strokeOpacity="0.5" />
      </svg>
    ),
    title: 'Nguyên liệu tinh khiết',
    desc: 'Tinh dầu và sản phẩm chọn lọc nhập từ Nhật Bản — thuần thiên nhiên, an toàn cho mọi loại da.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <circle cx="10" cy="10" r="8" />
        <circle cx="10" cy="10" r="4" />
        <circle cx="10" cy="10" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Không gian tĩnh lặng',
    desc: 'Môi trường thiết kế tỉ mỉ để tâm trí bạn trở về bình yên — ngay từ khoảnh khắc bước vào.',
  },
] as const;

export default function Benefits() {
  const [ref, inView] = useInView<HTMLElement>();
  const v = inView ? styles.inView : '';

  return (
    <section ref={ref} className={`${styles.benefits} py-[4.5rem] md:py-[6.25rem] bg-[var(--sz-cream)] ${v}`}>
      <div className={styles.sectionInner}>
        {/* Section head — left aligned, side note on the right */}
        <div className={`${styles.sectionHead} pb-12 md:pb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10`}>
          <div>
            <p className={styles.eyebrow}>Tại sao chọn chúng tôi</p>
            <h2 className={styles.h2}>
              Khác biệt trong <em>từng chi tiết</em>
            </h2>
          </div>
          <p className="hidden md:block text-[0.875rem] leading-[1.75] text-[var(--sz-muted)] max-w-[17rem] pb-2">
            Bốn nguyên tắc chúng tôi giữ từ ngày đầu — và không thỏa hiệp.
          </p>
        </div>

        {/* Open editorial grid — 2 staggered columns, hairline + large index number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-20 md:gap-y-6">
          {BENEFITS.map((b, i) => (
            <div
              key={i}
              className={`${styles.benefitItem} group flex flex-col gap-4 border-t border-[var(--sz-ink)]/15 pt-7 md:pb-10 ${i % 2 === 1 ? 'md:mt-16' : ''}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-[family-name:var(--sz-serif)] font-light italic text-[2.8rem] leading-none text-[var(--sz-earth)]/40 transition-colors duration-300 group-hover:text-[var(--sz-earth)]/75" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="text-[var(--sz-earth)] w-[1.375rem] h-[1.375rem] opacity-85 shrink-0">{b.icon}</div>
              </div>
              <h3 className="font-[family-name:var(--sz-serif)] font-normal text-[1.4rem] text-[var(--sz-ink)] tracking-[-0.01em] leading-[1.25]">{b.title}</h3>
              <p className="text-[0.9rem] leading-[1.78] text-[var(--sz-muted)] max-w-[26rem]">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
