import { ExternalLink, Code, BookOpen } from 'lucide-react';
import { Project, Language } from '../types';
import { translations } from '../data/translations';

interface ProjectCardProps {
  project: Project;
  language: Language;
}

export function ProjectCard({ project, language }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02] border border-gray-200">
      <div className="h-48 bg-[#009739] relative overflow-hidden">
        <img
          src={`/ui/project-images/${project.slug}.png`}
          alt={project.title}
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
        <p className="text-gray-600 mb-6">{project.description[language]}</p>
        
        <div className="space-y-3">
          <a
            href={`https://apibr.com/ui/${project.slug}/`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#009739]/10 hover:bg-[#009739]/20 text-[#009739] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="font-medium">{translations.openUI[language]}</span>
          </a>
          
          <a
            href={`https://apibr.com/${project.slug}/api/v${project.apiVersion}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#002776]/10 hover:bg-[#002776]/20 text-[#002776] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code className="w-4 h-4" />
            <span className="font-medium">{translations.viewAPI[language]}</span>
          </a>
          
          <a
            href={`https://apibr.com/${project.slug}/swagger`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FFCC29]/10 hover:bg-[#FFCC29]/20 text-[#997a19] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen className="w-4 h-4" />
            <span className="font-medium">{translations.swaggerUI[language]}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
