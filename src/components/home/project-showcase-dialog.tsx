
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Headphones, Sparkles, Eye } from "lucide-react";
import Link from "next/link";
import { PROJECT_NAV_ITEMS } from "@/lib/constants";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { IconRenderer } from "../shared/icon-renderer";

const featuredProjects = PROJECT_NAV_ITEMS.filter(p => p.label === 'Focus.Ai' || p.label === 'Focus Cast');

export function ProjectShowcaseDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-accent/30 bg-background/50 backdrop-blur-sm">
            See How It Works <Sparkles className="ml-2 h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Eye className="h-8 w-8 text-primary"/>
            <DialogTitle className="text-2xl">How It Works: Our Flagship Projects</DialogTitle>
          </div>
          <DialogDescription>
            We build cutting-edge tools to help you practice, learn, and excel. Here’s a look at our most popular innovations.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 md:grid-cols-2">
            {featuredProjects.map(project => (
                <Link href={project.href} key={project.label} className="group">
                    <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                                <IconRenderer iconName={project.icon.displayName} className="h-7 w-7 text-primary" />
                                <CardTitle>{project.label}</CardTitle>
                            </div>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
        <div className="text-center">
            <Button asChild>
                <Link href="/projects">
                    Explore All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
