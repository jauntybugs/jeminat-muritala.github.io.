
export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  problem: string;
  role: string;
  approach: string;
  outcome: string;
}

export interface ClientProject {
  name: string;
  industry: string;
  type: string;
  impact: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}
