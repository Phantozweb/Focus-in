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

// Removed Tool interface as it's no longer used for physical tools.
// Project details are covered by ProjectDetails.

export interface Resource {
  id: string;
  title: string;
  summary: string;
  link: string;
  type: 'article' | 'video' | 'course' | 'website';
  iconName?: string;
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
