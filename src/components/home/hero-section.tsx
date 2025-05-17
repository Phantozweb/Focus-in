
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Layers, BookOpen } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/animated-section';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const TARGET_TEXT_NORMAL = "IN";
const TARGET_TEXT_EXPANDED = "INOVATE"; // Changed from INNOVATE to INOVATE
const TYPING_SPEED_MS = 100;

export function HeroSection() {
  const [isInExpanded, setIsInExpanded] = useState(false);
  const [displayedText, setDisplayedText] = useState(TARGET_TEXT_NORMAL);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let charIndex = 0;

    if (isAnimating && isInExpanded) {
      setDisplayedText(''); // Clear before typing
      const typeLetter = () => {
        if (charIndex < TARGET_TEXT_EXPANDED.length) {
          setDisplayedText((prev) => prev + (TARGET_TEXT_EXPANDED[charIndex] || ''));
          charIndex++;
          typingTimeout = setTimeout(typeLetter, TYPING_SPEED_MS);
        } else {
          setIsAnimating(false); // Animation finished
        }
      };
      // Start typing after a very brief delay to ensure state updates are processed
      typingTimeout = setTimeout(typeLetter, TYPING_SPEED_MS / 2); 
    } else if (!isInExpanded) {
      setDisplayedText(TARGET_TEXT_NORMAL);
      setIsAnimating(false);
    }

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [isInExpanded, isAnimating]);

  const handleInClick = () => {
    if (!isAnimating) {
      setIsInExpanded(!isInExpanded);
      if (!isInExpanded) { // If about to expand
        setIsAnimating(true);
      }
    }
  };

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center py-10 md:py-14">
      <div
        className="absolute inset-0 z-0 opacity-30 dark:opacity-20 bg-gradient-to-tr from-primary via-accent to-secondary"
      />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatedSection animationType="slide-up">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
            FOCUS
            <span
              onClick={handleInClick}
              title={isInExpanded ? "Click to shorten" : "Click to expand"}
              className={cn(
                "cursor-pointer text-primary transition-all duration-300 ease-in-out inline-block whitespace-nowrap",
                !isInExpanded && !isAnimating ? "animate-subtle-bounce hover:underline" : "",
                isAnimating ? "opacity-75" : "opacity-100",
                isInExpanded ? "whitespace-nowrap" : "" 
              )}
              style={{ minWidth: !isInExpanded ? '3rem' : 'auto' }} 
            >
              -{displayedText}
            </span>
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-primary sm:text-3xl md:text-4xl">
            Empowering Vision Care Professionals with Innovative Tools
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={200} animationType="slide-up">
          <p className="mb-10 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
            Welcome to Focus-IN! Focus-IN began as a simple idea: to leverage technology to build practical, accessible tools for the optometry community, especially in places like India. We aim to provide resources that simplify complex tasks, enhance learning, and make daily practice more efficient for students and professionals alike.
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
