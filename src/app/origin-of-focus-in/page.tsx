
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { Lightbulb, Target, Users, Activity, Brain, Settings, CalendarDays, BookOpen, Monitor, Heart } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';

export const metadata: Metadata = {
  title: 'The Origin of Focus-IN | Our Founding Story',
  description: 'Discover the story behind Focus-IN, born from a personal need for better optometry learning tools. Learn about our mission to close the technology gap in vision care education.',
};

export default function OriginOfFocusINPage() {
  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <article className="max-w-3xl mx-auto space-y-12">
        <AnimatedSection animationType="slide-up">
          <SectionTitle title="The Origin of Focus-IN" subtitle="A Journey Sparked by Necessity, Driven by Passion" />
        </AnimatedSection>

        <AnimatedSection animationType="slide-up" delay={100}>
          <Card className="shadow-lg border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Lightbulb className="h-8 w-8 text-primary" />
                The Initial Spark: A Personal Quest
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
              <p>
                The story of Focus-IN begins with its founder, Janarthan Veeramani. As an optometry student, Janarthan found himself navigating a challenging learning landscape. The material felt vast and raw, concepts were sometimes difficult to grasp from dense textbooks, and the available digital tools often lacked the accuracy or specific focus needed for efficient study.
              </p>
              <p>
                This personal struggle with the existing learning resources planted a seed. What if there was a better way? A more intuitive, accurate, and tailored approach to understanding optometry?
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection animationType="slide-up" delay={200}>
          <Card className="shadow-lg border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Brain className="h-8 w-8 text-primary" />
                Focus AI: From Personal Tool to Public Resource
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
              <div className="flex items-center gap-2 text-sm text-primary mb-2">
                  <CalendarDays className="h-5 w-5"/>
                  <span>June 12, 2024: The First Prototype</span>
              </div>
              <p>
                Driven by this need, Janarthan began developing a tool for his personal use. On June 12, 2024, the first iteration of what would become Focus AI was born – a solution crafted to aid his own learning.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary mt-4 mb-2">
                  <CalendarDays className="h-5 w-5"/>
                  <span>March 23, 2025: Sharing with the World</span>
              </div>
              <p>
                Realizing its potential to help others, Focus AI was publicly launched online on March 23, 2025 – World Optometry Day. It started with a minimalistic UI, designed for core functionality and ease of access.
              </p>
               <div className="flex items-center gap-2 text-sm text-primary mt-4 mb-2">
                  <CalendarDays className="h-5 w-5"/>
                  <span>May 30, 2025: Evolving the Experience</span>
              </div>
              <p>
                Continuous improvement led to a significant UI update on May 30, 2025, enhancing the user experience. This marked the true beginning of Focus AI as a dedicated platform for optometry students.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection animationType="slide-up" delay={300}>
          <Card className="shadow-lg border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Monitor className="h-8 w-8 text-primary" />
                Expanding the Vision: The Genesis of Focus Clinic
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
               <div className="flex items-center gap-2 text-sm text-primary mb-2">
                  <CalendarDays className="h-5 w-5"/>
                  <span>October 2024: A Side Project Ignites</span>
              </div>
              <p>
                In between the development of Focus AI, a new idea sparked in October 2024. Janarthan wanted to explore the creation of an EMR (Electronic Medical Record) system that was both affordable and had a user-friendly, mobile-first feel. Initially, it was a passion project focused purely on UI/UX, visualizing how an EMR could look and feel on a mobile device, even without a backend.
              </p>
              <p>
                This side project, initially named Focus EMR and later Focus Clinic, began to take shape. The goal was clear: to make effective clinical record-keeping accessible and affordable for smaller clinics. As of June 13, 2025, work continues to refine Focus Clinic into an impactful tool for the optometry community.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection animationType="slide-up" delay={400}>
          <Card className="shadow-lg border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                Our Core Mission & Driving Force
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-muted-foreground space-y-4">
              <p>
                While projects like Focus Axis (JCC Simulator) and Focus Cast (Audio Learning) emerged as valuable side ventures, our primary dedication has always been to <strong>Focus AI</strong> and <strong>Focus Clinic</strong>.
              </p>
              <p>
                The fundamental reason behind all these efforts is to address the significant <strong className="text-foreground">gap in learning and accessible tooling within the optometry field</strong>. We strive to empower students and professionals with innovative, user-friendly technology that enhances education, simplifies clinical practice, and fosters a collaborative community.
              </p>
              <p>
                Focus-IN is more than just a suite of tools; it's a commitment to continuous improvement and a response to the evolving needs of the vision care community.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

      </article>
    </div>
  );
}
