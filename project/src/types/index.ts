export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  category: 'fullstack' | 'frontend' | 'backend' | 'java';
}

export interface Skill {
  category: string;
  items: string[];
  icon: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export type Theme = 'light' | 'dark';