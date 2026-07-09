'use client';

import { useState } from 'react';
import { MenuIcon, CloseIcon } from './icons';
import styles from './ThaiSpa.module.css';
import { NAV_LINKS } from './navLinks';

interface Props { businessName?: string }

export default function Header({ businessName = 'LOTUS THAI' }: Props = {}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--ts-ivory)] border-b border-[var(--ts-border)]">
        <div className="max-w-container mx-auto px-[26px] py-[18px] flex items-center justify-between gap-6">
          <a href="#" className={styles.headerLogo}>{businessName}</a>
          <nav className="hidden min-[900px]:flex items-center gap-7" aria-label="Main menu">
            {NAV_LINKS.map((l) => (
              <a
                key={l._key}
                href={l.href}
                className="text-[14px] text-[var(--ts-clay)] no-underline hover:text-[var(--ts-espresso)] transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="flex min-[900px]:hidden w-10 h-10 rounded-full bg-[var(--ts-espresso)] text-[var(--ts-ivory)] border-0 cursor-pointer items-center justify-center shrink-0 hover:bg-[var(--ts-bark)] transition-colors duration-150"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[100] ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`${styles.mobileBackdrop} ${menuOpen ? styles.mobileBackdropOpen : ''}`}
          onClick={() => setMenuOpen(false)}
        />
        <div className={`${styles.mobileSheet} ${menuOpen ? styles.mobileSheetOpen : ''}`}>
          <div className="flex items-center justify-between mb-4">
            <span className={styles.headerLogo}>{businessName}</span>
            <button
              className="w-9 h-9 rounded-full bg-[var(--ts-espresso)] text-[var(--ts-ivory)] border-0 cursor-pointer grid place-items-center"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>
          {NAV_LINKS.map((l) => (
            <a
              key={l._key}
              href={l.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
