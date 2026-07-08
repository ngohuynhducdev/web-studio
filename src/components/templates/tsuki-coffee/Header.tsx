'use client';

import { useState, useEffect } from 'react';
import styles from './TsukiCoffee.module.css';
import { NAV_LINKS } from './navLinks';
import { MoonIcon } from './icons';

export default function Header({ displayName }: { displayName: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
        scrolled
          ? `${styles.glass} border-b border-[var(--tc-line)]`
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-container items-center justify-between gap-6 px-5 md:px-10">

        {/* Brand */}
        <a
          href="#top"
          className={`${styles.serif} flex flex-shrink-0 items-center gap-3 text-[22px] font-light tracking-[0.05em] text-[var(--tc-cream)] no-underline transition-opacity hover:opacity-70`}
        >
          <MoonIcon className="h-5 w-5 text-[var(--tc-gold)]" />
          {displayName}
        </a>

        {/* Desktop nav */}
        <ul className="m-0 hidden list-none gap-10 p-0 md:flex" aria-label="Menu chính">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[11px] font-medium tracking-[0.24em] uppercase text-[var(--tc-cream-soft)] no-underline transition-colors duration-300 hover:text-[var(--tc-gold)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#booking"
          className={`${styles.btnPrimary} hidden md:inline-flex !py-[10px] !px-5 !text-[10px]`}
        >
          Đặt chỗ
        </a>

        {/* Hamburger */}
        <button
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border border-[var(--tc-line)] bg-transparent p-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block h-[1px] w-[20px] bg-[var(--tc-gold)] transition-transform duration-300 ${menuOpen ? styles.hamburgerLineTop : ''}`} />
          <span className={`block h-[1px] w-[20px] bg-[var(--tc-gold)] transition-opacity duration-300 ${menuOpen ? styles.hamburgerLineMid : ''}`} />
          <span className={`block h-[1px] w-[20px] bg-[var(--tc-gold)] transition-transform duration-300 ${menuOpen ? styles.hamburgerLineBot : ''}`} />
        </button>
      </div>

      {/* Mobile panel */}
      {menuOpen && (
        <nav
          className={`flex flex-col gap-1 border-t border-[var(--tc-line)] ${styles.glass} px-5 pb-6 pt-4`}
          aria-label="Mobile menu"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`${styles.serif} border-b border-[var(--tc-line-soft)] py-3 text-[22px] font-light tracking-[0.02em] text-[var(--tc-cream)] no-underline last:border-b-0`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#booking"
            className={`${styles.btnPrimary} mt-4 justify-center`}
            onClick={() => setMenuOpen(false)}
          >
            Đặt chỗ ngay
          </a>
        </nav>
      )}
    </header>
  );
}
