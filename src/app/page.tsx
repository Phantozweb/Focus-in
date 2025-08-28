
import { HeroSection } from '@/components/home/hero-section';
import { FeatureGrid } from '@/components/home/feature-grid';
import { SectionTitle } from '@/components/shared/section-title';
import { Layers, Brain, Users, ArrowRight, Heart, Gift, Crown, IndianRupee, UserCheck, ClipboardList, Activity, CheckCircle, Eye, FileText, BookOpen, Bot, Scaling, Megaphone, Info, MousePointerClick, LucideCalculator, Linkedin, Instagram, Headphones, Star, BadgePercent, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedNumber from '@/components/shared/animated-number';
import { IconRenderer } from '@/components/shared/icon-renderer';


export const metadata: Metadata = {
  title: 'Focus-IN | AI Optometry Tools, JCC Simulator & Learning Resources',
  description: 'Focus-IN offers cutting-edge AI optometry tools like Focus.Ai, a JCC simulator (Focus Axis), and innovative learning resources for optometry students and vision care professionals.',
};

const whyWeStartedFeatures = [
  {
    iconName: 'Users',
    title: 'Empowering Our Community',
    description: 'We saw a crucial need for modern, tech-driven solutions to support optometry students and professionals, aiming to make advanced tools universally accessible.',
  },
  {
    iconName: 'Brain',
    title: 'Innovating with Technology',
    description: 'Driven by a passion for technological advancement, we leverage AI, data science, and digital simulations to build tools that address real-world challenges in vision care.',
  },
  {
    iconName: 'Heart',
    title: 'Commitment to Tangible Impact',
    description: 'Our core motivation is to make a significant difference by enhancing learning experiences and improving the efficiency of eye care practices through our innovative solutions.',
  },
];

const projectHighlights = [
    { iconName: 'Bot', title: 'Focus.Ai', description: 'AI-powered learning and practice tools for optometry. (Paid)', link: '/projects/focus-ai', linkText: 'Learn More' },
    { iconName: 'Headphones', title: 'Focus Cast', description: 'Free optometry audio learning for students on the go. (Free)', link: '/projects/focuscast', linkText: 'Learn More' },
];

const teamMembers = [
  {
    name: 'Janarthan Veeramani',
    title: 'Founder & CEO',
    description: 'The visionary behind Focus-IN, Janarthan leads with a passion for merging technology and optometry to empower the next generation of eye care professionals.',
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu'
  },
  {
    name: 'Hariharan',
    title: 'Chief Marketing Officer',
    description: 'Hariharan drives our community engagement and strategic outreach, connecting Focus-IN\'s innovative tools with the students and professionals who need them most.',
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu'
  },
  {
    name: 'Mugunthan Mani',
    title: 'Chief Creative Officer',
    description: 'Mugunthan oversees our content, branding, and design, ensuring that every aspect of Focus-IN is clear, engaging, and reflective of our innovative spirit.',
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu'
  }
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {whyWeStartedFeatures.map((feature, index) => (
                <Card key={index} className="flex h-full flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border hover:border-primary/50 bg-card group">
                  <CardHeader className="flex flex-row items-start gap-4 pb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconRenderer iconName={feature.iconName} className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mt-1">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
          <section className="py-16 md:py-24">
            <SectionTitle title="Meet Our Team" subtitle="The minds behind Focus-IN's mission to innovate vision care." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {teamMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden text-center shadow-lg hover:shadow-2xl transition-shadow border hover:border-primary/30 flex flex-col">
                  <CardHeader className="p-6">
                    <CardTitle className="text-2xl text-primary">{member.name}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground mt-1">{member.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow">
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                  <CardFooter className="bg-muted/50 p-4 flex justify-center gap-4">
                     <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href={member.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </CardFooter>
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
