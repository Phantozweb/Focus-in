
import { HeroSection } from '@/components/home/hero-section';
import { FeatureGrid } from '@/components/home/feature-grid';
import { SectionTitle } from '@/components/shared/section-title';
import { Layers, BookOpen, Users, Brain, Briefcase, Scaling, Bot, ArrowRight, Heart, Gift, TrendingUp, ShieldCheck, Package, PackageCheck, PackageSearch, IndianRupee, UserCheck, Signal, Share2, Lightbulb, ClipboardList, Activity, Store, CheckCircle, Eye, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const coreFeatures = [
  {
    icon: Layers,
    title: 'Explore Our Projects',
    description: 'Discover our innovative projects like Focus.Ai, Focus Axis, and more, designed to advance optometry.',
    link: '/projects',
    linkText: 'View Projects',
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

const impactStats = [
  { icon: Users, value: "75", label: "Focus AI Users", hint: "active users" },
  { icon: Bot, value: "128", label: "Focus Gen Uses", hint: "content generations" },
  { icon: UserCheck, value: "23", label: "Focus EMR Beta Testers", hint: "early adopters" },
  // { icon: Signal, value: "Live", label: "Focus Axis Status", hint: "operational", badgeVariant: "default" as "default" | "secondary" | "destructive" | "outline" | null | undefined },
  // { icon: PackageSearch, value: "Upcoming", label: "Focus Notes Marketplace", hint: "coming soon", badgeVariant: "secondary" as "default" | "secondary" | "destructive" | "outline" | null | undefined },
  // { icon: Share2, value: "Upcoming", label: "Focus Share Platform", hint: "launching soon", badgeVariant: "secondary" as "default" | "secondary" | "destructive" | "outline" | null | undefined },
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
    <div className="space-y-16 md:space-y-24">
      <HeroSection />

      <section className="container mx-auto px-4">
        <SectionTitle
          title="Empowering Optometry Professionals"
          subtitle="Discover projects, resources, and innovative solutions to enhance your skills and knowledge."
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
                <Button asChild size="lg" variant="default" className="shadow-md hover:shadow-lg transition-shadow">
                    <Link href="/projects/focus-share">
                        Explore Focus Share & Focus Gen <ArrowRight className="ml-2 h-5 w-5" /> 
                    </Link>
                </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animationType="slide-up">
        <section className="container mx-auto px-4 py-16 md:py-24 space-y-12">
          <SectionTitle title="Our Impact" subtitle="See how Focus-IN is being used across the optometry community:" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-medium">{stat.label}</CardTitle>
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex-grow">
                  {stat.badgeVariant ? (
                     <Badge variant={stat.badgeVariant} className={stat.badgeVariant === 'default' ? 'bg-green-500 text-white' : ''}>{stat.value}</Badge>
                  ) : (
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  )}
                  <p className="text-xs text-muted-foreground pt-1">{stat.hint}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 md:mt-20 space-y-10 bg-card p-6 md:p-10 rounded-lg shadow-xl">
            <div className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
              <h3 className="text-3xl font-bold text-foreground mb-2">A Heartfelt Thank You to Our Donors</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We extend our sincere gratitude to the generous individuals from across India who have supported Focus-In through their donations. Your contributions are invaluable and help us continue developing innovative tools for the optometry community.
              </p>
              <Button size="lg" variant="default" className="mt-8 shadow-lg hover:shadow-primary/40 transition-all transform hover:scale-105">
                <Gift className="mr-2 h-5 w-5" /> Donate To Support Focus-In
              </Button>
            </div>

            <div className="space-y-8">
              <h4 className="text-2xl font-semibold text-primary text-center">Our Top Supporters</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {topDonors.map((donor, index) => (
                  <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 flex flex-col items-center">
                      <Crown className="h-16 w-16 mb-4 text-yellow-500" /> 
                      <p className="text-lg font-semibold text-foreground">{donor.name}</p>
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
              <Card className="shadow-lg overflow-hidden">
                <CardContent> 
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[80px] text-center">Rank</TableHead>
                        <TableHead>Donor Name</TableHead>
                        <TableHead className="text-right">Amount Donated</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {otherDonors.map((donor) => (
                        <TableRow key={donor.rank}>
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
                  <IndianRupee className="h-8 w-8 mr-1" />5,642
                </span>
              </p>
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
              <Button asChild size="lg" variant="default" className="shadow-md hover:shadow-lg transition-shadow">
                <Link href="/support">
                  Contact Us
                </Link>
              </Button>
            </div>
            <div className="relative h-80 w-full rounded-lg shadow-xl bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))]">
            </div>
          </div>
        </section>
      </AnimatedSection>

    </div>
  );
}
