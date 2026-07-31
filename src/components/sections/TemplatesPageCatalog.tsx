"use client";

import { useState } from "react";
import TemplateCard from "@/components/ui/TemplateCard";
import { INDUSTRY_OPTIONS, type Template, type Industry } from "@/types";
import { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import styles from "./TemplatesPageCatalog.module.css";

type FilterKey = "all" | Industry;

// Derived from INDUSTRY_OPTIONS rather than restated, so an industry added
// there cannot be missing a pill here. The previous hardcoded list had already
// drifted — it was missing "other", leaving any template in that industry
// filterable by nothing.
const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "all" },
  ...INDUSTRY_OPTIONS.map((o) => ({ key: o.value as FilterKey, label: o.value })),
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

  // With every template in one industry the bar collapses to "all" plus that
  // industry — two pills returning the same list. Nothing to filter, so the
  // bar is hidden until a second industry exists.
  const industriesPresent = new Set(initialTemplates.map((t) => t.industry)).size;

  return (
    <section className={styles.templatesCatalog}>
      <div className="container-site">
        {industriesPresent > 1 && (
        <div className={styles.filterBarWrapper}>
        <div className={styles.templatesFilterBar} role="group" aria-label="Filter by industry">
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
        )}

        {visible.length > 0 ? (
          <RevealStagger key={active} className={styles.templatesCatalogGrid}>
            {visible.map((template) => (
              <RevealItem key={template._id} className="grid">
                <TemplateCard template={template} />
              </RevealItem>
            ))}
          </RevealStagger>
        ) : (
          // Guard, not a live path: pills with a count of zero are never
          // rendered, so no reachable filter empties the grid. It only shows if
          // the catalog itself is empty, which is why the wording no longer
          // blames the selected industry.
          <div className={styles.templatesEmpty}>
            <p className={styles.templatesEmptyText}>no templates to show yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
