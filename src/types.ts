export type Language = 'fr' | 'en';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: 'web' | 'mobile' | 'package' | 'fintech' | 'saas';
  tags: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  packageUrl?: string;
  stars?: number;
  role: string;
  year: string;
  highlights: string[];
  architecture: string[];
  metrics?: { label: string; value: string }[];
  imagePlaceholderGradient: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: { fr: string; en: string };
  icon: string;
  skills: {
    name: string;
    level: number; // 0-100
    experience: string;
    description: { fr: string; en: string };
    popularUse?: string;
    highlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: { fr: string; en: string };
  company: string;
  location: string;
  period: string;
  type: { fr: string; en: string };
  description: { fr: string; en: string };
  achievements: { fr: string[]; en: string[] };
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: { fr: string; en: string };
  institution: string;
  location: string;
  year: string;
  description: { fr: string; en: string };
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  content: { fr: string; en: string };
  avatarInitial: string;
  rating: number;
}
