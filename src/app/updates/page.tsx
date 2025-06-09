
import { UpdateSummaryCard } from '@/components/updates/update-summary-card';
import { getUpdatesData } from '@/lib/constants';
import { SectionTitle } from '@/components/shared/section-title';
import { AnimatedSection } from '@/components/shared/animated-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest Updates & News | Focus-IN',
  description: 'Stay informed with the latest updates, news, and announcements from Focus-IN. Learn about new features, project milestones, and insights for the optometry community.',
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
        <div className="space-y-8">
          {updates.map((update, index) => (
            <AnimatedSection key={update.slug} delay={index * 100} animationType="slide-up">
              <UpdateSummaryCard update={update} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-lg text-muted-foreground">
          No updates available at the moment. Please check back later.
        </p>
      )}
    </div>
  );
}
