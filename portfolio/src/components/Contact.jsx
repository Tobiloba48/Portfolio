import { useState } from 'react';
import Reveal from './Reveal';
import SectionEyebrow from './SectionEyebrow';
import { contactLinks } from '../data';

const ContactLink = ({ label, val, href }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 0', paddingLeft: hovered ? '0.5rem' : 0,
        borderBottom: '0.5px solid var(--border)',
        textDecoration: 'none', transition: 'padding-left .2s', cursor: 'none',
      }}
    >
      <span style={{ fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--text-dim)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        {label}
      </span>
      <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: hovered ? 'var(--gold)' : 'var(--text-primary)', transition: 'color .2s' }}>
        {val}
      </span>
      <span style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>↗</span>
    </a>
  );
};

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '7rem 3rem', background: 'var(--black)' }}>
      <SectionEyebrow num="04" label="Contact" />

      <div style={{ maxWidth: 680 }}>
        <Reveal>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
            Let's build something <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>together</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={{ fontFamily: 'var(--serif2)', fontSize: '1rem', fontWeight: 300, color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '3rem' }}>
            Open to freelance projects, full-time roles, and interesting collaborations. Don't hesitate to reach out.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ borderTop: '0.5px solid var(--border)' }}>
            {contactLinks.map((link) => (
              <ContactLink key={link.label} {...link} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
