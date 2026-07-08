/* global React */
const testimonialStyles = {
  wrap: { background: 'var(--ivory)', padding: '0 0 96px' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 28px' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(28px, 2.6vw, 40px)', textAlign: 'center', color: 'var(--espresso)', margin: '0 0 40px' },
  row: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 },
  card: { background: 'var(--ivory-soft)', borderRadius: 24, padding: 20, boxShadow: 'var(--shadow-1)' },
  hd: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 },
  av: { width: 36, height: 36, borderRadius: 999, backgroundSize: 'cover', backgroundPosition: 'center', flex: '0 0 auto' },
  nm: { fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--espresso)' },
  q:  { fontSize: 13, lineHeight: 1.55, color: 'var(--bark)' },
};

const Q = [
  { name: 'Anna M.',    avBg: 'linear-gradient(135deg,#cba98a,#3a2618)', q: "Sofya is an amazing specialist. After her massage, my body thanks me for a whole week, and I also notice it becoming stronger. I love visiting Sonya — it's pure bliss." },
  { name: 'Sabrina D.', avBg: 'linear-gradient(135deg,#a48562,#251612)', q: "The atmosphere in the studio is incredibly calming from the very first minute. Sofya's touch is both gentle and powerful, and after the session, I felt not only physical relief but also emotional balance. It's more than just a massage — it's therapy for the soul." },
  { name: 'Augusto S.', avBg: 'linear-gradient(135deg,#8e6a4a,#1e0f0b)', q: "I've tried many massage therapists before, but Sofya's approach is truly unique. Each movement feels thoughtful and precise. My chronic back pain has eased, and I leave every session feeling lighter, more energized, and happier." },
  { name: 'Olivia R.',  avBg: 'linear-gradient(135deg,#bb9774,#3d2418)', q: "Last night I dept couldn't I woke up immediately not usually, it hurts blades, but now my upper back. I felt like a bit like after a long are toned. Only a few sessions. Thank you." },
];

function Testimonials() {
  return (
    <section style={testimonialStyles.wrap} id="reviews">
      <div style={testimonialStyles.inner}>
        <h2 style={testimonialStyles.title}>Client Testimonials</h2>
        <div style={testimonialStyles.row}>
          {Q.map((t, i) => (
            <div key={i} style={testimonialStyles.card}>
              <div style={testimonialStyles.hd}>
                <div style={{ ...testimonialStyles.av, background: t.avBg }}></div>
                <div style={testimonialStyles.nm}>{t.name}</div>
              </div>
              <div style={testimonialStyles.q}>{t.q}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
