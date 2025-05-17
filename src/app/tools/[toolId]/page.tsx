import { TOOLS_DATA } from '@/lib/constants';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Package, Tag, Info } from 'lucide-react';
import type { Metadata } from 'next';
import type { Tool } from '@/types';
import { IconRenderer } from '@/components/shared/icon-renderer';

type Props = {
  params: { toolId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = TOOLS_DATA.find(t => t.id === params.toolId);
  if (!tool) {
    return {
      title: 'Tool Not Found | Focus-In',
    }
  }
  return {
    title: `${tool.name} | Focus-In`,
    description: tool.description,
  };
}

export default function ToolDetailPage({ params }: { params: { toolId: string } }) {
  const tool = TOOLS_DATA.find(t => t.id === params.toolId);

  if (!tool) {
    notFound();
  }

  return (
    <div className="space-y-8">
        <Button variant="outline" asChild className="mb-8">
            <Link href="/tools">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Tool Directory
            </Link>
        </Button>

        <Card className="overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2">
                <div className="relative h-96 md:h-auto min-h-[300px]">
                    <div
                    className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))]"
                    />
                </div>
                <div className="p-6 md:p-8 flex flex-col">
                    <CardHeader className="p-0 mb-4">
                        <div className="flex items-start justify-between">
                            <CardTitle className="text-3xl font-bold">{tool.name}</CardTitle>
                            <IconRenderer iconName={tool.iconName} className="h-8 w-8 text-primary flex-shrink-0" />
                        </div>
                    </CardHeader>
                    <CardDescription className="text-lg text-muted-foreground mb-6 flex-grow">
                        {tool.description}
                    </CardDescription>
                    
                    <div className="space-y-3 mt-auto">
                        <div className="flex items-center gap-2 text-sm">
                            <Tag className="h-5 w-5 text-primary" />
                            <span className="font-medium">Category:</span>
                            <Badge variant="secondary">{tool.category}</Badge>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Package className="h-5 w-5 text-primary" />
                            <span className="font-medium">Availability:</span>
                            <span>In Stock (Sample)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Info className="h-5 w-5 text-primary" />
                            <span className="font-medium">SKU:</span>
                            <span>TOOL-{tool.id.padStart(4, '0')} (Sample)</span>
                        </div>
                    </div>
                    <Button size="lg" className="mt-8 w-full md:w-auto shadow-md">
                        Request a Quote (Sample Action)
                    </Button>
                </div>
            </div>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Product Specifications (Sample)</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Dimension: 20cm x 30cm x 15cm</li>
                    <li>Weight: 2.5kg</li>
                    <li>Power Supply: 110-240V AC</li>
                    <li>Material: Medical Grade Alloy & Polymer</li>
                    <li>Warranty: 2 Years</li>
                </ul>
            </CardContent>
        </Card>
    </div>
  );
}

// Enable static generation for all tools
export async function generateStaticParams() {
  return TOOLS_DATA.map(tool => ({
    toolId: tool.id,
  }));
}
