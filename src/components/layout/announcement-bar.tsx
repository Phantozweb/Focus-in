
"use client";

import Link from 'next/link';
import { Megaphone, Headphones } from 'lucide-react'; // Added Headphones

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 text-sm w-full shadow-md">
      <div className="container mx-auto flex items-center justify-center gap-2 text-center">
        <Headphones className="h-5 w-5 flex-shrink-0" /> {/* Changed icon */}
        <span className="font-medium">
          Focuscast - Optometry Audio Learning, On the Go, is Now Live!
        </span>
        <Link href="/projects/focuscast" className="underline hover:opacity-90 font-semibold ml-1">
          Listen Now
        </Link>
      </div>
    </div>
  );
}
