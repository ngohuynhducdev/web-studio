import Image from 'next/image';
import type { StepsSection } from '@/types';
import styles from './ThaiSpa.module.css';

interface Props { data?: StepsSection }

export default function AfterMassage({ data }: Props = {}) {
  const heading = data?.headingMain ?? 'After Your Treatment';
  const steps   = data?.steps ?? [];

  return (
    <section className="bg-[var(--ts-sand)] pb-24">
      <div className="max-w-container mx-auto px-[26px]">
        <h2 className={styles.sectionTitle}>{heading}</h2>
        <div className="grid gap-[14px] grid-cols-2 auto-rows-[140px] md:grid-cols-3 md:auto-rows-[180px]">

          {/* Tall photo with bottom caption (step 0) */}
          <div className="row-span-2 rounded-[20px] overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1709755491926-f7aa83748967?w=800&q=85&fit=crop&auto=format"
              alt=""
              fill
              className="object-cover object-[center_35%]"
              sizes="(min-width: 1024px) 280px, 50vw"
            />
            <div className="absolute left-[14px] right-[14px] bottom-[14px] z-[1]">
              <div className="rounded-[14px] p-[12px_14px] bg-[var(--ts-ivory)]">
                <div className={`${styles.stepNum} text-[22px] leading-none`}>{steps[0]?.num}</div>
                <p className="text-[12px] leading-[1.4] text-[var(--ts-bark)] m-0 mt-1">{steps[0]?.title}</p>
              </div>
            </div>
          </div>

          {/* Ivory tile (step 1) */}
          <div className="bg-[var(--ts-ivory)] rounded-[20px] p-5 flex items-start">
            <div>
              <div className={`${styles.stepNum} text-[22px] leading-none`}>{steps[1]?.num}</div>
              <p className="text-[12px] leading-[1.4] text-[var(--ts-bark)] m-0 mt-1">{steps[1]?.title}</p>
            </div>
          </div>

          {/* Photo row 1 col 3 */}
          <div className="rounded-[20px] overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1611073615848-d6ff6215931f?w=1000&q=85&fit=crop&auto=format"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 280px, 50vw"
            />
          </div>

          {/* Photo with top caption (step 2) */}
          <div className="rounded-[20px] overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1611920630912-43e092ae5c17?w=1000&q=85&fit=crop&auto=format"
              alt=""
              fill
              className="object-cover object-[40%_50%]"
              sizes="(min-width: 1024px) 280px, 50vw"
            />
            <div className="absolute left-[14px] right-[14px] top-[14px] z-[1]">
              <div className="rounded-[14px] p-[12px_14px] bg-[var(--ts-ivory)]">
                <div className={`${styles.stepNum} text-[22px] leading-none`}>{steps[2]?.num}</div>
                <p className="text-[12px] leading-[1.4] text-[var(--ts-bark)] m-0 mt-1">{steps[2]?.title}</p>
              </div>
            </div>
          </div>

          {/* Ivory tile (step 3) */}
          <div className="bg-[var(--ts-ivory)] rounded-[20px] p-5 flex items-start">
            <div>
              <div className={`${styles.stepNum} text-[22px] leading-none`}>{steps[3]?.num}</div>
              <p className="text-[12px] leading-[1.4] text-[var(--ts-bark)] m-0 mt-1">{steps[3]?.title}</p>
            </div>
          </div>

          {/* Photo row 2 col 3 */}
          <div className="rounded-[20px] overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1706973944787-cff186431795?w=1000&q=85&fit=crop&auto=format"
              alt=""
              fill
              className="object-cover object-[60%_50%]"
              sizes="(min-width: 1024px) 280px, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
