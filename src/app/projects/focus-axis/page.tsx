
import { ProjectDetailsDisplay } from '@/components/projects/project-details-display';
import { getProjectDetailsBySlug } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertTriangle, Rocket, Sparkles, ArrowLeft } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Separator } from '@/components/ui/separator';


export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectDetailsBySlug('focus-axis');
  if (!project) {
    return { title: 'Project Not Found' }
  }
  return {
    title: 'Focus Axis | JCC Simulator for Accurate Optometry Refraction Training',
    description: `Master the Jackson Cross Cylinder (JCC) technique with the Focus Axis simulator. Our gamified training tool helps optometry students practice lens flipping and refine refraction skills in a realistic, risk-free environment.`,
  };
}

export default function FocusAxisPage() {
  const project = getProjectDetailsBySlug('focus-axis');

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
              <Rocket className="h-7 w-7 text-primary" />
              Availability & Beta Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Focus Axis is currently in Beta. We are actively working on refining the gamified training modules and simulation accuracy.
              Your feedback during this phase is invaluable!
            </p>
            <div className="text-sm bg-accent/20 p-4 rounded-md border border-accent/30 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-accent-foreground flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-accent-foreground">Beta Disclaimer:</h4>
                <p>As a beta product, Focus Axis may experience occasional bugs or limitations. Features and content are subject to change as we iterate based on user feedback.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" asChild variant="default" className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">
                <a href="https://focusaxis.netlify.app" target="_blank" rel="noopener noreferrer">
                    <Sparkles className="mr-2 h-5 w-5" /> Access Simulator
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
