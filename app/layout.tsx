import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'Shiv Biotech — Empowering Agriculture through Bio-Innovation',
    template: '%s | Shiv Biotech'
  },
  description: 'Shiv Biotech provides high-performance, eco-friendly biostimulants for sustainable agriculture. Empowering farmers with innovative biotechnology for improved yield, soil health, and crop quality.',
  keywords: [
    'Shiv Biotech',
    'biostimulants',
    'bio fertilizers',
    'organic farming',
    'plant nutrition',
    'agriculture Maharashtra',
    'crop yield improvement',
    'sustainable agriculture',
    'Chhatrapati Sambhajinagar',
    'bio pesticides'
  ],
  authors: [{ name: 'Shiv Biotech', url: 'https://www.shivbiotech.in' }],
  creator: 'Shiv Biotech',
  publisher: 'Shiv Biotech',
  metadataBase: new URL('https://www.shivbiotech.in'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.shivbiotech.in',
    siteName: 'Shiv Biotech',
    title: 'Shiv Biotech — Empowering Agriculture through Bio-Innovation',
    description: 'High-performance eco-friendly biostimulants for sustainable agriculture. Grow Together.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shiv Biotech — Bio-Innovation for Agriculture'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shiv Biotech — Empowering Agriculture through Bio-Innovation',
    description: 'High-performance eco-friendly biostimulants for sustainable agriculture.',
    images: ['/og-image.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png'
  },
  manifest: '/manifest.json',
  verification: {
    google: ''
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1F8A3B'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
