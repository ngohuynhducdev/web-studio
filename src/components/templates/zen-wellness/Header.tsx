'use client';

import { useState, useEffect } from 'react';
import styles from './ZenWellness.module.css';
import { NAV_LINKS } from './navLinks';

export default function Header({ displayName }: { displayName: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  // Scroll-spy — the section crossing the upper-middle band is active.
  useEffect(() => {
    const sections = NAV_LINKS
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const navLink = (active: boolean) =>
    `text-[0.8rem] font-medium no-underline rounded-full px-3.5 py-1.5 transition-colors duration-200 ${
      active
        ? 'bg-[var(--zw-tint)] text-[var(--zw-accent)]'
        : 'text-[var(--zw-mut)] hover:text-[var(--zw-ink)]'
    }`;

  return (
    <div className="fixed top-0 inset-x-0 z-50 px-3 pt-3 pointer-events-none">
      {/* Floating pill nav — the template's app-like signature */}
      <header className="pointer-events-auto max-w-[64rem] mx-auto bg-white/85 backdrop-blur-[14px] border border-[var(--zw-line)] rounded-full shadow-[0_8px_30px_-18px_rgba(20,26,22,0.25)] px-4 md:px-5 h-[3.5rem] flex items-center justify-between gap-4">
        {/* Wordmark */}
        <a
          href="#top"
          className="font-[family-name:var(--zw-font-display)] font-bold text-[1rem] tracking-[-0.02em] text-[var(--zw-ink)] no-underline whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          {displayName}
          <span className={`${styles.breath} inline-block w-2 h-2 rounded-full bg-[var(--zw-lime)]`} aria-hidden="true" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 justify-center" aria-label="Main menu">
          <ul className="flex gap-1 list-none m-0 p-0">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <li key={link.href}>
                <a href={link.href} className={navLink(activeId === link.href.slice(1))}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA pill */}
        <a
          href="#book"
          className="hidden md:inline-flex items-center text-[0.8rem] font-semibold text-white bg-[var(--zw-accent)] no-underline rounded-full px-5 py-2 shrink-0 transition-[background,transform] duration-200 hover:bg-[var(--zw-accent-deep)] active:scale-[0.98]"
        >
          Book a trial
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col justify-center gap-[0.25rem] w-9 h-9 bg-transparent border-none cursor-pointer p-1 shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineTop : ''}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineMid : ''}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineBot : ''}`} />
        </button>
      </header>

      {/* Mobile menu — dropdown card under the pill */}
      {menuOpen && (
        <nav
          className="pointer-events-auto md:hidden max-w-[64rem] mx-auto mt-2 bg-white/95 backdrop-blur-[14px] border border-[var(--zw-line)] rounded-3xl shadow-[0_18px_44px_-20px_rgba(20,26,22,0.3)] p-3 flex flex-col gap-1"
          aria-label="Mobile menu"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.95rem] font-medium text-[var(--zw-ink)] no-underline rounded-2xl px-4 py-3 transition-colors duration-200 hover:bg-[var(--zw-tint)]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
