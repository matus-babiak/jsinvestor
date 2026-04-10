import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ChaosSection } from "@/components/sections/ChaosSection";
import { ClientResultsSection } from "@/components/sections/ClientResultsSection";
import { CTASection } from "@/components/sections/CTASection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ForWhomSection } from "@/components/sections/ForWhomSection";
import { GroupBenefitAccordionSection } from "@/components/sections/GroupBenefitAccordionSection";
import { GuaranteePromiseSection } from "@/components/sections/GuaranteePromiseSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LimitedCapacitySection } from "@/components/sections/LimitedCapacitySection";
import { PricingSection } from "@/components/sections/PricingSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WealthMapSection } from "@/components/sections/WealthMapSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <main className="heading-line pt-14 md:pt-24">
        <HeroSection />
        <StatsSection />
        <ClientResultsSection />
        <ChaosSection />
        <WealthMapSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <ForWhomSection />
        <PricingSection />
        <AboutSection />
        <GroupBenefitAccordionSection />
        <GuaranteePromiseSection />
        <LimitedCapacitySection />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
