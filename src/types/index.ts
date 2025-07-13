export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  sourceUrl?: string;
  images?: string[];
  fullDescription?: string;
  challenges?: string;
}

export interface Skill {
  name: string;
  level: number;
  years: number;
  category: "frontend" | "backend" | "design" | "tools";
}