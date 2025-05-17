"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Wrench, BookOpen } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden flex items-center justify-center py-16 md:py-24">
      <div
        className="absolute inset-0 z-0 opacity-20 dark:opacity-10 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--background))]"
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatedSection animationType="slide-up">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Welcome to <span className="text-primary">Focus-In</span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={200} animationType="slide-up">
          <p className="mb-10 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Your premier destination for optometry tools, learning resources, and innovative projects designed for aspiring and practicing optometrists.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={400} animationType="slide-up">
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild size="lg" className="shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary/30">
              <Link href="/tools">
                <Wrench className="mr-2 h-5 w-5" /> Explore Tools
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-accent/30">
              <Link href="/resources">
                <BookOpen className="mr-2 h-5 w-5" /> Learning Hub
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
