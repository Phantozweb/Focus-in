
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
      <h2 className={cn("text-3xl font-bold text-primary md:text-4xl lg:text-5xl", titleClassName)}>{title}</h2>
      {subtitle && (
        <p className={cn("mt-3 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
