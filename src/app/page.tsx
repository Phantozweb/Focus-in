
import { HeroSection } from '@/components/home/hero-section';
import { FeatureGrid } from '@/components/home/feature-grid';
import { SectionTitle } from '@/components/shared/section-title';
import { Layers, Brain, Users, ArrowRight, Heart, Gift, Crown, IndianRupee, UserCheck, ClipboardList, Activity, CheckCircle, Eye, FileText, BookOpen, Bot, Scaling, Megaphone, Info, MousePointerClick, LucideCalculator, Linkedin, Instagram, Headphones, Star, BadgePercent, Ticket, LucideMousePointerClick, Users as UsersIcon, Link as LinkIcon, FilePenLine } from 'lucide-react';
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';


export const metadata: Metadata = {
  title: 'Focus-IN | AI Optometry Tools, JCC Simulator & Learning Resources',
  description: 'Focus-IN offers cutting-edge AI optometry tools like Focus.Ai, a JCC simulator (Focus Axis), and innovative learning resources for optometry students and vision care professionals.',
};

const whyChooseUsFeatures = [
  {
    iconName: 'Users',
    title: 'For Students, By Students',
    description: 'We build the tools we wished we had. Our solutions are born from real student needs and designed to solve the challenges you face every day.',
  },
  {
    iconName: 'Brain',
    title: 'Intuitive & Easy to Use',
    description: 'No steep learning curves here. Our tools are designed to be intuitive from day one, so you can focus on learning, not on figuring out software.',
  },
  {
    iconName: 'Heart',
    title: 'Focused on Your Success',
    description: 'Our ultimate goal is your success. We provide the resources you need to pass exams, practice confidently, and excel in your career.',
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
    description: 'I founded Focus-IN to solve the problems I faced as a student. My vision is to merge technology with optometry, creating tools that empower the next generation of eye care professionals.',
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu',
  },
  {
    name: 'Shivashangari M',
    title: 'Head of Product',
    description: "My role is to turn ideas into reality. I lead our prototyping, ensuring every tool we build solves real-world problems for students, educators, and researchers.",
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu',
  },
  {
    name: 'Anshi Jha',
    title: 'Head of Clinical Development',
    description: 'I lead the development of our clinical tools, including Focus CaseX. My expertise ensures our products meet the real-world needs of optometry students and practitioners.',
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu',
  },
  {
    name: 'Hariharan',
    title: 'Head of Marketing',
    description: 'My passion is connecting our innovative tools with the students who need them most. I drive our community outreach to ensure every student knows there’s a better way to learn.',
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu',
  },
  {
    name: 'Mugunthan Mani',
    title: 'Creative Director',
    description: 'I shape the look and feel of Focus-IN, making sure our brand is as clear and engaging as our tools. My goal is to design an experience that reflects our innovative and student-first spirit.',
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu',
  },
  {
    name: 'Vimal',
    title: 'Head of Educational Products',
    description: 'I oversee our educational products. My focus is on creating high-quality, accessible learning experiences that empower students on their educational journey.',
    linkedinUrl: 'https://www.linkedin.com/company/focusprojects/',
    instagramUrl: 'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu',
  },
];

