import type { AboutSection } from '@/types';
import styles from './ThaiSpa.module.css';

interface Props { data?: AboutSection }

export default function HarmonyIntro({ data }: Props = {}) {
  const headingMain   = data?.headingMain   ?? 'Where Stress Dissolves\nAnd';
  const headingItalic = data?.headingItalic ?? 'Harmony Begins';
  const body          = data?.paragraphs?.[0] ?? '';
  const lines = headingMain.split('\n');

  return (
    <section className="bg-[var(--ts-sand)] pb-24">
      <div className="max-w-[720px] mx-auto px-[26px]">
        <h2 className={styles.harmonyTitle}>
          {lines.map((line, i) => (
            <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
          ))}{' '}
          <em>{headingItalic}</em>
        </h2>
        <div className={`${styles.goldRule} ml-auto`} />
        <p className="text-[16px] leading-[1.65] text-[var(--ts-bark)] max-w-[520px] ml-auto m-0">{body}</p>
      </div>
    </section>
  );
}
