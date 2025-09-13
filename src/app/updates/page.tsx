
"use client";

import { useState, useMemo } from 'react';
import { SectionTitle } from '@/components/shared/section-title';
import { getUpdatesData } from '@/lib/constants';
import type { Metadata } from 'next';
import { UpdateSummaryCard } from '@/components/updates/update-summary-card';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Tag } from 'lucide-react';
import type { UpdatePost } from '@/types';


export default function UpdatesPage() {
  const allUpdates = useMemo(() => getUpdatesData(), []);
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allUpdates.forEach(update => {
      update.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [allUpdates]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredUpdates = useMemo(() => {
    return allUpdates.filter(update => {
      const matchesSearch = searchTerm.length === 0 ||
        update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        update.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (update.tags && update.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
      
      const matchesTag = !selectedTag || (update.tags && update.tags.includes(selectedTag));

      return matchesSearch && matchesTag;
    });
  }, [allUpdates, searchTerm, selectedTag]);

  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <SectionTitle
        title="Latest Updates"
        subtitle="Stay informed about our projects, new features, and community news."
      />
      
      <div className="mb-10 max-w-2xl mx-auto space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search updates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
            <Tag className="h-5 w-5 text-muted-foreground mr-2" />
            <Badge
                variant={selectedTag === null ? 'default' : 'secondary'}
                onClick={() => setSelectedTag(null)}
                className="cursor-pointer transition-transform transform hover:scale-105"
            >
                All
            </Badge>
            {allTags.map(tag => (
                <Badge
                    key={tag}
                    variant={selectedTag === tag ? 'default' : 'secondary'}
                    onClick={() => setSelectedTag(tag)}
                    className="cursor-pointer transition-transform transform hover:scale-105"
                >
                    {tag}
                </Badge>
            ))}
        </div>
      </div>

      {filteredUpdates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUpdates.map((update, index) => (
            <AnimatedSection key={update.slug} delay={index * 100} animationType="slide-up">
              <UpdateSummaryCard update={update} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl font-semibold text-foreground">No updates found.</p>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}

