import { DEFAULT_STEPS, DEFAULT_HIW_HEADINGS } from "@/data/homepage";
import type { StepIcon } from "@/types";
import type { HiwCms } from "@/types/cms";
import { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import styles from "./HowItWorks.module.css";

function StepIcon({ type }: { type: StepIcon }) {
  if (type === "grid") return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
  if (type === "chat") return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

export default function HowItWorks({ cms }: { cms?: HiwCms }) {
  const eyebrow    = cms?.hiwEyebrow     ?? DEFAULT_HIW_HEADINGS.hiwEyebrow;
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
        <RevealStagger className={styles.stepsGrid}>
          {steps.map((step, i) => (
            <RevealItem key={step._key} className="grid">
              <article className={`${styles.stepCard} note lift`}>
                <span className={`pin ${styles.stepPin}`} aria-hidden="true" />
                <div className={styles.stepTop}>
                  <div className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</div>
                  <span className={styles.stepMark}><StepIcon type={step.icon} /></span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
