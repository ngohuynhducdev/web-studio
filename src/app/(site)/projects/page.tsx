import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allProjectsQuery, duAnPageQuery } from "@/lib/queries";
import { FALLBACK_PROJECTS, FALLBACK_PAGE, slugify, type Project, type DuAnPageContent } from "@/data/du-an";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our projects — Web Studio",
  description:
    "Websites we've built for nail salons, spas, cafes, gyms in Ho Chi Minh City. See the real thing — not mock-ups.",
};

const industryColorClass: Record<string, string | undefined> = {
  nail:   styles.projectBadgeNail,
  spa:    styles.projectBadgeSpa,
  cafe:   styles.projectBadgeCafe,
  gym:    styles.projectBadgeGym,
  bakery: styles.projectBadgeBakery,
};

function ExternalLinkIcon() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}


export default async function DuAnPage() {
  const [fetched, pageContent] = await Promise.all([
    client.fetch<Project[]>(allProjectsQuery, {}, { next: { revalidate: 60 } }),
    client.fetch<DuAnPageContent | null>(duAnPageQuery, {}, { next: { revalidate: 60 } }),
  ]);
  const projects = fetched.length > 0 ? fetched : FALLBACK_PROJECTS;
  const page = pageContent ?? FALLBACK_PAGE;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://webstudio.com";
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Our projects", item: `${siteUrl}/projects` },
    ],
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <main>

      {/* ── Hero ── */}
      <section className={styles.projectsHero}>
        <div className="container-site">
          <Reveal immediate>
            <span className="eyebrow">{page.heroEyebrow}</span>
          </Reveal>
          <div className={styles.projectsHeroInner}>
            <Reveal immediate delay={0.08}>
              <h1 className={styles.projectsHeroTitle}>
                {page.heroTitle}<br />
                <em className={styles.projectsHeroItal}>{page.heroTitleItal}</em>
              </h1>
            </Reveal>
            <Reveal immediate delay={0.16}>
              <p className={styles.projectsHeroSub}>{page.heroSub}</p>
            </Reveal>
          </div>
          <Reveal className={styles.projectsHeroMeta}>
            <span>{projects.length} projects completed</span>
            <span className={styles.projectsMetaDot} aria-hidden="true">·</span>
            <span>4 industries</span>
            <span className={styles.projectsMetaDot} aria-hidden="true">·</span>
            <span>{page.metaLocation}</span>
          </Reveal>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className={styles.projectsBody}>
        <div className="container-site">
          <RevealStagger className={styles.projectsGrid}>
            {projects.map((p) => (
              <RevealItem key={p._id} className="grid">
              <article className={styles.projectCard}>
                {/* Image */}
                <div className={styles.projectCardImage}>
                  {p.imageUrl ? (
                    <Image
                      src={p.imageUrl}
                      alt={p.shopName}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className={styles.projectCardImg}
                    />
                  ) : (
                    <div className={styles.projectCardImagePlaceholder} aria-hidden="true">
                      <span>{p.shopName.charAt(0)}</span>
                    </div>
                  )}
                  <span className={`${styles.projectBadge} ${industryColorClass[p.industry] ?? ""}`}>
                    {p.industryLabel}
                  </span>
                </div>

                {/* Info */}
                <div className={styles.projectCardBody}>
                  <div className={styles.projectCardTop}>
                    <div>
                      <h2 className={styles.projectCardName}>
                        <Link href={`/projects/${slugify(p.shopName)}`} className={styles.projectCardNameLink}>
                          {p.shopName}
                        </Link>
                      </h2>
                      <p className={styles.projectCardLocation}>{p.location}</p>
                    </div>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectCardLink}
                        aria-label={`View ${p.shopName}'s site`}
                      >
                        <ExternalLinkIcon />
                        View site
                      </a>
                    )}
                  </div>

                  <p className={styles.projectCardHighlight}>&ldquo;{p.highlight}&rdquo;</p>

                  <div className={styles.projectCardTemplate}>
                    <span className={styles.projectTemplateLabel}>Template used</span>
                    <span className={styles.projectTemplateName}>{p.templateUsed}</span>
                  </div>
                </div>
              </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section-paper">
        <div className={`container-site ${styles.projectsCta}`}>
          <Reveal className={styles.projectsCtaInner}>
            <h2 className={styles.projectsCtaTitle}>
              {page.ctaTitle}<br />
              <em className="italic-acc">{page.ctaTitleItal}</em>
            </h2>
            <p className={styles.projectsCtaBody}>{page.ctaBody}</p>
            <div className={styles.projectsCtaActions}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start a project
                <svg className="btn-arrow" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/templates" className="btn btn-outline btn-lg">
                Browse templates
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
    </>
  );
}
