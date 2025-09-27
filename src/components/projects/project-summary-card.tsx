
import type { ProjectDetails } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Flag } from 'lucide-react';
import { IconRenderer } from '@/components/shared/icon-renderer';
import { Badge } from '@/components/ui/badge';

interface ProjectSummaryCardProps {
  project: ProjectDetails;
  isFlagship?: boolean;
}

export function ProjectSummaryCard({ project, isFlagship = false }: ProjectSummaryCardProps) {
  const isPaid = project.slug === 'focus-ai';

  return (
    <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl pr-4">{project.title}</CardTitle>
          <div className="flex flex-col items-end flex-shrink-0">
            <IconRenderer iconName={project.iconName} className="h-7 w-7 text-primary" />
            {isFlagship && <Flag className="h-5 w-5 text-primary mt-1" fill="currentColor" />}
          </div>
        </div>
        {(isPaid) && (
          <div className="pt-1">
            <Badge variant={"default"}>{isPaid ? "Paid" : "Free"}</Badge>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{project.tagline}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="default" size="sm" className="shadow-sm hover:shadow-md transition-shadow">
          <Link href={`/projects/${project.slug}`}>
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
