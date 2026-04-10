"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { assetSrc } from "@/lib/utils";
import brandPattern from "@/assets/js-brand-pattern.svg";
import ivanJasikPhoto from "@/assets/ivan-jasik.jpg";
import { PrimaryCta } from "@/components/ui/PrimaryCta";


export function AboutSection() {
  const { ref, isVisible } = useScrollObserver();
  return (
    <section id="o-nas" className="section-padding bg-primary relative overflow-hidden">
      <img
        src={assetSrc(brandPattern)}
        alt=""
        className="absolute -right-24 -bottom-28 w-[380px] h-auto opacity-[0.08] pointer-events-none select-none brightness-200"
        aria-hidden="true"
      />
      <div ref={ref} className="content-width relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-stretch">
          {/* Ľavý stĺpec: fotka + meno + popis (vycentrované pod fotkou) */}
          <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} flex flex-col min-h-0 items-center order-2 md:order-1`}>
            <div className="flex-1 min-h-[280px] md:min-h-0 w-[96%] max-w-[480px] rounded-2xl overflow-hidden shadow-lg border-0 ring-0">
              <img
                src={assetSrc(ivanJasikPhoto)}
                alt="Ivan Jašík - JS Investor"
                className="w-full h-full object-cover object-[35%_50%] border-0 outline-none scale-110"
              />
            </div>
            <div className="mt-4 w-full max-w-[480px] text-center">
              <p className="font-serif text-xl font-bold text-primary-foreground">Ivan Jašík</p>
              <p className="text-base text-primary-foreground/90">Váš sprievodca budovaním majetku</p>
            </div>
          </div>
          {/* Pravý stĺpec: preheadline + nadpis + text + tlačidlo */}
          <div className="flex flex-col md:justify-center order-1 md:order-2">
            <p className={`scroll-animate ${isVisible ? "visible" : ""} text-base font-sans font-semibold tracking-widest uppercase text-primary-foreground/90 mb-2 text-center md:text-left`}>
              Kto stojí za JS Investor
            </p>
            <h2 className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-primary-foreground mb-5 text-center md:text-left md:max-w-[680px]`}>
              Nie som poisťovák, bankový
              <span className="block">ani bežný poradca.</span>
            </h2>
            <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-base md:text-xl text-primary-foreground/90 mb-4 text-left`}>
              Som správca majetku regulovaný NBS, ktorý posledných 8 rokov robí jednu vec: <strong>stavia ľuďom finančné stratégie, ktoré fungujú.</strong>
            </p>
            <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} mb-4 flex flex-wrap gap-2`}>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 font-sans text-xs font-medium text-primary-foreground backdrop-blur-sm">
                531+ klientov
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 font-sans text-xs font-medium text-primary-foreground backdrop-blur-sm">
                3M€+ v ETF portfóliách
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 font-sans text-xs font-medium text-primary-foreground backdrop-blur-sm">
                5.4M€+ v investičných nehnuteľnostiach
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 font-sans text-xs font-medium text-primary-foreground backdrop-blur-sm">
                115 000+ sledovateľov na Instagrame
              </span>
            </div>
            <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-[15px] md:text-lg text-primary-foreground/90 mb-4 text-left`}>
              <strong>Pretože hovorím veci, ktoré vám bankár nepovie.</strong>
            </p>
            <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-[15px] md:text-lg text-primary-foreground/90 mb-5 text-left`}>
              Keď prepočítavate kúpu bytu, plánujete mimoriadny vklad, alebo sa na trhoch deje panika, môžete mi zavolať. Toto je moja práca. <strong>Byť váš sprievodca na nasledujúcich 20–30 rokov.</strong>
            </p>
            <div className={`scroll-animate scroll-animate-delay-3 ${isVisible ? "visible" : ""}`}>
              <PrimaryCta href="/dotaznik" variant="inverse">Chcem spolupracovať s Ivanom</PrimaryCta>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}