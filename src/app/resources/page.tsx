
'use client';

import { useState, useMemo } from 'react';
import { ResourceCard } from '@/components/resources/resource-card';
import { RESOURCES_DATA } from '@/lib/constants';
import { SectionTitle } from '@/components/shared/section-title';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ListFilter } from 'lucide-react';
import type { Metadata } from 'next'; // Kept for reference, but not used in client component directly for dynamic metadata

// Note: Dynamic metadata for this page would typically be set in a parent layout or if it were a server component.
// For a client component, metadata is usually static or handled differently.
// export const metadata: Metadata = {
//   title: 'Project Spotlights & Updates | Focus-IN',
//   description: 'Stay updated with the latest news, feature releases, and insights about Focus-IN projects. Explore spotlights on our innovative optometry tools and platforms.',
// };

export default function ProjectSpotlightsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');

  const filteredAndSortedResources = useMemo(() => {
    let resources = RESOURCES_DATA.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (resource.tags && resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
    );

    resources.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      if (sortOrder === 'latest') {
        return dateB - dateA;
      }
      return dateA - dateB;
    });

    return resources;
  }, [searchTerm, sortOrder]);

  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <SectionTitle
        title="Project Spotlights & Updates"
        subtitle="Explore in-depth insights and the latest news on our innovative optometry tools and platforms."
      />

      <div className="mb-8 p-6 bg-card rounded-xl shadow-md border">
        <div className="grid sm:grid-cols-2 gap-6 items-end">
          <div className="space-y-2">
            <label htmlFor="search-spotlights" className="text-sm font-medium text-foreground flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Search Spotlights
            </label>
            <Input
              id="search-spotlights"
              type="text"
              placeholder="Search by title, summary, or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="sort-spotlights" className="text-sm font-medium text-foreground flex items-center gap-2">
              <ListFilter className="h-5 w-5 text-primary" />
              Sort By
            </label>
            <Select value={sortOrder} onValueChange={(value: 'latest' | 'oldest') => setSortOrder(value)}>
              <SelectTrigger id="sort-spotlights" className="h-11">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {filteredAndSortedResources.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedResources.map((resource, index) => (
            <AnimatedSection key={resource.id} delay={index * 100} animationType="slide-up">
                <ResourceCard resource={resource} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-lg text-muted-foreground">
          No project spotlights match your criteria. Please try a different search or filter.
        </p>
      )}
    </div>
  );
}
