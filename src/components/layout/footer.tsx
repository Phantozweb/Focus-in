import { BrandLogo } from './brand-logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background/80">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <BrandLogo iconSize={24} textSize="text-xl" />
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Focus-In. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
