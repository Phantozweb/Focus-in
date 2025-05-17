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
  imageUrl: string;
  category: string;
  icon?: LucideIcon;
  dataAiHint?: string;
}

export interface Resource {
  id: string;
  title: string;
  summary: string;
  link: string;
  type: 'article' | 'video' | 'course' | 'website';
  imageUrl?: string;
  icon?: LucideIcon;
  dataAiHint?: string;
}

export interface ProjectDetails {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  features: { title: string, description: string, icon?: LucideIcon }[];
  icon: LucideIcon; // Icon for the project itself
  dataAiHint?: string;
  bannerImageUrl?: string;
  bannerDataAiHint?: string;
}
