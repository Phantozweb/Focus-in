
"use client";

import Link from 'next/link';
import { Sparkles } from 'lucide-react'; // Changed icon
import { Button } from '@/components/ui/button';

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 text-sm w-full shadow-md">
      <div className="container mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 flex-shrink-0" />
          <span className="font-medium">
            Focus AI 3.0 is now live and available to everyone!
          </span>
        </div>
        <Button asChild size="sm" variant="secondary" className="ml-2 py-1 px-3 h-auto">
          <a href="https://focusai.netlify.app" target="_blank" rel="noopener noreferrer">
            Try it Now
          </a>
        </Button>
      </div>
    </div>
  );
}
