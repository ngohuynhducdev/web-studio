import styles from './LuaNail.module.css';
import { NAV_LINKS } from './navLinks';
import { InstagramIcon, ZaloIcon } from './icons';

export default function Footer({ displayName, zaloUrl }: { displayName: string; zaloUrl?: string }) {
  return (
    <footer className="border-t-[4px] border-[var(--ln-ink)] bg-[var(--ln-yellow)] py-14 md:py-20">
      <div className="mx-auto max-w-container px-5 md:px-10">

        {/* Top — brand + nav */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className={`${styles.serif} -rotate-2 inline-block w-fit bg-[var(--ln-ink)] px-4 py-2 text-[32px] font-extrabold uppercase text-[var(--ln-yellow)] shadow-[4px_4px_0_var(--ln-pink)]`}>
              {displayName}
            </span>
            <p className={`${styles.script} m-0 max-w-[28ch] text-[20px] leading-tight text-[var(--ln-ink)]`}>
              moves like silk, hits like neon ⚡
            </p>
            <div className="mt-2 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center border-[2.5px] border-[var(--ln-ink)] bg-[var(--ln-pink)] text-[var(--ln-bg)] transition-transform hover:-rotate-6">
                <InstagramIcon />
              </a>
              {zaloUrl && (
                <a
                  href={zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zalo"
                  className="flex h-10 w-10 items-center justify-center border-[2.5px] border-[var(--ln-ink)] bg-[var(--ln-bg)] text-[var(--ln-ink)] transition-transform hover:rotate-6"
                >
                  <ZaloIcon />
                </a>
              )}
            </div>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ln-ink)]/65">Lướt nhanh</span>
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`${styles.serif} text-[18px] font-extrabold uppercase text-[var(--ln-ink)] no-underline hover:text-[var(--ln-pink)]`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Promise */}
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ln-ink)]/65">Cam kết</span>
            <ul className="m-0 flex list-none flex-col gap-2 p-0 text-[14px] leading-[1.55] text-[var(--ln-ink)]">
              <li>✦ Dụng cụ tiệt trùng từng khách</li>
              <li>✦ Gel chính hãng — no fake</li>
              <li>✦ Hài lòng mới tính tiền</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t-[2.5px] border-dashed border-[var(--ln-ink)] pt-6 text-[12px] font-bold text-[var(--ln-ink)] md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {displayName}. ALL RIGHTS RESERVED.</span>
          <span className={`${styles.script} text-[18px] -rotate-1`}>made with neon love ⚡</span>
        </div>
      </div>
    </footer>
  );
}
