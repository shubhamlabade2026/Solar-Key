import { Inter } from 'next/font/google';
import './globals.css';
import ScrollProgressBar from '../components/ScrollProgressBar';
import PageTransition from '../components/PageTransition';

/* ── Component CSS (imported here for guaranteed server-side inclusion) ── */
import '../components/Navbar.css';
import '../components/Hero.css';
import '../components/HowItWorks.css';
import '../components/Features.css';
import '../components/BuiltBy.css';
import '../components/CTABanner.css';
import '../components/Footer.css';
import '../components/platform/platform.css';
import '../components/careers/careers.css';

/* ── Font ── */
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

/* ── Metadata (rendered server-side as real HTML <meta> tags) ── */
export const metadata = {
  title: 'SolarKey — AI Monitoring & Operations Platform',
  description:
    'SolarKey connects to the inverters, SCADA and meters you already run, monitors every site in real time, and flags faults with AI before they cut your output.',
  keywords: [
    'solar monitoring',
    'AI solar',
    'solar SCADA',
    'solar O&M',
    'predictive maintenance solar',
    'solar asset management',
    'SolarKey',
    'India solar',
    'West Asia solar',
  ],
  authors: [{ name: 'SolarKey' }],
  creator: 'SolarKey',

  /* ── Open Graph (Facebook, LinkedIn, WhatsApp, Slack, etc.) ── */
  openGraph: {
    title: 'SolarKey — AI Monitoring & Operations Platform',
    description:
      'See every site. Catch every fault. Prove every kWh. AI-powered solar monitoring for asset owners, O&M providers and investors across India & West Asia.',
    url: 'https://www.solar-key.com',
    siteName: 'SolarKey',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.png',   // resolved by metadataBase → https://www.solar-key.com/og-image.png
        width: 1200,
        height: 630,
        alt: 'SolarKey — AI Monitoring & Operations Platform',
      },
    ],
  },

  /* ── Twitter Card ── */
  twitter: {
    card: 'summary_large_image',
    title: 'SolarKey — AI Monitoring & Operations Platform',
    description:
      'See every site. Catch every fault. Prove every kWh. AI-powered solar monitoring for asset owners, O&M providers and investors across India & West Asia.',
    images: ['/og-image.png'],   // resolved by metadataBase → https://www.solar-key.com/og-image.png
  },

  /* ── Misc ── */
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://www.solar-key.com'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SolarKey Advanced Ai Solutions Pvt. Ltd.",
          "alternateName": "SolarKey",
          "url": "https://www.solar-key.com",
          "logo": "https://www.solar-key.com/logo.png",
          "foundingDate": "2026",
          "founders": [
            { "@type": "Person", "name": "Vikram Shetty" },
            { "@type": "Person", "name": "Kunal Chandra" }
          ],
          "address": { "@type": "PostalAddress", "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra", "addressCountry": "IN" },
          "contactPoint": { "@type": "ContactPoint", "email": "vikram@solar-key.com",
            "telephone": "+91-96194-22279", "contactType": "sales",
            "areaServed": ["IN","AE","SA"] },
          "sameAs": ["https://www.linkedin.com/company/solarkey-ai/"]
        }) }} />
        <ScrollProgressBar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
