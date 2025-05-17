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

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  iconName?: string; // Changed from icon
}

export interface Resource {
  id: string;
  title: string;
  summary: string;
  link: string;
  type: 'article' | 'video' | 'course' | 'website';
  iconName?: string; // Changed from icon
}

export interface ProjectFeature {
  title: string;
  description: string;
  iconName?: string; // Changed from icon
}

export interface ProjectDetails {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  // imageUrl: string; // Removed as per gradient change
  features: ProjectFeature[];
  iconName: string; // Changed from icon
  // dataAiHint?: string; // Removed
  // bannerImageUrl?: string; // Removed
  // bannerDataAiHint?: string; // Removed
}
