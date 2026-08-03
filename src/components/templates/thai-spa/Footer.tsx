import Image from 'next/image';
import type { BookingSection } from '@/types';
import styles from './ThaiSpa.module.css';
import { NAV_LINKS } from './navLinks';
import { FretBorder, ZaloIcon } from './icons';

interface Props { data?: BookingSection; businessName?: string }

// Shared by the three contact lines so they read as one block, not three
// differently-styled links.
const contactLink =
  'text-[14px] text-[rgba(255,248,241,0.95)] no-underline hover:text-[var(--ts-gold-soft)] transition-colors duration-150';

export default function Footer({ data, businessName = 'LOTUS THAI' }: Props = {}) {
  const address  = data?.address ?? '88 Le Loi, District 1\nHo Chi Minh City';
  const phone    = data?.phone   ?? '0901 234 567';
  const email    = data?.email   ?? 'hello@lotusthai.vn';
  const zaloUrl  = data?.zaloUrl;
  // A footer address a guest cannot open in Maps, and a number they cannot tap,
  // are the two things a spa footer exists for. Same treatment as the other two
  // templates.
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address.replace(/\n/g, ', ')
  )}`;

  return (
    <footer className="relative isolate min-h-[320px] py-16 overflow-hidden" id="contact">
      <FretBorder id="footer" className="absolute top-0 left-0 z-[1]" />
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=85&fit=crop&auto=format"
          alt=""
          fill
          className="object-cover brightness-[0.4] saturate-[0.85]"
          sizes="100vw"
        />
      </div>
      <div className="max-w-container mx-auto px-[26px] grid grid-cols-1 md:grid-cols-3 items-start gap-12 relative z-[1]">
        <div>
          <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(255,248,241,0.55)] mb-2">Address</div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${contactLink} block leading-[1.6]`}
          >
            {address.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </a>
          <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(255,248,241,0.55)] mt-5 mb-2">Contact</div>
          <p className="m-0">
            <a href={`tel:${phone.replace(/\s/g, '')}`} className={contactLink}>{phone}</a>
          </p>
          <p className="m-0">
            <a href={`mailto:${email}`} className={contactLink}>{email}</a>
          </p>
          {zaloUrl && (
            <a
              href={zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} mt-5`}
            >
              <span className={styles.btnDot}><ZaloIcon /></span>
              Message on Zalo
            </a>
          )}
        </div>
        <div className="text-center">
          <div className={styles.footerLogo}>{businessName}</div>
          <div className="font-['Playfair_Display',serif] italic text-[15px] text-[rgba(255,248,241,0.85)] mt-1">Thai Massage</div>
        </div>
        <nav className="flex flex-col gap-[6px] items-start md:items-end" aria-label="Footer navigation">
          {NAV_LINKS.map((l) => (
            <a
              key={l._key}
              href={l.href}
              className="text-[14px] text-[rgba(255,248,241,0.85)] no-underline hover:text-[var(--ts-ivory)] transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
