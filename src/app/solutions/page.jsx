import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SolutionsHero from '../../components/solutions/SolutionsHero';
import RoleSections from '../../components/solutions/RoleSections';
import MixedFleets from '../../components/solutions/MixedFleets';
import PartnerBanner from '../../components/solutions/PartnerBanner';
import SolutionsFAQ from '../../components/solutions/SolutionsFAQ';
import SolutionsCTA from '../../components/solutions/SolutionsCTA';
import '../../components/solutions/solutions.css';

export const metadata = {
  title: 'Solutions by Role — SolarKey | Asset Owners, O&M & Investors',
  description:
    'Asset owners, O&M providers and investors use SolarKey differently. See what it does for your role across a mixed-vendor, multi-site portfolio.',
  alternates: { canonical: '/solutions' },
  openGraph: { url: '/solutions' },
};

export default function SolutionsPage() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <SolutionsHero />
        <RoleSections />
        <MixedFleets />
        <PartnerBanner />
        <SolutionsFAQ />
        <SolutionsCTA />
      </main>
      <Footer />
    </div>
  );
}
