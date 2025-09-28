
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  disabled?: boolean;
}

export interface DropdownNavItem {
  href?: string;
  label: string;
  icon: LucideIcon;
  disabled?: boolean;
  children?: NavItem[];
}

export interface ProjectNavItem extends NavItem {
  description: string;
  status?: 'Paid' | 'Free' | 'Beta';
}

export interface ProjectFeature {
  title: string;
  description: string;
  iconName?: string;
}

export interface ProjectDetails {
  slug: string;
  title:string;
  tagline: string;
  description: string;
  longDescription?: string;
  features: ProjectFeature[];
  iconName: string;
  imageUrl: string;
}

export interface UpdatePost {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  content: string; // For simplicity, plain text or simple HTML-like strings. Markdown could be an enhancement.
  author?: string;
  tags?: string[];
  projectSlug?: string; // Optional: to link update to a specific project
}
