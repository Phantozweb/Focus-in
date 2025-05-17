
import { ProjectDetailsDisplay } from '@/components/projects/project-details-display';
import { getProjectDetailsBySlug } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectDetailsBySlug('focus-ai');
  if (!project) {
    return { title: 'Project Not Found | Focus-IN' }
  }
  return {
    title: `${project.title} - AI Diagnostic Tool | Focus-IN Projects`,
    description: project.description, // Using the main description for SEO
  };
}

export default function FocusAiPage() {
  const project = getProjectDetailsBySlug('focus-ai');

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <ProjectDetailsDisplay project={project} />
    </div>
  );
}
