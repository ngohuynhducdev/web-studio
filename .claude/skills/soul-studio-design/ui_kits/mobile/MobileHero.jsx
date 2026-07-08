/* global React, PrimaryCta */
const mHeroStyles = {
  wrap: { background: 'var(--ivory)', padding: '32px 22px 56px' },
  h1: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 36, lineHeight: 1.08, letterSpacing: '-0.01em', color: 'var(--espresso)', margin: 0, textWrap: 'balance' },
  sub: { fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--bark)', lineHeight: 1.6, marginTop: 18 },
  ctaWrap: { marginTop: 24 },
  imgFrame: {
    marginTop: 28,
    aspectRatio: '1.05 / 1',
    borderRadius: 28,
    overflow: 'hidden',
    boxShadow: 'var(--shadow-2)',
    background: 'var(--bg-deep)',
  },
  img: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% center', display: 'block' },
};

function MobileHero() {
  return (
    <section style={mHeroStyles.wrap}>
      <h1 style={mHeroStyles.h1}>
        Immerse <em style={{ fontStyle: 'italic', fontWeight: 500 }}>Yourself</em> In The Atmosphere Of Thai Relaxation
      </h1>
      <p style={mHeroStyles.sub}>SOUL STUDIO Thai Massage offers you unique treatments and a true journey into the world of Thai culture and healing.</p>
      <div style={mHeroStyles.ctaWrap}>
        <PrimaryCta>Begin a New Chapter</PrimaryCta>
      </div>
      <div style={mHeroStyles.imgFrame}>
        <img style={mHeroStyles.img} src="../../assets/moodboard/hero-laptop-meditation.webp" alt="Meditation" />
      </div>
    </section>
  );
}
window.MobileHero = MobileHero;
