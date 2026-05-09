import Reveal from './Reveal';
import SectionEyebrow from './SectionEyebrow';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '7rem 3rem', background: 'var(--black)' }}>
      <SectionEyebrow num="02" label="Selected Work" />

      <div
        className="projects-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}
      >
        {projects.map((project, i) => (
          <Reveal key={project.num} delay={i * 0.15}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
