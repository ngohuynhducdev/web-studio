import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { allProjectsQuery } from "@/lib/queries";
import { FALLBACK_PROJECTS, slugify, type Project } from "@/data/du-an";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

async function getProjects(): Promise<Project[]> {
  const fetched = await client.fetch<Project[]>(allProjectsQuery, {}, { next: { revalidate: 60 } });
  return fetched.length > 0 ? fetched : FALLBACK_PROJECTS;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: slugify(p.shopName) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => slugify(p.shopName) === slug);
  if (!project) return {};
  return {
    title: `${project.shopName} — Project | Web Studio`,
    description: project.highlight,
  };
}

function ExternalLinkIcon() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

const INDUSTRY_BADGE_CLASS: Record<string, string> = {
  nail:   styles.badgeNail,
  spa:    styles.badgeSpa,
  cafe:   styles.badgeCafe,
  gym:    styles.badgeGym,
  bakery: styles.badgeBakery,
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projects = await getProjects();
  const project = projects.find((p) => slugify(p.shopName) === slug);

  if (!project) notFound();

  const others = projects.filter((p) => slugify(p.shopName) !== slug).slice(0, 3);

  return (
    <main>
      {/* ── Back nav ── */}
      <div className={styles.backNav}>
        <div className="container-site">
          <Link href="/projects" className={styles.backLink}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Projects
          </Link>
        </div>
      </div>

      {/* ── Hero image ── */}
      <div className={styles.heroImage}>
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.shopName}
            fill
            sizes="100vw"
            className={styles.heroImg}
            priority
          />
        ) : (
          <div className={styles.heroPlaceholder} aria-hidden="true">
            <span>{project.shopName.charAt(0)}</span>
          </div>
        )}
      </div>

      <div className="container-site">

        {/* ── Header ── */}
        <div className={styles.header}>
          <span className={`${styles.badge} ${INDUSTRY_BADGE_CLASS[project.industry] ?? ""}`}>
            {project.industryLabel}
          </span>
          <h1 className={styles.shopName}>{project.shopName}</h1>
          <p className={styles.location}>
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {project.location}
          </p>
        </div>

        {/* ── Body: highlight + sidebar ── */}
        <div className={styles.body}>

          {/* Main — highlight */}
          <div className={styles.main}>
            <p className={styles.mainLabel}>Highlight result</p>
            <blockquote className={styles.highlight}>
              <p>{project.highlight}</p>
            </blockquote>
          </div>

          {/* Sidebar — project info */}
          <aside className={styles.sidebar}>
            <div className={styles.infoCard}>
              <dl className={styles.infoList}>
                <div className={styles.infoRow}>
                  <dt className={styles.infoKey}>Template used</dt>
                  <dd className={styles.infoVal}>{project.templateUsed}</dd>
                </div>
                <div className={styles.infoRow}>
                  <dt className={styles.infoKey}>Industry</dt>
                  <dd className={styles.infoVal}>{project.industryLabel}</dd>
                </div>
                <div className={styles.infoRow}>
                  <dt className={styles.infoKey}>Location</dt>
                  <dd className={styles.infoVal}>{project.location}</dd>
                </div>
              </dl>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveBtn}
                >
                  <ExternalLinkIcon />
                  View live site
                </a>
              )}
            </div>
          </aside>
        </div>

        {/* ── Other projects ── */}
        {others.length > 0 && (
          <section className={styles.others}>
            <p className={styles.othersLabel}>
            </p>
            <div className={styles.othersGrid}>
              {others.map((p) => (
                <Link
                  key={p._id}
                  href={`/projects/${slugify(p.shopName)}`}
                  className={styles.otherCard}
                >
                  <div className={styles.otherCardImage}>
                    {p.imageUrl ? (
                      <Image
                        src={p.imageUrl}
                        alt={p.shopName}
                        fill
                        sizes="(max-width: 767px) 100vw, 33vw"
                        className={styles.otherCardImg}
                      />
                    ) : (
                      <div className={styles.otherCardPlaceholder} aria-hidden="true">
                        <span>{p.shopName.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.otherCardBody}>
                    <p className={styles.otherCardName}>{p.shopName}</p>
                    <p className={styles.otherCardMeta}>{p.industryLabel} · {p.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            your business deserves<br />
            <em className="italic-acc">a website that shows it.</em>
          </h2>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Start a project
              <svg className="btn-arrow" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/templates" className="btn btn-outline btn-lg">
              View templates
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
