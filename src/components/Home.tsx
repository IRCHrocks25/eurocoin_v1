import { WhyNowSection } from './WhyNowSection';
import { ExperienceParadigmSection } from './ExperienceParadigmSection';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { PartnershipsSection } from './PartnershipsSection';
import { EnterpriseSection } from './EnterpriseSection';
import { ParadigmShiftSection } from './ParadigmShiftSection';
import { DifferentiatorsSection } from './DifferentiatorsSection';
import { AroundWorldSection } from './AroundWorldSection';
import { BondPlaySection } from './BondPlaySection';
import { CompetitivePositioningSection } from './CompetitivePositioningSection';
import { WhoEurocoinIsBuiltForSection } from './WhoEurocoinIsBuiltForSection';
import { Footer } from './Footer';

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnershipsSection />
      <EnterpriseSection />
      <ParadigmShiftSection />
      <DifferentiatorsSection />
      <AroundWorldSection />
      <BondPlaySection />
      <CompetitivePositioningSection />
      <WhoEurocoinIsBuiltForSection />
      <WhyNowSection />
      <ExperienceParadigmSection />
      <Footer />
    </div>
  );
}