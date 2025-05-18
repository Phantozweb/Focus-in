
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"; // Added CardFooter
import { Button } from "@/components/ui/button"; // Added Button
import type { LucideIcon } from "lucide-react";
import { AnimatedSection } from "../shared/animated-section";
import Link from "next/link"; // Added Link
import { ArrowRight } from "lucide-react"; // Added ArrowRight

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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
      {features.map((feature, index) => (
        <AnimatedSection key={index} delay={index * 150} animationType="slide-up">
          <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border hover:border-primary/50 bg-card group">
            <CardHeader className="flex flex-row items-start gap-4 pb-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl mt-1">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
            {feature.link && feature.linkText && (
              <CardFooter>
                <Button asChild variant="default" size="sm" className="shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto">
                  {feature.link.startsWith('http') ? (
                    <a href={feature.link} target="_blank" rel="noopener noreferrer">
                      {feature.linkText} <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  ) : (
                    <Link href={feature.link}>
                      {feature.linkText} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                </Button>
              </CardFooter>
            )}
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
}

    