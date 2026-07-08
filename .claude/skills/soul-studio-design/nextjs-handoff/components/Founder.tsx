import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail } from '@/components/Icon';

const CREDENTIALS = [
  'Internationally certified Thai massage practitioner',
  'Holds a medical degree with 15 years of hospital experience',
  'Internationally certified Access Bars practitioner',
  'Over 5 years of expertise in professional body relaxation',
  'Welcomes clients of any gender, age, and physical condition',
  "Gently activates the body's natural self-healing processes for every organ and system",
];

export default function Founder() {
  return (
    <section id="therapist" className="bg-ivory py-24">
      <div className="max-w-[1100px] mx-auto px-7">
        <div className="bg-ivory-soft rounded-[36px] p-6 grid items-center gap-8
                        [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">
          <div className="relative aspect-[0.85/1] rounded-[28px] overflow-hidden shadow-1">
            <Image
              src="/images/moodboard/tablet-sophia-brown.webp"
              alt="Sophia Brown, founder of SOUL STUDIO"
              fill
              className="object-cover object-[center_30%]"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
          <div className="px-4 pb-8 pt-6">
            <div className="ss-eyebrow mb-3">Studio Founder</div>
            <h2 className="font-display font-medium text-espresso text-[52px] leading-none tracking-display mb-7">
              Sophia Brown
            </h2>
            <ul className="space-y-2.5">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex gap-2.5 text-[14px] leading-[1.5] text-bark">
                  <span className="text-espresso shrink-0">•</span>
                  {c}
                </li>
              ))}
            </ul>
            <div className="flex gap-3.5 mt-7">
              {[Facebook, Instagram, Phone, Mail].map((Ico, i) => (
                <span
                  key={i}
                  className="w-9 h-9 rounded-full border border-border-strong grid place-items-center text-espresso"
                >
                  <Ico size={16} strokeWidth={1.75} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
