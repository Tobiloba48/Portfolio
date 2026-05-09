import { useState } from 'react';

const SkillRow = ({ name, level, dots }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.2rem 0.5rem', borderBottom: '0.5px solid var(--border)',
        background: hovered ? 'var(--gold-faint)' : 'transparent',
        transition: 'background .3s', cursor: 'default',
      }}
    >
      <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--text-primary)' }}>
        {name}
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          {level}
        </span>
        <div style={{ display: 'flex', gap: 4 }}>
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              style={{
                width: 5, height: 5, borderRadius: '50%',
                background: i < dots ? 'var(--gold)' : 'var(--border-2)',
                transition: 'background .2s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillRow;
