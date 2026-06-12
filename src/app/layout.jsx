import { Inter } from 'next/font/google';
import './globals.css';

/* ── Component CSS (imported here for guaranteed server-side inclusion) ── */
import '../components/Navbar.css';
import '../components/Hero.css';
import '../components/DashboardPreview.css';
import '../components/HowItWorks.css';
import '../components/Features.css';
import '../components/BuiltBy.css';
import '../components/CTABanner.css';
import '../components/Footer.css';
import '../components/platform/platform.css';

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
        url: 'https://www.solar-key.com/og-image.png',
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
    images: ['https://www.solar-key.com/og-image.png'],
  },

  /* ── Misc ── */
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://www.solar-key.com'),
  alternates: {
    canonical: '/',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
