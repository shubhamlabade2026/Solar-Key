import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PlatformHero from '../../components/platform/PlatformHero';
import Capabilities from '../../components/platform/Capabilities';
import HowItWorks from '../../components/HowItWorks';
import BuiltForRole from '../../components/platform/BuiltForRole';
import PlatformFAQ from '../../components/platform/PlatformFAQ';
import PlatformCTA from '../../components/platform/PlatformCTA';

import '../../components/platform/platform.css';

export const metadata = {
  title: 'Platform — SolarKey | Monitor, Diagnose & Run Your Solar Portfolio',
  description:
    'One platform to watch every asset, predict faults before they cut output, and let AI agents handle the routine response. Vendor-neutral, built for India & West Asia.',
  alternates: { canonical: '/platform' },
  openGraph: { url: '/platform' },
};

export default function PlatformPage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <PlatformHero />
        <Capabilities />
        <HowItWorks />
        <BuiltForRole />
        <PlatformFAQ />
        <PlatformCTA />
      </main>
      <Footer />
    </div>
  );
}
