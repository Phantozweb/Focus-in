
import { ResourceCard } from '@/components/resources/resource-card';
import { RESOURCES_DATA } from '@/lib/constants';
import { SectionTitle } from '@/components/shared/section-title';
import { AnimatedSection } from '@/components/shared/animated-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Optometry Learning Resources | Focus-IN',
  description: 'Access curated educational resources, articles, and courses designed for optometry students and professionals to enhance their knowledge and skills. Powered by Focus-IN.',
};

export default function ResourcesPage() {
  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <SectionTitle
        title="Learning Resources"
        subtitle="Explore our curated list of educational materials to support your optometry journey."
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
        <p className="py-12 text-center text-lg text-muted-foreground">No resources available at the moment. Please check back later.</p>
      )}
    </div>
  );
}
