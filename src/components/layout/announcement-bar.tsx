
"use client";

import Link from 'next/link';
import { Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Added Button import

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 text-sm w-full shadow-md">
      <div className="container mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
        <div className="flex items-center gap-2">
          <Headphones className="h-5 w-5 flex-shrink-0" />
          <span className="font-medium">
            Focuscast - Optometry Audio Learning, On the Go, is Now Live!
          </span>
        </div>
        <Button asChild size="sm" variant="secondary" className="ml-2 py-1 px-3 h-auto">
          <Link href="/projects/focuscast">
            Listen Now
          </Link>
        </Button>
      </div>
    </div>
  );
}
