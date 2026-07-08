/* global React */
const afterStyles = {
  wrap: { background: 'var(--sand-beige)', padding: '0 0 96px' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 28px' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(28px, 2.6vw, 40px)', textAlign: 'center', color: 'var(--espresso)', margin: '0 0 40px' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gridAutoRows: '180px',
    gap: 14,
  },
  tile: { borderRadius: 24, overflow: 'hidden', position: 'relative', backgroundSize: 'cover', backgroundPosition: 'center' },
  card: {
    position: 'absolute', left: 14, right: 14, top: 14,
    background: 'var(--ivory)',
    borderRadius: 18,
    padding: '12px 14px',
  },
  num: { fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--espresso)', lineHeight: 1 },
  cp:  { fontSize: 12, lineHeight: 1.4, color: 'var(--bark)', marginTop: 4 },
};

function AfterMassage() {
  return (
    <section style={afterStyles.wrap}>
      <div style={afterStyles.inner}>
        <h2 style={afterStyles.title}>After Your Massage</h2>
        <div style={afterStyles.grid}>
          {/* col 1 — tall left, woman with towel */}
          <div style={{ ...afterStyles.tile, gridRow: 'span 2', backgroundImage: "url('../../assets/moodboard/phone-massage-can-help.webp')", backgroundPosition: 'center 35%' }}>
            <div style={{ ...afterStyles.card, top: 'auto', bottom: 14 }}>
              <div style={afterStyles.num}>01</div>
              <div style={afterStyles.cp}>Experience deep relaxation and rest</div>
            </div>
          </div>
          {/* col 2 — top: 02 card, bottom: photo */}
          <div style={{ ...afterStyles.tile, background: 'var(--ivory)' }}>
            <div style={{ position: 'relative', padding: '18px 18px', height: '100%' }}>
              <div style={afterStyles.num}>02</div>
              <div style={afterStyles.cp}>Step into a world of healing for your body and soul</div>
            </div>
          </div>
          {/* col 3 — top: photo, bottom: 03 */}
          <div style={{ ...afterStyles.tile, backgroundImage: "url('../../assets/moodboard/tablet-after-massage.webp')", backgroundPosition: '50% 50%' }} />
          {/* col 4 — top: 04 card, bottom: man with mask */}
          <div style={{ ...afterStyles.tile, background: 'var(--ivory)' }}>
            <div style={{ padding: 18 }}>
              <div style={afterStyles.num}>04</div>
              <div style={afterStyles.cp}>Begin your journey of rejuvenation and healing</div>
            </div>
          </div>
          {/* row 2 */}
          <div style={{ ...afterStyles.tile, backgroundImage: "url('../../assets/moodboard/laptop-loving-touch.webp')", backgroundPosition: '40% 50%' }}>
            <div style={{ ...afterStyles.card, background: 'var(--ivory)' }}>
              <div style={afterStyles.num}>03</div>
              <div style={afterStyles.cp}>Experience lightness in your muscles and joints</div>
            </div>
          </div>
          <div style={{ ...afterStyles.tile, backgroundImage: "url('../../assets/moodboard/hero-laptop-meditation.webp')", backgroundPosition: '60% 50%' }} />
        </div>
      </div>
    </section>
  );
}
window.AfterMassage = AfterMassage;
