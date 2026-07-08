"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

interface NavLink { href: string; label: string }

export default function NavLinks({ links }: { links: NavLink[] }) {
  const pathname = usePathname();

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <ul className={styles.navLinks}>
      {links.map((item) => {
        const active = isActive(item.href);
        return (
          <li key={item.href}>
            {item.href.startsWith("/") ? (
              <Link
                href={item.href}
                className={`${styles.navLink}${active ? ` ${styles.navLinkActive}` : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <a href={item.href} className={styles.navLink}>{item.label}</a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
