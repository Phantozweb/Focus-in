
"use client";

import Link from 'next/link';
import { Megaphone } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 text-sm w-full shadow-md">
      <div className="container mx-auto flex items-center justify-center gap-2 text-center">
        <Megaphone className="h-5 w-5 flex-shrink-0" />
        <span className="font-medium">
          New Project "Focus CaseX" is on the way!
        </span>
        <Link href="/projects/focus-casex" className="underline hover:opacity-90 font-semibold ml-1">
          Learn more
        </Link>
      </div>
    </div>
  );
}
