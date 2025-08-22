
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../shared/animated-section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconRenderer } from "../shared/icon-renderer";
import { Badge } from "../ui/badge";

interface FeatureItem {
  iconName: string;
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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mt-8 md:mt-12">
      {features.map((feature, index) => (
        <AnimatedSection key={index} delay={index * 150} animationType="slide-up">
          <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border hover:border-primary/50 bg-card group">
            <CardHeader className="flex flex-row items-start gap-4 pb-4">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <IconRenderer iconName={feature.iconName} className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-xl mt-1">{feature.title}</CardTitle>
                  {feature.description.includes("(Paid)") && <Badge variant="default" className="mt-1">Paid</Badge>}
                  {feature.description.includes("(Free)") && <Badge variant="default" className="mt-1">Free</Badge>}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>
                {feature.description.replace(/\s*\((Paid|Free)\)/, '')}
              </CardDescription>
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
