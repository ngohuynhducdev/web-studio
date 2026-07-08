/* global React */
const mLovingStyles = {
  wrap: { background: 'var(--ivory)', padding: '0 22px 56px' },
  frame: {
    position: 'relative',
    aspectRatio: '0.66 / 1',
    borderRadius: 28,
    overflow: 'hidden',
    backgroundImage: "url('../../assets/moodboard/laptop-loving-touch.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: 'var(--shadow-2)',
  },
  scrim: { position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, rgba(20,8,8,0.8) 100%)' },
  card: {
    position: 'absolute', left: 16, right: 16, bottom: 16,
    background: 'rgba(28,16,12,0.55)',
    backdropFilter: 'blur(2px)',
    borderRadius: 18,
    padding: '16px 18px',
    color: 'var(--ivory)',
  },
  h: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 22, lineHeight: 1.15, margin: 0 },
  p: { fontSize: 12.5, lineHeight: 1.55, marginTop: 8, color: 'rgba(255,248,241,0.85)' },
};

function MobileLovingTouch() {
  return (
    <section style={mLovingStyles.wrap}>
      <div style={mLovingStyles.frame}>
        <div style={mLovingStyles.scrim}></div>
        <div style={mLovingStyles.card}>
          <h2 style={mLovingStyles.h}>Loving Through Touch</h2>
          <p style={mLovingStyles.p}>A professional massage therapist with extensive experience is ready to care for your physical and emotional well-being.</p>
        </div>
      </div>
    </section>
  );
}
window.MobileLovingTouch = MobileLovingTouch;
