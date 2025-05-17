
import Image from 'next/image';
import { HeroSection } from '@/components/home/hero-section';
import { FeatureGrid } from '@/components/home/feature-grid';
import { SectionTitle } from '@/components/shared/section-title';
import { Layers, Brain, Users, ArrowRight, Heart, Gift, Crown, IndianRupee, UserCheck, ClipboardList, Activity, CheckCircle, Eye, FileText, BookOpen, Bot, Scaling, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Focus-IN | Innovative Optometry Tools & Learning Resources',
  description: 'Focus-IN offers cutting-edge AI-powered web tools, learning resources, and innovative projects for optometry students and vision care professionals. Explore tools like Focus.Ai, Focus Axis, and Focus Gen.',
};


const coreFeatures = [
  {
    icon: Layers,
    title: 'Explore Our Projects',
    description: 'Discover our innovative projects like Focus.Ai, Focus Axis, and more, designed to advance optometry.',
    link: '/projects',
    linkText: 'View Projects',
  },
  {
    icon: Brain, 
    title: 'AI-Powered Learning Tools', 
    description: 'Leverage our suite of AI-driven web tools designed to help you excel in your optometry studies and practice more effectively.', 
    link: '/projects', 
    linkText: 'Discover Tools', 
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
    { icon: Brain, title: 'Focus.Ai', description: 'AI-powered diagnostic assistance. Currently available.', link: '/projects/focus-ai', linkText: 'Learn More' },
    { icon: Scaling, title: 'Focus Axis', description: 'Advanced ocular measurement tools. Currently available.', link: '/projects/focus-axis', linkText: 'Learn More' },
    { icon: Bot, title: 'Focus Gen', description: 'Generative AI for study material creation. Currently available.', link: '/projects/focus-gen', linkText: 'Learn More' },
];

const impactStats = [
  { icon: UserCheck, value: "75+", label: "Focus AI Users", hint: "active users" },
  { icon: Bot, value: "120+", label: "Focus Gen Uses", hint: "content generations" },
  { icon: ClipboardList, value: "20+", label: "Focus EMR Beta Testers", hint: "early adopters" },
];

const topDonors = [
  { name: "K. Barathan", amount: 1500 },
  { name: "Atchaya", amount: 750 },
  { name: "Manovarama", amount: 500 },
];

const otherDonors = [
  { rank: 4, name: "M. Priya", amount: 450 },
  { rank: 5, name: "Mohammad Khan", amount: 250 },
  { rank: 6, name: "Shreya", amount: 222 },
  { rank: 7, name: "Joshua", amount: 200 },
  { rank: 8, name: "Aishwarya Suresh", amount: 200 },
  { rank: 9, name: "Sethu", amount: 150 },
  { rank: 10, name: "Ashok Raj", amount: 150 },
  { rank: 11, name: "Rajesh Kumar", amount: 150 },
  { rank: 12, name: "Preeti", amount: 150 },
  { rank: 13, name: "S. Das", amount: 150 },
  { rank: 14, name: "Kamlesh", amount: 150 },
  { rank: 15, name: "P. Joshi", amount: 150 },
  { rank: 16, name: "Mehtab", amount: 100 },
  { rank: 17, name: "Chandhru", amount: 100 },
  { rank: 18, name: "Punitha", amount: 100 },
];


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto container-padding">
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
          
          <Separator className="my-8 md:my-12" />

          <section>
            <SectionTitle
              title="What We Offer" 
              subtitle="Innovative web tools and AI solutions to enhance learning and practice in optometry."
            />
            <FeatureGrid features={coreFeatures} />
          </section>

          <Separator className="my-8 md:my-12" />

          <AnimatedSection animationType="slide-up">
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

          <AnimatedSection animationType="slide-up">
            <section className="py-16 md:py-24 space-y-12">
              <SectionTitle title="Our Impact" subtitle="See how Focus-IN is being used across the optometry community:" />

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

              <div className="mt-16 md:mt-20 space-y-10 bg-card p-6 md:p-10 rounded-2xl shadow-xl border">
                <div className="text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">A Heartfelt Thank You to Our Donors</h3>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    We extend our sincere gratitude to the generous individuals from across India who have supported Focus-IN through their donations. Your contributions are invaluable and help us continue developing innovative tools for the optometry community.
                  </p>
                  <Button size="lg" variant="default" className="mt-8 shadow-lg hover:shadow-primary/40 transition-all transform hover:scale-105">
                    <Gift className="mr-2 h-5 w-5" /> Donate To Support Focus-IN
                  </Button>
                </div>

                <div className="space-y-8">
                  <h4 className="text-2xl font-semibold text-primary text-center">Our Top Supporters</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topDonors.map((donor, index) => (
                      <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow border hover:border-primary/30">
                        <CardContent className="pt-6 flex flex-col items-center">
                          <Crown className="h-16 w-16 mb-4 text-yellow-500" /> 
                          <p className="text-xl font-semibold text-foreground">{donor.name}</p>
                          <p className="text-2xl font-bold text-primary flex items-center justify-center">
                            <IndianRupee className="h-6 w-6 mr-1" />{donor.amount.toLocaleString()}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-2xl font-semibold text-primary text-center">And Many More Generous Hearts</h4>
                  <Card className="shadow-lg overflow-hidden border">
                    <CardContent className="p-0"> 
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[80px] text-center font-semibold">Rank</TableHead>
                            <TableHead className="font-semibold">Donor Name</TableHead>
                            <TableHead className="text-right font-semibold">Amount Donated</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {otherDonors.map((donor) => (
                            <TableRow key={donor.rank} className="hover:bg-muted/50">
                              <TableCell className="font-medium text-center">#{donor.rank}</TableCell>
                              <TableCell>{donor.name}</TableCell>
                              <TableCell className="text-right flex items-center justify-end">
                                <IndianRupee className="h-4 w-4 mr-1 text-muted-foreground" />{donor.amount.toLocaleString()}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent> 
                  </Card> 
                </div>

                <div className="text-center pt-8">
                  <p className="text-3xl font-extrabold text-foreground">
                    Total Funds Collected: 
                    <span className="text-primary ml-2 flex items-center justify-center text-4xl">
                      <IndianRupee className="h-8 w-8 mr-1" />{otherDonors.reduce((acc, donor) => acc + donor.amount, topDonors.reduce((acc, donor) => acc + donor.amount, 0)).toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </AnimatedSection>
          
          <Separator className="my-8 md:my-12" />

          <AnimatedSection animationType="slide-up">
            <section className="py-16 md:py-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Community</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Focus-IN is more than just a resource hub; it's a growing community of passionate optometry students and professionals. Connect, learn, and innovate with us.
                  </p>
                  <Button asChild size="lg" variant="default" className="shadow-md hover:shadow-lg transition-shadow">
                    <Link href="/support">
                      Contact Us
                    </Link>
                  </Button>
                </div>
                <div className="relative h-80 w-full rounded-2xl shadow-xl bg-gradient-to-br from-[hsl(var(--primary)/0.8)] via-[hsl(var(--accent)/0.7)] to-[hsl(var(--secondary)/0.8)]">
                   <div className="absolute inset-0 flex items-center justify-center">
                     <Eye className="h-32 w-32 text-white/30 opacity-70" />
                   </div>
                </div>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </>
  );
}

    

    