"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { assetSrc } from "@/lib/utils";
import brandPattern from "@/assets/js-brand-pattern.svg";
import { Check, X } from "lucide-react";


export function BeforeAfterSection() {
  const { ref, isVisible } = useScrollObserver();
  const pred = [
    <>→ 30 000 € (alebo viac) vám leží na účte a inflácia vám z neho <strong>každý rok zožerie 1 200 € a viac.</strong></>,
    <>→ Dotujete banky a poradcov skrytými poplatkami (1 – 3 % ročne), ktoré <strong>vás ukrátia za tie roky až o 30 % majetku.</strong></>,
    <>→ Neviete, či máte kúpiť investičný byt, navýšiť ETF, alebo radšej čakať? <strong>Rozhodujete sa podľa intuície, nie podľa dát.</strong></>,
    <>→ Pri každom poklese trhu a vášho portfólia <strong>cítite stres a neistotu.</strong> A neviete, či čakať, alebo predať.</>,
  ];
  const po = [
    <>Jeden logický systém, kde vaše ETF, nehnuteľnosti a biznis <strong>spolupracujú na vašej doživotnej rente.</strong></>,
    <>V modernej aplikácii v reálnom čase vidíte, <strong>ako váš čistý majetok rastie.</strong></>,
    <><strong>Platíte férové poplatky</strong> 0,49 % ročne do 100 000 €. Nad 100 000 € je exluzívny poplatok 0,35 %.</>,
    <>Pri každom <strong>dôležitom finančnom rozhodnutí máte partnera,</strong> ktorý vám povie: „Toto urobme, toto je nezmysel.“</>,
  ];
  return (
    <section id="pred-po" className="section-padding section-alt">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-16 text-center`}>
          Konečne prestaňte mať pocit,{" "}
          <span className="md:block md:whitespace-nowrap">
            že{" "}
            <span className="italic text-primary">
                ste na všetko vo financiách sami.
            </span>
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} card-hover-accent bg-card-alt rounded-2xl p-4 md:p-8`}>
            <h3 className="font-serif text-2xl font-bold text-red-600 text-center mb-6">
              PRED <span className="font-normal opacity-90">(Chaos)</span>
            </h3>
            <ul className="space-y-2.5 md:space-y-3.5">
              {pred.map((item, idx) => {
                return (
                  <li key={`pred-${idx}`} className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-base md:text-lg text-muted-foreground">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} card-hover bg-card-alt rounded-2xl p-4 md:p-8`}>
            <h3 className="font-serif text-2xl font-bold text-primary text-center mb-6">
              PO <span className="font-normal opacity-90">(JS Wealth Map™)</span>
            </h3>
            <ul className="space-y-2.5 md:space-y-3.5">
              {po.map((item, idx) => {
                return (
                  <li key={`po-${idx}`} className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-base md:text-lg text-muted-foreground">{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}