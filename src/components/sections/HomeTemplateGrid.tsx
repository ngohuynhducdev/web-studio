import Link from "next/link";
import TemplateCard from "@/components/ui/TemplateCard";
import { client } from "@/sanity/lib/client";
import { allTemplatesQuery } from "@/lib/queries";
import type { Template } from "@/types";
import { numberWord } from "@/lib/numberWord";
import { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import styles from "./HomeTemplateGrid.module.css";
import { FALLBACK_TEMPLATES } from "@/data/homepage";

interface HomeTemplateGridProps {
  showViewAll?: boolean;
  heading?: string;
  headingItal?: string;
}

export default async function HomeTemplateGrid({
  showViewAll = true,
  heading,
  headingItal,
}: HomeTemplateGridProps) {
  const fetched = await client.fetch<Template[]>(allTemplatesQuery, {}, { next: { revalidate: 60 } });
  const templates = fetched.length > 0 ? fetched.slice(0, 3) : FALLBACK_TEMPLATES;
  // Counts what this grid actually renders, which is capped at 3 — not the
  // size of the catalog. That keeps the sentence true about what the reader
  // sees; "view all" is what points at the rest.
  const derivedHeading = `${numberWord(templates.length)} templates,`;

  return (
    <section className={`section ${styles.board}`} id="templates">
      <div className={`container-site ${styles.boardInner}`}>
        <div className="section-head">
          <h2 className="h2-heading">
            {heading ?? derivedHeading}{headingItal && <> <span className="italic-acc">{headingItal}</span></>}
          </h2>
        </div>

        <RevealStagger className={styles.templateGrid}>
          {templates.map((template) => (
            <RevealItem key={template._id} className="grid">
              <TemplateCard template={template} compact />
            </RevealItem>
          ))}
        </RevealStagger>

        {showViewAll && (
          <div className={styles.templatesFoot}>
            <Link href="/templates" className="btn-link">
              view all templates
              <svg
                width={14}
                height={14}
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
          </div>
        )}
      </div>
    </section>
  );
}
