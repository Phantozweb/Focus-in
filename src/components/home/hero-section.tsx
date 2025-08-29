
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Layers, Info, ArrowRight } from 'lucide-react'; 
import { AnimatedSection } from '@/components/shared/animated-section';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [isInExpanded, setIsInExpanded] = useState(false);

  const handleInClick = () => {
    setIsInExpanded(!isInExpanded);
  };

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center py-20 md:py-28">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 z-0 opacity-30 dark:opacity-20 bg-gradient-to-tr from-[hsl(var(--primary)/0.8)] via-[hsl(var(--accent)/0.7)] to-[hsl(var(--secondary)/0.8)]"
      />
      {/* Fade to page background overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[1]" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatedSection animationType="slide-up">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-tight">
            Smarter Tools for Optometry Students
            <br className="hidden md:block" />
            Practice, Learn, and Ace Your Exams.
          </h1>
          <h2 className="mb-8 text-lg max-w-3xl mx-auto font-medium text-muted-foreground sm:text-xl md:text-2xl">
            From AI-powered simulators to audio lessons, Focus-IN saves you time, builds confidence, and sharpens clinical skills.
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={400} animationType="slide-up">
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild size="lg" variant="default" className="shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary/30">
              <Link href="/projects">
                Start Practicing Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-accent/30 bg-background/50 backdrop-blur-sm">
              <Link href="#our-projects-section"> 
                See How It Works <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
