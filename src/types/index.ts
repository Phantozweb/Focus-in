
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
  id: string; // Unique identifier for the resource/post
  slug: string; // URL-friendly slug
  title: string;
  summary: string; // Short summary for card display
  fullContent: string; // Full content for the individual post page
  link: string; // Link to the individual spotlight post page, e.g., /resources/post-slug
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
