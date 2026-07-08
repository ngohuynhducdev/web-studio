'use client';

import { useState } from 'react';
import styles from './LuaNail.module.css';
import { NAV_LINKS } from './navLinks';

export default function Header({ displayName }: { displayName: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b-[3px] border-[var(--ln-ink)] bg-[var(--ln-bg)]">
      <div className="mx-auto flex h-[68px] max-w-container items-center justify-between gap-6 px-5 md:px-10">

        {/* Sticker logo */}
        <a
          href="#top"
          className={`${styles.serif} flex-shrink-0 bg-[var(--ln-ink)] px-3 py-[6px] text-[20px] font-extrabold uppercase tracking-[0.04em] text-[var(--ln-yellow)] no-underline transition-transform duration-150 hover:-rotate-2`}
          style={{ boxShadow: '3px 3px 0 var(--ln-pink)' }}
        >
          {displayName}
        </a>

        {/* Desktop nav */}
        <ul className="m-0 hidden list-none gap-7 p-0 md:flex" aria-label="Menu chính">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[13px] font-bold tracking-[0.06em] uppercase text-[var(--ln-ink)] no-underline before:absolute before:bottom-[-4px] before:left-0 before:h-[3px] before:w-0 before:bg-[var(--ln-pink)] before:transition-all hover:before:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — sticker button mini */}
        <a href="#booking" className={`${styles.btnSticker} hidden md:inline-flex !py-[10px] !px-5 !text-[12px]`}>
          Đặt lịch
        </a>

        {/* Hamburger */}
        <button
          className="flex h-10 w-10 cursor-pointer flex-shrink-0 flex-col items-center justify-center gap-[6px] border-[2.5px] border-[var(--ln-ink)] bg-[var(--ln-yellow)] p-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block h-[2.5px] w-[20px] bg-[var(--ln-ink)] transition-transform duration-200 ${menuOpen ? styles.hamburgerLineTop : ''}`} />
          <span className={`block h-[2.5px] w-[20px] bg-[var(--ln-ink)] transition-opacity duration-200 ${menuOpen ? styles.hamburgerLineMid : ''}`} />
          <span className={`block h-[2.5px] w-[20px] bg-[var(--ln-ink)] transition-transform duration-200 ${menuOpen ? styles.hamburgerLineBot : ''}`} />
        </button>
      </div>

      {/* Mobile panel */}
      {menuOpen && (
        <nav
          className="flex flex-col gap-1 border-t-[3px] border-[var(--ln-ink)] bg-[var(--ln-bg)] px-5 pb-6 pt-4"
          aria-label="Mobile menu"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`${styles.serif} border-b-2 border-dashed border-[var(--ln-ink)] py-3 text-[26px] font-extrabold uppercase tracking-[0.02em] text-[var(--ln-ink)] no-underline last:border-b-0`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="#booking"
            className={`${styles.btnSticker} mt-4 justify-center`}
            onClick={() => setMenuOpen(false)}
          >
            Đặt lịch ngay
          </a>
        </nav>
      )}
    </header>
  );
}
