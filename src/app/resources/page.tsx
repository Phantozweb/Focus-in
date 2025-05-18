
import { ResourceCard } from '@/components/resources/resource-card';
import { RESOURCES_DATA } from '@/lib/constants';
import { SectionTitle } from '@/components/shared/section-title';
import { AnimatedSection } from '@/components/shared/animated-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Spotlights | Focus-IN',
  description: 'Explore in-depth insights into our innovative optometry tools and platforms, including AI diagnostic tools, simulation software, and more. Powered by Focus-IN.',
};

export default function ProjectSpotlightsPage() {
  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <SectionTitle
        title="Project Spotlights"
        subtitle="Explore in-depth insights into our innovative optometry tools and platforms."
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
