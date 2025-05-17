"use client";

import { useState, useEffect, useMemo } from 'react';
import type { Tool } from '@/types';
import { Input } from '@/components/ui/input';
import { ToolCard } from './tool-card';
import { Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimatedSection } from '@/components/shared/animated-section';

interface ToolFiltersProps {
  tools: Tool[];
}

export function ToolFilters({ tools }: ToolFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);

  const categories = useMemo(() => {
    const allCategories = new Set(tools.map(tool => tool.category));
    return ['all', ...Array.from(allCategories)];
  }, [tools]);

  useEffect(() => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const newFilteredTools = tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(lowercasedSearchTerm) ||
                            tool.description.toLowerCase().includes(lowercasedSearchTerm);
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredTools(newFilteredTools);
  }, [searchTerm, selectedCategory, tools]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 bg-card rounded-lg shadow">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search tools by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md p-2 pl-10 text-base h-12"
            aria-label="Search tools"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full h-12 text-base" aria-label="Filter by category">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category} className="capitalize text-base">
                {category === 'all' ? 'All Categories' : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool, index) => (
            <AnimatedSection key={tool.id} delay={index * 100} animationType="slide-up">
                <ToolCard tool={tool} />
            </AnimatedSection>
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-lg text-muted-foreground">No tools found matching your criteria.</p>
      )}
    </div>
  );
}
