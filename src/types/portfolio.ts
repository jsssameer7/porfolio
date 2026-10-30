export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'System' | 'E-Commerce' | 'Agriculture' | 'Comparison';
  description: string;
  fullDescription: string;
  image: string;
  keyFeatures: string[];
  technologies: string[];
  liveDemoUrl?: string;
  githubUrl: string;
  status: 'Live Demo' | 'In Development';
  highlights: string[];
  architectureNotes?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: string;
    yearsOrProjects: string;
    description: string;
    iconName?: string;
    snippet?: {
      language: string;
      code: string;
    };
  }[];
}

export interface AcademicMilestone {
  period: string;
  degree: string;
  institution: string;
  description: string;
  focusAreas: string[];
}
