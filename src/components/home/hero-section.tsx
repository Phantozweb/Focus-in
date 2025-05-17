
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Layers, BookOpen } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const [isInExpanded, setIsInExpanded] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const targetText = "INNOVATE"; // Changed from INTEGRATED NETWORK

  const toggleInText = () => {
    setIsInExpanded(!isInExpanded);
  };

  useEffect(() => {
    if (isInExpanded) {
      setDisplayedText(''); // Reset before typing
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < targetText.length) {
          setDisplayedText((prev) => prev + (targetText[index] || ''));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 100); // Adjust typing speed as needed

      return () => clearInterval(intervalId);
    } else {
      // When collapsing, immediately set to "IN" or clear
      setDisplayedText('');
    }
  }, [isInExpanded, targetText]);

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center py-10 md:py-14">
      <div
        className="absolute inset-0 z-0 opacity-25 dark:opacity-15 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))]"
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatedSection animationType="slide-up">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            FOCUS-
            <span
              onClick={toggleInText}
              className={cn(
                "text-primary cursor-pointer transition-all duration-300 ease-in-out inline-block",
                !isInExpanded && "animate-subtle-bounce hover:underline",
                isInExpanded && "whitespace-nowrap" 
              )}
              title={isInExpanded ? "Click to shorten" : "Click to expand"}
              style={{ minWidth: isInExpanded ? 'auto' : '2ch' }} // Prevent layout shift for "IN"
            >
              {isInExpanded ? displayedText : 'IN'}
            </span>
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={200} animationType="slide-up">
          <p className="mb-10 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Your premier destination for optometry tools, learning resources, and innovative projects designed for aspiring and practicing optometrists.
          </p>
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

