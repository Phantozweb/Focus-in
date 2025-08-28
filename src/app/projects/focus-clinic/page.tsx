
import { ProjectDetailsDisplay } from '@/components/projects/project-details-display';
import { getProjectDetailsBySlug } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectDetailsBySlug('focus-clinic');
  if (!project) {
    return { title: 'Project Not Found' }
  }
  return {
    title: `${project.title} - Affordable Clinical Management for Optometry`,
    description: `Discover ${project.title}, a user-friendly clinical management system designed for smaller optometry practices. Manage patient records, appointments, and prescriptions efficiently.`,
  };
}

export default function FocusClinicPage() {
  const project = getProjectDetailsBySlug('focus-clinic');

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto container-padding py-12 md:py-16 space-y-12">
        <div className="mb-8">
            <Button variant="outline" asChild>
                <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
                </Link>
            </Button>
        </div>
        <ProjectDetailsDisplay project={project} />
    </div>
  );
}
