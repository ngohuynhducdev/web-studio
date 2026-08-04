import styles from './HerbalGroveSpa.module.css';
import { NAV_LINKS } from './navLinks';
import type { BookingSection } from '@/types';
// FacebookIcon and InstagramIcon stay exported from ./icons for the day a
// client has real profiles to link — the footer no longer renders dead ones.
import { ZaloIcon, PhoneIcon, MapPinIcon, MailIcon, LeafIcon, BotanicalSprigIcon } from './icons';

const SERVICES = [
  'Herbal Foot Soak',
  'Ankle Massage',
  'Hot Stone Roll',
  'Warm Herbal Belly',
  'Full Therapy Package',
];

// Fallbacks only. These used to be the footer's sole source, so a client who
// set their real phone, email and address in the CMS got them on the Booking
// section and the demo studio's details down here — two sets of contact
// details on one delivered site, one of them wrong.
const PHONE = '0901 234 567';
// Was bachthao.spa@gmail.com — a leftover from the template's earlier name,
// shown under a header that reads Herbal Grove Spa.
const EMAIL = 'hello@herbalgrove.vn';
const ADDRESS = '128 Cao Thang, District 3, HCMC';

export default function Footer({
  displayName,
  booking,
}: {
  displayName: string;
  booking?: BookingSection;
}) {
  const zaloUrl = booking?.zaloUrl;
  const phone   = booking?.phone   ?? PHONE;
  const email   = booking?.email   ?? EMAIL;
  const address = booking?.address ?? ADDRESS;

  // Printed as plain text before: the Booking section above already dials,
  // mails and opens Maps, and the footer is where a guest scrolls to look for
  // exactly that.
  const contacts = [
    {
      icon: <PhoneIcon />,
      label: 'Call to Book',
      value: phone,
      href: `tel:${phone.replace(/\s/g, '')}`,
      external: false,
    },
    {
      icon: <MailIcon />,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      external: false,
    },
    {
      icon: <MapPinIcon />,
      label: 'Address',
      value: address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
      external: true,
    },
  ];

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
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex items-center gap-4 no-underline"
            >
              <span className="text-[var(--bt-light)]">{c.icon}</span>
              <div>
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--bt-light)]/85">{c.label}</div>
                <div className="mt-1 text-[15px] text-[var(--bt-light)] transition-colors hover:text-[var(--bt-amber-light)]">{c.value}</div>
              </div>
            </a>
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
              Offers and news from Herbal Grove Spa go out on Zalo — fresh herbs every morning.
            </p>

            {/* This was an email field and a Sign Up button wired to nothing —
                type="button", no handler, no backend. On a delivered site a
                guest typed their address, clicked, and got silence. There is no
                newsletter to sign up to, so the block asks for the channel the
                studio actually runs on. */}
            {zaloUrl ? (
              <a
                href={zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btnSolidDark} mt-1 self-start !bg-[var(--bt-amber)] !border-[var(--bt-amber)]`}
              >
                <ZaloIcon />
                Get offers on Zalo
              </a>
            ) : (
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className={`${styles.btnSolidDark} mt-1 self-start !bg-[var(--bt-amber)] !border-[var(--bt-amber)]`}
              >
                <PhoneIcon />
                Call for offers
              </a>
            )}
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
            {/* Facebook and Instagram were hardcoded to "#" with no CMS field
                behind them, so every delivered site carried two buttons that
                went nowhere. They come back when there is a profile to point
                at; until then the row shows the channel that works. */}
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
