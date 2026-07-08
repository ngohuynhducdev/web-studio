/* global React, PrimaryCta */
const mPricingStyles = {
  wrap: { background: 'var(--sand-beige)', padding: '56px 0 56px' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, lineHeight: 1.15, color: 'var(--espresso)', margin: '0 22px 24px', textAlign: 'center', textWrap: 'balance' },
  row: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: '84%',
    gap: 12,
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    padding: '0 22px 12px',
    WebkitOverflowScrolling: 'touch',
  },
  card: { background: 'var(--ivory)', borderRadius: 24, padding: '22px 20px 20px', boxShadow: 'var(--shadow-2)', display: 'flex', flexDirection: 'column', scrollSnapAlign: 'start' },
  name: { textAlign: 'center', fontSize: 12, color: 'var(--bark)', letterSpacing: '0.04em' },
  price: { textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 500, margin: '2px 0 14px', color: 'var(--espresso)' },
  rule: { height: 1, background: 'var(--border)', margin: '0 0 14px' },
  list: { listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 7 },
  li: { fontSize: 13, color: 'var(--bark)', display: 'flex', alignItems: 'center', gap: 9 },
  dot: { width: 9, height: 9, borderRadius: 999, border: '1px solid var(--border-strong)', flex: '0 0 auto' },
  dim: { color: 'var(--clay)' },
  ctaWrap: { display: 'flex', justifyContent: 'center', marginTop: 'auto' },
};

const PLANS = [
  { name: 'Basic Plan',    price: '$60 / session',  feats: [['60-minute Traditional Massage', true], ['Aromatic oils', true], ['Hot herbal tea', true], ['Hot herbal compress', false], ['Foot reflexology', false]] },
  { name: 'Standart Plan', price: '$85 / session',  feats: [['90-minute Traditional Massage', true], ['Aromatic oils', true], ['Hot herbal compress', true], ['Foot reflexology (15 min)', true], ['Hot stone therapy', false]] },
  { name: 'Premium Plan',  price: '$120 / session', feats: [['120-minute Luxury Massage', true], ['Aromatic oils', true], ['Hot herbal compress', true], ['Foot reflexology (15 min)', true], ['Hot stone therapy', true]] },
];

function MobilePricing() {
  return (
    <section style={mPricingStyles.wrap} id="pricing">
      <h2 style={mPricingStyles.title}>Flexible Rates For Thai Massage Sessions</h2>
      <div style={mPricingStyles.row}>
        {PLANS.map((p, i) => (
          <div key={i} style={mPricingStyles.card}>
            <div style={mPricingStyles.name}>{p.name}</div>
            <div style={mPricingStyles.price}>{p.price}</div>
            <div style={mPricingStyles.rule}></div>
            <ul style={mPricingStyles.list}>
              {p.feats.map(([t, on], j) => (
                <li key={j} style={{ ...mPricingStyles.li, ...(on ? {} : mPricingStyles.dim) }}>
                  <span style={{ ...mPricingStyles.dot, opacity: on ? 1 : 0.45 }}></span>{t}
                </li>
              ))}
            </ul>
            <div style={mPricingStyles.ctaWrap}>
              <PrimaryCta>Book Your Massage</PrimaryCta>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.MobilePricing = MobilePricing;
