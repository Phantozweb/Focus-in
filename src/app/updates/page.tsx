
"use client";

import { useState, useEffect, useMemo } from 'react';
import { UpdateSummaryCard } from '@/components/updates/update-summary-card';
import { getUpdatesData } from '@/lib/constants';
import { SectionTitle } from '@/components/shared/section-title';
import { AnimatedSection } from '@/components/shared/animated-section';
import type { Metadata } from 'next';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import type { UpdatePost } from '@/types';

// Metadata can't be dynamic in "use client" components easily,
// so we'll keep it static or move it to a server component wrapper if needed.
// export const metadata: Metadata = {
//   title: 'Latest Updates & News | Focus-IN',
//   description: 'Stay informed with the latest updates, news, and announcements from Focus-IN. Learn about new features, project milestones, and insights for the optometry community.',
// };

export default function UpdatesPage() {
  const allUpdates = useMemo(() => getUpdatesData(), []);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUpdates, setFilteredUpdates] = useState<UpdatePost[]>(allUpdates);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredUpdates(allUpdates);
      return;
    }

    const lowercasedFilter = searchTerm.toLowerCase();
    const filtered = allUpdates.filter(update => {
      const titleMatch = update.title.toLowerCase().includes(lowercasedFilter);
      const excerptMatch = update.excerpt.toLowerCase().includes(lowercasedFilter);
      const tagsMatch = update.tags?.some(tag => tag.toLowerCase().includes(lowercasedFilter));
      const contentMatch = update.content.toLowerCase().includes(lowercasedFilter);
      return titleMatch || excerptMatch || tagsMatch || contentMatch;
    });
    setFilteredUpdates(filtered);
  }, [searchTerm, allUpdates]);

  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <SectionTitle
        title="Latest Updates"
        subtitle="Stay informed about our projects, new features, and community news."
      />

      <div className="mb-8 max-w-xl mx-auto">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search updates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-base shadow-sm"
          />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      {filteredUpdates.length > 0 ? (
        <div className="space-y-8">
          {filteredUpdates.map((update, index) => (
            <AnimatedSection key={update.slug} delay={index * 100} animationType="slide-up">
              <UpdateSummaryCard update={update} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-lg text-muted-foreground">
          {searchTerm ? `No updates found for "${searchTerm}".` : "No updates available at the moment. Please check back later."}
        </p>
      )}
    </div>
  );
}
