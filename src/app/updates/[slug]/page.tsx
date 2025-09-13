
import { UpdatePostDisplay } from '@/components/updates/update-post-display';
import { getUpdateBySlug, getUpdatesData } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/breadcrumb';

interface UpdatePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: UpdatePageProps): Promise<Metadata> {
  const update = getUpdateBySlug(params.slug);
  if (!update) {
    return { title: 'Update Not Found | Focus-IN' };
  }
  return {
    title: `${update.title} | Focus-IN Updates`,
    description: update.excerpt,
    keywords: update.tags,
    openGraph: {
      title: `${update.title} | Focus-IN`,
      description: update.excerpt,
      type: 'article',
      publishedTime: new Date(update.date).toISOString(),
      authors: [update.author || 'The Focus-IN Team'],
      url: `https://focus-in.netlify.app/updates/${update.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${update.title} | Focus-IN`,
      description: update.excerpt,
    },
  };
}

export async function generateStaticParams() {
  const updates = getUpdatesData();
  return updates.map((update) => ({
    slug: update.slug,
  }));
}

export default function UpdatePostPage({ params }: UpdatePageProps) {
  const update = getUpdateBySlug(params.slug);

  if (!update) {
    notFound();
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Updates', href: '/updates' },
    { label: update.title, href: `/updates/${update.slug}` },
  ];
  
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://focus-in.netlify.app/updates/${update.slug}`,
    },
    headline: update.title,
    description: update.excerpt,
    author: {
      '@type': 'Organization',
      name: update.author || 'The Focus-IN Team',
      url: 'https://focus-in.netlify.app'
    },
    publisher: {
        '@type': 'Organization',
        name: 'Focus-IN',
        logo: {
          '@type': 'ImageObject',
          url: 'https://focus-in.netlify.app/icon.png', 
        },
    },
    datePublished: new Date(update.date).toISOString(),
  };

  return (
    <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <div className="container mx-auto container-padding py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <UpdatePostDisplay update={update} />
            <Separator className="my-12" />
            <div className="text-center">
              <Button asChild>
                <Link href="/updates">View All Updates</Link>
              </Button>
            </div>
          </div>
        </div>
    </>
  );
}
