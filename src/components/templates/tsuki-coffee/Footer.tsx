import styles from './TsukiCoffee.module.css';
import { NAV_LINKS } from './navLinks';
import { InstagramIcon, MoonIcon, ZaloIcon } from './icons';

export default function Footer({ displayName, zaloUrl }: { displayName: string; zaloUrl?: string }) {
  return (
    <footer className="border-t border-[var(--tc-line)] bg-[var(--tc-bg)] py-16 md:py-20">
      <div className="mx-auto max-w-container px-5 md:px-10">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr] md:gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className={`${styles.serif} flex items-center gap-3 text-[32px] font-light leading-none text-[var(--tc-cream)]`}>
              <MoonIcon className="h-6 w-6 text-[var(--tc-gold)]" />
              {displayName}
            </span>
            <p className="m-0 max-w-[34ch] text-[13px] leading-[1.75] text-[var(--tc-cream-soft)]">
              Specialty café Nhật Bản về đêm — không gian dành cho người yêu cà phê và sự tĩnh lặng.
            </p>
            <div className="mt-2 flex items-center gap-3 text-[var(--tc-muted)]">
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-[var(--tc-gold)]"><InstagramIcon /></a>
              {zaloUrl && (
                <a href={zaloUrl} target="_blank" rel="noopener noreferrer" aria-label="Zalo" className="transition-colors hover:text-[var(--tc-gold)]">
                  <ZaloIcon />
                </a>
              )}
            </div>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-medium tracking-[0.28em] uppercase text-[var(--tc-muted)]">Khám phá</span>
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13px] text-[var(--tc-cream-soft)] no-underline transition-colors hover:text-[var(--tc-gold)]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Promise */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-medium tracking-[0.28em] uppercase text-[var(--tc-muted)]">Cam kết</span>
            <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[13px] leading-[1.55] text-[var(--tc-cream-soft)]">
              <li>Hạt specialty grade rang ngày</li>
              <li>Không gian yên tĩnh — phù hợp work</li>
              <li>Đặt chỗ trước — không phải chờ</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[var(--tc-line)] pt-8 text-[12px] text-[var(--tc-muted)] md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {displayName}. Tất cả quyền được bảo lưu.</span>
          <span className={`${styles.serif} italic`}>moonlit nights, slow coffee.</span>
        </div>
      </div>
    </footer>
  );
}
