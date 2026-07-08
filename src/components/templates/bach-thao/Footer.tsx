import styles from './BachThao.module.css';
import { NAV_LINKS } from './navLinks';
import { FacebookIcon, InstagramIcon, ZaloIcon, PhoneIcon, MapPinIcon, MailIcon, LeafIcon, BotanicalSprigIcon } from './icons';

const SERVICES = [
  'Ngâm chân thảo mộc',
  'Massage cổ chân',
  'Bài lăn đá nóng',
  'Ấm bụng thảo dược',
  'Gói trị liệu trọn buổi',
];

const PHONE = '0901 234 567';
const EMAIL = 'bachthao.spa@gmail.com';
const ADDRESS = '128 Cao Thắng, Quận 3, TP.HCM';

const CONTACTS = [
  { icon: <PhoneIcon />, label: 'Gọi đặt lịch', value: PHONE },
  { icon: <MailIcon />, label: 'Email', value: EMAIL },
  { icon: <MapPinIcon />, label: 'Địa chỉ', value: ADDRESS },
];

export default function Footer({ displayName, zaloUrl }: { displayName: string; zaloUrl?: string }) {
  return (
    <footer className="relative overflow-hidden bg-[var(--bt-dark)] pt-14 md:pt-16">
      {/* Faint botanical backdrop */}
      <BotanicalSprigIcon
        aria-hidden="true"
        className="pointer-events-none absolute right-[12%] top-1/2 hidden h-[420px] w-72 -translate-y-1/2 text-[var(--bt-amber-light)] opacity-[0.07] md:block"
      />

      <div className="relative mx-auto max-w-container px-5 md:px-10">

        {/* Top contact row */}
        <div className="grid grid-cols-1 gap-7 border-b border-[var(--bt-border-dark)] pb-12 sm:grid-cols-3">
          {CONTACTS.map((c) => (
            <div key={c.label} className="flex items-center gap-4">
              <span className="text-[var(--bt-light)]">{c.icon}</span>
              <div>
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--bt-light)]/85">{c.label}</div>
                <div className="mt-1 text-[15px] text-[var(--bt-light)]">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main row */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10">

          {/* Brand + newsletter */}
          <div className="flex flex-col gap-5">
            <span className="flex items-center gap-2.5">
              <LeafIcon className="h-6 w-6 text-[var(--bt-light)]" />
              <span className="flex flex-col leading-none">
                <span className={`${styles.serif} text-[26px] font-medium tracking-[0.04em] text-[var(--bt-light)]`}>{displayName}</span>
                <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.34em] text-[var(--bt-light)]/70">Spa Thảo Mộc</span>
              </span>
            </span>

            <h3 className={`${styles.serif} m-0 mt-2 text-[30px] leading-tight text-[var(--bt-light)]`}>Bản tin ưu đãi</h3>
            <p className="m-0 max-w-[40ch] text-[14px] leading-[1.7] text-[var(--bt-light)]/60">
              Đăng ký nhận ưu đãi & tin mới từ Bách Thảo — thảo mộc tươi mỗi sáng.
            </p>

            <form className={styles.newsletter} aria-label="Đăng ký nhận ưu đãi">
              <input
                type="email"
                placeholder="Email của bạn"
                aria-label="Email"
                className={styles.newsletterInput}
              />
              {/* Demo template: no backend — button is non-submitting to avoid a reload */}
              <button type="button" className={styles.newsletterBtn}>Đăng ký</button>
            </form>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3.5">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--bt-light)]/90">Liên kết</span>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-block py-1 text-[14px] text-[var(--bt-light)]/65 no-underline transition-colors hover:text-[var(--bt-amber-light)]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3.5">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--bt-light)]/90">Dịch vụ</span>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[14px] leading-[1.5] text-[var(--bt-light)]/65">
              {SERVICES.map((sv) => <li key={sv}>{sv}</li>)}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-5 border-t border-[var(--bt-border-dark)] py-7 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className={styles.footSocial}><FacebookIcon /></a>
            <a href="#" aria-label="Instagram" className={styles.footSocial}><InstagramIcon className="h-[15px] w-[15px]" /></a>
            {zaloUrl && (
              <a href={zaloUrl} target="_blank" rel="noopener noreferrer" aria-label="Zalo" className={styles.footSocial}><ZaloIcon /></a>
            )}
          </div>
          <span className="text-[12px] text-[var(--bt-light)]/50">© {new Date().getFullYear()} {displayName}. Đã đăng ký bản quyền.</span>
          <span className="text-[12px] text-[var(--bt-light)]/50">
            Thiết kế bởi <span className="text-[var(--bt-light)]/75">Tiệm Web Nhỏ</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
