"use client";

import { useState } from "react";
import TemplateCard from "@/components/ui/TemplateCard";
import type { Template, Industry } from "@/types";
import { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import styles from "./TemplatesPageCatalog.module.css";

type FilterKey = "all" | Industry;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "tất cả" },
  { key: "nail", label: "nail" },
  { key: "spa", label: "spa" },
  { key: "cafe", label: "cà phê" },
  { key: "gym", label: "gym" },
  { key: "barber", label: "barber" },
  { key: "bakery", label: "tiệm bánh" },
  { key: "studio", label: "studio" },
];

interface TemplatesPageCatalogProps {
  initialTemplates: Template[];
}

export default function TemplatesPageCatalog({ initialTemplates }: TemplatesPageCatalogProps) {
  const [active, setActive] = useState<FilterKey>("all");

  function countByIndustry(key: FilterKey) {
    if (key === "all") return initialTemplates.length;
    return initialTemplates.filter((t) => t.industry === key).length;
  }

  const visible =
    active === "all"
      ? initialTemplates
      : initialTemplates.filter((t) => t.industry === active);

  return (
    <section className={styles.templatesCatalog}>
      <div className="container-site">
        <div className={styles.filterBarWrapper}>
        <div className={styles.templatesFilterBar} role="group" aria-label="Lọc theo ngành">
          {FILTERS.map((f) => {
            const count = countByIndustry(f.key);
            if (count === 0) return null;
            return (
              <button
                key={f.key}
                className={`${styles.filterPill}${active === f.key ? ` ${styles.filterPillActive}` : ""}`}
                onClick={() => setActive(f.key)}
                aria-pressed={active === f.key}
              >
                {f.label}
                <span className={styles.filterPillCount}>{count}</span>
              </button>
            );
          })}
        </div>
        </div>

        {visible.length > 0 ? (
          <RevealStagger key={active} className={styles.templatesCatalogGrid}>
            {visible.map((template) => (
              <RevealItem key={template._id} className="grid">
                <TemplateCard template={template} />
              </RevealItem>
            ))}
          </RevealStagger>
        ) : (
          <div className={styles.templatesEmpty}>
            <p className={styles.templatesEmptyText}>chưa có mẫu cho ngành này.</p>
          </div>
        )}
      </div>
    </section>
  );
}
