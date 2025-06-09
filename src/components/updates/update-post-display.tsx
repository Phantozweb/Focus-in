
import type { UpdatePost } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, UserCircle, Tag, Layers } from 'lucide-react'; // Added Layers for project link
import { Badge } from '@/components/ui/badge';
import Link from 'next/link'; // Added Link

interface UpdatePostDisplayProps {
  update: UpdatePost;
}

export function UpdatePostDisplay({ update }: UpdatePostDisplayProps) {
  const formattedDate = new Date(update.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-primary md:text-5xl">{update.title}</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
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
          {update.projectSlug && (
             <div className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                <Link href={`/projects/${update.projectSlug}`} className="hover:text-primary hover:underline">
                    Related Project: {update.projectSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Link>
            </div>
          )}
        </div>
        {update.tags && update.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {update.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
            ))}
          </div>
        )}
      </header>

      <Card className="shadow-lg">
        <CardContent className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert max-w-none p-6 pt-6"
          dangerouslySetInnerHTML={{ __html: update.content }}
        />
      </Card>
    </article>
  );
}
