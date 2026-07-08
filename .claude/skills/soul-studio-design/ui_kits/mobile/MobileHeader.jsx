/* global React, Icon */

const mHeaderStyles = {
  wrap: {
    position: 'sticky', top: 0, zIndex: 50,
    background: 'rgba(255,248,241,0.92)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    padding: '14px 18px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    borderBottom: '1px solid var(--border)',
  },
  wm: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 12, letterSpacing: '0.24em', color: 'var(--espresso)' },
  hamb: {
    width: 38, height: 38, borderRadius: 999,
    background: 'var(--sand-beige)', color: 'var(--espresso)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: 0, cursor: 'pointer',
  },
  sheetWrap: {
    position: 'fixed', inset: 0, zIndex: 100,
    pointerEvents: 'none',
  },
  scrim: {
    position: 'absolute', inset: 0,
    background: 'rgba(20,8,8,0.5)',
    transition: 'opacity 260ms cubic-bezier(.22,.61,.36,1)',
  },
  sheet: {
    position: 'absolute', top: 12, left: 12, right: 12,
    background: 'var(--ivory)',
    borderRadius: 28,
    padding: '20px 22px 22px',
    transition: 'transform 320ms cubic-bezier(.22,.61,.36,1), opacity 260ms ease',
    boxShadow: 'var(--shadow-3)',
  },
  sheetHd: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 },
  link: { display: 'block', padding: '14px 0', fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--espresso)', textDecoration: 'none', borderBottom: '1px solid var(--border)' },
  close: { width: 38, height: 38, borderRadius: 999, background: 'var(--espresso)', color: 'var(--ivory)', border: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' },
};

function MobileHeader() {
  const [open, setOpen] = React.useState(false);
  const items = ['Experience','Services','About','Therapist','Reviews','Pricing','Offer','Contact'];
  return (
    <React.Fragment>
      <header style={mHeaderStyles.wrap}>
        <div style={mHeaderStyles.wm}>SOUL&nbsp;&nbsp;STUDIO</div>
        <button style={mHeaderStyles.hamb} onClick={() => setOpen(true)} aria-label="Menu"><Icon name="menu" size={16} /></button>
      </header>
      <div style={{ ...mHeaderStyles.sheetWrap, pointerEvents: open ? 'auto' : 'none' }}>
        <div style={{ ...mHeaderStyles.scrim, opacity: open ? 1 : 0 }} onClick={() => setOpen(false)}></div>
        <div style={{ ...mHeaderStyles.sheet, transform: open ? 'translateY(0)' : 'translateY(-12px)', opacity: open ? 1 : 0 }}>
          <div style={mHeaderStyles.sheetHd}>
            <div style={mHeaderStyles.wm}>SOUL&nbsp;&nbsp;STUDIO</div>
            <button style={mHeaderStyles.close} onClick={() => setOpen(false)} aria-label="Close"><Icon name="x" size={16} /></button>
          </div>
          {items.map((s, i) => (
            <a key={s} href={'#' + s.toLowerCase()} style={{ ...mHeaderStyles.link, ...(i === items.length - 1 ? { borderBottom: 0 } : {}) }} onClick={() => setOpen(false)}>{s}</a>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
window.MobileHeader = MobileHeader;
