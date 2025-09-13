
import type { ProjectDetails } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IconRenderer } from '@/components/shared/icon-renderer';
import Image from 'next/image';

interface ProjectDetailsDisplayProps {
  project: ProjectDetails;
}

export function ProjectDetailsDisplay({ project }: ProjectDetailsDisplayProps) {
  return (
    <div className="space-y-12">
      {/* Banner Gradient */}
      <div className="relative h-72 w-full overflow-hidden rounded-lg shadow-xl md:h-96">
        <div
          className="absolute inset-0 rounded-lg bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-10">
          <IconRenderer iconName={project.iconName} className="mb-3 h-12 w-12 text-white md:h-16 md:w-16" />
          <h1 className="text-4xl font-bold text-white md:text-6xl">{project.title}</h1>
          <p className="mt-2 text-xl text-gray-200 md:text-2xl">{project.tagline}</p>
        </div>
      </div>

      <Card className="overflow-hidden shadow-xl">
        <CardContent className="p-6 md:p-8 space-y-8">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3 space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">About {project.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              {project.longDescription && (
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              )}
            </div>
            <div className="lg:col-span-2 flex items-center justify-center">
               <Image
                  src={project.imageUrl}
                  alt={`${project.title} screenshot`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md aspect-video w-full max-w-md object-cover"
                  data-ai-hint={`${project.slug} interface`}
                />
            </div>
          </div>

          {project.features && project.features.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="mb-6 text-2xl font-semibold text-foreground">Key Features</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 rounded-md border bg-card p-4 shadow-sm">
                      {feature.iconName ? 
                        <IconRenderer iconName={feature.iconName} className="mt-1 h-7 w-7 text-primary flex-shrink-0" /> : 
                        <CheckCircle className="mt-1 h-7 w-7 text-primary flex-shrink-0" />
                      }
                      <div>
                        <h4 className="font-semibold text-lg">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          
        </CardContent>
      </Card>
    </div>
  );
}

