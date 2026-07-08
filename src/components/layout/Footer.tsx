import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { siteFooterQuery } from "@/lib/queries";
import { DEFAULT_SHOP_LINKS } from "@/data/layout";
import styles from "./Footer.module.css";

function FacebookIcon()  { return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> }
function InstagramIcon() { return <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> }
function ZaloIcon()      { return <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.04 2 11c0 2.4 1.08 4.58 2.83 6.18L4 22l4.93-1.4c.97.26 2.02.4 3.07.4 5.52 0 10-4.04 10-9s-4.48-10-10-10z" /></svg> }
function TikTokIcon()    { return <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" /></svg> }

export default async function Footer() {
  const cms = await client.fetch(siteFooterQuery, {}, { next: { revalidate: 60 } });

  const brandName   = cms?.brandName    ?? "tiệm web nhỏ";
  const tagline     = cms?.tagline      ?? "web đẹp cho doanh nghiệp nhỏ.";
  const description = cms?.description  ?? "một tiệm — không phải agency, không phải platform.\nlàm từng cái, tử tế từng cái.";
  const shopLinks   = cms?.shopLinks?.length ? cms.shopLinks : DEFAULT_SHOP_LINKS;
  const email       = cms?.email        ?? "hello@tiemwebnho.com";
  const phone       = cms?.phone        ?? "0903 555 119";
  const zaloUrl     = cms?.zaloUrl      ?? "https://zalo.me/0903555119";
  const hours       = cms?.hours        ?? "Thứ 2 – Thứ 7, 9h–18h";
  const facebookUrl = cms?.facebookUrl  ?? "https://facebook.com/tiemwebnho";
  const instagramUrl= cms?.instagramUrl ?? "https://instagram.com/tiemwebnho";
  const tiktokUrl   = cms?.tiktokUrl    ?? "https://tiktok.com/@tiemwebnho";
  const copyright   = cms?.copyright    ?? `© ${new Date().getFullYear()} Tiệm Web Nhỏ · làm bằng tay ở Sài Gòn`;

  const socialLinks = [
    { href: facebookUrl,  label: "Facebook",  Icon: FacebookIcon },
    { href: instagramUrl, label: "Instagram", Icon: InstagramIcon },
    { href: zaloUrl,      label: "Zalo",      Icon: ZaloIcon },
    { href: tiktokUrl,    label: "TikTok",    Icon: TikTokIcon },
  ];

  const contactItems = [
    { label: email,              href: `mailto:${email}` },
    { label: `Zalo: ${phone}`,   href: zaloUrl },
    { label: hours,              href: null },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container-site">
        <div className={styles.footerGrid}>
          <div>
            <Link href="/" className={styles.footerBrand}>
              {brandName}<span className="dot-terracotta">.</span>
            </Link>
            <p className={styles.footerTagline}>{tagline}</p>
            <p className={styles.footerDesc}>{description}</p>
          </div>

          <div>
            <h3 className={styles.footerColTitle}>Tiệm</h3>
            <ul className={styles.footerColList}>
              {shopLinks.map((link: { href: string; label: string }) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.footerColTitle}>Liên hệ</h3>
            <ul className={styles.footerColList}>
              {contactItems.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      {item.label}
                    </a>
                  ) : (
                    <span className={styles.footerContactPlain}>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={styles.footerColTitle}>Mạng xã hội</h3>
            <nav aria-label="Mạng xã hội" className={styles.footerSocial}>
              {socialLinks.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>{copyright}</span>
          <span>Made with 🌱 in Vietnam</span>
        </div>
      </div>
    </footer>
  );
}
