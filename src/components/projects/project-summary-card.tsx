import type { ProjectDetails } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { IconRenderer } from '@/components/shared/icon-renderer';

interface ProjectSummaryCardProps {
  project: ProjectDetails;
}

export function ProjectSummaryCard({ project }: ProjectSummaryCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <IconRenderer iconName={project.iconName} className="h-7 w-7 text-primary flex-shrink-0" />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{project.tagline}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
          <Link href={`/projects/${project.slug}`}>
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
