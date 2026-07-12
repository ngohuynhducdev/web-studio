import { DEFAULT_STEPS, DEFAULT_HIW_HEADINGS } from "@/data/homepage";
import type { HiwCms } from "@/types/cms";
import { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import styles from "./HowItWorks.module.css";

export default function HowItWorks({ cms }: { cms?: HiwCms }) {
  const heading    = cms?.hiwHeading     ?? DEFAULT_HIW_HEADINGS.hiwHeading;
  const headingItal= cms?.hiwHeadingItal ?? DEFAULT_HIW_HEADINGS.hiwHeadingItal;
  const steps      = cms?.hiwSteps?.length ? cms.hiwSteps : DEFAULT_STEPS;

  return (
    <section className="section section-paper" id="how-it-works">
      <div className="container-site">
        <div className="section-head">
          <h2 className="h2-heading">
            {heading} <span className="italic-acc">{headingItal}</span> —<br />
            not three meetings.
          </h2>
        </div>

        {/* Quiet index: three hairline rows, nothing else */}
        <RevealStagger className={styles.index}>
          {steps.map((step, i) => (
            <RevealItem key={step._key} className="grid">
              <div className={styles.row}>
                <span className={styles.rowNo} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.rowTitle}>{step.title}</h3>
                <p className={styles.rowDesc}>{step.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
