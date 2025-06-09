
import { UpdatePostDisplay } from '@/components/updates/update-post-display';
import { getUpdateBySlug, getUpdatesData } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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

  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/updates">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Updates
            </Link>
          </Button>
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
  );
}
