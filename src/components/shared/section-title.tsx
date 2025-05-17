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
    <div className={cn("mb-8 text-center md:mb-12", className)}>
      <h2 className={cn("text-3xl font-bold text-primary md:text-4xl", titleClassName)}>{title}</h2>
      {subtitle && (
        <p className={cn("mt-2 text-lg text-muted-foreground md:text-xl", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
