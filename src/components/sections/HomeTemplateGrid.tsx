import Link from "next/link";
import TemplateCard from "@/components/ui/TemplateCard";
import { client } from "@/sanity/lib/client";
import { featuredTemplatesQuery } from "@/lib/queries";
import type { Template } from "@/types";
import { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import styles from "./HomeTemplateGrid.module.css";
import { FALLBACK_TEMPLATES } from "@/data/homepage";

interface HomeTemplateGridProps {
  title?: string;
  showViewAll?: boolean;
  eyebrow?: string;
  heading?: string;
  headingItal?: string;
}

export default async function HomeTemplateGrid({
  title = "bốn mẫu được chọn nhiều nhất tháng này.",
  showViewAll = true,
  eyebrow,
  heading,
  headingItal,
}: HomeTemplateGridProps) {
  const fetched = await client.fetch<Template[]>(featuredTemplatesQuery, {}, { next: { revalidate: 60 } });
  const templates = fetched.length > 0 ? fetched.slice(0, 4) : FALLBACK_TEMPLATES;

  return (
    <section className="section" id="templates">
      <div className="container-site">
        <div className="section-head">
          <h2 className="h2-heading">
            {heading ?? title}{headingItal && <> <span className="italic-acc">{headingItal}</span></>}
          </h2>
        </div>

        <RevealStagger className={styles.templateGrid}>
          {templates.map((template) => (
            <RevealItem key={template._id} className="grid">
              <TemplateCard template={template} />
            </RevealItem>
          ))}
        </RevealStagger>

        {showViewAll && (
          <div className={styles.templatesFoot}>
            <Link href="/templates" className="btn-link">
              xem tất cả 15+ mẫu
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
