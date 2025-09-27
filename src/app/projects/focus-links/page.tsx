
import { ProjectDetailsDisplay } from '@/components/projects/project-details-display';
import { getProjectDetailsBySlug } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/shared/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Rocket, Info } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectDetailsBySlug('focus-links');
  if (!project) {
    return { title: 'Project Not Found' }
  }
  return {
    title: 'Focus Links | Your Central Hub for Essential Optometry Resources',
    description: `Access a curated collection of essential links, tools, and resources for optometry students and professionals with Focus Links. Your one-stop hub for academic and clinical information.`,
  };
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Focus Links',
  operatingSystem: 'WEB',
  applicationCategory: 'ReferenceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
};

export default function FocusLinksPage() {
  const project = getProjectDetailsBySlug('focus-links');

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: project.title, href: `/projects/${project.slug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
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
                Focus Links is currently under development. We are building a comprehensive, centralized hub for all the essential resources an optometry student could need.
              </p>
              <div className="text-sm bg-accent/20 p-4 rounded-md border border-accent/30 flex items-start gap-3">
                <Info className="h-5 w-5 text-accent-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-accent-foreground">Coming Soon:</h4>
                  <p>We are curating the best links and building an intuitive interface. Stay tuned for a tool that will streamline your access to information!</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-4">
               <Button size="lg" asChild variant="outline" className="w-full sm:w-auto" disabled>
                  <Link href="#">Access Platform (Coming Soon)</Link>
              </Button>
            </CardFooter>
          </Card>
        </AnimatedSection>
      </div>
    </>
  );
}
