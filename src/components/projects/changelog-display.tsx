"use client";

import type { SVGProps } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { BookOpen, CalendarDays, ChevronRight, GitCommit, Heart, Lightbulb, PackageCheck, Rocket, Sparkles, Wrench } from 'lucide-react';

interface ChangelogEntry {
  title: string;
  date: string;
  type: 'New Feature' | 'Improvement' | 'Bug Fix';
  description: string;
}

interface VersionLog {
  version: string;
  releaseDate: string;
  summary: string;
  keyHighlights?: string[];
  detailedChanges?: ChangelogEntry[];
}

export interface ChangelogData {
  currentVersion: string;
  introduction: string;
  versions: VersionLog[];
  futureUpdates: {
    introduction: string;
    items: string[];
  };
  supportNote: string;
}

interface ChangelogDisplayProps {
  changelog: ChangelogData;
  projectName: string;
}

const ChangeTypeIcon = ({ type, ...props }: { type: ChangelogEntry['type']} & SVGProps<SVGSVGElement>) => {
  if (type === 'New Feature') return <Rocket className="h-5 w-5 text-green-500" {...props} />;
  if (type === 'Improvement') return <Wrench className="h-5 w-5 text-blue-500" {...props} />;
  if (type === 'Bug Fix') return <PackageCheck className="h-5 w-5 text-orange-500" {...props} />; // Using PackageCheck for bug fix
  return null;
};


export function ChangelogDisplay({ changelog, projectName }: ChangelogDisplayProps) {
  return (
    <Card className="shadow-xl">
      <CardHeader>
        <div className="flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-primary" />
          <CardTitle className="text-3xl">What's New in {projectName}?</CardTitle>
        </div>
        <CardDescription className="text-lg">{changelog.introduction}</CardDescription>
        <div className="text-sm text-muted-foreground">Current Version: <Badge variant="default">{changelog.currentVersion}</Badge></div>
      </CardHeader>
      <CardContent className="space-y-8">
        <Accordion type="single" collapsible defaultValue={`version-${changelog.currentVersion}`} className="w-full">
          {changelog.versions.map((versionLog) => (
            <AccordionItem value={`version-${versionLog.version}`} key={versionLog.version}>
              <AccordionTrigger className="text-xl hover:no-underline">
                <div className="flex items-center gap-2">
                  <GitCommit className="h-6 w-6 text-primary/80" />
                  Version {versionLog.version}
                  <span className="text-sm text-muted-foreground ml-2">(Released: {versionLog.releaseDate})</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-6 pr-2 space-y-6 pt-4">
                <p className="text-base text-muted-foreground">{versionLog.summary}</p>
                
                {versionLog.keyHighlights && versionLog.keyHighlights.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2"><Sparkles className="h-5 w-5 text-yellow-500" />Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 pl-4 text-muted-foreground">
                      {versionLog.keyHighlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {versionLog.detailedChanges && versionLog.detailedChanges.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Detailed Changes:</h4>
                    <div className="space-y-4">
                      {versionLog.detailedChanges.map((change, index) => (
                        <Card key={index} className="bg-muted/30">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-md flex items-center gap-2">
                              <ChangeTypeIcon type={change.type} />
                              {change.title}
                            </CardTitle>
                            <div className="flex items-center text-xs text-muted-foreground gap-4">
                                <span className='flex items-center gap-1'><CalendarDays className="h-3 w-3" /> {change.date}</span>
                                <Badge variant={change.type === 'New Feature' ? 'default' : change.type === 'Improvement' ? 'secondary' : 'outline' } className='capitalize'>
                                    {change.type}
                                </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{change.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="space-y-4 rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-2xl font-semibold flex items-center gap-2"><Lightbulb className="h-7 w-7 text-primary" />Future Updates</h3>
          <p className="text-muted-foreground">{changelog.futureUpdates.introduction}</p>
          <ul className="space-y-2">
            {changelog.futureUpdates.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center text-center gap-4 pt-6 border-t">
        <Heart className="h-8 w-8 text-destructive animate-pulse" />
        <p className="text-muted-foreground">{changelog.supportNote}</p>
        <Button asChild size="lg">
          <Link href="/support">Support Our Development</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
