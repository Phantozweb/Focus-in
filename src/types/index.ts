
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
  link: string;
  type: 'article' | 'video' | 'course' | 'website' | 'project-spotlight';
  iconName?: string;
}

export interface ProjectFeature {
  title: string;
  description: string;
  iconName?: string; // Make sure IconRenderer supports these names
}

export interface ProjectDetails {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  features: ProjectFeature[];
  iconName: string; // Make sure IconRenderer supports these names
}
