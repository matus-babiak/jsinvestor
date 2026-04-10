"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { PrimaryCta } from "@/components/ui/PrimaryCta";


export function LimitedCapacitySection() {
  const { ref, isVisible } = useScrollObserver();
  return (
    <section className="section-padding section-alt">
      <div ref={ref} className="content-width">
        <div
          className={`scroll-animate ${isVisible ? "visible" : ""} relative overflow-hidden max-w-[940px] mx-auto rounded-3xl p-6 md:p-10 lg:p-12 border border-primary/20 shadow-[0_18px_50px_rgba(0,0,0,0.08)]`}
          style={{ background: "linear-gradient(to bottom right, #f2ede9, #ebe6e2, #f2ede9)" }}
        >
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden />

          <h2 className="text-3xl md:text-4xl lg:text-[46px] leading-tight font-serif font-bold text-foreground text-center mb-7 max-w-[860px] mx-auto">
            Každý mesiac čakania <em className="text-primary italic">vás stojí reálne peniaze</em>
          </h2>

          <p className="text-lg md:text-[1.3rem] text-muted-foreground text-center leading-relaxed mb-8 max-w-[860px] mx-auto">
            <strong>Prijímam maximálne 2 nových klientov týždenne,</strong> pretože kvalitný a osobný prístup sa nedá škálovať na desiatky ľudí. Ak <strong>odložíte rozhodnutie, odkladáte aj rast</strong> vášho majetku.
          </p>

          <div className="h-px w-[min(860px,100%)] mx-auto bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-7" aria-hidden />

          <div className="max-w-[860px] mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center mb-5">
              Čo strácate každý mesiac odkladu?
            </h3>
            <div className="space-y-3 text-left text-base md:text-lg text-foreground/90">
              <p>→ Každý rok, ktorý čakáte, je rok, kedy <strong>inflácia pracuje proti vám.</strong></p>
              <p>→ Skryté poplatky vás za 20 - 30 rokov <strong>okrádajú až o tretinu majetku</strong></p>
              <p>→ Stratené <strong>príležitosti sa vám nevrátia</strong></p>
            </div>
          </div>

          <div className="h-px w-[min(860px,100%)] mx-auto bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-7" aria-hidden />

          <div className="max-w-[860px] mx-auto mb-9 text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center mb-5">
              Prečo začať práve teraz?
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 text-center">
              Kto čaká na "perfektný moment", <strong>príde o konkrétne výhody, ktoré sú tu dnes.</strong>
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Reálny príklad:
              <br />
              Klientka začala pred 5 rokmi s 10 000 €. Dnes má <strong>dva investičné byty a 120 000 € v investíciách.</strong>
              <br />
              Iný klient nechal milión u bežnej poradkyne. <strong>Zarobil iba 3 % namiesto 17 %,</strong> pretože fondy boli zbytočne poistené voči mene.
            </p>
            <p className="text-lg md:text-xl text-foreground font-semibold leading-relaxed text-center">
              Ešte nikto nezbohatol tým, že držal peniaze na účte a čakal.
            </p>
          </div>

          <div className="flex justify-center">
            <PrimaryCta href="/dotaznik">Získať JS Wealth Map™</PrimaryCta>
          </div>
        </div>
      </div>
    </section>
  );
}