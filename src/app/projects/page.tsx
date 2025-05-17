import { ProjectSummaryCard } from '@/components/projects/project-summary-card';
import { PROJECTS_DETAILS_DATA } from '@/lib/constants';
import { SectionTitle } from '@/components/shared/section-title';
import { AnimatedSection } from '@/components/shared/animated-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects | Focus-In',
  description: 'Explore innovative projects by Focus-In, including Focus.Ai, Focus Axis, Focus CaseX, Focus Share, and Focus Gen.',
};

export default function ProjectsOverviewPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        title="Our Innovative Projects"
        subtitle="Discover the cutting-edge projects we're developing to advance the field of optometry."
      />
      {PROJECTS_DETAILS_DATA.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_DETAILS_DATA.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 100} animationType="slide-up">
                <ProjectSummaryCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-lg text-muted-foreground">
          No projects available at the moment. Please check back later.
        </p>
      )}
    </div>
  );
}
