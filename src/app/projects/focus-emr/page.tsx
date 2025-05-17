
import { ProjectDetailsDisplay } from '@/components/projects/project-details-display';
import { getProjectDetailsBySlug } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectDetailsBySlug('focus-emr');
  if (!project) {
    return { title: 'Project Not Found | Focus' }
  }
  return {
    title: `${project.title} | Focus Projects`,
    description: project.tagline,
  };
}

export default function FocusEmrPage() {
  const project = getProjectDetailsBySlug('focus-emr');

  if (!project) {
    notFound();
  }

  return <ProjectDetailsDisplay project={project} />;
}
