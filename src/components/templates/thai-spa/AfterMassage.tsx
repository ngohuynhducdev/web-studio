import Image from 'next/image';
import type { StepsSection } from '@/types';
import styles from './ThaiSpa.module.css';

interface Props { data?: StepsSection }

// One visual per step, cycled like Benefits does when the CMS supplies a
// different number of steps. `position` is tuned per photo so the subject
// survives the 16:10 crop.
//
// The first two replace photos this section shared with Benefits on the same
// page — and the first of those was dominated by a large green painting, the
// one thing on screen that had nothing to do with the ivory/sand/wine palette.
const VISUALS = [
  {
    img: 'https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?w=900&q=85&fit=crop&auto=format',
    position: 'center 38%',
    alt: 'A therapist working along a guest’s shoulders and back',
  },
  {
    img: 'https://images.unsplash.com/photo-1731597076108-f3bbe268162f?w=900&q=85&fit=crop&auto=format',
    position: 'center',
    alt: 'A treatment table set with warm oils and a copper vessel',
  },
  {
    img: 'https://images.unsplash.com/photo-1611920630912-43e092ae5c17?w=900&q=85&fit=crop&auto=format',
    position: '40% 50%',
    alt: 'The quiet waiting area, with wooden chairs and warm light',
  },
  {
    img: 'https://images.unsplash.com/photo-1706973944787-cff186431795?w=900&q=85&fit=crop&auto=format',
    position: '60% 50%',
    alt: 'A treatment room opening onto the garden',
  },
];

export default function AfterMassage({ data }: Props = {}) {
  const heading = data?.headingMain ?? 'After Your Treatment';
  const steps   = data?.steps ?? [];

  if (steps.length === 0) return null;

  return (
    // pb-24 rather than py-24: this continues the sand band that starts at
    // HarmonyIntro instead of opening a new one.
    <section className="bg-[var(--ts-sand)] pb-24">
      <div className="max-w-container mx-auto px-[26px]">
        <h2 className={styles.sectionTitle}>{heading}</h2>

        {/* An ordered list because the steps are numbered. Four equal cards on
            a 2×2 grid — the previous bento mixed photo tiles with half-empty
            ivory ones, left a third of its last row blank, and read as the
            offset collage this template's DESIGN.md rules out. */}
        {/* Narrower than the section container: at full width a half-width
            card runs past 600px and the pair of rows towers over everything
            around it. Centring the narrower grid also suits a template built
            on a centre line. */}
        <ol className="m-0 mx-auto grid max-w-[62rem] list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 md:gap-6">
          {steps.map((step, i) => {
            const visual = VISUALS[i % VISUALS.length];
            return (
              <li
                key={step._key}
                className="flex flex-col overflow-hidden rounded-[20px] bg-[var(--ts-ivory)] shadow-[var(--ts-shadow-1)]"
              >
                {/* 16:10 rather than 4:3 — these are landscape interiors, and
                    the taller crop made each row about 460px of photo. */}
                <div className="relative aspect-[16/10]">
                  <Image
                    // A client's own photo wins, the way Benefits already
                    // works. The stock alt no longer describes it once that
                    // happens, so fall back to the step's own words.
                    src={step.imageUrl ?? visual.img}
                    alt={step.imageUrl ? (step.title ?? '') : visual.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: visual.position }}
                    sizes="(min-width: 768px) 31rem, 100vw"
                  />
                </div>

                {/* Copy sits on ivory, never over the photo: contrast no longer
                    depends on what the image happens to look like, and there is
                    no floating caption card to overflow its tile. */}
                <div className="p-6 md:p-7">
                  <div className={`${styles.stepNum} text-[26px] leading-none`}>
                    {step.num ?? String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="m-0 mt-2 text-[15px] leading-[1.55] text-[var(--ts-bark)]">
                    {step.title}
                  </p>
                  {/* Optional in the schema and unused by this template's
                      defaults — rendered so a client who writes one gets it. */}
                  {step.desc && (
                    <p className="m-0 mt-2 text-[13px] leading-[1.6] text-[var(--ts-clay)]">
                      {step.desc}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
