
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Layers, BookOpen } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const TARGET_TEXT_NORMAL = "IN";
const TARGET_TEXT_EXPANDED = "INOVATE"; 

export function HeroSection() {
  const [isInExpanded, setIsInExpanded] = useState(false);

  const handleInClick = () => {
    setIsInExpanded(!isInExpanded);
  };

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center py-10 md:py-14">
      <div
        className="absolute inset-0 z-0 opacity-30 dark:opacity-20 bg-gradient-to-tr from-[hsl(var(--primary)/0.8)] via-[hsl(var(--accent)/0.7)] to-[hsl(var(--secondary)/0.8)]"
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatedSection animationType="slide-up">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            FOCUS-
            <span
              key={isInExpanded ? 'expanded' : 'normal'}
              onClick={handleInClick}
              title={isInExpanded ? "Click to shorten" : "Click to expand"}
              className={cn(
                "cursor-pointer text-primary transition-all duration-300 ease-in-out inline-block whitespace-nowrap",
                isInExpanded ? "animate-popup" : "animate-subtle-bounce hover:underline"
              )}
              style={{ minWidth: !isInExpanded ? '3rem' : 'auto' }} 
            >
              {isInExpanded ? TARGET_TEXT_EXPANDED : TARGET_TEXT_NORMAL}
            </span>
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-primary sm:text-3xl md:text-4xl">
            Your Lens on Optometric Innovation.
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={400} animationType="slide-up">
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Button asChild size="lg" variant="default" className="shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary/30">
              <Link href="/projects">
                <Layers className="mr-2 h-5 w-5" /> Explore Our Projects
              </Link>
            </Button>
            <Button asChild variant="default" size="lg" className="shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-accent/30">
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
