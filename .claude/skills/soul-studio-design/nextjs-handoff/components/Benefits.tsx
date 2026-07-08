import Image from 'next/image';

const ITEMS = [
  { t: 'Feel Lighter & More Flexible',  d: 'Want a flexible, healthy, and supple body',                        img: '/images/moodboard/phone-massage-can-help.webp', pos: 'center 40%' },
  { t: 'Enjoy Pain-Free Living',        d: 'Living with physical ailments or chronic conditions',              img: '/images/moodboard/tablet-after-massage.webp',    pos: '40% 60%' },
  { t: 'Better Sleep & Energy',         d: 'Experiencing poor sleep and waking up tired',                      img: '/images/moodboard/laptop-loving-touch.webp',     pos: '70% center' },
  { t: 'Stress & Tension Relief',       d: 'Frequently feeling stressed and unable to relax',                  img: '/images/moodboard/hero-laptop-meditation.webp',  pos: '55% 45%' },
  { t: 'Build Self-Confidence',         d: 'Building confidence and clarity in decision-making',               img: '/images/moodboard/tablet-sophia-brown.webp',     pos: 'center 30%' },
] as const;

export default function Benefits() {
  return (
    <section id="benefits" className="bg-sand-beige py-24">
      <div className="max-w-container mx-auto px-7">
        <h2 className="font-display font-medium text-espresso text-center mb-12
                       text-[clamp(28px,2.6vw,40px)] leading-[1.18] tracking-display">
          Massage Can Help You If You:
        </h2>
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
          {ITEMS.map((it) => (
            <article key={it.t} className="bg-ivory rounded-3xl overflow-hidden shadow-1 flex flex-col">
              <div className="relative aspect-square">
                <Image
                  src={it.img}
                  alt=""
                  fill
                  className="object-cover"
                  style={{ objectPosition: it.pos }}
                  sizes="(min-width: 1024px) 240px, 50vw"
                />
              </div>
              <div className="p-3.5 pb-4">
                <h3 className="font-display font-medium text-[15px] leading-[1.2] text-espresso">{it.t}</h3>
                <p className="mt-1.5 text-[12px] leading-[1.45] text-bark">{it.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
