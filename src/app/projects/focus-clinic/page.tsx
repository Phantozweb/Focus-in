
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
    title: 'Focus Clinic | Affordable Clinical Management System for Optometry',
    description: `Simplify your practice with Focus Clinic, a user-friendly and affordable clinical management system. Designed for smaller optometry practices to efficiently manage patient records, appointments, and prescriptions.`,
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
