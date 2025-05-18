
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/shared/section-title';
import { Lightbulb, Target, Users, Activity } from 'lucide-react'; // Example icons

export const metadata: Metadata = {
  title: 'The Origin of Focus-IN | Our Story & Mission',
  description: 'Discover the story behind Focus-IN, our founding principles, and the mission that drives us to innovate for the optometry community.',
};

export default function OriginOfFocusINPage() {
  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <article className="max-w-3xl mx-auto space-y-12">
        <SectionTitle title="The Origin of Focus-IN" subtitle="Understanding Our Journey and Purpose" />

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Lightbulb className="h-7 w-7 text-primary" />
              The Spark of an Idea
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              Focus-IN was born from a simple yet profound observation: the immense potential of technology to transform and elevate the field of optometry. In a world rapidly embracing digital solutions, we saw an opportunity to bridge gaps, simplify complexities, and empower the next generation of vision care professionals.
            </p>
            <p>
              Particularly in regions like India, with a vibrant and growing optometry community, the need for accessible, high-quality digital tools was evident. We envisioned a platform that could democratize access to advanced learning aids and practice management solutions.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="h-7 w-7 text-primary" />
              Our Core Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              Our mission is to harness the power of technology – from AI and data science to interactive simulations – to create practical, user-friendly tools. We aim to equip optometry students and practitioners with resources that not only enhance their learning and clinical skills but also streamline their daily workflows.
            </p>
            <p>
              We believe that by making complex information more digestible and practice more efficient, we can contribute to a higher standard of eye care and foster a community of continuous learning and innovation.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
               <Activity className="h-7 w-7 text-primary" />
              The Journey Ahead
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-4">
            <p>
              The journey of Focus-IN is one of continuous evolution, driven by the needs of our community and the exciting possibilities of technology. From AI-assisted diagnostic learning tools like Focus.AI to practical simulators like Focus Axis, each project is a step towards realizing our vision.
            </p>
            <p>
              We are committed to listening, learning, and adapting, ensuring that Focus-IN remains a relevant and valuable partner for every optometry professional on their path to excellence. Join us as we continue to explore new frontiers in vision care technology.
            </p>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
