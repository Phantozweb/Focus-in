
import { FaqChat } from '@/components/faq/faq-chat';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Center | Focus-IN',
  description: 'Find answers to frequently asked questions about Focus-IN, our AI-powered optometry tools like Focus.Ai, the JCC simulator, and other learning resources for students.',
};

export default function HelpPage() {
  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <div className="mx-auto">
        <FaqChat />
      </div>
    </div>
  );
}
