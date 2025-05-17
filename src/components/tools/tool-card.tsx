import type { Tool } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { IconRenderer } from '@/components/shared/icon-renderer';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/50">
      <div className="relative h-48 w-full">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))]"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
            <CardTitle className="text-xl">{tool.name}</CardTitle>
            <IconRenderer iconName={tool.iconName} className="h-6 w-6 text-primary" />
        </div>
        <Badge variant="secondary" className="w-fit">{tool.category}</Badge>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{tool.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
          <Link href={`/tools/${tool.id}`}> 
            Learn More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
