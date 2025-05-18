
import Image from 'next/image';
import { SectionTitle } from '@/components/shared/section-title';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Focus-IN | Our Mission and Founder',
  description: 'Learn more about Focus-IN, our mission to innovate optometry through technology, and meet our founder, Janarthan Veeramani.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <div className="space-y-16 md:space-y-24">
        <AnimatedSection animationType="slide-up" delay={100}>
          <section className="py-12 md:py-16 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">About Focus-IN</h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
              Welcome to Focus-IN! We're dedicated to advancing optometry through technology. Our mission is to create smart, accessible web tools that simplify complex tasks, enhance learning, and empower students and professionals, especially within India's vibrant optometry community.
            </p>
          </section>
        </AnimatedSection>

        <Separator className="my-8 md:my-12" />

        <AnimatedSection animationType="slide-up" delay={200}>
          <section className="py-12 md:py-16">
            <SectionTitle title="Meet the Founder" />
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <Image
                  src="https://cdn.discordapp.com/attachments/1361686038950711516/1366784455011864677/1745925246585.png?ex=6829efb7&is=68289e37&hm=ef70e7c6845b70abb28246545f3c7ed95d3ed0e542409538872940388787fb85&"
                  alt="Janarthan Veeramani, Founder of Focus-IN"
                  width={200}
                  height={250}
                  className="rounded-xl shadow-lg object-cover"
                  data-ai-hint="founder portrait"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Janarthan Veeramani - Founder of Focus-IN</h3>
                <p className="text-lg text-muted-foreground">
                  Janarthan Veeramani founded Focus-IN with a clear mission: to innovate optometry through technology. He envisions a future where accessible, powerful digital tools empower vision care students and professionals across India and beyond, leveraging the latest in AI, data science, and simulation.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}
