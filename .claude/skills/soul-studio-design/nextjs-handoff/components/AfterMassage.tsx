import Image from 'next/image';

interface Tile {
  num: string;
  caption: string;
}

const STEPS: Tile[] = [
  { num: '01', caption: 'Experience deep relaxation and rest' },
  { num: '02', caption: 'Step into a world of healing for your body and soul' },
  { num: '03', caption: 'Experience lightness in your muscles and joints' },
  { num: '04', caption: 'Begin your journey of rejuvenation and healing' },
];

function CaptionCard({ num, caption, className }: Tile & { className?: string }) {
  return (
    <div className={`bg-ivory rounded-[18px] px-3.5 py-3 ${className ?? ''}`}>
      <div className="font-display font-medium text-[22px] leading-none text-espresso">{num}</div>
      <div className="mt-1 text-[12px] leading-[1.4] text-bark">{caption}</div>
    </div>
  );
}

export default function AfterMassage() {
  return (
    <section className="bg-sand-beige pb-24">
      <div className="max-w-container mx-auto px-7">
        <h2 className="font-display font-medium text-espresso text-center mb-10
                       text-[clamp(28px,2.6vw,40px)] leading-[1.18] tracking-display">
          After Your Massage
        </h2>

        <div className="grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] [grid-auto-rows:180px]">
          {/* Tall photo with caption overlay (01) */}
          <div className="row-span-2 relative rounded-3xl overflow-hidden">
            <Image
              src="/images/moodboard/phone-massage-can-help.webp"
              alt=""
              fill
              className="object-cover object-[center_35%]"
              sizes="(min-width: 1024px) 280px, 50vw"
            />
            <CaptionCard {...STEPS[0]} className="absolute left-3.5 right-3.5 bottom-3.5" />
          </div>

          {/* Ivory caption tile (02) */}
          <div className="rounded-3xl bg-ivory p-4">
            <CaptionCard {...STEPS[1]} className="!p-0 !bg-transparent" />
          </div>

          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/moodboard/tablet-after-massage.webp"
              alt=""
              fill
              className="object-cover object-[50%_50%]"
              sizes="(min-width: 1024px) 280px, 50vw"
            />
          </div>

          {/* Ivory caption tile (04) */}
          <div className="rounded-3xl bg-ivory p-4">
            <CaptionCard {...STEPS[3]} className="!p-0 !bg-transparent" />
          </div>

          {/* Row 2: photo with caption (03) */}
          <div className="relative rounded-3xl overflow-hidden col-start-2">
            <Image
              src="/images/moodboard/laptop-loving-touch.webp"
              alt=""
              fill
              className="object-cover object-[40%_50%]"
              sizes="(min-width: 1024px) 280px, 50vw"
            />
            <CaptionCard {...STEPS[2]} className="absolute left-3.5 right-3.5 top-3.5" />
          </div>

          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/images/moodboard/hero-laptop-meditation.webp"
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
