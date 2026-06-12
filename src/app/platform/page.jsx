import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PlatformHero from '../../components/platform/PlatformHero';
import Capabilities from '../../components/platform/Capabilities';
import PlatformHowItWorks from '../../components/platform/PlatformHowItWorks';
import ExistingKit from '../../components/platform/ExistingKit';
import Security from '../../components/platform/Security';
import BuiltForRole from '../../components/platform/BuiltForRole';
import PlatformFAQ from '../../components/platform/PlatformFAQ';
import PlatformCTA from '../../components/platform/PlatformCTA';

import '../../components/platform/platform.css';

export const metadata = {
  title: 'Platform — SolarKey | Monitor, Diagnose & Run Your Solar Portfolio',
  description:
    'SolarKey connects to the kit already on your sites, watches every asset in real time, predicts faults before they cut output, and lets AI agents handle the routine response.',
};

export default function PlatformPage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <PlatformHero />
        <Capabilities />
        <PlatformHowItWorks />
        <ExistingKit />
        <Security />
        <BuiltForRole />
        <PlatformFAQ />
        <PlatformCTA />
      </main>
      <Footer />
    </div>
  );
}
