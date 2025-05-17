
import { ProjectDetailsDisplay } from '@/components/projects/project-details-display';
import { getProjectDetailsBySlug } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectDetailsBySlug('focus-axis');
  if (!project) {
    return { title: 'Project Not Found | Focus-IN' }
  }
  return {
    title: `${project.title} - Ocular Measurement Tool | Focus-IN Projects`,
    description: project.description,
  };
}

export default function FocusAxisPage() {
  const project = getProjectDetailsBySlug('focus-axis');

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <ProjectDetailsDisplay project={project} />
    </div>
  );
}
