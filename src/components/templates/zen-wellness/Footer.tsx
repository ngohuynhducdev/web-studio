import Link from 'next/link';
import styles from './ZenWellness.module.css';
import { NAV_LINKS } from './navLinks';

export default function Footer({ displayName }: { displayName: string }) {
  return (
    <footer className="pt-10 pb-12 bg-[var(--zw-bg)] border-t border-[var(--zw-line)]">
      <div className="max-w-container mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 flex-wrap text-center md:text-left">
        <a
          href="#top"
          className="font-[family-name:var(--zw-font-display)] font-bold text-[0.95rem] tracking-[-0.02em] text-[var(--zw-ink)] no-underline flex items-center gap-1.5"
        >
          {displayName}
          <span className={`${styles.breath} inline-block w-2 h-2 rounded-full bg-[var(--zw-lime)]`} aria-hidden="true" />
        </a>
        <p className="text-[0.75rem] text-[var(--zw-mut)] m-0">
          © {new Date().getFullYear()} {displayName} · Website by{' '}
          <Link href="/" className="text-[var(--zw-mut)] underline">web studio</Link>
        </p>
        <nav className="flex gap-5 flex-wrap justify-center" aria-label="Footer links">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="text-[0.78rem] font-medium text-[var(--zw-mut)] no-underline transition-colors duration-200 hover:text-[var(--zw-ink)]">{label}</a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
