import { DEFAULT_STEPS, DEFAULT_HIW_HEADINGS } from "@/data/homepage";
import type { HiwCms } from "@/types/cms";
import { numberWord } from "@/lib/numberWord";
import { RevealStagger, RevealItem } from "@/components/ui/motion/Reveal";
import styles from "./HowItWorks.module.css";

export default function HowItWorks({ cms }: { cms?: HiwCms }) {
  const steps      = cms?.hiwSteps?.length ? cms.hiwSteps : DEFAULT_STEPS;
  // Counted from the steps themselves, so adding one cannot leave the copy
  // claiming the old number. "not N meetings" deliberately echoes the step
  // count; both read this value, so the wordplay survives a step being added.
  // A CMS-authored hiwHeading overrides the first half only — the editor owns
  // that string and its number.
  const count      = numberWord(steps.length);
  const heading    = cms?.hiwHeading     ?? `${count} steps,`;
  const headingItal= cms?.hiwHeadingItal ?? DEFAULT_HIW_HEADINGS.hiwHeadingItal;

  return (
    <section className="section section-paper" id="how-it-works">
      <div className="container-site">
        <div className="section-head">
          <h2 className="h2-heading">
            {heading} <span className="italic-acc">{headingItal}</span> —<br />
            not {count} meetings.
          </h2>
        </div>
        <RevealStagger className={styles.stepsGrid}>
          {steps.map((step, i) => (
            <RevealItem key={step._key} className="grid">
              <article className={`${styles.stepCard} note lift`}>
                <div className={styles.stepTop}>
                  <div className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</div>
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
