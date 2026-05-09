const Footer = () => {
  return (
    <footer
      style={{
        padding: '2rem 3rem',
        borderTop: '0.5px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'var(--surface)',
      }}
    >
      <span style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', color: 'var(--text-dim)' }}>
        Ibrahim Abdulsalam
      </span>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>
        © 2025 · All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
