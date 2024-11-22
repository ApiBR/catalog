export interface Project {
  title: string;
  slug: string;
  apiVersion: number;
}

export interface ProjectGridProps {
  projects: Project[];
}
