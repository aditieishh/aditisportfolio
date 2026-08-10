export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Real-Time' | 'AI Powered';
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
  keyHighlights: string[];
  featured?: boolean;
  demoType?: 'code-editor' | 'url-shortener' | 'ai-reviewer' | 'story-generator';
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: number; // 0-100
    badge?: string;
    description?: string;
  }[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  relevantCoursework: string[];
}

export interface Achievement {
  id: string;
  title: string;
  role: string;
  description: string;
  category: 'Speaker' | 'Competition' | 'Leadership' | 'Hackathon' | 'Problem Solving';
  badge: string;
}

export interface Certification {
  title: string;
  provider: string;
  badgeColor?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
