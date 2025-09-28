
import { FaqChat } from '@/components/faq/faq-chat';
import { SectionTitle } from '@/components/shared/section-title';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Center | Focus-IN',
  description: 'Find answers to frequently asked questions about Focus-IN, our AI-powered optometry tools like Focus.Ai, the JCC simulator, and other learning resources for students.',
};

export default function HelpPage() {
  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <SectionTitle
        title="Help Center"
        subtitle="Have questions? We've got answers. Select a category to start a conversation with our Help Assistant."
      />
      <div className="max-w-5xl mx-auto">
        <FaqChat />
      </div>
    </div>
  );
}
