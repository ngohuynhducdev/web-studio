/* global React, PrimaryCta */
const pricingStyles = {
  wrap: { background: 'var(--sand-beige)', padding: '96px 0' },
  inner: { maxWidth: 1100, margin: '0 auto', padding: '0 28px' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(28px, 2.6vw, 40px)', textAlign: 'center', color: 'var(--espresso)', margin: '0 0 48px', textWrap: 'balance' },
  row: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 },
  card: { background: 'var(--ivory)', borderRadius: 28, padding: '28px 26px 26px', boxShadow: 'var(--shadow-2)', display: 'flex', flexDirection: 'column' },
  name: { textAlign: 'center', fontSize: 13, color: 'var(--bark)', letterSpacing: '0.04em' },
  price: { textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 500, margin: '4px 0 18px', color: 'var(--espresso)' },
  rule: { height: 1, background: 'var(--border)', margin: '0 0 16px' },
  list: { listStyle: 'none', padding: 0, margin: '0 0 22px', display: 'grid', gap: 8 },
  li: { fontSize: 14, color: 'var(--bark)', display: 'flex', alignItems: 'center', gap: 10 },
  dot: { width: 10, height: 10, borderRadius: 999, border: '1px solid var(--border-strong)', flex: '0 0 auto' },
  dim: { color: 'var(--clay)' },
  ctaWrap: { display: 'flex', justifyContent: 'center', marginTop: 'auto' },
};

const PLANS = [
  { name: 'Basic Plan',    price: '$60 / session',  feats: [['60-minute Traditional Massage', true], ['Aromatic oils', true], ['Hot herbal tea after session', true], ['Hot herbal compress', false], ['Foot reflexology', false]] },
  { name: 'Standart Plan', price: '$85 / session',  feats: [['90-minute Traditional Massage', true], ['Aromatic oils', true], ['Hot herbal compress', true], ['Foot reflexology (15 min)', true], ['Hot stone therapy', false]] },
  { name: 'Premium Plan',  price: '$120 / session', feats: [['120-minute Luxury Massage', true], ['Aromatic oils', true], ['Hot herbal compress', true], ['Foot reflexology (15 min)', true], ['Hot stone therapy', true]] },
];

function Pricing() {
  return (
    <section style={pricingStyles.wrap} id="pricing">
      <div style={pricingStyles.inner}>
        <h2 style={pricingStyles.title}>Flexible Rates For Thai Massage Sessions</h2>
        <div style={pricingStyles.row}>
          {PLANS.map((p, i) => (
            <div key={i} style={pricingStyles.card}>
              <div style={pricingStyles.name}>{p.name}</div>
              <div style={pricingStyles.price}>{p.price}</div>
              <div style={pricingStyles.rule}></div>
              <ul style={pricingStyles.list}>
                {p.feats.map(([t, on], j) => (
                  <li key={j} style={{ ...pricingStyles.li, ...(on ? {} : pricingStyles.dim) }}>
                    <span style={{ ...pricingStyles.dot, opacity: on ? 1 : 0.45 }}></span>{t}
                  </li>
                ))}
              </ul>
              <div style={pricingStyles.ctaWrap}>
                <PrimaryCta>Book Your Massage</PrimaryCta>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
