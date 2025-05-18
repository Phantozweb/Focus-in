
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  disabled?: boolean;
}

export interface ProjectNavItem extends NavItem {
  description: string;
}

export interface Resource {
  id: string;
  title: string;
  summary: string;
  link: string; // Link to the detailed project page or a specific blog post URL
  type: 'article' | 'video' | 'course' | 'website' | 'project-spotlight';
  iconName?: string;
  date?: string; // e.g., "2023-10-26"
  tags?: string[]; // e.g., ["New Feature", "Focus.AI", "Update"]
}

export interface ProjectFeature {
  title: string;
  description: string;
  iconName?: string; 
}

export interface ProjectDetails {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  features: ProjectFeature[];
  iconName: string; 
}
