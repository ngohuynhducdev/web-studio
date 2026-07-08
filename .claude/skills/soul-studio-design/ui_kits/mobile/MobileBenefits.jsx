/* global React */
const mBenefitsStyles = {
  wrap: { background: 'var(--sand-beige)', padding: '56px 22px 56px' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, lineHeight: 1.15, color: 'var(--espresso)', margin: '0 0 28px', letterSpacing: '-0.01em', textWrap: 'balance' },
  stack: { display: 'grid', gap: 12 },
  card: {
    background: 'var(--ivory)',
    borderRadius: 20,
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '108px 1fr',
    boxShadow: 'var(--shadow-1)',
    minHeight: 108,
  },
  ph: { backgroundSize: 'cover', backgroundPosition: 'center' },
  body: { padding: '14px 16px' },
  h: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 15, lineHeight: 1.2, color: 'var(--espresso)', margin: 0 },
  p: { fontSize: 12, lineHeight: 1.5, color: 'var(--bark)', marginTop: 6 },
};

const ITEMS = [
  { t: 'Feel Lighter & More Flexible', d: 'Want a flexible, healthy, and supple body', img: '../../assets/moodboard/laptop-loving-touch.webp', pos: 'center 38%' },
  { t: 'Enjoy Pain-Free Living', d: 'Living with physical ailments or chronic conditions', img: '../../assets/moodboard/tablet-after-massage.webp', pos: '40% 60%' },
  { t: 'Better Sleep & Energy', d: 'Experiencing poor sleep and waking up tired', img: '../../assets/moodboard/hero-laptop-meditation.webp', pos: '55% 45%' },
  { t: 'Stress & Tension Relief', d: 'Frequently feeling stressed and unable to relax', img: '../../assets/moodboard/tablet-sophia-brown.webp', pos: 'center 30%' },
  { t: 'Build Self-Confidence', d: 'Frequently feeling self-confidence and decision making', img: '../../assets/moodboard/phone-offer-form.webp', pos: 'center 50%' },
];

function MobileBenefits() {
  return (
    <section style={mBenefitsStyles.wrap} id="benefits">
      <h2 style={mBenefitsStyles.title}>Massage Can Help You If You:</h2>
      <div style={mBenefitsStyles.stack}>
        {ITEMS.map((it, i) => (
          <div key={i} style={mBenefitsStyles.card}>
            <div style={{ ...mBenefitsStyles.ph, backgroundImage: `url('${it.img}')`, backgroundPosition: it.pos }} />
            <div style={mBenefitsStyles.body}>
              <h3 style={mBenefitsStyles.h}>{it.t}</h3>
              <p style={mBenefitsStyles.p}>{it.d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.MobileBenefits = MobileBenefits;
