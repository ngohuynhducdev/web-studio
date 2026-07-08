/* global React */
const mAfterStyles = {
  wrap: { background: 'var(--sand-beige)', padding: '0 22px 56px' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, lineHeight: 1.15, color: 'var(--espresso)', margin: '0 0 24px', textAlign: 'center', textWrap: 'balance' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gridAutoRows: '152px', gap: 10 },
  tile: { borderRadius: 18, overflow: 'hidden', position: 'relative', backgroundSize: 'cover', backgroundPosition: 'center' },
  card: {
    position: 'absolute', left: 10, right: 10, top: 10,
    background: 'var(--ivory)', borderRadius: 14, padding: '10px 12px',
  },
  num: { fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, color: 'var(--espresso)', lineHeight: 1 },
  cp:  { fontSize: 11, lineHeight: 1.4, color: 'var(--bark)', marginTop: 4 },
};

function MobileAfterMassage() {
  return (
    <section style={mAfterStyles.wrap}>
      <h2 style={mAfterStyles.title}>After Your Massage</h2>
      <div style={mAfterStyles.grid}>
        {/* Photo with overlaid 01 caption */}
        <div style={{ ...mAfterStyles.tile, backgroundImage: "url('../../assets/moodboard/tablet-after-massage.webp')", backgroundPosition: 'center 38%' }}>
          <div style={{ ...mAfterStyles.card, top: 'auto', bottom: 10 }}>
            <div style={mAfterStyles.num}>01</div>
            <div style={mAfterStyles.cp}>Experience deep relaxation and rest</div>
          </div>
        </div>
        {/* Ivory caption card 02 */}
        <div style={{ ...mAfterStyles.tile, background: 'var(--ivory)', padding: 14 }}>
          <div style={{ padding: 14 }}>
            <div style={mAfterStyles.num}>02</div>
            <div style={mAfterStyles.cp}>Step into a world of healing for your body and soul</div>
          </div>
        </div>
        {/* Photo */}
        <div style={{ ...mAfterStyles.tile, background: 'var(--ivory)', padding: 14 }}>
          <div style={{ padding: 14 }}>
            <div style={mAfterStyles.num}>03</div>
            <div style={mAfterStyles.cp}>Experience lightness in your muscles and joints</div>
          </div>
        </div>
        <div style={{ ...mAfterStyles.tile, backgroundImage: "url('../../assets/moodboard/laptop-loving-touch.webp')", backgroundPosition: '40% 50%' }}>
          <div style={{ ...mAfterStyles.card, top: 'auto', bottom: 10 }}>
            <div style={mAfterStyles.num}>04</div>
            <div style={mAfterStyles.cp}>Begin your journey of rejuvenation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.MobileAfterMassage = MobileAfterMassage;
