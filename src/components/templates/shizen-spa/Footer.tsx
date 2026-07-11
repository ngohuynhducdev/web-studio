import Link from 'next/link';
import { NAV_LINKS, BOOKING_LINK } from './navLinks';

// Footer shows the first 3 nav links + booking CTA (replacing "Spaces").
const FOOTER_LINKS = [...NAV_LINKS.slice(0, 3), BOOKING_LINK];

export default function Footer({ businessName }: { businessName: string }) {
  return (
    <footer className="py-8 pb-24 bg-[var(--sz-dark)]">
      <div className="max-w-[75rem] mx-auto px-6 md:px-10 flex flex-col items-center text-center gap-4 md:flex-row md:justify-between md:text-left md:gap-6">
        <a
          href="#"
          className="font-[family-name:var(--sz-serif)] font-light text-[0.8rem] tracking-[0.2em] text-white/60 no-underline"
        >
          {businessName} <span className="text-[var(--sz-sand)]">·</span> SPA
        </a>
        <p className="text-[0.72rem] text-white/55">
          © {new Date().getFullYear()} {businessName} Spa & Wellness · Website by{' '}
          <Link href="/" className="text-white/70 underline">web studio</Link>
        </p>
        <nav className="flex gap-7 justify-center md:justify-start" aria-label="Footer links">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-[0.75rem] text-white/55 no-underline transition-colors duration-200 hover:text-white/85">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
