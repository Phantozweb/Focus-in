import type { Resource } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const IconComponent = resource.icon;
  return (
    <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/50">
      {resource.imageUrl && (
        <div className="relative h-48 w-full">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--secondary))]"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{resource.title}</CardTitle>
          {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
        </div>
        <Badge variant="outline" className="w-fit capitalize">{resource.type}</Badge>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{resource.summary}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="default" className="shadow-md hover:shadow-lg transition-shadow">
          <Link href={resource.link} target="_blank" rel="noopener noreferrer">
            Access Resource <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
