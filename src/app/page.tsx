import { HeroSection } from '@/components/home/hero-section';
import { FeatureGrid } from '@/components/home/feature-grid';
import { SectionTitle } from '@/components/shared/section-title';
import { Layers, BookOpen, Users, Brain, Briefcase, Scaling, Bot, ArrowRight } from 'lucide-react'; // Wrench removed, Layers added
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedSection } from '@/components/shared/animated-section';

const coreFeatures = [
  {
    icon: Layers, // Changed from Wrench
    title: 'Explore Our Projects', // Changed title
    description: 'Discover our innovative projects like Focus.Ai, Focus Axis, and more, designed to advance optometry.', // Changed description
    link: '/projects', // Changed link
    linkText: 'View Projects', // Changed linkText
  },
  {
    icon: BookOpen,
    title: 'Curated Learning Resources',
    description: 'Access a rich collection of articles, videos, and courses designed to support your optometry education and professional development.',
    link: '/resources',
    linkText: 'Browse Resources',
  },
  {
    icon: Users,
    title: 'Student & Professional Support',
    description: 'Connect with us for inquiries, support, or guidance. We are here to help you navigate your optometry journey.',
    link: '/support',
    linkText: 'Get Support',
  },
];

const projectHighlights = [
    { icon: Brain, title: 'Focus.Ai', description: 'AI-powered diagnostic assistance.', link: '/projects/focus-ai', linkText: 'Learn More' },
    { icon: Scaling, title: 'Focus Axis', description: 'Advanced ocular measurement tools.', link: '/projects/focus-axis', linkText: 'Learn More' },
    { icon: Briefcase, title: 'Focus CaseX', description: 'Interactive case studies platform.', link: '/projects/focus-casex', linkText: 'Learn More' },
];


export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />

      <section className="container mx-auto px-4">
        <SectionTitle
          title="Empowering Optometry Professionals"
          subtitle="Discover projects, resources, and innovative solutions to enhance your skills and knowledge." // Subtitle updated
        />
        <FeatureGrid features={coreFeatures} />
      </section>

      <AnimatedSection animationType="slide-up">
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Our Innovative Projects"
              subtitle="Pioneering the future of optometry with cutting-edge technology and platforms."
            />
            <FeatureGrid features={projectHighlights} />
            <div className="mt-12 text-center">
                <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
                    <Link href="/projects/focus-share">
                        Explore Focus Share & Focus Gen <ArrowRight className="ml-2 h-5 w-5" /> 
                    </Link>
                </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection animationType="slide-up">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Community</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Focus-In is more than just a resource hub; it's a growing community of passionate optometry students and professionals. Connect, learn, and innovate with us.
              </p>
              <Button asChild size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow">
                <Link href="/support">
                  Contact Us
                </Link>
              </Button>
            </div>
            <div className="relative h-80 w-full">
               <div 
                className="absolute inset-0 rounded-lg shadow-xl bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))]"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

    </div>
  );
}
