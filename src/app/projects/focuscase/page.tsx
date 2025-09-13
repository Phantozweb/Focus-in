
import { ProjectDetailsDisplay } from '@/components/projects/project-details-display';
import { getProjectDetailsBySlug } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertTriangle, Rocket, Sparkles, Info, ArrowLeft } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb } from '@/components/shared/breadcrumb';

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectDetailsBySlug('focuscase');
  if (!project) {
    return { title: 'Project Not Found' }
  }
  return {
    title: `${project.title} - Interactive AI Case Studies for Optometry`,
    description: `Log clinical cases and practice with an AI learning assistant using ${project.title}. Get case summaries, Q&A, and viva practice, all with a focus on patient privacy.`,
  };
}

export default function FocusCasePage() {
  const project = getProjectDetailsBySlug('focuscase');

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: project.title, href: `/projects/${project.slug}` },
  ];

  return (
    <div className="container mx-auto container-padding py-12 md:py-16 space-y-12">
        <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
        </div>
      <ProjectDetailsDisplay project={project} />
      <Separator />
      <AnimatedSection animationType="slide-up" delay={100}>
        <Card className="shadow-lg border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Rocket className="h-7 w-7 text-primary" />
              Project Status: In Development
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              FocusCase is currently under active development. We are working hard to bring this innovative AI-powered learning and case logging tool to optometry students.
            </p>
            <div className="text-sm bg-accent/20 p-4 rounded-md border border-accent/30 flex items-start gap-3">
              <Info className="h-5 w-5 text-accent-foreground flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-accent-foreground">Stay Tuned:</h4>
                <p>We're excited about the potential of FocusCase to transform optometric learning. Follow our updates for news on its progress and upcoming beta opportunities!</p>
              </div>
            </div>
            <p className="font-semibold text-foreground">
              No data is stored with FocusCase — everything stays temporarily in your browser tab to ensure privacy and medical ethics.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild variant="default" className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">
                <a href="https://focuscase.netlify.app" target="_blank" rel="noopener noreferrer">
                    <Sparkles className="mr-2 h-5 w-5" /> Access Platform
                </a>
            </Button>
          </CardFooter>
        </Card>
      </AnimatedSection>
    </div>
  );
}
