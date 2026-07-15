'use client';

import { useState, useEffect } from 'react';
import styles from './HerbalGroveSpa.module.css';
import { NAV_LINKS } from './navLinks';
import { LeafIcon, LeafBorder } from './icons';

export default function Header({ displayName }: { displayName: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Transparent over the dark hero, solid cream once scrolled past it
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Over hero: cream text on dark. Scrolled: ink text on cream.
  const onDark = !scrolled && !menuOpen;
  const textColor = onDark ? 'text-[var(--bt-light)]' : 'text-[var(--bt-ink)]';
  const navColor = onDark ? 'text-[var(--bt-light)]/85' : 'text-[var(--bt-ink-soft)]';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-[var(--bt-line)] bg-[rgba(245,239,228,0.94)] backdrop-blur-[12px]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      {/* Top accent — signature leaf-and-vine border */}
      <LeafBorder
        id="header"
        className="absolute inset-x-0 top-0 opacity-70"
        color={onDark ? 'var(--bt-light)' : 'var(--bt-amber)'}
      />

      <div className="mx-auto flex h-[80px] max-w-container items-center justify-between gap-6 px-5 md:px-10">

        {/* Brand — two lines */}
        <a
          href="#top"
          className={`flex flex-shrink-0 items-center gap-2.5 no-underline transition-colors hover:text-[var(--bt-amber)] ${textColor}`}
        >
          <LeafIcon className="h-6 w-6 text-[var(--bt-amber)]" />
          <span className="flex flex-col leading-none">
            <span className={`${styles.serif} text-[22px] font-medium tracking-[0.06em]`}>{displayName}</span>
            <span className={`${styles.bookLabel} mt-0.5 !text-[12px] ${onDark ? 'text-[var(--bt-light)]/85' : ''}`}>
              Herbal Foot Spa
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="m-0 hidden list-none gap-8 p-0 lg:flex" aria-label="Main menu">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`inline-block py-2 text-[14.5px] font-medium tracking-[0.01em] no-underline transition-colors hover:text-[var(--bt-amber)] ${navColor}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* CTA */}
          <a
            href="#booking"
            className={`hidden sm:inline-flex !py-[11px] !px-5 !text-[11px] ${
              onDark ? styles.btnOutlineRectLight : styles.btnOutlineRectDark
            }`}
          >
            Book Now
          </a>

          {/* Hamburger — always visible (matches reference) */}
          <button
            className={`flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border p-2 ${
              onDark ? 'border-[rgba(245,239,228,0.4)]' : 'border-[var(--bt-line)]'
            }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block h-[1.5px] w-[20px] transition-transform duration-300 ${menuOpen ? `${styles.hamburgerLineTop} bg-[var(--bt-ink)]` : onDark ? 'bg-[var(--bt-light)]' : 'bg-[var(--bt-ink)]'}`} />
          <span className={`block h-[1.5px] w-[20px] transition-opacity duration-300 ${menuOpen ? styles.hamburgerLineMid : ''} ${onDark ? 'bg-[var(--bt-light)]' : 'bg-[var(--bt-ink)]'}`} />
          <span className={`block h-[1.5px] w-[20px] transition-transform duration-300 ${menuOpen ? `${styles.hamburgerLineBot} bg-[var(--bt-ink)]` : onDark ? 'bg-[var(--bt-light)]' : 'bg-[var(--bt-ink)]'}`} />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {menuOpen && (
        <nav
          className="flex flex-col gap-1 border-t border-[var(--bt-line)] bg-[var(--bt-bg)] px-5 pb-6 pt-3"
          aria-label="Mobile menu"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`${styles.serif} border-b border-[var(--bt-line)] py-3 text-[24px] text-[var(--bt-ink)] no-underline last:border-b-0`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#booking"
            className={`${styles.btnSolidDark} mt-4 justify-center`}
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
