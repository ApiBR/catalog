export interface Project {
  title: string;
  description: {
    [key in Language]: string;
  };
  slug: string;
  apiVersion: number;
  githubUrl: string;
}

export type Language = "pt-BR" | "en-US" | "es-ES";

export interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}
