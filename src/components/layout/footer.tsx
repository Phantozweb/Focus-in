
import { BrandLogo } from './brand-logo';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/faq', label: 'FAQ' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <BrandLogo iconSize={24} textSize="text-xl" />
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
        </div>
        <div className="mt-6 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Focus-IN. Empowering Vision.</p>
        </div>
      </div>
    </footer>
  );
}

    
