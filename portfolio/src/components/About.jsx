import Reveal from './Reveal';
import SectionEyebrow from './SectionEyebrow';
import { stats } from '../data';

const About = () => {
  return (
    <section id="about" style={{ padding: '7rem 3rem', background: 'var(--surface)' }}>
      <SectionEyebrow num="01" label="About" />

      <div
        className="about-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start' }}
      >
        {/* Left — headline + stats */}
        <Reveal delay={0.1}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Building interfaces<br />
            that <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>feel</em> as good<br />
            as they look
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, marginTop: '2.5rem', border: '0.5px solid var(--border)' }}>
            {stats.map(({ num, label }) => (
              <div key={label} style={{ padding: '1.2rem 1.4rem', border: '0.5px solid var(--border)', background: 'var(--surface-2)' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 400, color: 'var(--gold)', lineHeight: 1 }}>{num}</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '0.4rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right — bio */}
        <Reveal delay={0.2}>
          <div style={{ fontFamily: 'var(--serif2)', fontSize: '1.05rem', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <p>I'm Ibrahim — a frontend developer based in Lagos with a passion for turning ideas into polished, performant web experiences. I work primarily with React, JavaScript, HTML and CSS, focusing on interfaces that are both functional and beautifully crafted.</p>
            <p>My approach is deliberate: I believe every pixel, transition, and interaction has an opportunity to communicate something. Good frontend work is invisible — it just feels right.</p>
            <p>When I'm not writing code, I'm studying design systems, pushing pixels around, and thinking about what makes the web delightful to use.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
