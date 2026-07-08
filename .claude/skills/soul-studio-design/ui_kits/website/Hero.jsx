/* global React, PrimaryCta */
const heroStyles = {
  wrap: { background: 'var(--ivory)', padding: '64px 0 96px' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '0 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 56, alignItems: 'center' },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(40px, 4.6vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.01em', color: 'var(--espresso)', margin: 0, textWrap: 'balance' },
  sub: { fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--bark)', lineHeight: 1.55, marginTop: 28, maxWidth: 440 },
  ctaWrap: { marginTop: 36 },
  imgFrame: {
    aspectRatio: '1.1 / 1',
    borderRadius: 32,
    overflow: 'hidden',
    boxShadow: 'var(--shadow-2)',
    background: 'var(--bg-deep)',
  },
  img: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% center', display: 'block' },
};

function Hero() {
  return (
    <section style={heroStyles.wrap}>
      <div style={heroStyles.inner}>
        <div>
          <h1 style={heroStyles.h1}>
            Immerse <em style={{ fontStyle: 'italic', fontWeight: 500 }}>Yourself</em> In The Atmosphere Of Thai Relaxation And Harmony
          </h1>
          <p style={heroStyles.sub}>
            SOUL STUDIO Thai Massage offers you unique treatments and a true journey into the world of Thai culture and healing.
          </p>
          <div style={heroStyles.ctaWrap}>
            <PrimaryCta>Begin a New Chapter</PrimaryCta>
          </div>
        </div>
        <div style={heroStyles.imgFrame}>
          <img style={heroStyles.img} src="../../assets/moodboard/hero-laptop-meditation.webp" alt="Meditation in a Thai-inspired space" />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
