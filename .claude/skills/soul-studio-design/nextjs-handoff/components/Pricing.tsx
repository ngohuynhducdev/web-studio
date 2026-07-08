import Button from '@/components/Button';
import { cn } from '@/lib/cn';

interface Plan {
  name: string;
  price: string;
  features: Array<{ label: string; included: boolean }>;
}

const PLANS: Plan[] = [
  {
    name: 'Basic Plan',
    price: '$60 / session',
    features: [
      { label: '60-minute Traditional Massage', included: true },
      { label: 'Aromatic oils',                 included: true },
      { label: 'Hot herbal tea after session',  included: true },
      { label: 'Hot herbal compress',           included: false },
      { label: 'Foot reflexology',              included: false },
    ],
  },
  {
    name: 'Standard Plan',
    price: '$85 / session',
    features: [
      { label: '90-minute Traditional Massage', included: true },
      { label: 'Aromatic oils',                 included: true },
      { label: 'Hot herbal compress',           included: true },
      { label: 'Foot reflexology (15 min)',     included: true },
      { label: 'Hot stone therapy',             included: false },
    ],
  },
  {
    name: 'Premium Plan',
    price: '$120 / session',
    features: [
      { label: '120-minute Luxury Massage', included: true },
      { label: 'Aromatic oils',             included: true },
      { label: 'Hot herbal compress',       included: true },
      { label: 'Foot reflexology (15 min)', included: true },
      { label: 'Hot stone therapy',         included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-sand-beige py-24">
      <div className="max-w-[1100px] mx-auto px-7">
        <h2 className="font-display font-medium text-espresso text-center mb-12
                       text-[clamp(28px,2.6vw,40px)] leading-[1.18] tracking-display text-balance">
          Flexible Rates For Thai Massage Sessions
        </h2>

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {PLANS.map((p) => (
            <article key={p.name} className="bg-ivory rounded-[28px] p-7 shadow-2 flex flex-col">
              <div className="text-center text-[13px] text-bark tracking-[0.04em]">{p.name}</div>
              <div className="text-center font-display font-medium text-espresso text-[36px] mt-1 mb-4.5">
                {p.price}
              </div>
              <div className="h-px bg-border mb-4" />
              <ul className="space-y-2 mb-5">
                {p.features.map((f) => (
                  <li
                    key={f.label}
                    className={cn(
                      'flex items-center gap-2.5 text-[14px]',
                      f.included ? 'text-bark' : 'text-clay',
                    )}
                  >
                    <span
                      className={cn(
                        'w-2.5 h-2.5 rounded-full border border-border-strong shrink-0',
                        !f.included && 'opacity-45',
                      )}
                    />
                    {f.label}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-auto">
                <Button>Book Your Massage</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
