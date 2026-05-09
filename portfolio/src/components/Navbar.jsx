import { useState, useEffect } from 'react';

const navLinks = ['About', 'Projects', 'Skills', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.4rem 3rem', zIndex: 100,
        borderBottom: scrolled ? '0.5px solid var(--border)' : '0.5px solid transparent',
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all .3s',
      }}
    >
      <a
        href="#hero"
        style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'var(--text-primary)', textDecoration: 'none' }}
      >
        I.<span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>A</span>
      </a>

      <ul className="nav-links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setHoveredLink(link)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontFamily: 'var(--mono)', fontSize: '10px',
                color: hoveredLink === link ? 'var(--gold)' : 'var(--text-muted)',
                textDecoration: 'none', letterSpacing: '0.15em', textTransform: 'uppercase',
                transition: 'color .2s',
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
