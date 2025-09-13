
import { SectionTitle } from '@/components/shared/section-title';
import { getUpdatesData } from '@/lib/constants';
import type { Metadata } from 'next';
import { UpdateSummaryCard } from '@/components/updates/update-summary-card';
import { AnimatedSection } from '@/components/shared/animated-section';

export const metadata: Metadata = {
  title: 'Updates | Focus-IN',
  description: 'Stay informed with the latest updates, news, and announcements from Focus-IN.',
};

export default function UpdatesPage() {
  const updates = getUpdatesData();

  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <SectionTitle
        title="Latest Updates"
        subtitle="Stay informed about our projects, new features, and community news."
      />
      {updates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update, index) => (
            <AnimatedSection key={update.slug} delay={index * 100} animationType="slide-up">
              <UpdateSummaryCard update={update} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            No updates available at the moment. Please check back later.
          </p>
        </div>
      )}
    </div>
  );
}
