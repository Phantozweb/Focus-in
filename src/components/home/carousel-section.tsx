
"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { LucideIcon } from "lucide-react";
import { AnimatedSection } from "../shared/animated-section";
import { IconRenderer } from "../shared/icon-renderer";

interface FeatureItem {
  iconName: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

interface CarouselSectionProps {
  features: FeatureItem[];
}

export function CarouselSection({ features }: CarouselSectionProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {features.map((feature, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="flex h-full flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl border hover:border-primary/50 bg-card group">
                  <CardHeader className="flex flex-row items-start gap-4 pb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconRenderer iconName={feature.iconName} className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mt-1">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-2rem] top-1/2 -translate-y-1/2 fill-background" />
        <CarouselNext className="absolute right-[-2rem] top-1/2 -translate-y-1/2 fill-background" />
      </Carousel>
    </div>
  );
}
