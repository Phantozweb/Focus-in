
"use client";

import Link from 'next/link';
import { Eye } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

interface BrandLogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
  onClick?: () => void; // For mobile nav close
}

export function BrandLogo({ className, iconSize = 28, textSize = "text-2xl", onClick }: BrandLogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-primary hover:opacity-80 transition-opacity", className)} onClick={onClick}>
      <Eye size={iconSize} strokeWidth={2.5} />
      <span className={cn("font-bold", textSize, "tracking-tight text-foreground")}>
        Focus
      </span>
    </Link>
  );
}
