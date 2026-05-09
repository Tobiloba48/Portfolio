const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'flex-end', padding: '0 3rem 4rem',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Year */}
      <div style={{ position: 'absolute', top: '8rem', left: '3rem', fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--text-dim)', letterSpacing: '0.2em' }}>
        2025
      </div>

      {/* Vertical label */}
      <div
        className="hero-index"
        style={{ position: 'absolute', top: '50%', right: '3rem', transform: 'translateY(-50%)', fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--text-dim)', writingMode: 'vertical-rl', letterSpacing: '0.25em', textTransform: 'uppercase' }}
      >
        Frontend Developer
      </div>

      {/* Background letters */}
      <div
        className="hero-big-num"
        style={{ position: 'absolute', bottom: '-1rem', right: '-1rem', fontFamily: 'var(--serif)', fontSize: '18rem', fontWeight: 400, color: 'transparent', WebkitTextStroke: '0.5px #252525', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}
      >
        IA
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 800 }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--gold-dim)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.8rem', opacity: 0, animation: 'fadeUp .8s ease forwards .2s' }}>
          Available for work · Lagos, Nigeria
        </div>

        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem,7vw,6rem)', fontWeight: 400, lineHeight: 1.02, letterSpacing: '-0.02em', color: 'var(--text-primary)', opacity: 0, animation: 'fadeUp .9s ease forwards .4s' }}>
          Ibrahim<br />
          <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Abdulsalam</span>
        </h1>

        <p style={{ fontFamily: 'var(--serif2)', fontSize: '1.15rem', fontWeight: 300, color: 'var(--text-muted)', marginTop: '1.8rem', maxWidth: 480, lineHeight: 1.6, fontStyle: 'italic', opacity: 0, animation: 'fadeUp .9s ease forwards .6s' }}>
          Frontend developer crafting refined digital experiences — where clean code meets considered design.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '3rem', opacity: 0, animation: 'fadeUp .9s ease forwards .8s' }}>
          <a href="#projects" style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--black)', background: 'var(--gold)', border: 'none', padding: '0.9rem 2rem', textDecoration: 'none' }}>
            View Work
          </a>
          <a href="#contact" style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', textDecoration: 'none', borderBottom: '0.5px solid var(--border-2)', paddingBottom: 2 }}>
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll"
        style={{ position: 'absolute', bottom: '3rem', right: '3rem', display: 'flex', alignItems: 'center', gap: '0.8rem', fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--text-dim)', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0, animation: 'fadeIn 1s ease forwards 1.2s' }}
      >
        <span>Scroll</span>
        <div style={{ width: 40, height: '0.5px', background: 'var(--border-2)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: '-100%', top: 0, width: '100%', height: '100%', background: 'var(--gold-dim)', animation: 'scanline 2.2s ease-in-out infinite 1.8s' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
