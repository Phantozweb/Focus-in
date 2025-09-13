
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
  metadataBase: new URL('https://focus-in.netlify.app'),
  title: {
    default: 'Focus-IN | AI Optometry Tools, JCC Simulator & Learning Resources',
    template: '%s | Focus-IN',
  },
  description: 'Explore cutting-edge AI optometry tools, a JCC simulator, and innovative learning resources. Focus-IN empowers optometry students and vision care professionals with the technology to practice, learn, and excel.',
  keywords: ['optometry AI', 'optometry tools', 'JCC simulator', 'Focus.Ai', 'Focus Axis', 'Focus Gen', 'optometry student resources', 'vision care technology', 'eye care practice tools'],
  verification: {
    google: 'RYhFog1Yp3g2Il7DThaudIMk7PJH9NIwwilaA2BzC2s',
  },
  openGraph: {
    title: 'Focus-IN | AI Optometry Tools, JCC Simulator & Learning Resources',
    description: 'Empowering optometry students and professionals with AI-powered simulators, audio lessons, and cutting-edge learning resources to sharpen clinical skills.',
    type: 'website',
    locale: 'en_US',
    url: 'https://focus-in.netlify.app',
    siteName: 'Focus-IN',
    images: [
      {
        url: 'https://placehold.co/1200x630/2196f3/ffffff?text=Focus-IN',
        width: 1200,
        height: 630,
        alt: 'Focus-IN: Smarter Tools for Optometry Students',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Focus-IN | AI Optometry Tools, JCC Simulator & Learning Resources',
    description: 'Empowering optometry students and professionals with AI-powered simulators, audio lessons, and cutting-edge learning resources to sharpen clinical skills.',
    images: ['https://placehold.co/1200x630/2196f3/ffffff?text=Focus-IN'],
  },
  icons: {
    icon: '/favicon.ico', 
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Focus-IN',
  url: 'https://focus-in.netlify.app',
  logo: 'https://focus-in.netlify.app/icon.png', // Create and replace with your actual logo URL
  sameAs: [
    'https://www.linkedin.com/company/focusprojects/',
    'https://www.instagram.com/focus_.in?igsh=dTY5MG96cHc5Zmhu',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'focus.in.eco@gmail.com',
    contactType: 'Customer Support',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
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
