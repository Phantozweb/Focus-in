import { ToolFilters } from '@/components/tools/tool-filters';
import { TOOLS_DATA } from '@/lib/constants';
import { SectionTitle } from '@/components/shared/section-title';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tool Directory | Focus-In',
  description: 'Explore our comprehensive directory of optometry tools and equipment.',
};

export default function ToolsPage() {
  return (
    <div className="space-y-12">
      <SectionTitle
        title="Optometry Tool Directory"
        subtitle="Find detailed information about a wide range of optometry equipment and supplies."
      />
      <ToolFilters tools={TOOLS_DATA} />
    </div>
  );
}
