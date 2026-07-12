import { Fragment } from "react";
import { DEFAULT_STEPS, DEFAULT_HIW_HEADINGS } from "@/data/homepage";
import type { HiwCms } from "@/types/cms";
import { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import styles from "./HowItWorks.module.css";

// Hand-drawn dashed arrow connecting one step to the next (decorative).
function FlowArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 150 70"
      width={150}
      height={70}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M 8 6 C 30 48, 90 62, 136 52"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeDasharray="5 8"
        strokeLinecap="round"
      />
      <path
        d="M 126 46 l 12 6 l -9 9"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

        {/* One flowing sentence down the page: verb → annotation → arrow → verb */}
        <RevealStagger className={styles.flow}>
          {steps.map((step, i) => (
            <Fragment key={step._key}>
              <RevealItem className="grid">
                <div className={styles.verse}>
                  <h3 className={styles.verseTitle}>
                    <span className={styles.verseNo} aria-hidden="true">nº{i + 1}</span>
                    {step.title}
                  </h3>
                  <p className={styles.verseNote}>{step.desc}</p>
                </div>
              </RevealItem>
              {i < steps.length - 1 && (
                <RevealItem className="grid">
                  <FlowArrow className={styles.arrow} />
                </RevealItem>
              )}
            </Fragment>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
