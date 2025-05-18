
import { HeroSection } from '@/components/home/hero-section';
import { FeatureGrid } from '@/components/home/feature-grid';
import { SectionTitle } from '@/components/shared/section-title';
import { Layers, Brain, Users, ArrowRight, Heart, Gift, Crown, IndianRupee, UserCheck, ClipboardList, Activity, CheckCircle, Eye, FileText, BookOpen, Bot, Scaling, Megaphone, Info, MousePointerClick, LucideCalculator } from 'lucide-react';
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
    { icon: Bot, title: 'Focus.Ai', description: 'AI-powered diagnostic assistance and learning tools. Currently available.', link: '/projects/focus-ai', linkText: 'Learn More' },
    { icon: MousePointerClick, title: 'Focus Axis', description: 'JCC Simulator for virtual, gamified JCC training. Currently available.', link: '/projects/focus-axis', linkText: 'Learn More' },
    { icon: LucideCalculator, title: 'Focus Gen', description: 'Transposition Sums: Generate & Practice. Currently available.', link: '/projects/focus-gen', linkText: 'Learn More' },
];

const impactStats = [
  { icon: UserCheck, value: "110+", label: "Focus AI Users", hint: "active users" },
  { icon: LucideCalculator, value: "210+", label: "Focus Gen Uses", hint: "content generations" },
  { icon: ClipboardList, value: "23+", label: "Beta Testers", hint: "early adopters" },
];

const topDonors = [
  { name: "K. Barathan", amount: 1500 },
  { name: "Rishad C J", amount: 1000 },
  { name: "Atchaya", amount: 750 },
];

const otherDonors = [
  { rank: 4, name: "Manoj Kumar", amount: 500 },
  { rank: 5, name: "Manovarama", amount: 500 },
  { rank: 6, name: "M. Priya", amount: 450 },
  { rank: 7, name: "Fazil Mohd", amount: 400 },
  { rank: 8, name: "Deepak", amount: 250 },
  { rank: 9, name: "K Anusha Mohan", amount: 250 },
  { rank: 10, name: "Mohammad Khan", amount: 250 },
  { rank: 11, name: "Mohd Harsad", amount: 250 },
  { rank: 12, name: "Shreya", amount: 222 },
  { rank: 13, name: "Aishwarya Suresh", amount: 200 },
  { rank: 14, name: "Joshua", amount: 200 },
  { rank: 15, name: "Ashok Raj", amount: 150 },
  { rank: 16, name: "Kamlesh", amount: 150 },
  { rank: 17, name: "P. Joshi", amount: 150 },
  { rank: 18, name: "Preeti", amount: 150 },
  { rank: 19, name: "Rajesh Kumar", amount: 150 },
  { rank: 20, name: "S. Das", amount: 150 },
  { rank: 21, name: "Sethu", amount: 150 },
  { rank: 22, name: "Chandhru", amount: 100 },
  { rank: 23, name: "Mehtab", amount: 100 },
  { rank: 24, name: "Punitha", amount: 100 },
];

const totalFundsCollected = otherDonors.reduce((acc, donor) => acc + donor.amount, topDonors.reduce((acc, donor) => acc + donor.amount, 0));

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
              <FeatureGrid features={whyWeStartedFeatures} />
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
                  <Button 
                    size="lg" 
                    variant="default" 
                    className="mt-8 shadow-lg hover:shadow-primary/40 transition-all transform hover:scale-105"
                    asChild
                  >
                    <a href="upi://pay?pa=iamsirenjeev@oksbi&pn=Focus-IN&am=&cu=INR&tn=Support%20Focus-IN" target="_blank" rel="noopener noreferrer">
                      <Gift className="mr-2 h-5 w-5" /> Donate To Support Focus-IN
                    </a>
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
                      <IndianRupee className="h-8 w-8 mr-1" />
                      <AnimatedNumber targetValue={totalFundsCollected} duration={1000} />
                    </span>
                  </p>
                </div>
              </div>
            </section>
        </AnimatedSection>
          
        <Separator className="my-8 md:my-12" />

        <AnimatedSection animationType="slide-up" delay={400}>
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
    </>
  );
}
