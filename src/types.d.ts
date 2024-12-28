export interface Project {
  title: string;
  description: string;
  slug: string;
  apiVersion: number;
}

export interface ProjectGridProps {
  projects: Project[];
}
