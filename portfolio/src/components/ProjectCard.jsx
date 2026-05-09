import { useState } from 'react';

const ProjectCard = ({ num, title, desc, tags, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--surface-2)' : 'var(--surface)',
        border: hovered ? '0.5px solid var(--gold-dim)' : '0.5px solid var(--border)',
        padding: '2rem', position: 'relative', overflow: 'hidden',
        textDecoration: 'none', display: 'block', color: 'inherit',
        cursor: 'none', transition: 'background .3s, border-color .3s',
      }}
    >
      {/* Hover overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,var(--gold-faint) 0%,transparent 60%)', opacity: hovered ? 1 : 0, transition: 'opacity .3s', pointerEvents: 'none' }} />

      <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--text-dim)', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>
        Project — {num}
      </div>

      <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-primary)', letterSpacing: '-0.01em', marginBottom: '0.8rem', lineHeight: 1.2 }}>
        {title}
      </h3>

      <p style={{ fontFamily: 'var(--serif2)', fontSize: '0.95rem', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.7, fontStyle: 'italic' }}>
        {desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
        {tags.map((tag) => (
          <span key={tag} style={{ fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--gold-dim)', letterSpacing: '0.12em', textTransform: 'uppercase', border: '0.5px solid var(--border-2)', padding: '3px 8px' }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <span style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', fontSize: '1.2rem', color: hovered ? 'var(--gold)' : 'var(--text-dim)', transform: hovered ? 'translate(2px,-2px)' : 'none', transition: 'color .2s, transform .2s' }}>
        ↗
      </span>
    </a>
  );
};

export default ProjectCard;
