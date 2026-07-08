import styles from './UrbanBrew.module.css';
import { ArrowRightIcon } from './icons';

const EVENTS = [
  { emoji: '🎨', date: 'Hàng tháng', day: 'Thứ 7',   title: 'Latte Art Workshop',  desc: 'Học vẽ latte art cùng barista Minh — từ trái tim đến hoa tulip. Mang về tách của chính tay bạn.', slots: 'Còn chỗ',    price: '150.000đ' },
  { emoji: '🎸', date: 'Mỗi tuần',   day: 'Thứ 7',   title: 'Acoustic Night',      desc: 'Tối thứ 7 tại Urban Brew — nhạc live, cà phê ngon, người tốt. Không cần đặt chỗ, cứ đến.',          slots: 'Free entry', price: 'Miễn phí' },
  { emoji: '☕', date: 'Hàng tháng', day: 'Chủ nhật', title: 'Coffee Cupping',      desc: 'Thử và cảm nhận 5 dòng specialty từ 3 vùng trồng khác nhau — mở rộng khẩu vị cùng tụi mình.',      slots: 'Còn chỗ',    price: '200.000đ' },
];

export default function Events() {
  return (
    <section className="bg-[var(--cf-surface)] py-[72px] md:py-[100px]" id="events">
      <div className="mx-auto max-w-container px-5 md:px-10">
        {/* Section header */}
        <div className="mb-14 flex flex-col gap-[14px]">
          <p className={styles.eyebrow}>Sự kiện tháng này</p>
          <h2 className={styles.h2}>Không chỉ cà phê — <em>còn là trải nghiệm.</em></h2>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {EVENTS.map((ev, i) => (
            <article
              key={i}
              className={`${styles.eventCard} relative flex flex-col gap-[14px] overflow-hidden rounded-[22px] border border-[var(--cf-border)] bg-[var(--cf-bg)] p-7 transition-all duration-250 hover:-translate-y-1 hover:border-[var(--cf-border-accent)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.3)]`}
            >
              {/* Header: date badge + emoji */}
              <div className="relative z-[1] flex items-start justify-between">
                <div className="flex min-w-[56px] flex-col rounded-[10px] bg-[var(--cf-accent)] px-3 py-2 text-center text-[var(--cf-bg)]">
                  <span className="text-[18px] font-black leading-none tracking-[-0.02em]">{ev.date}</span>
                  <span className="mt-[2px] text-[10px] font-bold tracking-[0.05em] uppercase opacity-70">{ev.day}</span>
                </div>
                <span className="text-[36px] leading-none">{ev.emoji}</span>
              </div>

              <h3 className="relative z-[1] m-0 text-[20px] font-extrabold tracking-[-0.02em] text-[var(--cf-text)]">{ev.title}</h3>
              <p className="relative z-[1] m-0 flex-1 text-[14px] leading-[1.65] text-[var(--cf-muted)]">{ev.desc}</p>

              {/* Meta */}
              <div className="relative z-[1] flex items-center justify-between border-t border-[var(--cf-border)] pt-[14px]">
                <span className="text-[12px] font-semibold tracking-[0.04em] text-[var(--cf-muted)]">{ev.slots}</span>
                <span className="text-[14px] font-extrabold tracking-[-0.01em] text-[var(--cf-accent)]">{ev.price}</span>
              </div>

              <a
                href="#location"
                className={`${styles.eventCta} relative z-[1] flex w-fit items-center gap-[6px] text-[13px] font-bold tracking-[0.02em] text-[var(--cf-text)] no-underline transition-colors duration-200`}
              >
                Đăng ký <ArrowRightIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
