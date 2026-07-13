import styles from "./Testimonials.module.css";
import { FALLBACK_TESTIMONIALS } from "@/data/homepage";
import { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import type { TestimonialItem } from "@/types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={12} height={12} viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth={i < rating ? 0 : 1.5} aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({
  heading, items,
}: {
  heading?: string;
  items?: TestimonialItem[];
}) {
  const list = items?.length ? items : FALLBACK_TESTIMONIALS;

  return (
    <section className="section section-paper">
      <div className="container-site">
        <div className="section-head">
          <h2 className="h2-heading">{heading ?? "what clients say."}</h2>
        </div>

        {/* An interview ledger: every voice sits at equal weight, no one
            quote elevated above the others. */}
        <RevealStagger className={styles.ledger}>
          {list.map((t) => (
            <RevealItem key={t._key} className={styles.row}>
              <div className={styles.rowHead}>
                <span className={styles.rowShop}>{t.shopName}</span>
                <StarRating rating={t.rating} />
              </div>
              <blockquote className={styles.rowQuote}>{t.content}</blockquote>
              <p className={styles.rowWho}>
                {t.clientName}
                {t.date && <> · {t.date}</>}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
