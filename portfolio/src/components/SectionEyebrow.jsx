import Reveal from './Reveal';

const SectionEyebrow = ({ num, label }) => (
  <Reveal>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--gold-dim)', letterSpacing: '0.15em' }}>
        {num}
      </span>
      <div style={{ flex: '0 0 40px', height: '0.5px', background: 'var(--border)' }} />
      <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        {label}
      </span>
    </div>
  </Reveal>
);

export default SectionEyebrow;
