import { ProjectDetailsDisplay } from '@/components/projects/project-details-display';
import { getProjectDetailsBySlug } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectDetailsBySlug('focus-axis');
  if (!project) {
    return { title: 'Project Not Found | Focus-In' }
  }
  return {
    title: `${project.title} | Focus-In Projects`,
    description: project.tagline,
  };
}

export default function FocusAxisPage() {
  const project = getProjectDetailsBySlug('focus-axis');

  if (!project) {
    notFound();
  }

  return <ProjectDetailsDisplay project={project} />;
}
