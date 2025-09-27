
import { ProjectSummaryCard } from '@/components/projects/project-summary-card';
import { PROJECTS_DETAILS_DATA } from '@/lib/constants';
import { SectionTitle } from '@/components/shared/section-title';
import { AnimatedSection } from '@/components/shared/animated-section';
import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Our Optometry Projects | AI Tools, Simulators & Learning Platforms',
  description: 'Explore all innovative optometry projects by Focus-IN. Discover our flagship AI tools like Focus.Ai, the Focus Axis JCC simulator, free audio lessons on Focus Cast, and other community-driven resources.',
};

export default function ProjectsOverviewPage() {
  const flagshipSlugs = ['focus-ai', 'focus-casex', 'focus-links', 'focuscast'];
  const flagshipProjects = PROJECTS_DETAILS_DATA.filter(p => flagshipSlugs.includes(p.slug));
  const communityProjects = PROJECTS_DETAILS_DATA.filter(p => !flagshipSlugs.includes(p.slug));

  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <SectionTitle
        title="Our Innovative Projects"
        subtitle="Discover the cutting-edge tools we're developing to advance the field of optometry."
      />

      {/* Flagship Projects Section */}
      <AnimatedSection animationType="slide-up" delay={100}>
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">Flagship Projects</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {flagshipProjects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 150} animationType="slide-up">
                <ProjectSummaryCard project={project} isFlagship />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <Separator className="my-12 md:my-16" />

      {/* Community-Driven Projects Section */}
      <AnimatedSection animationType="slide-up" delay={200}>
         <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">Community-Driven & In-Development</h2>
             <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-8">
                These projects are publicly available and continuously evolving based on valuable community feedback. Your insights help us upgrade, refine, and fix our tools to better serve your needs.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {communityProjects.map((project, index) => (
                <AnimatedSection key={project.slug} delay={index * 100} animationType="slide-up">
                    <ProjectSummaryCard project={project} />
                </AnimatedSection>
                ))}
            </div>
         </div>
      </AnimatedSection>

      {PROJECTS_DETAILS_DATA.length === 0 && (
        <p className="py-12 text-center text-lg text-muted-foreground">
          No projects available at the moment. Please check back later.
        </p>
      )}
    </div>
  );
}
