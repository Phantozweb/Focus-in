
import { ResourceCard } from '@/components/resources/resource-card';
import { RESOURCES_DATA } from '@/lib/constants';
import { SectionTitle } from '@/components/shared/section-title';
import { AnimatedSection } from '@/components/shared/animated-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Spotlights & Updates | Focus-IN',
  description: 'Stay updated with the latest news, feature releases, and insights about Focus-IN projects. Explore spotlights on our innovative optometry tools and platforms.',
};

export default function ProjectSpotlightsPage() {
  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <SectionTitle
        title="Project Spotlights & Updates"
        subtitle="Explore in-depth insights and the latest news on our innovative optometry tools and platforms."
      />
      {RESOURCES_DATA.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES_DATA.map((resource, index) => (
            <AnimatedSection key={resource.id} delay={index * 100} animationType="slide-up">
                <ResourceCard resource={resource} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-lg text-muted-foreground">No project spotlights available at the moment. Please check back later.</p>
      )}
    </div>
  );
}
