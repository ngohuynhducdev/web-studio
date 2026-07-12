import styles from "./Testimonials.module.css";
import { FALLBACK_TESTIMONIALS } from "@/data/homepage";
import { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import type { TestimonialItem } from "@/types";

function StarRating({ rating, small }: { rating: number; small?: boolean }) {
  const size = small ? 11 : 14;
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth={i < rating ? 0 : 1.5} aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
        </svg>
      ))}
    </div>
  );
}

function Who({ t }: { t: TestimonialItem }) {
  return (
    <footer className={styles.who}>
      <span className={styles.whoName}>{t.clientName}</span>
      <span className={styles.whoRole}>
        {t.shopName}
        {t.date && <> · {t.date}</>}
      </span>
    </footer>
  );
}

export default function Testimonials({
  heading, items,
}: {
  heading?: string;
  items?: TestimonialItem[];
}) {
  const list = items?.length ? items : FALLBACK_TESTIMONIALS;

  // Feature the most compelling story (longest quote), rest ride alongside —
  // one clear focal point instead of an identical row of cards.
  const featuredIndex = list.reduce(
    (best, cur, i, arr) => (cur.content.length > arr[best].content.length ? i : best),
    0
  );
  const featured = list[featuredIndex];
  const minor = list.filter((_, i) => i !== featuredIndex);

  return (
    <section className="section section-paper">
      <div className="container-site">
        <div className="section-head">
          <h2 className="h2-heading">{heading ?? "what clients say."}</h2>
        </div>

        <RevealStagger className={styles.wall}>
          <RevealItem className={styles.featured}>
            <StarRating rating={featured.rating} />
            <blockquote className={styles.featuredQuote}>{featured.content}</blockquote>
            <Who t={featured} />
          </RevealItem>

          <RevealItem className={styles.minorCol}>
            {minor.map((t) => (
              <div key={t._key} className={styles.minor}>
                <StarRating rating={t.rating} small />
                <blockquote className={styles.minorQuote}>{t.content}</blockquote>
                <Who t={t} />
              </div>
            ))}
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}
