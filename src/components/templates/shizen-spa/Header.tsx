'use client';

import { useState, useEffect } from 'react';
import styles from './ShizenSpa.module.css';
import { NAV_LINKS, BOOKING_LINK } from './navLinks';

interface Props {
  businessName: string;
}

export default function Header({ businessName }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  // Scroll-spy — a narrow band in the upper-middle of the viewport decides
  // which section the nav marks as active.
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
    `text-[0.78rem] tracking-[0.07em] no-underline border-b pb-[3px] transition-colors duration-200 ${
      active
        ? 'text-[var(--sz-ink)] border-[var(--sz-earth)]'
        : 'text-[var(--sz-muted)] border-transparent hover:text-[var(--sz-ink)]'
    }`;
  const mobileLink = 'text-[0.95rem] text-[var(--sz-muted)] no-underline py-[0.8125rem] border-b border-[var(--sz-border)] tracking-[0.02em] transition-colors duration-200 hover:text-[var(--sz-ink)]';

  return (
    <header className="sticky top-0 z-50 bg-[rgba(250,248,243,0.92)] backdrop-blur-[16px] border-b border-[var(--sz-border)]">
      <div className="max-w-[75rem] mx-auto px-5 h-[4.25rem] flex items-center justify-between md:px-10 md:gap-12 md:justify-start">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--sz-serif)] font-light text-[0.88rem] tracking-[0.2em] uppercase text-[var(--sz-ink)] no-underline whitespace-nowrap shrink-0"
        >
          {businessName}
          <span className="text-[var(--sz-earth)] mx-px"> ·</span>
          <span className="font-sans text-[0.6rem] tracking-[0.14em] text-[var(--sz-muted)] ml-1">SPA & WELLNESS</span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex flex-1 justify-center" aria-label="Menu chính">
          <ul className="flex gap-10 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={navLink(activeId === link.href.slice(1))}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <a
          href={BOOKING_LINK.href}
          className="hidden md:inline-flex items-center text-[0.78rem] font-medium tracking-[0.06em] text-[var(--sz-off)] bg-[var(--sz-ink)] no-underline px-[1.375rem] py-[0.5625rem] shrink-0 transition-[background,color] duration-200 hover:bg-[var(--sz-earth)] hover:text-white active:translate-y-px"
        >
          {BOOKING_LINK.label}
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col justify-center gap-[0.3125rem] w-9 h-9 bg-transparent border-none cursor-pointer p-1 shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineTop : ''}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineMid : ''}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineBot : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="flex flex-col bg-[rgba(250,248,243,0.98)] border-t border-[var(--sz-border)] px-6 pt-3 pb-6" aria-label="Mobile menu">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`${mobileLink}${i === NAV_LINKS.length - 1 ? ' border-b-0' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={BOOKING_LINK.href}
            className="block mt-3 text-center bg-[var(--sz-ink)] text-[var(--sz-off)] text-[0.85rem] font-semibold tracking-[0.06em] no-underline py-[0.875rem] px-5 transition-[background,color] duration-200 hover:bg-[var(--sz-earth)] hover:text-white active:translate-y-px"
            onClick={() => setMenuOpen(false)}
          >
            {BOOKING_LINK.label}
          </a>
        </nav>
      )}
    </header>
  );
}
