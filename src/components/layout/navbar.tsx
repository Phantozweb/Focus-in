"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, PROJECT_NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
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
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
    const IconComponent = Icon as React.ElementType;
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
          isActive ? "bg-primary/10 text-primary" : "text-foreground/80",
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
      <Link href={item.href} className="flex items-center gap-2 w-full">
        <item.icon className="h-4 w-4 text-muted-foreground" />
        <div>
          <span>{item.label}</span>
          <p className="text-xs text-muted-foreground">{item.description}</p>
        </div>
      </Link>
    </DropdownMenuItem>
  ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <BrandLogo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} icon={item.icon}>
              {item.label}
            </NavLink>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent">
                Projects <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel>Our Innovations</DropdownMenuLabel>
              <DropdownMenuSeparator />
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
              <div className="mb-6 flex items-center justify-between">
                <BrandLogo onClick={() => setIsMobileMenuOpen(false)} />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.href} href={item.href} icon={item.icon} onClick={() => setIsMobileMenuOpen(false)} className="text-base">
                    {item.label}
                  </NavLink>
                ))}
                <div className="mt-2">
                  <h3 className="mb-2 px-3 text-sm font-semibold text-muted-foreground">Projects</h3>
                  {PROJECT_NAV_ITEMS.map((item) => (
                     <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-start gap-3 rounded-md p-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-foreground/80"
                      >
                        <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <div>
                          <span>{item.label}</span>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </Link>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
