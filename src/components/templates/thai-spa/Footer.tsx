import Image from 'next/image';
import type { BookingSection } from '@/types';
import styles from './ThaiSpa.module.css';
import { NAV_LINKS } from './navLinks';
import { FretBorder } from './icons';

interface Props { data?: BookingSection; businessName?: string }

export default function Footer({ data, businessName = 'LOTUS THAI' }: Props = {}) {
  const address  = data?.address ?? '88 Le Loi, District 1\nHo Chi Minh City';
  const phone    = data?.phone   ?? '0901 234 567';
  const email    = data?.email   ?? 'hello@lotusthai.vn';

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
          <p className="text-[14px] text-[rgba(255,248,241,0.95)] m-0 leading-[1.6]">
            {address.split('\n').map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </p>
          <div className="text-[11px] tracking-[0.18em] uppercase text-[rgba(255,248,241,0.55)] mt-5 mb-2">Contact</div>
          <p className="text-[14px] text-[rgba(255,248,241,0.95)] m-0">{phone}</p>
          <p className="text-[14px] text-[rgba(255,248,241,0.95)] m-0">{email}</p>
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
