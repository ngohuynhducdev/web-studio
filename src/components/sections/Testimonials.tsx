import styles from "./Testimonials.module.css";
import { FALLBACK_TESTIMONIALS } from "@/data/homepage";
import { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import type { TestimonialItem } from "@/types";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="testi-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={14} height={14} viewBox="0 0 24 24" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth={i < rating ? 0 : 1.5} aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
}

export default function Testimonials({
  eyebrow, heading, items,
}: {
  eyebrow?: string;
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
        <RevealStagger className={styles.testiGrid}>
          {list.map((t, i) => (
            <RevealItem key={t._key ?? i} className="grid">
              <article className={`${styles.testiCard} note lift`}>
                <span className={`pin ${styles.testiPin}`} aria-hidden="true" />
                <StarRating rating={t.rating} />
                <div aria-hidden="true" className={styles.testiQuoteMark}>&ldquo;</div>
                <p className={styles.testiQuote}>{t.content}</p>
                <div className={styles.testiWho}>
                  <div className={`${styles.testiAvatarInitials} bg-brand-beige`}>{getInitials(t.clientName)}</div>
                  <div>
                    <div className={styles.testiName}>{t.clientName}</div>
                    <div className={styles.testiRole}>
                      {t.shopName}
                      {t.date && <span className={styles.testiDate}> · {t.date}</span>}
                    </div>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
