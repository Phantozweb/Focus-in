
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Layers, BookOpen, Eye } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const TARGET_TEXT_NORMAL = "IN";
const TARGET_TEXT_EXPANDED = "INOVATE"; // Corrected spelling

export function HeroSection() {
  const [isInExpanded, setIsInExpanded] = useState(false);

  const handleInClick = () => {
    setIsInExpanded(!isInExpanded);
  };

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center py-10 md:py-14">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 z-0 opacity-30 dark:opacity-20 bg-gradient-to-tr from-[hsl(var(--primary)/0.8)] via-[hsl(var(--accent)/0.7)] to-[hsl(var(--secondary)/0.8)]"
      />
      {/* Fade to page background overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[1]" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatedSection animationType="slide-up">
          <div className="mb-6">
            <Eye className="h-20 w-20 md:h-28 md:w-28 mx-auto text-primary animate-eye-pulse-glow" />
          </div>
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
              style={{ minWidth: !isInExpanded ? '3.5rem' : 'auto' }} 
            >
              {isInExpanded ? TARGET_TEXT_EXPANDED : TARGET_TEXT_NORMAL}
            </span>
          </h1>
          <h2 className="mb-8 text-2xl font-semibold text-primary sm:text-3xl md:text-4xl">
            Learn Smart. Practice Smarter.
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
