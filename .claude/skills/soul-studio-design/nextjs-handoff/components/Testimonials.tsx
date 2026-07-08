interface Testimonial {
  name: string;
  avatarGradient: string;
  quote: string;
}

const QUOTES: Testimonial[] = [
  {
    name: 'Anna M.',
    avatarGradient: 'linear-gradient(135deg,#cba98a,#3a2618)',
    quote:
      "Sofya is an amazing specialist. After her massage, my body thanks me for a whole week, and I also notice it becoming stronger. I love visiting Sonya — it's pure bliss.",
  },
  {
    name: 'Sabrina D.',
    avatarGradient: 'linear-gradient(135deg,#a48562,#251612)',
    quote:
      "The atmosphere in the studio is incredibly calming from the very first minute. Sofya's touch is both gentle and powerful, and after the session, I felt not only physical relief but also emotional balance. It's more than just a massage — it's therapy for the soul.",
  },
  {
    name: 'Augusto S.',
    avatarGradient: 'linear-gradient(135deg,#8e6a4a,#1e0f0b)',
    quote:
      "I've tried many massage therapists before, but Sofya's approach is truly unique. Each movement feels thoughtful and precise. My chronic back pain has eased, and I leave every session feeling lighter, more energized, and happier.",
  },
  {
    name: 'Olivia R.',
    avatarGradient: 'linear-gradient(135deg,#bb9774,#3d2418)',
    quote:
      'After only a few sessions my shoulders feel free again. The studio is a small sanctuary I look forward to every week. Sophia listens, adapts, and never rushes.',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-ivory pb-24">
      <div className="max-w-container mx-auto px-7">
        <h2 className="font-display font-medium text-espresso text-center mb-10
                       text-[clamp(28px,2.6vw,40px)] leading-[1.18] tracking-display">
          Client Testimonials
        </h2>

        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          {QUOTES.map((t) => (
            <article key={t.name} className="bg-ivory-soft rounded-3xl p-5 shadow-1">
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-9 h-9 rounded-full shrink-0"
                  style={{ background: t.avatarGradient }}
                  aria-hidden="true"
                />
                <div className="font-body font-semibold text-[13px] text-espresso">{t.name}</div>
              </div>
              <p className="text-[13px] leading-[1.55] text-bark">{t.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
