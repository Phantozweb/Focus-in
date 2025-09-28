
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown, Layers, Home, Info, Lightbulb, Megaphone, Mail, HelpCircle } from 'lucide-react';
import { NAV_ITEMS, PROJECT_NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BrandLogo } from './brand-logo';

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, children, icon: Icon, className, onClick }: { href: string, children: React.ReactNode, icon?: React.ElementType, className?: string, onClick?: () => void }) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href) && href.split('/').length > 1 && pathname.split('/').length > 1);
    const isHomeActive = href === '/' && pathname === '/';
    const activeClass = (isActive || isHomeActive) ? "bg-primary/10 text-primary font-semibold" : "text-foreground/80 hover:text-foreground";
    
    const IconComponent = Icon as React.ElementType;
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/50",
          activeClass,
          className
        )}
        onClick={onClick}
      >
        {IconComponent && <IconComponent className="h-5 w-5" />}
        {children}
      </Link>
    );
  };

  const projectLinks = PROJECT_NAV_ITEMS.map((item) => (
    <DropdownMenuItem key={item.href} asChild>
      <Link href={item.href} className={cn("flex items-start gap-3 w-full p-2 rounded-md", pathname.startsWith(item.href) ? "bg-accent/60 text-accent-foreground" : "hover:bg-accent/50")}>
        <item.icon className="mt-1 h-5 w-5 text-primary" />
        <div>
          <span className="font-medium">{item.label}</span>
          <p className="text-xs text-muted-foreground">{item.description}</p>
        </div>
      </Link>
    </DropdownMenuItem>
  ));
  
  const renderNavItem = (item: any) => {
    if (item.children) {
      const isDropdownActive = item.children.some((child: any) => pathname.startsWith(child.href));
      return (
        <DropdownMenu key={item.label}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={cn("flex items-center gap-1 px-3 py-2 text-sm font-medium data-[state=open]:bg-accent/50", isDropdownActive ? "bg-primary/10 text-primary font-semibold" : "text-foreground/80 hover:text-foreground hover:bg-accent/50")}>
               {item.icon && <item.icon className="h-5 w-5" />}
              {item.label} <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-60 p-2 space-y-1">
            {item.children.map((child: any) => (
                <DropdownMenuItem key={child.href} asChild>
                  <Link href={child.href} className={cn("flex items-center gap-3 w-full p-2 rounded-md", pathname.startsWith(child.href) ? "bg-accent/60 text-accent-foreground" : "hover:bg-accent/50")}>
                    <child.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{child.label}</span>
                  </Link>
                </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
      <NavLink key={item.href} href={item.href} icon={item.icon}>
        {item.label}
      </NavLink>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => renderNavItem(item))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={cn("flex items-center gap-1 px-3 py-2 text-sm font-medium data-[state=open]:bg-accent/50", pathname.startsWith('/projects') ? "bg-primary/10 text-primary font-semibold" : "text-foreground/80 hover:text-foreground hover:bg-accent/50")}>
                <Layers className="h-5 w-5" />
                Projects <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 p-2 space-y-1">
              <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold">Our Innovations</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href="/projects" className={cn("flex items-start gap-3 w-full p-2 rounded-md", pathname === '/projects' ? "bg-accent/60 text-accent-foreground" : "hover:bg-accent/50")}>
                  <Layers className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <span className="font-medium">All Projects</span>
                    <p className="text-xs text-muted-foreground">View all our innovations</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="mx-0" />
              {projectLinks}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6">
              <SheetTitle className="sr-only">Menu</SheetTitle> 
              <div className="mb-6 flex items-center">
                <BrandLogo onClick={() => setIsMobileMenuOpen(false)} />
              </div>
              <nav className="flex flex-col gap-2">
                <NavLink href="/" icon={Home} onClick={() => setIsMobileMenuOpen(false)} className="text-base py-3">Home</NavLink>
                <NavLink href="/projects" icon={Layers} onClick={() => setIsMobileMenuOpen(false)} className="text-base py-3">Projects</NavLink>
                <NavLink href="/about" icon={Info} onClick={() => setIsMobileMenuOpen(false)} className="text-base py-3">About Us</NavLink>
                <NavLink href="/updates" icon={Megaphone} onClick={() => setIsMobileMenuOpen(false)} className="text-base py-3">Updates</NavLink>
                 <NavLink href="/faq" icon={HelpCircle} onClick={() => setIsMobileMenuOpen(false)} className="text-base py-3">Help</NavLink>
                <NavLink href="/support" icon={Mail} onClick={() => setIsMobileMenuOpen(false)} className="text-base py-3">Support</NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    