"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { finalCtaBullets } from "@/data/cta-bullets";
import { PrimaryCta } from "@/components/ui/PrimaryCta";
import { Check } from "lucide-react";


export function CTASection() {
  const { ref, isVisible } = useScrollObserver();
  return (
    <section id="kontakt" className="section-padding">
      <div ref={ref} className="content-width">
        <div className="scroll-animate-wrapper">
          <div
            className={`scroll-animate ${isVisible ? "visible" : ""} relative mx-auto max-w-[1100px] rounded-3xl bg-primary px-6 py-10 text-primary-foreground shadow-[0_18px_60px_rgba(0,0,0,0.16)] md:px-10 md:py-12 lg:px-14 lg:py-14`}
          >
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-14">
              <div className="text-center lg:text-left">
                <h2 className="mb-6 font-serif text-2xl font-bold leading-snug md:text-3xl lg:mb-8 lg:text-4xl">
                  Prestaňte strácať peniaze v chaose. Začnite konať už dnes.
                </h2>
                <p className="mb-8 text-base text-primary-foreground/90 md:mb-10 md:text-xl lg:max-w-xl">
                  Získajte JS Wealth Map™. Presný plán, ktorý vám ukáže, kde ste, kam idete a čo urobiť ďalej.
                </p>
                <PrimaryCta href="/dotaznik" variant="inverse" className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} lg:mx-0`}>Získať JS Wealth Map™</PrimaryCta>
              </div>
              <ul
                className="flex flex-col gap-4 text-left text-base text-primary-foreground/90 md:gap-5 md:text-lg lg:justify-center lg:text-lg"
                aria-label="Výhody"
              >
                {finalCtaBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 md:gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-foreground md:mt-1" aria-hidden />
                    <span className="font-normal leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}