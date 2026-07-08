/* global React */
const harmonyStyles = {
  wrap: { background: 'var(--sand-beige)', padding: '0 0 96px' },
  inner: { maxWidth: 720, margin: '0 auto', padding: '0 28px', textAlign: 'left' },
  h: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(32px, 3.4vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--espresso)', margin: 0, textWrap: 'balance' },
  p: { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--bark)', marginTop: 24, maxWidth: 520, marginLeft: 'auto' },
};

function HarmonyIntro() {
  return (
    <section style={harmonyStyles.wrap}>
      <div style={harmonyStyles.inner}>
        <h2 style={harmonyStyles.h}>A Place Where Stress Fades<br />And Harmony Begins</h2>
        <p style={harmonyStyles.p}>
          Experience the healing power of Thai massage — a blend of tradition and care designed to release stress, improve circulation, and restore inner peace. Each session is a journey toward balance, clarity, and deep renewal.
        </p>
      </div>
    </section>
  );
}
window.HarmonyIntro = HarmonyIntro;
