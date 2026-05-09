import Reveal from './Reveal';
import SectionEyebrow from './SectionEyebrow';
import SkillRow from './SkillRow';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '7rem 3rem', background: 'var(--surface)' }}>
      <SectionEyebrow num="03" label="Skills" />

      <div
        className="skills-layout"
        style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'start' }}
      >
        <Reveal delay={0.1}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
            The tools I use<br />
            to <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>build</em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ borderTop: '0.5px solid var(--border)' }}>
            {skills.map((skill) => (
              <SkillRow key={skill.name} {...skill} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
