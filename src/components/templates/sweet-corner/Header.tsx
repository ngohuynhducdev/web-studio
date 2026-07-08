'use client';

import { useState } from 'react';
import styles from './SweetCorner.module.css';
import { NAV_LINKS } from './navLinks';

export default function Header({ displayName }: { displayName: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-[100] bg-[rgba(255,245,248,0.92)] backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] border-b border-[rgba(232,96,140,0.1)]">
      <div className="max-w-container mx-auto px-5 md:px-10 h-[70px] flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#"
          className="font-[family-name:var(--font-pacifico)] font-normal text-[20px] text-[var(--sc-accent)] no-underline shrink-0 leading-none tracking-[0.02em] transition-colors duration-200 hover:text-[#c94d79]"
        >
          {displayName} <span className="text-[#f5afc8] text-[16px]">♥</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0" aria-label="Menu chính">
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href} className="text-[14px] font-semibold text-[#7d4560] no-underline transition-colors duration-200 hover:text-[var(--sc-accent)]">{l.label}</a></li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#order"
          className={`hidden md:inline-flex items-center bg-[var(--sc-accent)] text-white font-[family-name:var(--font-nunito)] text-[14px] font-bold no-underline px-[22px] py-[10px] rounded-full shrink-0 whitespace-nowrap ${styles.navCta}`}
        >
          🎂 Đặt bánh ngay
        </a>

        {/* Hamburger */}
        <button
          className="flex md:hidden flex-col justify-center gap-[5px] w-9 h-9 bg-none border-none cursor-pointer p-1 shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-[22px] h-[2px] bg-[var(--sc-accent)] rounded-[2px] transition-all duration-[250ms] ease-in-out ${menuOpen ? styles.hamburgerLineTop : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-[var(--sc-accent)] rounded-[2px] transition-all duration-[250ms] ease-in-out ${menuOpen ? styles.hamburgerLineMid : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-[var(--sc-accent)] rounded-[2px] transition-all duration-[250ms] ease-in-out ${menuOpen ? styles.hamburgerLineBot : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="flex flex-col bg-[#fff5f8] border-t border-[#fce4ee] px-5 pb-5 pt-3 gap-1" aria-label="Mobile menu">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={`font-[family-name:var(--font-nunito)] text-[15px] font-semibold text-[#7d4560] no-underline py-[10px] border-b border-[#fce4ee] ${styles.mobileLink}`} onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="#order" className="block mt-2 text-center bg-[var(--sc-accent)] text-white font-[family-name:var(--font-nunito)] text-[14px] font-bold no-underline px-5 py-3 rounded-[24px]" onClick={() => setMenuOpen(false)}>🎂 Đặt bánh ngay</a>
        </nav>
      )}
    </header>
  );
}
