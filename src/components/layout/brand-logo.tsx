
"use client";

import Link from 'next/link';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface BrandLogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
  onClick?: () => void; // For mobile nav close
}

export function BrandLogo({ className, iconSize = 28, textSize = "text-2xl", onClick }: BrandLogoProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [animatedText, setAnimatedText] = useState("IN");
  const expansionTargetText = "INTEGRATED NETWORK";
  const typingSpeed = 120; // ms per letter
  const pauseBeforeExpand = 2500; // ms to show "IN"
  const pauseAfterExpand = 3000; // ms to show "INTEGRATED NETWORK"

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let mainCycleTimeout: NodeJS.Timeout;

    const startTypingExpansion = () => {
      setIsExpanded(true);
      setAnimatedText(""); // Clear before typing
      let charIndex = 0;
      typingInterval = setInterval(() => {
        if (charIndex < expansionTargetText.length) {
          setAnimatedText((prev) => prev + expansionTargetText[charIndex]);
          charIndex++;
        } else {
          clearInterval(typingInterval);
          // Completed typing "INTEGRATED NETWORK", pause then restart cycle
          mainCycleTimeout = setTimeout(startCycle, pauseAfterExpand);
        }
      }, typingSpeed);
    };

    const startCycle = () => {
      setIsExpanded(false);
      setAnimatedText("IN");
      // Pause with "IN", then expand
      mainCycleTimeout = setTimeout(startTypingExpansion, pauseBeforeExpand);
    };

    startCycle(); // Initial start of the animation cycle

    return () => {
      clearInterval(typingInterval);
      clearTimeout(mainCycleTimeout);
    };
  }, []); // Empty dependency array ensures this runs once on mount and loops

  return (
    <Link href="/" className={cn("flex items-center gap-2 text-primary hover:opacity-80 transition-opacity", className)} onClick={onClick}>
      <Eye size={iconSize} strokeWidth={2.5} />
      <span className={cn("font-bold", textSize, "tracking-tight flex")}>
        <span className="text-foreground">Focus</span>
        <span className="text-primary uppercase" style={{minWidth: isExpanded ? '10ch' : '2ch', display: 'inline-block'}}>
          {animatedText}
        </span>
      </span>
    </Link>
  );
}
