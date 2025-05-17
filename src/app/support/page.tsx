
import { SupportForm } from '@/components/support/support-form';
import { SectionTitle } from '@/components/shared/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Clock, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Support | Focus-IN Optometry Solutions',
  description: 'Get support for Focus-IN optometry tools and projects. Contact us for inquiries, feedback, or assistance with our innovative vision care solutions.',
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
                    <CardTitle className="text-xl flex items-center gap-2"><Clock className="h-5 w-5 text-primary" />Our Availability</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM (EST)</p>
                    <p>We typically respond within 24 business hours.</p>
                </CardContent>
            </Card>
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2"><Phone className="h-5 w-5 text-primary" />Phone Support (Sample)</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    <p>For urgent matters, call us at:</p>
                    <p className="font-semibold text-foreground">+1 (555) 123-4567</p>
                </CardContent>
            </Card>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" />Our Office (Sample)</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                    <p>123 Optometry Lane,</p>
                    <p>Vision City, VC 54321</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
