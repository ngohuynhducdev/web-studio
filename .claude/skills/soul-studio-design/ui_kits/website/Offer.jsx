/* global React, PrimaryCta */
const { useState } = React;

const offerStyles = {
  wrap: { background: 'var(--ivory)', padding: '0 0 96px' },
  inner: { maxWidth: 1100, margin: '0 auto', padding: '0 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56, alignItems: 'center' },
  h: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(28px, 2.8vw, 40px)', lineHeight: 1.1, color: 'var(--espresso)', margin: 0, textWrap: 'balance' },
  sub: { fontSize: 14, color: 'var(--bark)', marginTop: 16 },
  form: { display: 'grid', gap: 12, marginTop: 32, maxWidth: 420 },
  field: {
    height: 52, borderRadius: 999, background: 'var(--ivory-soft)',
    border: '1px solid transparent', padding: '0 22px',
    fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--espresso)',
    outline: 'none', width: '100%', boxSizing: 'border-box',
  },
  imgFrame: { borderRadius: '50% 50% 24px 24px / 60% 60% 24px 24px', overflow: 'hidden', aspectRatio: '1 / 1.05' },
  img: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' },
  thanks: { fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--espresso)', marginTop: 16 },
};

function Offer() {
  const [submitted, setSubmitted] = useState(false);
  const submit = e => { e.preventDefault(); setSubmitted(true); };
  return (
    <section style={offerStyles.wrap} id="offer">
      <div style={offerStyles.inner}>
        <div>
          <h2 style={offerStyles.h}>Enjoy 10% Off Your First Massage</h2>
          <div style={offerStyles.sub}>Fill out the form and I'll contact you</div>
          {!submitted ? (
            <form onSubmit={submit} style={offerStyles.form}>
              <input style={offerStyles.field} placeholder="Name*" required />
              <input style={offerStyles.field} placeholder="Email*" type="email" required />
              <div><PrimaryCta>Book Your Massage</PrimaryCta></div>
            </form>
          ) : (
            <div style={offerStyles.thanks}>Thank you — Sophia will be in touch soon.</div>
          )}
        </div>
        <div style={offerStyles.imgFrame}>
          <img style={offerStyles.img} src="../../assets/moodboard/phone-offer-form.webp" alt="A couple in white robes" />
        </div>
      </div>
    </section>
  );
}
window.Offer = Offer;
