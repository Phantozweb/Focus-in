
import { SupportForm } from '@/components/support/support-form';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Info } from 'lucide-react'; // Removed Phone, Clock, MapPin
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support | Contact Us for Help with Focus-IN Optometry Tools',
  description: 'Need help? Contact the Focus-IN support team for assistance with our AI optometry tools, to provide feedback, or to ask a question. We aim to respond within 24-48 business hours.',
};

export default function SupportPage() {
  return (
    <div className="container mx-auto container-padding py-12 md:py-16">
      <SectionTitle
        title="Contact Support"
        subtitle="We're here to help with any questions or issues you may have."
      />
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <SupportForm />
        </div>
        <div className="space-y-6">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2"><Mail className="h-5 w-5 text-primary" />Email Us Directly</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    <p>If you prefer, you can also send us an email directly at:</p>
                    <a href="mailto:focus.in.eco@gmail.com" className="font-semibold text-primary hover:underline">
                        focus.in.eco@gmail.com
                    </a>
                    <p className="mt-2">We typically respond within 24-48 business hours.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
