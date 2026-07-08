/* global React */
const lovingTouchStyles = {
  wrap: { background: 'var(--ivory)', padding: '0 0 96px' },
  frame: {
    position: 'relative',
    maxWidth: 1200,
    margin: '0 auto',
    height: 460,
    borderRadius: 36,
    overflow: 'hidden',
    backgroundImage: "url('../../assets/moodboard/laptop-loving-touch.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center 55%',
    boxShadow: 'var(--shadow-2)',
  },
  scrim: { position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 40%, rgba(20,8,8,0.55) 70%)' },
  card: {
    position: 'absolute', right: 36, top: '50%', transform: 'translateY(-50%)',
    background: 'rgba(28, 16, 12, 0.62)',
    backdropFilter: 'blur(2px)',
    borderRadius: 24,
    padding: '28px 32px',
    maxWidth: 360,
    color: 'var(--ivory)',
  },
  h: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 30, lineHeight: 1.1, margin: 0 },
  p: { fontSize: 14, lineHeight: 1.6, marginTop: 12, color: 'rgba(255,248,241,0.85)' },
};

function LovingTouch() {
  return (
    <section style={lovingTouchStyles.wrap}>
      <div style={lovingTouchStyles.frame}>
        <div style={lovingTouchStyles.scrim}></div>
        <div style={lovingTouchStyles.card}>
          <h2 style={lovingTouchStyles.h}>Loving Through Touch</h2>
          <p style={lovingTouchStyles.p}>A professional massage therapist with extensive experience is ready to care for your physical and emotional well-being.</p>
        </div>
      </div>
    </section>
  );
}
window.LovingTouch = LovingTouch;
