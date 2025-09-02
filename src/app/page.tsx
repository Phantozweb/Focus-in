
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

const whyChooseUsFeatures = [
  {
    iconName: 'Users',
    title: 'Built by optometry students, for optometry students.',
    description: 'Tired of outdated study tools? We built the ones we wished we had.',
  },
  {
    iconName: 'Brain',
    title: 'No tech headaches, just click, practice, improve.',
    description: 'Our tools are designed to be intuitive and easy to use from day one.',
  },
  {
    iconName: 'Heart',
    title: 'We help you pass exams faster and practice confidently.',
    description: 'Our goal is to provide the resources you need to succeed.',
  },
];

const projectHighlights = [
    { iconName: 'Bot', title: 'Focus.Ai', description: 'Your AI-powered optometry coach. (Paid)', link: '/projects/focus-ai', linkText: 'Try Free' },
    { iconName: 'Headphones', title: 'Focus Cast', description: 'Lectures in your pocket. (Free)', link: '/projects/focuscast', linkText: 'Listen Now' },
];

const teamMembers = [
  {
    name: 'Janarthan Veeramani',
    title: 'Founder & CEO',
    description: 'As a student, I struggled with dense textbooks and clunky digital tools. So, I built the resources I wished I had, creating Focus-IN to merge technology with optometry and empower the next generation.',
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu',
  },
  {
    name: 'Shivashangari M',
    title: 'Chief Innovation Officer',
    description: "Innovation in optometry isn’t just about ideas—it’s about building prototypes that solve real problems. During my M.Optom, I created the Optometry Calculations Hub, which quickly expanded from 6 to 20+ tools based on requests from students and faculty. At Focus-IN, my role is to channel this spirit of problem-solving into developing new concepts, testing prototypes, and turning them into tools that make a real difference for students, educators, and researchers.",
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu',
  },
  {
    name: 'Hariharan',
    title: 'Chief Marketing Officer',
    description: 'My passion is connecting our innovative tools with the students who need them most. I drive our community outreach, ensuring every student knows there’s a better way to learn and practice.',
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu',
  },
  {
    name: 'Mugunthan Mani',
    title: 'Chief Creative Officer',
    description: 'I shape the look and feel of Focus-IN, making sure our brand is as clear and engaging as our tools. My goal is to design an experience that reflects our innovative and student-first spirit.',
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu',
  },
];


export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      <div className="container mx-auto container-padding">
        
        <AnimatedSection animationType="slide-up" delay={0}>
          <section className="py-12 md:py-16 text-center">
             <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
              Welcome to Focus-IN, your hub for advanced optometry tools and learning resources. We're dedicated to advancing vision care through technology, creating smart, accessible web tools like our AI-powered platform and JCC simulator to empower optometry students and professionals across India and beyond.
            </p>
          </section>
        </AnimatedSection>

        <Separator className="my-8 md:my-12" />
        
        <AnimatedSection animationType="slide-up" delay={100}>
          <section className="py-12 md:py-16">
            <SectionTitle
              title="Why Choose Us?"
              subtitle="Discover how our unique approach sets us apart in the world of optometry technology."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {whyChooseUsFeatures.map((feature, index) => (
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
            <section id="our-projects-section" className="bg-card/50 dark:bg-muted/30 py-16 md:py-24 rounded-2xl shadow-xl border">
              <div className="px-4">
                <SectionTitle
                  title="Our Projects"
                  subtitle="Explore our suite of innovative optometry tools, including the Focus.Ai learning platform, JCC simulator, and other resources designed for students and professionals. Each project is built to enhance clinical skills and knowledge."
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {teamMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden text-center shadow-lg hover:shadow-2xl transition-shadow border hover:border-primary/30 flex flex-col">
                  <CardHeader className="p-6 items-center">
                    <CardTitle className="text-2xl text-primary">{member.name}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground mt-1">{member.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 flex-grow">
                    <p className="text-muted-foreground italic">"{member.description}"</p>
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

    
