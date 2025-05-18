
import type { Resource } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CalendarDays } from 'lucide-react'; // Added CalendarDays
import { IconRenderer } from '@/components/shared/icon-renderer';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const isExternalLink = resource.link.startsWith('http');
  return (
    <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/50">
      <div className="relative h-48 w-full">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent)/0.7)] to-[hsl(var(--secondary)/0.7)] flex items-center justify-center p-4"
          >
            {resource.iconName && <IconRenderer iconName={resource.iconName} className="h-20 w-20 text-primary/60" />}
          </div>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{resource.title}</CardTitle>
          {/* Icon removed from here, now in image placeholder */}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
            <Badge variant="outline" className="w-fit capitalize">
            {resource.type === 'project-spotlight' ? 'Project Spotlight' : resource.type}
            </Badge>
            {resource.date && (
            <Badge variant="secondary" className="flex items-center gap-1">
                <CalendarDays className="h-3.5 w-3.5" />
                {new Date(resource.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </Badge>
            )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{resource.summary}</CardDescription>
         {resource.tags && resource.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {resource.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="default" className="shadow-md hover:shadow-lg transition-shadow">
          {isExternalLink ? (
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              Read More <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          ) : (
            <Link href={resource.link}>
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
