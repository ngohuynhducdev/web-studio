/* global React */
const benefitsStyles = {
  wrap: { background: 'var(--sand-beige)', padding: '96px 0 96px' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 28px' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(28px, 2.6vw, 40px)', textAlign: 'center', color: 'var(--espresso)', margin: '0 0 48px', letterSpacing: '-0.01em' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 18 },
  card: {
    background: 'var(--ivory)',
    borderRadius: 24,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'var(--shadow-1)',
  },
  ph: { aspectRatio: '1 / 1', backgroundSize: 'cover', backgroundPosition: 'center' },
  body: { padding: '14px 14px 18px' },
  h: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 15, lineHeight: 1.2, color: 'var(--espresso)', margin: 0 },
  p: { fontSize: 12, lineHeight: 1.45, color: 'var(--bark)', marginTop: 6 },
};

const ITEMS = [
  { t: 'Feel Lighter & More Flexible', d: 'Want a flexible, healthy, and supple body', img: '../../assets/moodboard/phone-massage-can-help.webp', pos: 'center 40%' },
  { t: 'Enjoy Pain-Free Living', d: 'Living with physical ailments or chronic conditions', img: '../../assets/moodboard/tablet-after-massage.webp', pos: '40% 60%' },
  { t: 'Better Sleep & Energy', d: 'Experiencing poor sleep and waking up tired', img: '../../assets/moodboard/laptop-loving-touch.webp', pos: '70% center' },
  { t: 'Stress & Tension Relief', d: 'Frequently feeling stressed and unable to relax', img: '../../assets/moodboard/hero-laptop-meditation.webp', pos: '55% 45%' },
  { t: 'Build Self-Confidence', d: 'Frequently feeling self-confidence and decision making', img: '../../assets/moodboard/tablet-sophia-brown.webp', pos: 'center 30%' },
];

function Benefits() {
  return (
    <section style={benefitsStyles.wrap} id="benefits">
      <div style={benefitsStyles.inner}>
        <h2 style={benefitsStyles.title}>Massage Can Help You If You:</h2>
        <div style={benefitsStyles.grid}>
          {ITEMS.map((it, i) => (
            <div key={i} style={benefitsStyles.card}>
              <div style={{ ...benefitsStyles.ph, backgroundImage: `url('${it.img}')`, backgroundPosition: it.pos }} />
              <div style={benefitsStyles.body}>
                <h3 style={benefitsStyles.h}>{it.t}</h3>
                <p style={benefitsStyles.p}>{it.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Benefits = Benefits;
