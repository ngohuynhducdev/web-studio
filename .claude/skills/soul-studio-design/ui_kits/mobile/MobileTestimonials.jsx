/* global React */
const mTestStyles = {
  wrap: { background: 'var(--ivory)', padding: '0 0 56px' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, lineHeight: 1.15, color: 'var(--espresso)', margin: '0 0 24px', textAlign: 'center' },
  row: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: '78%',
    gap: 12,
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    padding: '0 22px 12px',
    WebkitOverflowScrolling: 'touch',
  },
  card: { background: 'var(--ivory-soft)', borderRadius: 20, padding: 18, boxShadow: 'var(--shadow-1)', scrollSnapAlign: 'start' },
  hd: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 },
  av: { width: 32, height: 32, borderRadius: 999, flex: '0 0 auto' },
  nm: { fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--espresso)' },
  q:  { fontSize: 13, lineHeight: 1.55, color: 'var(--bark)' },
};

const Q = [
  { name: 'Anna M.',    avBg: 'linear-gradient(135deg,#cba98a,#3a2618)', q: "Sofya is an amazing specialist. After her massage, my body thanks me for a whole week. I love visiting Sonya — it's pure bliss." },
  { name: 'Sabrina D.', avBg: 'linear-gradient(135deg,#a48562,#251612)', q: "The atmosphere is incredibly calming from the very first minute. Sofya's touch is both gentle and powerful — therapy for the soul." },
  { name: 'Augusto S.', avBg: 'linear-gradient(135deg,#8e6a4a,#1e0f0b)', q: "I've tried many therapists, but Sofya's approach is truly unique. Each movement feels thoughtful and precise." },
];

function MobileTestimonials() {
  return (
    <section style={mTestStyles.wrap} id="reviews">
      <h2 style={mTestStyles.title}>Client Testimonials</h2>
      <div style={mTestStyles.row}>
        {Q.map((t, i) => (
          <div key={i} style={mTestStyles.card}>
            <div style={mTestStyles.hd}>
              <div style={{ ...mTestStyles.av, background: t.avBg }}></div>
              <div style={mTestStyles.nm}>{t.name}</div>
            </div>
            <div style={mTestStyles.q}>{t.q}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.MobileTestimonials = MobileTestimonials;
