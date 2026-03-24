"use client";

import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { benefitTimelineData } from "@/data/benefit-timeline-data";

const TestPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <main className="pt-24 px-3 md:section-padding">
        <section className="content-width mb-12 p-0 md:px-4">
          <div className="max-w-[960px] mx-auto">
            <RadialOrbitalTimeline timelineData={benefitTimelineData} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TestPage;

