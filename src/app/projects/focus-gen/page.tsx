
import { ProjectDetailsDisplay } from '@/components/projects/project-details-display';
import { getProjectDetailsBySlug } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectDetailsBySlug('focus-gen');
  if (!project) {
    return { title: 'Project Not Found' }
  }
  return {
    title: `${project.title} - Optical Transposition Sum Generator`,
    description: `Practice and master optical calculations with ${project.title}. An essential tool for optometry students to generate and solve transposition sums.`,
  };
}

export default function FocusGenPage() {
  const project = getProjectDetailsBySlug('focus-gen');

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <ProjectDetailsDisplay project={project} />
    </div>
  );
}
