
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { AnnouncementBar } from '@/components/layout/announcement-bar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://focus-in.netlify.app'), // Replace with your actual domain
  title: {
    default: 'Focus-IN | AI Optometry Tools, JCC Simulator & Learning Resources',
    template: '%s | Focus-IN',
  },
  description: 'Focus-IN offers cutting-edge AI optometry tools like Focus.Ai, a JCC simulator (Focus Axis), and innovative learning resources for optometry students and vision care professionals.',
  keywords: ['optometry AI', 'optometry tools', 'JCC simulator', 'Focus.Ai', 'Focus Axis', 'Focus Gen', 'optometry student resources', 'vision care technology', 'eye care practice tools'],
  openGraph: {
    title: 'Focus-IN | Innovative Optometry Tools & Resources',
    description: 'Explore AI-powered tools for optometry students and professionals.',
    type: 'website',
    locale: 'en_US',
    url: 'https://focus-in.netlify.app', // Replace with your actual domain
    siteName: 'Focus-IN',
    images: [
      {
        url: 'https://placehold.co/1200x630.png', // Replace with a real OG image
        width: 1200,
        height: 630,
        alt: 'Focus-IN Optometry Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Focus-IN | Innovative Optometry Tools & Resources',
    description: 'Explore AI-powered tools for optometry students and professionals.',
    // images: ['https://focus-in.netlify.app/og-image.png'], // Replace with a real OG image
    // creator: '@yourtwitterhandle', // Replace with your Twitter handle
  },
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}>
        <AnnouncementBar />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
