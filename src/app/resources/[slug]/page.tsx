
import { getResourceBySlug, RESOURCES_DATA } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Tag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { IconRenderer } from '@/components/shared/icon-renderer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface SpotlightPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return RESOURCES_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: SpotlightPostPageProps): Promise<Metadata> {
  const post = getResourceBySlug(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found | Focus-IN Spotlights',
      description: 'The requested spotlight post could not be found.',
    };
  }
  return {
    title: `${post.title} | Focus-IN Spotlights`,
    description: post.summary,
  };
}

export default function SpotlightPostPage({ params }: SpotlightPostPageProps) {
  const post = getResourceBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Simple content formatting: split by newline and wrap in <p>
  const formattedContent = post.fullContent.split('\n').map((paragraph, index) => (
    paragraph.trim() === '' ? <br key={index} /> : <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
  ));

  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <article className="max-w-3xl mx-auto">
        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="pb-4">
            <div className="mb-4">
              {post.iconName && (
                 <div className="mb-3 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconRenderer iconName={post.iconName} className="h-8 w-8 text-primary" />
                 </div>
              )}
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                {post.title}
              </CardTitle>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {post.date && (
                <div className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-1.5">
                  <Tag className="h-4 w-4" />
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              )}
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="py-6 md:py-8 text-base md:text-lg text-foreground">
            {formattedContent}
          </CardContent>
          <CardFooter>
             <Button asChild variant="outline">
                <Link href="/resources">
                    Back to All Spotlights
                </Link>
             </Button>
          </CardFooter>
        </Card>
      </article>
    </div>
  );
}
