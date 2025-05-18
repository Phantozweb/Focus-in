
import { ProjectDetailsDisplay } from '@/components/projects/project-details-display';
import { ChangelogDisplay, type ChangelogData } from '@/components/projects/changelog-display';
import { getProjectDetailsBySlug } from '@/lib/constants';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Quote, Star, AlertTriangle, Rocket, Sparkles } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectDetailsBySlug('focus-ai');
  if (!project) {
    return { title: 'Project Not Found | Focus-IN' }
  }
  return {
    title: `${project.title} - AI Tool for Optometry Students & Professionals | Focus-IN Projects`,
    description: project.description,
  };
}

const focusAiChangelogData: ChangelogData = {
  currentVersion: "2.0",
  introduction: "Stay informed about the latest improvements, features, and bug fixes to Focus.AI. We're constantly working to enhance your learning experience.",
  versions: [
    {
      version: "2.0",
      releaseDate: "2025-05-13",
      summary: "Major update with image analysis capabilities and improved UI.",
      keyHighlights: [
        "Added image analysis for OCT and ophthalmological reports",
        "Completely redesigned user interface",
        "Enhanced study notes organization system",
        "Improved AI Assistant with chat history",
        "Added multiple format modes (simplify, student-friendly, clinical focus)"
      ],
      detailedChanges: [
        {
          title: "Image Analysis Integration",
          date: "2025-05-13",
          type: "New Feature",
          description: "AI can now interpret OCT and ophthalmological reports, providing detailed analysis and learning opportunities."
        },
        {
          title: "Enhanced Study Notes",
          date: "2025-05-13",
          type: "Improvement",
          description: "Complete redesign of the study notes section with better organization, tagging, and search functionality."
        },
        {
          title: "Advanced Quiz System",
          date: "2025-05-13",
          type: "Improvement",
          description: "Support for various question types including multiple choice, short answer, match the following, and weighted questions (1, 2, 5 marks)."
        },
        {
          title: "AI Assistant Chat History",
          date: "2025-05-13",
          type: "New Feature",
          description: "Chat history is now saved and accessible, making it easier to reference previous conversations."
        },
        {
          title: "Quick Format Modes",
          date: "2025-05-13",
          type: "New Feature",
          description: "New modes for AI responses: simplify, student-friendly, and clinical focus."
        }
      ]
    },
    {
      version: "1.0",
      releaseDate: "2023-04-16",
      summary: "Initial release with basic AI assistant and learning tools.",
      keyHighlights: [
        "Text-based AI assistant for optometry questions",
        "Simple quiz system with basic question types",
        "Case study generator with virtual patient scenarios",
        "Basic note-saving functionality (browser-based)"
      ],
      detailedChanges: [
         {
          title: "Initial AI Assistant Release",
          date: "2023-04-16",
          type: "New Feature",
          description: "Basic AI assistant providing text-based responses to optometry questions."
        },
        {
          title: "Quiz System Launch",
          date: "2023-04-16",
          type: "New Feature",
          description: "First version of the quiz system with basic question types and functionality."
        },
        {
          title: "Case Study Generator",
          date: "2023-04-16",
          type: "New Feature",
          description: "Tool to generate virtual case studies and suggested questions (without answers)."
        },
        {
          title: "Basic Notes Feature",
          date: "2023-04-16",
          type: "New Feature",
          description: "Simple note-saving functionality with browser-based storage."
        },
        {
          title: "Known Issues at Launch",
          date: "2023-04-16",
          type: "Bug Fix",
          description: "Initial release had known issues including: notes saving problems, lack of robust organization, and mobile compatibility problems with the quiz section."
        }
      ]
    }
  ],
  futureUpdates: {
    introduction: "We're constantly working on improving Focus.AI. Here are some features we're planning to add in future updates:",
    items: [
      "Mobile applications for Android and iOS",
      "Expanded case study database with more clinical scenarios",
      "Integration with our upcoming tools like Focus Share and Focus EMR",
      "Collaborative study tools for group learning",
      "Enhanced image analysis with 3D visualization of eye structures"
    ]
  },
  supportNote: "Your feedback and support are invaluable as we continue to develop Focus.AI. Consider supporting our development to help us bring more innovative features to the optometry community."
};

const testimonials = [
  {
    name: "Shobana",
    title: "Optometry Student, Tamil Nadu",
    quote: "Focus AI is a great study companion. Even though the server can be a bit unstable sometimes, the AI itself is really helpful for explaining complex optometry topics. It feels like having an expert always available.",
  },
  {
    name: "Ankit Singh",
    title: "Optometry Student, Delhi",
    quote: "The AI chat feature is surprisingly good. I've used it to clarify doubts about differential diagnoses, and it gives clear, concise answers. Definitely a valuable tool for learning.",
  },
  {
    name: "Pooja Sharma",
    title: "Optometry Student, Uttar Pradesh",
    quote: "Practice quizzes on Focus AI are fantastic. They help solidify the concepts I'm learning and identify areas where I need to focus more. It's a very effective study aid.",
  },
];

export default function FocusAiPage() {
  const project = getProjectDetailsBySlug('focus-ai');

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto container-padding py-12 md:py-16 space-y-12">
      <ProjectDetailsDisplay project={project} />
      <Separator />

      <AnimatedSection animationType="slide-up" delay={100}>
        <Card className="shadow-lg border-primary/20">
            <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                    <Rocket className="h-7 w-7 text-primary" />
                    Availability & Future Development
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>
                    A free version of Focus AI is currently available, offering core AI assistance features like the chat and basic quizzes. We are actively developing a paid version which will include more advanced capabilities, deeper integration, the case study generator, and expanded analytical tools.
                </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 pt-4">
                 <Button size="lg" asChild variant="default" className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow">
                    <a href="https://focusai.netlify.app" target="_blank" rel="noopener noreferrer">
                        <Sparkles className="mr-2 h-5 w-5" /> Access AI
                    </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto shadow-sm hover:shadow-md transition-shadow">
                  <Link href="/support">Support This Project</Link>
                </Button>
            </CardFooter>
        </Card>
      </AnimatedSection>
      
      <Separator />
      <AnimatedSection animationType="slide-up" delay={200}>
        <SectionTitle title="What Our Users Say" subtitle="Feedback from optometry students using Focus AI." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow border hover:border-primary/30">
              <CardHeader className="pb-3">
                <Quote className="h-8 w-8 text-primary/70 mb-2" />
                <CardTitle className="text-lg font-normal italic text-foreground">
                  "{testimonial.quote}"
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow"></CardContent> {/* Spacer if needed */}
              <CardFooter className="pt-3 mt-auto border-t">
                <div className="text-right w-full">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <Separator />
      <ChangelogDisplay changelog={focusAiChangelogData} projectName="Focus.AI" />
    </div>
  );
}
