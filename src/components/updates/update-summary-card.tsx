
import type { UpdatePost } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface UpdateSummaryCardProps {
  update: UpdatePost;
}

export function UpdateSummaryCard({ update }: UpdateSummaryCardProps) {
  const formattedDate = new Date(update.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/50 group">
      <CardHeader>
        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
          <Link href={`/updates/${update.slug}`}>{update.title}</Link>
        </CardTitle>
        <div className="flex items-center gap-x-4 gap-y-2 text-sm text-muted-foreground pt-1 flex-wrap">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          {update.author && (
            <div className="flex items-center gap-2">
              <UserCircle className="h-4 w-4" />
              <span>By {update.author}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{update.excerpt}</CardDescription>
        {update.tags && update.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {update.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="capitalize">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="default" className="shadow-sm hover:shadow-md transition-shadow group-hover:bg-primary/90">
          <Link href={`/updates/${update.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
