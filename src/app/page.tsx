
import { HeroSection } from '@/components/home/hero-section';
import { FeatureGrid } from '@/components/home/feature-grid';
import { CarouselSection } from '@/components/home/carousel-section';
import { SectionTitle } from '@/components/shared/section-title';
import { Layers, Brain, Users, ArrowRight, Heart, Gift, Crown, IndianRupee, UserCheck, ClipboardList, Activity, CheckCircle, Eye, FileText, BookOpen, Bot, Scaling, Megaphone, Info, MousePointerClick, LucideCalculator, Linkedin, Instagram, Headphones, Star, BadgePercent, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedNumber from '@/components/shared/animated-number';
import { PrebookInstructionsDialog } from '@/components/home/prebook-instructions-dialog';


export const metadata: Metadata = {
  title: 'Focus-IN | Innovative Optometry Tools & Learning Resources',
  description: 'Focus-IN offers cutting-edge AI-powered web tools, learning resources, and innovative projects for optometry students and vision care professionals. Explore tools like Focus.Ai, Focus Axis, and Focus Gen.',
};

const whyWeStartedFeatures = [
  {
    icon: Users,
    title: 'Empowering Our Community',
    description: 'We saw a crucial need for modern, tech-driven solutions to support optometry students and professionals, aiming to make advanced tools universally accessible.',
    link: '#', 
    linkText: '', 
  },
  {
    icon: Brain,
    title: 'Innovating with Technology',
    description: 'Driven by a passion for technological advancement, we leverage AI, data science, and digital simulations to build tools that address real-world challenges in vision care.',
    link: '#',
    linkText: '',
  },
  {
    icon: Heart,
    title: 'Commitment to Tangible Impact',
    description: 'Our core motivation is to make a significant difference by enhancing learning experiences and improving the efficiency of eye care practices through our innovative solutions.',
    link: '#',
    linkText: '',
  },
];

const projectHighlights = [
    { icon: Bot, title: 'Focus.Ai', description: 'AI-powered diagnostic assistance and learning tools. Currently available. (Paid)', link: 'https://focusai.netlify.app', linkText: 'Access AI' },
    { icon: Headphones, title: 'Focus Cast', description: 'Optometry Audio Learning, On the Go. Currently available. (Free)', link: '/projects/focuscast', linkText: 'Listen Now' },
];

const impactStats = [
  { icon: UserCheck, value: "300+", label: "Focus AI Users", hint: "active users" },
  { icon: Headphones, value: "17+", label: "Focus Cast Listeners", hint: "daily active listeners" },
  { icon: ClipboardList, value: "23+", label: "Beta Testers", hint: "early adopters" },
];


export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      <div className="container mx-auto container-padding">
        
        <AnimatedSection animationType="slide-up" delay={0}>
          <section className="py-12 md:py-16 text-center">
             <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
              Welcome to Focus-IN! We're dedicated to advancing optometry through technology. Our mission is to create smart, accessible web tools that simplify complex tasks, enhance learning, and empower students and professionals, especially within India's vibrant optometry community.
            </p>
          </section>
        </AnimatedSection>

        <Separator className="my-8 md:my-12" />
        
        <AnimatedSection animationType="slide-up" delay={100}>
          <section className="py-12 md:py-16">
              <SectionTitle
                title="Why We Started" 
                subtitle="Our journey began with a vision to transform optometry education and practice."
              />
              <CarouselSection features={whyWeStartedFeatures} />
          </section>
        </AnimatedSection>

        <Separator className="my-8 md:my-12" />

        <AnimatedSection animationType="slide-up" delay={200}>
            <section className="bg-card/50 dark:bg-muted/30 py-16 md:py-24 rounded-2xl shadow-xl border">
              <div className="px-4">
                <SectionTitle
                  title="Our Projects"
                  subtitle="Explore the suite of tools we are developing at Focus-IN. Each project is designed to address specific needs within optometry, from diagnostics to education and practice management. Focus AI, Focus Gen, and Focus Axis are currently available, while Focus EMR, Notes, and Share are upcoming or in beta."
                />
                <FeatureGrid features={projectHighlights} />
                <div className="mt-12 text-center">
                    <Button asChild size="lg" variant="default" className="shadow-md hover:shadow-lg transition-shadow">
                        <Link href="/projects">
                            View All Our Projects <ArrowRight className="ml-2 h-5 w-5" /> 
                        </Link>
                    </Button>
                </div>
              </div>
            </section>
        </AnimatedSection>
        
        <Separator className="my-8 md:my-12" />


        <AnimatedSection animationType="slide-up" delay={300}>
            <section className="py-16 md:py-24 space-y-12">
              <SectionTitle title="Our Community Impact" subtitle="See how Focus-IN is being used and supported across the optometry community." />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {impactStats.map((stat, index) => (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col text-center group bg-card hover:border-primary/30">
                    <CardHeader className="items-center pb-2">
                       <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                         <stat.icon className="h-8 w-8 text-primary" />
                       </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="text-4xl font-bold text-primary">{stat.value}</div>
                      <p className="text-lg font-medium text-foreground mt-1">{stat.label}</p>
                      <p className="text-sm text-muted-foreground pt-1">{stat.hint}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
        </AnimatedSection>
          
        <Separator className="my-8 md:my-12" />

        <AnimatedSection animationType="slide-up" delay={400}>
          <section className="py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Community</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Focus-IN is more than just a resource hub; it's a growing community of passionate optometry students and professionals. Connect, learn, and innovate with us on our social platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="default" className="shadow-md hover:shadow-lg transition-shadow">
                      <a href="https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu" target="_blank" rel="noopener noreferrer">
                          <Instagram className="mr-2 h-5 w-5" /> Follow on Instagram
                      </a>
                  </Button>
                  <Button asChild size="lg" variant="secondary" className="shadow-md hover:shadow-lg transition-shadow bg-[#0077B5] hover:bg-[#005E8E] text-white">
                      <a href="https://www.linkedin.com/company/focusprojects/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
                      </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </>
  );
}
