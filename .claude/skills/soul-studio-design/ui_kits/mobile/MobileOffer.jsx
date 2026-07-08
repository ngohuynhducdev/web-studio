/* global React, PrimaryCta */
const { useState: mUseState } = React;

const mOfferStyles = {
  wrap: { background: 'var(--sand-beige)', padding: '0 22px 56px' },
  imgFrame: {
    borderRadius: '50% 50% 24px 24px / 60% 60% 24px 24px',
    overflow: 'hidden',
    aspectRatio: '1 / 0.95',
    marginBottom: 28,
  },
  img: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' },
  h: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, lineHeight: 1.1, color: 'var(--espresso)', margin: 0, textAlign: 'center', textWrap: 'balance' },
  sub: { fontSize: 13, color: 'var(--bark)', marginTop: 10, textAlign: 'center' },
  form: { display: 'grid', gap: 12, marginTop: 22 },
  field: {
    height: 52, borderRadius: 999, background: 'var(--ivory)',
    border: '1px solid transparent', padding: '0 22px',
    fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--espresso)',
    outline: 'none', width: '100%', boxSizing: 'border-box',
  },
  thanks: { fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--espresso)', marginTop: 16, textAlign: 'center' },
  ctaWrap: { display: 'flex', justifyContent: 'center', marginTop: 4 },
};

function MobileOffer() {
  const [submitted, setSubmitted] = mUseState(false);
  const submit = e => { e.preventDefault(); setSubmitted(true); };
  return (
    <section style={mOfferStyles.wrap} id="offer">
      <div style={mOfferStyles.imgFrame}>
        <img style={mOfferStyles.img} src="../../assets/moodboard/phone-offer-form.webp" alt="" />
      </div>
      <h2 style={mOfferStyles.h}>Enjoy 10% Off Your First Massage</h2>
      <div style={mOfferStyles.sub}>Fill out the form and I'll contact you</div>
      {!submitted ? (
        <form onSubmit={submit} style={mOfferStyles.form}>
          <input style={mOfferStyles.field} placeholder="Name*" required />
          <input style={mOfferStyles.field} placeholder="Email*" type="email" required />
          <div style={mOfferStyles.ctaWrap}><PrimaryCta>Book Your Massage</PrimaryCta></div>
        </form>
      ) : (
        <div style={mOfferStyles.thanks}>Thank you — Sophia will be in touch soon.</div>
      )}
    </section>
  );
}
window.MobileOffer = MobileOffer;
