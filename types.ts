export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  client: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface GrowthStrategyResponse {
  headline: string;
  growthPlan: string;
  techStack: string;
  focusAreas: string[];
}