import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/lib/queries";
import {
  DEFAULT_ABOUT_HERO,
  DEFAULT_STORY,
  DEFAULT_STORY_PARAGRAPHS,
  DEFAULT_VALUES,
} from "@/data/about";
import type { AboutCms } from "@/types/cms";
import { numberWord } from "@/lib/numberWord";
import Reveal, { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Who Web Studio is, what we do, and why this studio exists — the story of a small studio in Saigon.",
};

function ArrowIcon() {
  return (
    <svg className="btn-arrow" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default async function AboutPage() {
  const cms = await client.fetch<AboutCms>(aboutPageQuery, {}, { next: { revalidate: 60 } });

  const heroTitle    = cms?.heroTitle        ?? DEFAULT_ABOUT_HERO.heroTitle;
  const heroTitleItal= cms?.heroTitleItal    ?? DEFAULT_ABOUT_HERO.heroTitleItal;
  const heroSub      = cms?.heroSub          ?? DEFAULT_ABOUT_HERO.heroSub;
  const storyTitle   = cms?.storyTitle       ?? DEFAULT_STORY.storyTitle;
  const paragraphs   = cms?.storyParagraphs?.length ? cms.storyParagraphs : DEFAULT_STORY_PARAGRAPHS;
  const storyQuote   = cms?.storyQuote       ?? DEFAULT_STORY.storyQuote;
  const storyQuoteSrc= cms?.storyQuoteSource ?? DEFAULT_STORY.storyQuoteSource;
  const values       = cms?.values?.length ? cms.values : DEFAULT_VALUES;

  // The stock fallback is a generic desk photo, not this studio's office, so it
  // is described rather than claimed. An uploaded photo carries its own alt from
  // the CMS; if the editor left that blank the image is treated as decorative,
  // which is preferable to captioning their photo with a description of ours.
  const storyImage    = cms?.storyImageUrl ?? "/images/workspace.jpg";
  const storyImageAlt = cms?.storyImageUrl
    ? cms.storyImageAlt ?? ""
    : "An open laptop, a mug of black coffee and a handwritten notepad on a wooden desk beside a window";

  return (
    <main>

      {/* ── Hero ── */}
      <section className={`${styles.aboutHero} grain`}>
        <div className="container-site">
          <Reveal immediate>
            <h1 className={styles.aboutHeroTitle}>
              {heroTitle}<br />
              <em className={styles.aboutHeroItal}>{heroTitleItal}</em>
            </h1>
            <p className={styles.aboutHeroSub}>{heroSub}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section section-paper">
        <div className={`container-site ${styles.aboutStoryGrid}`}>

          <Reveal className={styles.aboutStoryCopy}>
            <h2 className={styles.aboutStoryTitle}>{storyTitle}</h2>
            <div className={styles.aboutStoryBody}>
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <blockquote className={styles.aboutBlockquote}>
              <span className={styles.aboutQuoteMark}>&ldquo;</span>
              <p className={styles.aboutQuoteText}>{storyQuote}</p>
              <footer className={styles.aboutQuoteSource}>{storyQuoteSrc}</footer>
            </blockquote>
          </Reveal>

          <Reveal className={styles.aboutImageCol} delay={0.12}>
            <div className={styles.aboutImageWrap}>
              <Image
                src={storyImage}
                alt={storyImageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.aboutImageCaption}>
              <span className="dot-terracotta">·</span>&nbsp; one project at a time
            </div>
          </Reveal>

        </div>
      </section>

      {/* ── Values ── */}
      <section className="section">
        <div className="container-site">
          <div className="section-head">
            {/* Counted from the values themselves — this heading is code-only,
                so unlike the homepage there is no CMS string to override it. */}
            <h2 className="h2-heading">
              {numberWord(values.length)} thing{values.length === 1 ? "" : "s"} we{" "}
              <span className="italic-acc">believe in</span>.
            </h2>
          </div>

          <RevealStagger className={styles.aboutValuesList}>
            {values.map((v, i) => (
              <RevealItem key={v.num ?? i} className={styles.aboutValueRow}>
                <span className={styles.aboutValueNum} aria-hidden="true">{v.num ?? String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.aboutValueTitle}>{v.title}</h3>
                <p className={styles.aboutValueBody}>{v.body}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className={`container-site ${styles.aboutCta}`}>
          <Reveal className={styles.aboutCtaInner}>
            <h2 className={styles.aboutCtaTitle}>
              tell us about your business<span className="dot-terracotta">.</span>
            </h2>
            <p className={styles.aboutCtaBody}>
              Free consultation — we&rsquo;ll suggest the right template and a
              clear quote within 1–2 hours.
            </p>
            <div className={styles.aboutCtaActions}>
              <Link href="/contact" className="btn btn-primary btn-lg">
                order now
                <ArrowIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
