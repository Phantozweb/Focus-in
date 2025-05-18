
import { SupportForm } from '@/components/support/support-form';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Info } from 'lucide-react'; // Removed Phone, Clock, MapPin
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Support | Focus-IN Optometry Solutions',
  description: 'Get support for Focus-IN optometry tools and projects. Contact us for inquiries, feedback, or assistance with our innovative vision care solutions via email at focus.in.eco@gmail.com.',
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
                    <p>For any inquiries, feedback, or support, you can reach us at:</p>
                    <a href="mailto:focus.in.eco@gmail.com" className="font-semibold text-primary hover:underline">
                        focus.in.eco@gmail.com
                    </a>
                    <p className="mt-2">We typically respond within 24-48 business hours.</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2"><Info className="h-5 w-5 text-primary" />Note on Form Submission</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    <p>Submitting the form on this page will attempt to open your default email client with a pre-filled message addressed to us. Please ensure your email client is set up correctly.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
