import { Language } from '../types';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectsGridProps {
  language: Language;
}

export function ProjectsGrid({ language }: ProjectsGridProps) {
  return (
    <div className="container mx-auto px-4">
      <div 
        data-testid="projects-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          width: '100%'
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            language={language}
          />
        ))}
      </div>
    </div>
  );
}