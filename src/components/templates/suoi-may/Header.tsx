'use client';

import { useState, useEffect } from 'react';
import styles from './SuoiMay.module.css';
import { NAV_LINKS, BOOKING_LINK, SOCIAL_LINKS, CONTACT_EMAIL } from './navLinks';
import { PhoneIcon, MailIcon, ClockIcon } from './icons';
import type { BookingSection } from '@/types';

interface Props {
  businessName: string;
  s?: BookingSection;
}

export default function Header({ businessName, s }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    `text-[0.78rem] tracking-[0.08em] no-underline border-b pb-[3px] transition-colors duration-200 ${
      active
        ? 'text-[var(--sm-ivory)] border-[var(--sm-accent)]'
        : 'text-[var(--sm-muted)] border-transparent hover:text-[var(--sm-ivory)]'
    }`;
  const mobileLink = 'text-[0.95rem] text-[var(--sm-muted)] no-underline py-[0.8125rem] border-b border-[var(--sm-line)] tracking-[0.02em] transition-colors duration-200 hover:text-[var(--sm-ivory)]';

  return (
    <>
      {/* Top contact bar (Lumera-style): contact info left · social right */}
      <div className="bg-[var(--sm-bg0)] text-[var(--sm-light)]/80">
        <div className="max-w-[78rem] mx-auto px-5 md:px-10 h-10 flex items-center justify-between gap-4 text-[0.72rem] tracking-[0.02em]">
          {/* Contact info */}
          <div className="flex items-center gap-5 lg:gap-7 min-w-0 flex-1 overflow-hidden">
            {s?.phone && (
              <a
                href={`tel:${s.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 no-underline transition-colors duration-200 hover:text-[var(--sm-light)]"
              >
                <span className="text-[var(--sm-accent)]"><PhoneIcon /></span>
                <span className="whitespace-nowrap">{s.phone}</span>
              </a>
            )}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hidden md:flex items-center gap-2 no-underline transition-colors duration-200 hover:text-[var(--sm-light)]"
            >
              <span className="text-[var(--sm-accent)]"><MailIcon /></span>
              <span className="whitespace-nowrap">{CONTACT_EMAIL}</span>
            </a>
            {(s?.hours?.length ?? 0) > 0 && (
              <span className="hidden xl:flex items-center gap-2">
                <span className="text-[var(--sm-accent)]"><ClockIcon /></span>
                <span className="whitespace-nowrap">
                  {(s!.hours ?? []).map((h) => `${h.day}: ${h.time}`).join(' · ')}
                </span>
              </span>
            )}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4 shrink-0">
            {SOCIAL_LINKS.map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                aria-label={soc.label}
                className="text-[var(--sm-light)]/65 transition-colors duration-200 hover:text-[var(--sm-accent)]"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d={soc.path} /></svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 bg-[var(--sm-bg)]/95 backdrop-blur-[14px] border-b border-[var(--sm-line)] transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_20px_-6px_rgba(46,42,36,0.12)]' : ''}`}>
        <div className="max-w-[78rem] mx-auto px-5 h-[4.5rem] flex items-center justify-between md:px-10 lg:gap-12 lg:justify-start">
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--sm-serif)] font-normal text-[1.15rem] tracking-[0.16em] uppercase text-[var(--sm-ivory)] no-underline whitespace-nowrap shrink-0"
          >
            {businessName}
            <span className="font-sans font-normal text-[0.58rem] tracking-[0.16em] text-[var(--sm-accent)] ml-2 normal-case">spa & wellness</span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex flex-1 justify-center" aria-label="Main menu">
            <ul className="flex gap-8 list-none m-0 p-0">
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
            className="hidden lg:inline-flex items-center text-[0.76rem] font-semibold tracking-[0.07em] text-[var(--sm-light)] bg-[var(--sm-accent)] rounded-full no-underline px-[1.5rem] py-[0.625rem] shrink-0 transition-[filter] duration-200 hover:brightness-105 active:translate-y-px"
          >
            {BOOKING_LINK.label}
          </a>

          {/* Mobile hamburger */}
          <button
            className="flex lg:hidden flex-col justify-center gap-[0.3125rem] w-11 h-11 bg-transparent border-none cursor-pointer p-2 shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineTop : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineMid : ''}`} />
            <span className={`${styles.hamburgerLine} ${menuOpen ? styles.hamburgerLineBot : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="flex lg:hidden flex-col bg-[var(--sm-bg)] border-t border-[var(--sm-line)] px-6 pt-3 pb-6" aria-label="Mobile menu">
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
              className="block mt-3 text-center bg-[var(--sm-accent)] text-[var(--sm-light)] rounded-full text-[0.85rem] font-semibold tracking-[0.07em] no-underline py-[0.875rem] px-5 transition-[filter] duration-200 hover:brightness-105 active:translate-y-px"
              onClick={() => setMenuOpen(false)}
            >
              {BOOKING_LINK.label}
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
