
import Image from 'next/image';
import { SectionTitle } from '@/components/shared/section-title';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Target, Lightbulb, Users, ShieldCheck, Activity } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Focus-IN | Our Mission in Optometry Innovation',
  description: 'Learn about Focus-IN: our mission to innovate optometry with AI and technology, our vision for eye care, and our founder, Janarthan Veeramani. We build tools for students and professionals.',
};

const values = [
  { icon: Lightbulb, title: 'Innovation', description: 'We constantly seek creative solutions and leverage technology to advance optometric practice and learning.' },
  { icon: Activity, title: 'Accessibility', description: 'Our tools are designed to be user-friendly and widely available to empower the entire optometry community.' },
  { icon: Users, title: 'Community', description: 'We foster a collaborative environment for students and professionals to learn, share, and grow together.' },
  { icon: ShieldCheck, title: 'Impact', description: 'We are committed to making a tangible difference in the quality of vision care and education.' },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <div className="space-y-16 md:space-y-24">
        
        <AnimatedSection animationType="slide-up" delay={0}>
          <section className="py-12 md:py-16 text-center">
            <SectionTitle title="About Focus-IN" />
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
              Welcome to Focus-IN! We're dedicated to advancing optometry through technology. Our mission is to create smart, accessible web tools that simplify complex tasks, enhance learning, and empower students and professionals, especially within India's vibrant optometry community.
            </p>
          </section>
        </AnimatedSection>

        <Separator className="my-8 md:my-12" />

        <AnimatedSection animationType="slide-up" delay={100}>
          <section className="py-12 md:py-16">
            <SectionTitle title="Our Mission" />
            <div className="text-center max-w-3xl mx-auto">
              <Target className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-xl text-muted-foreground md:text-2xl">
                To empower optometry students and professionals with innovative, accessible technology that enhances learning, simplifies clinical practice, and fosters a collaborative community.
              </p>
            </div>
          </section>
        </AnimatedSection>
        
        <Separator className="my-8 md:my-12" />

        <AnimatedSection animationType="slide-up" delay={200}>
          <section className="py-12 md:py-16">
            <SectionTitle title="Our Vision" />
            <div className="text-center max-w-3xl mx-auto">
              <Eye className="h-16 w-16 text-primary mx-auto mb-6" />
              <p className="text-xl text-muted-foreground md:text-2xl">
                To be the leading platform for optometric innovation in India and beyond, driving advancements in eye care through cutting-edge digital tools and resources.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <Separator className="my-8 md:my-12" />

        <AnimatedSection animationType="slide-up" delay={300}>
          <section className="py-12 md:py-16">
            <SectionTitle title="Our Core Values" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow border hover:border-primary/30">
                  <CardHeader className="items-center">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-10 w-10 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </AnimatedSection>
        
        <Separator className="my-8 md:my-12" />

        <AnimatedSection animationType="slide-up" delay={400}>
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
