import styles from './HerbalGroveSpa.module.css';
import { NAV_LINKS } from './navLinks';
import { FacebookIcon, InstagramIcon, ZaloIcon, PhoneIcon, MapPinIcon, MailIcon, LeafIcon, BotanicalSprigIcon, LeafBorder } from './icons';

const SERVICES = [
  'Herbal Foot Soak',
  'Ankle Massage',
  'Hot Stone Roll',
  'Warm Herbal Belly',
  'Full Therapy Package',
];

const PHONE = '0901 234 567';
const EMAIL = 'bachthao.spa@gmail.com';
const ADDRESS = '128 Cao Thang, District 3, HCMC';

const CONTACTS = [
  { icon: <PhoneIcon />, label: 'Call to Book', value: PHONE },
  { icon: <MailIcon />, label: 'Email', value: EMAIL },
  { icon: <MapPinIcon />, label: 'Address', value: ADDRESS },
];

export default function Footer({ displayName, zaloUrl }: { displayName: string; zaloUrl?: string }) {
  return (
    <footer className="relative overflow-hidden bg-[var(--bt-dark)] pt-14 md:pt-16">
      <LeafBorder id="footer" className="absolute inset-x-0 top-0 opacity-70" color="var(--bt-amber-light)" />
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
                <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.34em] text-[var(--bt-light)]/70">Herbal Foot Spa</span>
              </span>
            </span>

            <h3 className={`${styles.serif} m-0 mt-2 text-[30px] leading-tight text-[var(--bt-light)]`}>Special Offers</h3>
            <p className="m-0 max-w-[40ch] text-[14px] leading-[1.7] text-[var(--bt-light)]/60">
              Sign up for offers & news from Herbal Grove Spa — fresh herbs every morning.
            </p>

            <form className={styles.newsletter} aria-label="Sign up for offers">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email"
                className={styles.newsletterInput}
              />
              {/* Demo template: no backend — button is non-submitting to avoid a reload */}
              <button type="button" className={styles.newsletterBtn}>Sign Up</button>
            </form>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-3.5">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--bt-light)]/90">Quick Links</span>
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
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--bt-light)]/90">Services</span>
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
          <span className="text-[12px] text-[var(--bt-light)]/60">© {new Date().getFullYear()} {displayName}. All rights reserved.</span>
          <span className="text-[12px] text-[var(--bt-light)]/60">
            Designed by <span className="text-[var(--bt-light)]/75">Web Studio</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
