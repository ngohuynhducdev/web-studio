'use client';

import { useState } from 'react';
import styles from './UrbanBrew.module.css';
import { NAV_LINKS } from './navLinks';

export default function Header({ displayName }: { displayName: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-[var(--cf-border)] bg-[rgba(15,14,13,0.88)] backdrop-blur-[16px]">
      {/* Desktop nav bar */}
      <div className="mx-auto flex h-[68px] max-w-container items-center justify-between gap-6 px-5 md:px-10">
        <a
          href="#"
          className="flex-shrink-0 text-[17px] font-black tracking-[0.08em] text-[var(--cf-text)] no-underline transition-colors duration-200 hover:text-[var(--cf-accent)]"
        >
          {displayName}
        </a>

        {/* Desktop links */}
        <ul className="m-0 hidden list-none gap-8 p-0 md:flex" aria-label="Menu chính">
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href} className="text-[12px] font-semibold tracking-[0.1em] uppercase text-[var(--cf-muted)] no-underline transition-colors duration-200 hover:text-[var(--cf-text)]">{l.label}</a></li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#location"
          className="hidden flex-shrink-0 border-2 border-[var(--cf-accent)] bg-[var(--cf-accent)] px-5 py-[9px] text-[12px] font-extrabold tracking-[0.08em] uppercase text-[var(--cf-bg)] no-underline transition-colors duration-200 hover:bg-transparent hover:text-[var(--cf-accent)] md:flex"
        >
          Đặt bàn
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex w-9 h-9 cursor-pointer flex-shrink-0 flex-col items-center justify-center gap-[5px] border-none bg-transparent p-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block h-[2px] w-[22px] rounded-sm bg-[var(--cf-accent)] transition-transform duration-250 ${menuOpen ? styles.hamburgerLineTop : ''}`} />
          <span className={`block h-[2px] w-[22px] rounded-sm bg-[var(--cf-accent)] transition-opacity duration-250 ${menuOpen ? styles.hamburgerLineMid : ''}`} />
          <span className={`block h-[2px] w-[22px] rounded-sm bg-[var(--cf-accent)] transition-transform duration-250 ${menuOpen ? styles.hamburgerLineBot : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="flex flex-col gap-1 border-t border-[var(--cf-border)] bg-[var(--cf-bg)] px-5 pb-5 pt-3"
          aria-label="Mobile menu"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="border-b border-[var(--cf-border)] py-[10px] text-[15px] font-semibold tracking-[0.02em] text-[var(--cf-text)] no-underline last:border-b-0"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#location"
            className="mt-2 block bg-[var(--cf-accent)] px-5 py-3 text-center text-[14px] font-bold tracking-[0.06em] uppercase text-[var(--cf-bg)] no-underline"
            onClick={() => setMenuOpen(false)}
          >
            Đặt bàn
          </a>
        </nav>
      )}
    </header>
  );
}