const faqData = [
    {
        category: "General",
        slug: "general",
        icon: UsersIcon,
        questions: [
            {
                question: "What is Focus-IN?",
                answer: "Focus-IN is a suite of web-based tools and resources designed by optometry students, for optometry students. Our mission is to provide innovative, accessible technology that enhances learning, simplifies clinical practice, and helps you excel in your studies and career."
            },
            {
                question: "Who is behind Focus-IN?",
                answer: "We are a team of optometry students, educators, and tech enthusiasts passionate about improving vision care education. Our tools are born from the real-world challenges we faced during our own studies. You can learn more about us on our <a href='/about' class='text-primary hover:underline'>About page</a>."
            },
            {
                question: "Are the tools on Focus-IN free?",
                answer: "Many of our core tools are completely free to use. Our flagship product, <a href='/projects/focus-ai' class='text-primary hover:underline'>Focus.Ai</a>, operates on a paid model to support its advanced features. We also offer other free tools like Focus Cast, Focus Gen, and Focus Axis. Our goal is to keep our resources as accessible as possible."
            },
             {
                question: "How can I provide feedback or suggest a new tool?",
                answer: "We are community-driven and thrive on user feedback! If you have suggestions, feedback, or an idea for a new tool, please reach out to us through our <a href='/support' class='text-primary hover:underline'>Support page</a>. We'd love to hear from you."
            },
            {
                question: "Is my data safe with Focus-IN tools?",
                answer: "We prioritize your privacy. For tools that handle potentially sensitive information, like Focus CaseX, all data is processed temporarily in your browser tab and is never stored on our servers, ensuring complete confidentiality and adherence to medical ethics."
            }
        ]
    },
    {
        category: "Focus.Ai",
        slug: "focus-ai",
        icon: Bot,
        questions: [
            {
                question: "How does Focus.Ai help with studying for optometry exams?",
                answer: "Focus.Ai is an all-in-one study toolkit. It can simplify complex topics, generate practice quizzes with different question formats (MCQs, short answers), help you understand clinical cases, and create comprehensive study guides with its 'Canvas' feature. It's like having a personal AI tutor available 24/7."
            },
            {
                question: "Is the clinical case interpretation in Focus.Ai accurate?",
                answer: "Focus.Ai is designed as a learning aid to help students understand how to interpret clinical findings. While it is trained on extensive optometry data, it is not a diagnostic tool and is not 100% accurate. It should be used as a supplementary study resource to develop your clinical reasoning skills, not to make definitive diagnoses."
            },
            {
                question: "What is the 'Canvas' feature in Focus.Ai?",
                answer: "The Canvas is an in-built doc editor with markdown support. It allows you to generate, edit, and organize comprehensive study guides, lecture notes, and summaries directly within the platform. You can ask the AI to create content on a topic and then refine it to fit your study needs."
            },
        ]
    },
    {
        category: "Focus Axis",
        slug: "focus-axis",
        icon: LucideMousePointerClick,
        questions: [
            {
                question: "How realistic is the JCC simulator in Focus Axis?",
                answer: "Focus Axis is designed to be a highly realistic simulation of the Jackson Cross Cylinder (JCC) technique. It mimics the lens-flipping process and patient responses, allowing you to practice and refine your refraction skills in a gamified, risk-free environment. It's an excellent tool for building muscle memory and confidence before you work with real patients."
            },
            {
                question: "Who can benefit from using Focus Axis?",
                answer: "Focus Axis is perfect for first and second-year optometry students who are learning the JCC technique for the first time. It's also a great refresher for senior students and interns who want to sharpen their skills and improve their speed and accuracy."
            }
        ]
    },
     {
        category: "Focus Cast",
        slug: "focus-cast",
        icon: Headphones,
        questions: [
            {
                question: "What kind of topics does Focus Cast cover?",
                answer: "Focus Cast offers bite-sized audio episodes (5-15 minutes) on a wide range of high-yield topics, including clinical refraction, optometric instruments, binocular vision, pharmacology, and exam preparation. It's designed for screen-free learning on the go."
            },
            {
                question: "Is Focus Cast really free?",
                answer: "Yes, 100%! There is no login required and no subscription fee. You can start listening to all available episodes right away on the <a href='https://focuscast.netlify.app' target='_blank' rel='noopener noreferrer' class='text-primary hover:underline'>Focus Cast platform</a>."
            },
            {
                question: "How often are new episodes released?",
                answer: "We aim to release new episodes on a weekly basis to provide a consistent flow of fresh content. Follow us on our social media channels to stay updated on new releases!"
            }
        ]
    },
    {
        category: "Focus CaseX",
        slug: "focus-casex",
        icon: FilePenLine,
        questions: [
            {
                question: "What is Focus CaseX?",
                answer: "Focus CaseX is an AI-powered platform that lets you log real patient cases and then use AI to interact with that data. You can ask the AI questions about the case, get summaries, and even practice for viva exams, all based on your own logged information."
            },
            {
                question: "Is my patient data stored anywhere?",
                answer: "Absolutely not. Focus CaseX is designed with privacy as its top priority. All case information you enter is processed temporarily in your browser and is never sent to or stored on our servers. Once you close the tab, the data is gone."
            },
             {
                question: "How does this help me prepare for viva exams?",
                answer: "After logging a case, you can start a simulated viva session. The AI will ask you relevant questions about the case, from patient history to diagnosis and management, just like a real examiner would. It's a great way to practice your clinical reasoning and communication skills under pressure."
            }
        ]
    },
    {
        category: "Focus Gen",
        slug: "focus-gen",
        icon: LucideCalculator,
        questions: [
            {
                question: "What is Focus Gen?",
                answer: "Focus Gen is a simple but powerful tool for optometry students. It's a transposition sum generator that allows you to create an unlimited number of practice problems to master optical calculations."
            },
            {
                question: "Why do I need to practice transposition?",
                answer: "Transposition is a fundamental skill in optometry used to convert prescriptions between plus and minus cylinder forms. Being fast and accurate is essential for both exams and clinical practice. Focus Gen helps you build that speed and confidence."
            },
             {
                question: "Can I customize the difficulty of the sums?",
                answer: "Yes, Focus Gen allows you to set certain parameters to generate different types of transposition sums, so you can start with the basics and move on to more complex calculations as you improve."
            }
        ]
    },
    {
        category: "Focus Links",
        slug: "focus-links",
        icon: LinkIcon,
        questions: [
            {
                question: "What is Focus Links?",
                answer: "Focus Links is a centralized, curated hub of essential online resources for optometry. Instead of juggling hundreds of bookmarks, you can find links to top-tier academic journals, clinical calculators, professional organizations, and study guides all in one place."
            },
            {
                question: "Is Focus Links a free resource?",
                answer: "Yes, Focus Links is completely free to use. Our goal is to streamline access to information for the entire optometry community."
            },
             {
                question: "Can I contribute to Focus Links?",
                answer: "Yes! Focus Links is a community-driven project. We will have a feature allowing users to suggest valuable links and resources. If you have a go-to tool or website you think others would benefit from, you'll be able to share it with us."
            }
        ]
    }
];

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Focus-IN',
  url: 'https://focus-in.netlify.app',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://focus-in.netlify.app/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.flatMap(category => 
    category.questions.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/<[^>]*>?/gm, ''), // Strip HTML for plain text
      },
    }))
  ),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
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
            <div className="max-w-4xl mx-auto mt-12">
              <div className="space-y-8">
                {whyChooseUsFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <IconRenderer iconName={feature.iconName} className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
                 <div className="pt-4 text-center">
                    <Button asChild size="lg">
                        <Link href="/projects">
                            Explore Our Tools <ArrowRight className="ml-2 h-5 w-5" /> 
                        </Link>
                    </Button>
                </div>
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
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
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle="Have questions? We've got answers. Here are some of the most common inquiries we receive about our optometry tools and platform."
            />
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue={faqData[0].slug} className="w-full">
                <div className="relative">
                  <TabsList className="w-full justify-start p-0 bg-transparent overflow-hidden">
                    <Carousel
                      opts={{
                        align: "start",
                        dragFree: true,
                      }}
                      className="w-full"
                    >
                      <CarouselContent className="-ml-2">
                          {faqData.map((category) => (
                            <CarouselItem key={category.slug} className="pl-2 basis-auto md:basis-1/3">
                                <TabsTrigger value={category.slug} className="w-full flex-col h-24 gap-2 rounded-lg data-[state=active]:shadow-lg text-sm">
                                    <category.icon className="h-7 w-7" />
                                    <span>{category.category}</span>
                                </TabsTrigger>
                            </CarouselItem>
                          ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2" />
                      <CarouselNext className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2" />
                    </Carousel>
                  </TabsList>
                </div>

                {faqData.map((category) => (
                  <TabsContent key={category.slug} value={category.slug} className="pt-8">
                      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
                          {category.questions.map((faq, qIndex) => (
                          <AccordionItem value={`item-${category.slug}-${qIndex}`} key={qIndex} className="bg-muted/30 rounded-lg px-6 border">
                              <AccordionTrigger className="text-left hover:no-underline text-base md:text-lg">
                              {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground text-sm md:text-base pt-2">
                                 <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                              </AccordionContent>
                          </AccordionItem>
                          ))}
                      </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </section>
        </AnimatedSection>
        
        <Separator className="my-8 md:my-12" />

        <AnimatedSection animationType="slide-up" delay={500}>
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

    

    

    
