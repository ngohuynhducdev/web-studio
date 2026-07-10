import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { client } from "@/sanity/lib/client";
import { siteHeaderQuery } from "@/lib/queries";
import { DEFAULT_NAV } from "@/data/layout";
import styles from "./Navbar.module.css";

export default async function Navbar() {
  const cms = await client.fetch(siteHeaderQuery, {}, { next: { revalidate: 60 } });

  const brandName = cms?.brandName ?? "web studio";
  const logoUrl   = cms?.logoUrl as string | undefined;
  const navLinks  = cms?.navLinks?.length ? cms.navLinks : DEFAULT_NAV;
  const ctaLabel  = cms?.ctaLabel ?? "see templates";
  const ctaHref   = cms?.ctaHref  ?? "/templates";

  return (
    <>
    <a href="#main-content" className={styles.skipLink}>
      Skip to main content
    </a>
    <nav className={styles.nav}>
      <div className={`container-site ${styles.navInner}`}>
        <Link href="/" className={styles.navBrand}>
          {logoUrl
            ? <Image src={logoUrl} alt={brandName} height={32} width={120} className={styles.navLogo} />
            : <>{brandName}<span className="dot-terracotta">.</span></>
          }
        </Link>

        <NavLinks links={navLinks} />

        <Link href={ctaHref} className={styles.navCta}>
          {ctaLabel}
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>

        <MobileMenu navLinks={navLinks} ctaHref={ctaHref} ctaLabel={ctaLabel} />
      </div>
    </nav>
    </>
  );
}
