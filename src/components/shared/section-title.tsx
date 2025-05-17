
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionTitle({ title, subtitle, className, titleClassName, subtitleClassName }: SectionTitleProps) {
  return (
    <div className={cn("mb-10 text-center md:mb-16", className)}>
      <div className="inline-block relative group"> {/* Parent for title and line */}
        <h2 className={cn("text-3xl font-bold text-primary md:text-4xl lg:text-5xl", titleClassName)}>
          {title}
        </h2>
        {/* Animated Decorative line */}
        <div 
          className="absolute bottom-[-10px] left-1/2 h-[3px] -translate-x-1/2 transform bg-primary rounded-full animate-underline-draw"
          aria-hidden="true"
        ></div>
      </div>
      {subtitle && (
        <p className={cn("mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl", subtitleClassName)}> {/* Increased mt for subtitle */}
          {subtitle}
        </p>
      )}
    </div>
  );
}
