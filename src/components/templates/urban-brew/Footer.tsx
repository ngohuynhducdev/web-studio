import Link from 'next/link';
import { NAV_LINKS } from './navLinks';

export default function Footer({ displayName }: { displayName: string }) {
  return (
    <footer className="border-t border-[var(--cf-border)] bg-[#0a0908] pb-24 pt-8">
      <div className="mx-auto flex max-w-container flex-col flex-wrap items-center justify-between gap-4 px-5 text-center md:flex-row md:px-10 md:text-left">
        <a
          href="#"
          className="text-[14px] font-black tracking-[0.1em] text-[var(--cf-muted)] no-underline transition-colors duration-200 hover:text-[var(--cf-text)]"
        >
          {displayName}
        </a>

        <p className="m-0 text-[13px] text-[var(--cf-muted)]">
          © {new Date().getFullYear()} {displayName} · Website by{' '}
          <Link href="/" className="text-[var(--cf-muted)] underline hover:text-[var(--cf-text)]">tiệm web nhỏ</Link>
        </p>

        <nav className="flex justify-center gap-6" aria-label="Footer links">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[var(--cf-muted)] no-underline transition-colors duration-200 hover:text-[var(--cf-text)]"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
