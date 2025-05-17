"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  animationType?: 'fade-in' | 'slide-up';
}

export function AnimatedSection({ children, className, delay = 0, animationType = 'fade-in' }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    if (animationType === 'slide-up') {
      return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
    }
    // Default to fade-in
    return isVisible ? 'opacity-100' : 'opacity-0';
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        'transition-all duration-700 ease-out',
        getAnimationClasses(),
        className
      )}
    >
      {children}
    </div>
  );
}
