
import { ProjectDetailsDisplay } from '@/components/projects/project-details-display';
import { getProjectDetailsBySlug } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Headphones, PlayCircle, Sparkles, ArrowLeft } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Separator } from '@/components/ui/separator';

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectDetailsBySlug('focuscast');
  if (!project) {
    return { title: 'Project Not Found' }
  }
  return {
    title: 'Focus Cast | Free Optometry Audio Lessons & Exam Prep On-the-Go',
    description: `Learn optometry on the go with Focus Cast. Access free, bite-sized audio episodes covering clinical topics, exam prep, and more. Perfect for screen-free learning for busy students.`,
  };
}

export default function FocuscastPage() {
  const project = getProjectDetailsBySlug('focuscast');

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
      <Separator />
      <AnimatedSection animationType="slide-up" delay={100}>
        <Card className="shadow-lg border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <PlayCircle className="h-7 w-7 text-primary" />
              Listen Now
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Focuscast is live and ready for you to tune in! Access all episodes for free, with no login required.
            </p>
            <p>
              Whether you're commuting, taking a break, or winding down, make Focuscast your go-to audio resource for optometry learning.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild variant="default" className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">
                <a href="https://focuscast.netlify.app" target="_blank" rel="noopener noreferrer">
                    <Headphones className="mr-2 h-5 w-5" /> Access Platform
                </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto shadow-sm hover:shadow-md transition-shadow">
              <Link href="/support">Provide Feedback</Link>
            </Button>
          </CardFooter>
        </Card>
      </AnimatedSection>
    </div>
  );
}
