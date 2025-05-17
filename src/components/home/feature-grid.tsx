
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "../shared/animated-section";

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

interface FeatureGridProps {
  features: FeatureItem[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <AnimatedSection key={index} delay={index * 150} animationType="slide-up">
          <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/50">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
              <feature.icon className="h-10 w-10 text-primary" />
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild variant="default" className="shadow-md hover:shadow-lg transition-shadow">
                <Link href={feature.link}>
                  {feature.linkText} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
}
