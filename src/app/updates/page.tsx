
import { SectionTitle } from '@/components/shared/section-title';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Updates | Focus-IN',
  description: 'Stay informed with the latest updates, news, and announcements from Focus-IN.',
};

export default function UpdatesPage() {
  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <SectionTitle
        title="Latest Updates"
        subtitle="Stay informed about our projects, new features, and community news."
      />
      <div className="text-center py-16">
        <p className="text-muted-foreground">
          No updates available at the moment. Please check back later.
        </p>
      </div>
    </div>
  );
}
