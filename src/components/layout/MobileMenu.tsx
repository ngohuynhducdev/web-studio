"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MobileMenu.module.css";

interface NavLink { href: string; label: string }

export default function MobileMenu({
  navLinks,
  ctaHref,
  ctaLabel,
}: {
  navLinks: NavLink[];
  ctaHref: string;
  ctaLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  const close = () => setOpen(false);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus management: open → focus first link; close → return focus to hamburger
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      const first = menuRef.current?.querySelector<HTMLElement>("a[href], button:not([disabled])");
      first?.focus();
    } else if (wasOpen.current) {
      triggerRef.current?.focus();
    }
  }, [open]);

  // Close with Escape + trap focus with Tab inside the menu
  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); return; }
      if (e.key !== "Tab") return;
      const menu = menuRef.current;
      if (!menu) return;
      const focusable = Array.from(
        menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [open]);

  return (
    <>
      {/* Hamburger button */}
      <button
        ref={triggerRef}
        className={`${styles.hamburgerBtn}${open ? ` ${styles.hamburgerBtnOpen}` : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span className={styles.hamburgerBar} />
        <span className={styles.hamburgerBar} />
        <span className={styles.hamburgerBar} />
      </button>

      {/* Fullscreen overlay */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`${styles.mobileMenu}${open ? ` ${styles.mobileMenuOpen}` : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
      >
        <div className={styles.mobileMenuInner}>
          {/* Header — brand + close button */}
          <div className={styles.mobileMenuHeader}>
            <Link href="/" className={styles.mobileMenuBrand} onClick={close}>
              web studio<span className={styles.mobileMenuDot}>.</span>
            </Link>
            <button
              className={styles.mobileMenuCloseBtn}
              onClick={close}
              aria-label="Close menu"
            >
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Link list — slide in with delay */}
          <nav className={styles.mobileMenuNav} aria-label="Main menu">
            {navLinks.map((link, i) => {
              const active = isActive(link.href);
              const linkClass = `${styles.mobileMenuLink}${active ? ` ${styles.mobileMenuLinkActive}` : ""}`;
              const delay = { transitionDelay: open ? `${80 + i * 55}ms` : "0ms" };
              return link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass}
                  onClick={close}
                  style={delay}
                  aria-current={active ? "page" : undefined}
                >
                  <span className={styles.mobileMenuLinkNum} aria-hidden="true">0{i + 1}</span>
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={linkClass}
                  onClick={close}
                  style={delay}
                >
                  <span className={styles.mobileMenuLinkNum} aria-hidden="true">0{i + 1}</span>
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Footer — CTA */}
          <div className={styles.mobileMenuFoot}>
            <Link href={ctaHref} className={styles.mobileMenuCtaBtn} onClick={close}>
              {ctaLabel}
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <p className={styles.mobileMenuFootNote}>
              replies within 1–2 hours · 9am–6pm
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
