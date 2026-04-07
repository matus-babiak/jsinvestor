"use client";

import { useRef, useState, useCallback, useEffect, type CSSProperties } from "react";
import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { benefitTimelineData } from "@/data/benefit-timeline-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import brandPattern from "@/assets/js-brand-pattern.svg";
import logo from "@/assets/js-investor-logo.png";
import ivanJasikPhoto from "@/assets/ivan-jasik.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { assetSrc, cn } from "@/lib/utils";
import {
  Compass,
  Building2,
  Clock,
  Puzzle,
  BarChart3,
  Calculator,
  Wallet as WalletIcon,
  Quote,
  User,
  Check,
  X,
  ShieldCheck,
  Users,
  Percent,
  TrendingUp,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <main className="heading-line pt-14 md:pt-24">
        {/* 1. Hero sekcia */}
        <section className="pt-2 md:pt-8 section-padding relative overflow-hidden">
          <div className="max-w-[1140px] mx-auto w-full relative z-10">
            {/* Textová časť */}
            <div className="text-center mb-12 md:mb-16">
              <img src={assetSrc(logo)} alt="JS Investor" className="hero-animate hero-animate-delay-1 h-[2.2rem] mx-auto mb-6" />
              {/* (odstránené) hero badge nadpisu */}
              <h1 className="hero-animate hero-animate-delay-2 text-4xl md:text-5xl lg:text-[58px] font-serif font-bold text-foreground mb-12">
                <span className="lg:hidden">
                  Investovanie potrebuje <em className="text-primary italic">plán, nie náhodu.</em>
                </span>
                <span className="hidden lg:block">
                  Investovanie potrebuje <em className="text-primary italic">plán, nie náhodu.</em>
                </span>
              </h1>
              <blockquote className="hero-animate hero-animate-delay-3 text-xl font-sans text-muted-foreground mb-10 max-w-[720px] mx-auto">
                Získajte <strong className="text-foreground">JS Wealth Map™</strong>. Jasný plán, ktorý vám ukáže, kde ste dnes,
                kam smerujete a čo má zmysel urobiť ďalej.
              </blockquote>
              <div className="hero-animate hero-animate-delay-4 flex flex-wrap gap-4 items-center justify-center mb-10">
                <a
                  href="/dotaznik"
                  className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
                >
                  Získať JS Wealth Map™
                </a>
                <a
                  href="#ako-to-funguje"
                  className="inline-block font-sans font-thin text-base text-foreground hover:text-primary transition-colors"
                >
                  Ako to funguje →
                </a>
              </div>
              <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-8 lg:gap-12 text-base font-sans font-medium text-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                  <span>Strategické investovanie</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                  <span>Minimálne poplatky</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                  <span>Skutočný odborník po pravej ruke</span>
                </li>
              </ul>
            </div>

            {/* Video */}
            <div className="w-full md:w-[85%] max-w-[969px] mx-auto rounded-2xl overflow-hidden aspect-video bg-black shadow-[0_8px_32px_-4px_rgba(0,0,0,0.18),0_24px_64px_-12px_rgba(0,0,0,0.28),0_0_0_1px_rgba(0,0,0,0.1)]">
              <iframe
                src="https://player.vimeo.com/video/1145809910?autoplay=0&title=0&portrait=0&byline=0"
                title="Vimeo video"
                allow="autoplay; fullscreen; picture-in-picture"
                className="block w-full h-full align-top"
              />
            </div>
          </div>
          <img
            src={assetSrc(brandPattern)}
            alt=""
            className="absolute -bottom-6 -right-6 w-[90%] max-w-[500px] h-auto opacity-[0.07] pointer-events-none select-none -z-10"
            aria-hidden="true"
          />
          <img
            src={assetSrc(brandPattern)}
            alt=""
            className="absolute top-1/4 -left-12 w-[220px] h-auto opacity-[0.05] pointer-events-none select-none -z-10"
            aria-hidden="true"
          />
        </section>

        {/* Štatistiky - trust pás */}
        <StatsSection />

        {/* Skutočné výsledky klientov */}
        <ClientResultsSection />

        {/* 2. Symptómy / Problémy */}
        <ChaosSection />

        {/* 3. Riešenie — čo je JS Wealth Map™ + 4. Ako to funguje (4 kroky) */}
        <WealthMapSection />

        {/* 5. PRED / PO */}
        <BeforeAfterSection />

        {/* 6. Dôkaz — recenzie */}
        <TestimonialsSection />

        {/* 7. Pre koho je / nie je */}
        <ForWhomSection />

        {/* 8. Tabuľka poplatkov */}
        <GuaranteeSection />

        {/* 9. O Ivanovi */}
        <AboutSection />

        {/* Exkluzívny benefit - skupina (akordeón) */}
        <GroupBenefitAccordionSection />

        {/* Garancia spokojnosti */}
        <GuaranteePromiseSection />

        {/* Limitovaná kapacita */}
        <LimitedCapacitySection />

        {/* 10. FAQ */}
        <FaqSection />

        {/* 11. Záverečné CTA + dotazník */}
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

function ChaosSection() {
  const { ref, isVisible } = useScrollAnimation();
  const problems = [
    {
      icon: WalletIcon,
      title: "Na účte vám leží 30 000 €. Každý rok z nich zmizne 1 200 €.",
      content: <>Nie preto, že ste niečo urobili zle. Ale preto, že ste neurobili nič.</>,
    },
    {
      icon: Percent,
      title: "Bankár vám povedal, že sa o vás postará.",
      content: (
        <>
          Zabudol dodať, že vám za to účtuje 2% ročne.{" "}
          <strong>Za 30 rokov je to tretina vášho majetku. V eurách? Desaťtisíce.</strong>
        </>
      ),
    },
    {
      icon: Clock,
      title: "Po večeroch googlete ETF a dividendové akcie. Ráno máte meeting.",
      content: (
        <>
          Cez víkend chcete byť s rodinou.{" "}
          <strong>Nemáte čas byť investor na plný úväzok.</strong>
        </>
      ),
    },
    {
      icon: BarChart3,
      title: "Máte ETF, hypotéku, možno aj investičný byt.",
      content: (
        <>
          Ale neviete, či má zmysel dokúpiť druhý byt, navýšiť ETF, alebo čakať.{" "}
          <strong>Rozhodujete sa podľa pocitu, nie podľa dát.</strong>
        </>
      ),
    },
  ];
  return (
    <section id="problem" className="section-padding section-alt relative overflow-hidden">
      <img
        src={assetSrc(brandPattern)}
        alt=""
        className="absolute top-1/3 right-0 w-[320px] h-auto opacity-[0.04] pointer-events-none select-none -z-10"
        aria-hidden="true"
      />
      <div ref={ref} className="content-width relative z-10">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-10 text-center`}>
          Poznáte to?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="card-hover-accent bg-card-alt rounded-2xl p-4 md:p-6 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl icon-pattern-bg-accent flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-accent -translate-x-0.5" />
              </div>
              <h3
                className="font-serif text-2xl font-semibold text-foreground mb-3"
                style={{ textWrap: "auto" }}
              >
                {p.title}
              </h3>
              <div className="text-lg text-muted-foreground">{p.content}</div>
            </div>
          ))}
        </div>
        <blockquote className="text-lg md:text-xl text-center text-muted-foreground max-w-[720px] mx-auto">
          Presne pre toto existuje JS Wealth Map™. Jeden plán. Jasný smer.{" "}
          <strong className="md:block">Všetko na jednom mieste.</strong>
        </blockquote>
        <div className="flex justify-center mt-10">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
          >
            Získať JS Wealth Map™
          </a>
        </div>
      </div>
    </section>
  );
}

function WealthMapSection() {
  const { ref, isVisible } = useScrollAnimation();
  const pillars = [
    {
      num: "1",
      icon: TrendingUp,
      title: "Inteligentné ETF stratégie",
      content: (
        <>
          Výhodné{" "}
          <strong>globálne fondy bez zbytočných ročných poplatkov.</strong>{" "}
          Nastavíme vám portfólio presne podľa vášho horizontu. Žiadny &quot;jeden fond pre všetkých&quot;, ale{" "}
          <strong>stratégia na mieru pre vašu situáciu.</strong> Transparentne, bezpečne a bez predražených sprostredkovateľov.
        </>
      ),
    },
    {
      num: "2",
      icon: Building2,
      title: (
        <>
          <span className="block font-bold">Investičné nehnuteľnosti</span>
          <span className="block text-base md:text-lg font-normal text-foreground/75 mt-1">
            (ktoré dávajú zmysel pre vás)
          </span>
        </>
      ),
      content: (
        <>
          <strong>Nie každý potrebuje investičný byt.</strong> Ale ak ho kúpite, musí dávať matematický zmysel. Dostanete odo mňa ROI kalkulačku, stresové scenáre a model financovania. Žiadne &quot;kúpim, lebo ceny rastú.&quot; Prísne{" "}
          <strong>čísla, ktoré logicky zapadnú do vášho majetku.</strong>
        </>
      ),
    },
    {
      num: "3",
      icon: Calculator,
      title: "Prémiové investície",
      content: (
        <>
          Fondy kvalifikovaných investorov, ku ktorým{" "}
          <strong>bežný človek nemá prístup.</strong> Od 50 000 € majetku vám odomknem dvere k neverejným investíciám. Ide o{" "}
          <strong>projekty s cielenými fixnými výnosmi 4 – 7 % ročne,</strong>{" "}
          ktoré dopĺňajú dynamickú časť portfólia.
        </>
      ),
    },
    {
      num: "4",
      icon: WalletIcon,
      title: "Renta a skutočná sloboda",
      content: (
        <>
          Doživotná renta a vaša časová sloboda.{" "}
          <strong>Neinvestujete len pre pekné čísla v aplikácii, ale pre svoju nezávislosť.</strong>{" "}
          V správny moment vaše aktíva prestavíme do rentového módu a vytvoríme vám bezpečný systém výberov, ktorý vám{" "}
          <strong>zabezpečí stabilný pasívny príjem.</strong>
        </>
      ),
    },
  ];
  return (
    <section
      id="ako-to-funguje"
      className="section-padding bg-primary text-primary-foreground relative overflow-hidden"
    >
      <img
        src={assetSrc(brandPattern)}
        alt=""
        className="absolute -left-24 top-1/3 -translate-y-1/2 w-[420px] h-auto opacity-[0.1] pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      {/* Extra background depth so the section doesn't feel flat */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse_at_top, rgba(255,255,255,0.18), rgba(255,255,255,0) 55%), radial-gradient(ellipse_at_bottom, rgba(0,0,0,0.20), rgba(0,0,0,0) 60%), linear-gradient(to_bottom, rgba(255,255,255,0.06), rgba(0,0,0,0.06))",
        }}
      />
      <div ref={ref} className="content-width relative z-10">
        <h2
          className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-primary-foreground mb-10 text-center max-w-[960px] mx-auto`}
        >
          Dajte svojim peniazom{" "}
          <em className="text-primary-foreground">jasnú stratégiu.</em>
        </h2>
        <div
          className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-primary-foreground/90 text-center max-w-[800px] mx-auto mb-16 md:mb-20`}
        >
          <p className="text-xl md:text-2xl mb-10 md:mb-12">
            Spolu s JS Wealth Map™ sa konečne zbavíte finančného chaosu a{" "}
            <strong>získate presný plán, ktorý bude pracovať pre vás.</strong>
          </p>
        </div>

        <div className="text-center max-w-[880px] mx-auto mb-14 md:mb-16">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground">
            4 piliere{" "}
            <em className="text-primary-foreground">JS Wealth Map™</em>
          </h3>
        </div>

        <ol className="grid md:grid-cols-2 gap-7 md:gap-8 text-left max-w-[1040px] mx-auto">
          {pillars.map((p, i) => (
            <li key={p.num} className="relative h-full">
              <div
                className="group relative h-full flex flex-col rounded-2xl px-5 py-5 md:px-7 md:py-7 border border-[#d8cec7] transition-colors duration-200 bg-[#f2ede9]"
              >
                <div className="mb-4 flex-1">
                  <div className="relative flex-shrink-0 mb-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#e8e0d8] flex items-center justify-center">
                      <p.icon className="w-6 h-6 md:w-7 md:h-7 text-primary -translate-x-0.5" aria-hidden />
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl leading-[1.08] md:text-4xl font-semibold text-foreground mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[17px] md:text-[18px] leading-[1.55] text-foreground/85">{p.content}</p>
                </div>
                <div className="mt-1 rounded-xl border border-[#ddd4cd] bg-[#f8f4f0] h-36 md:h-40 flex items-center justify-center overflow-hidden">
                  <div className="w-[86%] h-[74%] rounded-lg border border-[#ddd4cd] bg-[#efe8e2] flex items-center justify-center">
                    <span className="text-muted-foreground text-sm md:text-base font-sans">Placeholder obrázka</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
        {/* JS Wealth Map™ v praxi */}
        <section className="mt-24 md:mt-28 mb-24 md:mb-28 bg-primary text-primary-foreground relative overflow-hidden">
          <img
            src={assetSrc(brandPattern)}
            alt=""
            className="absolute -left-24 top-1/2 -translate-y-1/2 w-[420px] h-auto opacity-[0.045] pointer-events-none select-none -z-10"
            aria-hidden="true"
          />
          <div className="max-w-[1080px] mx-auto px-6 md:px-10 py-12 md:py-16">
            <div className="grid lg:grid-cols-[9fr_11fr] gap-10 md:gap-12 items-start">
              {/* Left: PDF + copy */}
              <div className="pt-2">
                <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-primary-foreground/70 mb-3">Ukážka výstupu</p>
                <h3 className="font-serif text-3xl md:text-[44px] leading-[1.08] font-bold text-primary-foreground text-left">
                  JS Wealth Map™ v praxi
                </h3>
                <p className="text-lg md:text-[22px] leading-relaxed text-primary-foreground/90 mt-4 md:mt-5 text-left max-w-[640px]">
                  Reálna ukážka JS Wealth Map™ vo videu aj PDF vám jasne ukáže, čo získate.
                </p>

                <div className="mt-9 flex justify-start">
                  <a
                    href="/pdf/js-wealth-map-ukazka.pdf"
                    className="inline-flex items-center justify-center rounded-full border border-primary-foreground/70 bg-transparent text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 hover:bg-primary-foreground/10 transition-colors"
                  >
                    Zobraziť PDF ukážku
                  </a>
                </div>
              </div>

              {/* Right: Video */}
              <div className="pt-2 lg:self-center">
                <div className="w-full rounded-2xl overflow-hidden aspect-video bg-black ring-1 ring-white/20 shadow-[0_24px_56px_-24px_rgba(0,0,0,0.55)]">
                  <iframe
                    src="https://player.vimeo.com/video/1145809910?autoplay=0&title=0&portrait=0&byline=0"
                    title="Vimeo video"
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="block w-full h-full align-top"
                  />
                </div>
              </div>
            </div>
          </div>
        <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} mt-24 md:mt-28 mb-20 md:mb-24`}>
          <div className="relative max-w-[1080px] mx-auto">
            <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[70%] h-24 rounded-full bg-white/10 blur-3xl" aria-hidden />
            <p className="relative text-center text-2xl md:text-4xl font-serif font-semibold text-primary-foreground mb-8 md:mb-10">
              Čo sa stane po našom prvom hovore
            </p>

            <div className="hidden md:block relative mb-8">
              <div className="grid grid-cols-3 gap-4 md:gap-5 items-center">
                {[1, 2, 3].map((num) => (
                  <span
                    key={num}
                    className="inline-flex mx-auto rounded-full bg-primary-foreground text-primary border border-primary-foreground/30 w-11 h-11 items-center justify-center text-xl font-bold shadow-[0_6px_14px_-8px_rgba(0,0,0,0.45)]"
                  >
                    {num}
                  </span>
                ))}
              </div>
              <div className="relative mt-3">
                <div className="h-px bg-gradient-to-r from-primary-foreground/10 via-primary-foreground/40 to-primary-foreground/10" />
                <div className="grid grid-cols-3 gap-4 md:gap-5 -mt-[5px]">
                  {[1, 2, 3].map((dot) => (
                    <span
                      key={dot}
                      className="mx-auto w-2.5 h-2.5 rounded-full bg-primary-foreground shadow-[0_0_0_4px_rgba(255,255,255,0.18)]"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 md:gap-5">
              {[
                {
                  num: 1,
                  title: "Bezplatný úvodný hovor",
                  subtitle: "(30 - 60 min, online)",
                  desc: (
                    <>
                      {"✓ "}Zhodnotíme vašu aktuálnu finančnú situáciu
                      <br />
                      {"✓ "}Ujasníme si vaše ciele
                      <br />
                      {"✓ "}Overíme, či je JS Wealth Map™ pre vás vhodná
                      <br />
                      {"✓ "}Žiadny predajný nátlak
                      <br />
                      {"✓ "}Šetríme váš aj môj čas
                    </>
                  ),
                },
                {
                  num: 2,
                  title: "Dostanete JS Wealth Map™",
                  subtitle: "(do 7–14 dní)",
                  desc: (
                    <>
                      Jeden prehľadný dokument, kde vidíte:
                      <br />
                      {"✓ "}Kde sa nachádzate (váš majetok dnes)
                      <br />
                      {"✓ "}Kam chcete ísť
                      <br />
                      {"✓ "}Ako sa tam dostanete (presné kroky)
                    </>
                  ),
                },
                {
                  num: 3,
                  title: "Uvedenie mapy do praxe",
                  subtitle: "(Dlhodobá správa)",
                  desc: (
                    <>
                      {"✓ "}Stratégiu preklopíme do reality
                      <br />
                      {"✓ "}Otvoríme investičné účty na vaše meno
                      <br />
                      {"✓ "}Nastavíme ETF portfólio
                      <br />
                      {"✓ "}Ak to dáva zmysel, naplánujeme aj investičnú nehnuteľnosť
                      <br />
                      {"✓ "}Majetok priebežne sledujem, rebalansujem a prispôsobujem trhu aj vašej situácii
                      <br />
                      {"✓ "}Spolupracujeme dlhodobo
                    </>
                  ),
                },
              ].map((step) => (
                <article
                  key={step.num}
                  className={`group relative overflow-hidden rounded-2xl border p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-20px_rgba(0,0,0,0.48)] ${
                    step.num === 2
                      ? "border-primary-foreground/35 bg-primary-foreground/16 shadow-[0_18px_38px_-22px_rgba(0,0,0,0.5)]"
                      : "border-primary-foreground/25 bg-primary-foreground/10 shadow-[0_14px_34px_-22px_rgba(0,0,0,0.45)]"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/45 to-transparent" aria-hidden />
                  <div className="md:hidden mb-3 inline-flex rounded-md bg-primary-foreground/15 border border-primary-foreground/20 px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                    Krok {step.num}
                  </div>
                  <h4 className="font-serif text-xl md:text-[30px] leading-tight font-semibold text-primary-foreground mb-2">{step.title}</h4>
                  {step.subtitle ? (
                    <p className="font-sans text-lg md:text-xl text-primary-foreground/85 mb-3">{step.subtitle}</p>
                  ) : (
                    <div className="mb-3 h-5 md:h-6" aria-hidden />
                  )}
                  <p className="text-base md:text-[1.15rem] text-primary-foreground/90 leading-relaxed">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12 mb-8">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-transparent border border-primary-foreground text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Získať JS Wealth Map™
          </a>
        </div>
      </section>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  const { ref, isVisible } = useScrollAnimation();
  const pred = [
    "→ 30 000 € (alebo viac) vám leží na účte a inflácia vám z neho každý rok zožerie 1 200 € a viac.",
    "→ Dotujete banky a poradcov skrytými poplatkami (1 – 3 % ročne), ktoré v priebehu rokov ukrátia až o 30 % vášho majetku",
    "→ Neviete, či máte kúpiť investičný byt, navýšiť ETF, alebo radšej čakať? Rozhodujete sa podľa intuície, nie podľa dát.",
    "→ Pri každom poklese trhu a vášho portfólia cítite stres a neistotu. A neviete, či čakať, alebo predať.",
  ];
  const po = [
    "Jeden logický systém, kde vaše ETF, nehnuteľnosti a biznis spolupracujú na vašej doživotnej rente.",
    "V modernej aplikácii v reálnom čase vidíte, ako váš čistý majetok rastie.",
    "Platíte férové poplatky 0,49 % ročne do 100 000 €. Nad 100 000 € je exluzívny poplatok 0,35 %.",
    "Pri každom dôležitom finančnom rozhodnutí máte partnera, ktorý vám povie: „Toto urobme, toto je nezmysel.“",
  ];
  return (
    <section id="pred-po" className="section-padding section-alt">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-16 text-center`}>
          Konečne prestaňte mať pocit,{" "}
          <span className="md:block md:whitespace-nowrap">
            že{" "}
            <span className="italic text-primary">
              ste na to vo financiách sami.
            </span>
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} card-hover-accent bg-card-alt rounded-2xl p-4 md:p-8`}>
            <h3 className="font-serif text-2xl font-bold text-red-600 text-center mb-6">
              PRED <span className="font-normal opacity-90">(Chaos)</span>
            </h3>
            <ul className="space-y-2.5 md:space-y-3.5">
              {pred.map((item) => {
                return (
                  <li key={item} className="flex gap-2.5 items-start">
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
              {po.map((item) => {
                return (
                  <li key={item} className="flex gap-2.5 items-start">
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

function ForWhomSection() {
  const { ref, isVisible } = useScrollAnimation();
  const preVas = [
    {
      key: "prev1",
      content: (
        <>
          Zarábate od 1 500 € mesačne, Svoje prebytky chcete začať systematicky zhodnocovať.
        </>
      ),
    },
    {
      key: "prev2",
      content: (
        <>
          Chcete delegovať zodpovednosť na experta, získať kľudný spánok a nehrať sa po večeroch na amatérskeho tradera.
        </>
      ),
    },
    {
      key: "prev3",
      content: (
        <>
          Hľadáte dlhodobého partnera na telefóne, na ktorého sa môžete obrátiť pri každej dôležitej finančnej či životnej
          zmene.
        </>
      ),
    },
    {
      key: "prev4",
      content: (
        <>
          Vážite si svoj čas viac, než aby ste ho strácali hľadaním a analýzou tých „správnych" fondov.
        </>
      ),
    },
  ];
  const niePreVas = [
    {
      key: "nie1",
      content: (
        <>
          Hľadáte skratky a rýchle zbohatnutie. Ak očakávate garantované tipy, krypto-signály a zisky cez noc. Môj systém je
          postavený na dátach, čase a predvídateľnej stabilite, nie na adrenalíne.
        </>
      ),
    },
    {
      key: "nie2",
      content: (
        <>
          Chcete investovaniu obetovať svoj voľný čas. Ak vás reálne baví tráviť víkendy študovaním grafov a čítaním finančných
          správ. Moji klienti radšej venujú tento vzácny čas svojej rodine, kariére či koníčkom a správu majetku nechávajú na mňa.
        </>
      ),
    },
    {
      key: "nie3",
      content: (
        <>
          Beriete investovanie ako hru „pokus – omyl“. Ak nemáte záujem o dlhodobú stratégiu a chcete len náhodne nakupovať fondy či
          akcie bez jasnej architektúry a cieľa.
        </>
      ),
    },
    {
      key: "nie4",
      content: (
        <>
          Aktuálne nemáte voľný cashflow. Ak ešte len riešite základnú stabilizáciu príjmu a nedokážete si zatiaľ tvoriť pravidelné
          rezervy.
        </>
      ),
    },
  ];
  return (
    <section id="pre-koho" className="section-padding bg-primary relative overflow-hidden">
      <img
        src={assetSrc(brandPattern)}
        alt=""
        className="absolute -right-20 -top-24 w-[360px] h-auto opacity-[0.08] pointer-events-none select-none brightness-200"
        aria-hidden="true"
      />
      <div ref={ref} className="content-width relative z-10">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-primary-foreground mb-10 text-center`}>
          JS Wealth Map™ <em className="text-[hsl(25,100%,98%)]">nie je pre každého.</em>
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-xl md:text-2xl text-primary-foreground/90 text-center max-w-[720px] mx-auto mb-14`}>
          Spolupracujeme s ľuďmi, pre ktorých je <strong className="text-primary-foreground">čas tá najdrahšia komodita</strong> a ich majetok si zaslúži <strong className="text-primary-foreground">profesionálneho sprievodcu.</strong>
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} card-hover hover:border-transparent bg-card rounded-2xl p-4 md:p-8`}>
            <h3 className="font-serif text-2xl font-bold text-primary text-center mb-6">Stratégia JE PRE VÁS, ak:</h3>
            <ul className="space-y-4">
              {preVas.map((item) => (
                <li key={item.key} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-lg text-muted-foreground">{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`scroll-animate scroll-animate-delay-3 ${isVisible ? "visible" : ""} card-hover hover:border-transparent card-hover-accent bg-card rounded-2xl p-4 md:p-8`}>
            <h3 className="font-serif text-2xl font-bold text-red-600 text-center mb-6">Stratégia NIE JE PRE VÁS, ak:</h3>
            <ul className="space-y-4">
              {niePreVas.map((item) => (
                <li key={item.key} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-lg text-muted-foreground">{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={`scroll-animate scroll-animate-delay-4 ${isVisible ? "visible" : ""} w-full mt-12 rounded-2xl p-4 md:p-10 bg-primary-foreground/10 text-center border border-primary-foreground/20`}>
          <Quote className="w-12 h-12 text-primary-foreground/30 mb-4 mx-auto" />
          <p className="font-serif font-semibold text-primary-foreground text-xl mb-4">
            Napríklad ako náš klient Matej Slovík (Profesionálny grafický dizajnér):
          </p>
          <blockquote className="text-xl md:text-2xl text-primary-foreground italic mb-6">
            „S Ivanom investujem preto, lebo viem, že moje peniaze sú v bezpečí. A viem, že mu môžem kedykoľvek zavolať."
          </blockquote>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/dotaznik"
            className="inline-block bg-primary-foreground text-primary font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary-foreground/95 transition-colors"
          >
            Získať JS Wealth Map™
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const real = [
    {
      quote: "Začal som pracovať v zahraničí a nevedel som, čo s prvými úsporami. Ivan mi za dva týždne postavil plán, podľa ktorého investujem dodnes.",
      name: "MuDr. Martin Vanečko",
      role: "Doktor pôsobiaci vo Švajčiarsku",
      image: "https://www.jsinvestor.sk/wp-content/uploads/2024/12/download-3.webp",
    },
    {
      quote: "Ivan je skutočný profesionál. Spolupracujeme 4 roky. Nemusím riešiť financie. Viem, že sú v dobrých rukách.",
      name: "Šimon Latkoczy",
      role: "Slovenský hokejový reprezentant",
      image: "https://www.jsinvestor.sk/wp-content/uploads/2024/12/download-2.webp",
    },
    {
      quote: "Ako podnikateľ potrebujem niekoho, kto rozumie biznisovým peniazom. Ivan presne vie, ako z firemného zisku spraviť osobný majetok.",
      name: "Ladislav Papik",
      role: "Konateľ firmy PAPIK ENTERPRISE s.r.o.",
      image: "https://www.jsinvestor.sk/wp-content/uploads/2024/12/papik.webp",
    },
  ];
  return (
    <section id="recenzie" className="section-padding section-alt relative overflow-hidden">
      <img
        src={assetSrc(brandPattern)}
        alt=""
        className="absolute -left-24 top-1/2 -translate-y-1/2 w-[280px] h-auto opacity-[0.045] pointer-events-none select-none -z-10"
        aria-hidden="true"
      />
      <img
        src={assetSrc(brandPattern)}
        alt=""
        className="absolute -right-16 bottom-1/4 w-[380px] h-auto opacity-[0.035] pointer-events-none select-none -z-10"
        aria-hidden="true"
      />
      <div ref={ref} className="content-width text-center relative z-10">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-16`}>
          Čo hovoria klienti, <em className="text-primary font-bold">ktorí sa už rozhodli.</em>
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto mb-12`}>
          Reálne skúsenosti ľudí, ktorí našli svojho <strong className="text-foreground">sprievodcu budovaním majetku a získali pocit absolútneho bezpečia</strong> v každej trhovej situácii.
        </p>
        <div
          className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} max-w-[1120px] mx-auto mb-10`}
        >
          <div className="grid md:grid-cols-3">
            {real.map((t, i) => (
              <article
                key={t.name}
                className={`text-left p-6 md:p-8 min-h-[340px] flex flex-col ${i < real.length - 1 ? "md:border-r md:border-border" : ""}`}
              >
                <blockquote className="font-sans text-[18px] md:text-[19px] leading-relaxed text-foreground/90 mb-3">
                  &quot;{t.quote}&quot;
                </blockquote>
                <div className="mt-auto">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                      {"image" in t && typeof t.image === "string" && (
                        <img src={t.image} alt="" className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-lg text-foreground leading-tight">{t.name}</p>
                      <p className="font-sans text-base text-muted-foreground leading-tight">{t.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-2 mb-6">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary/95 transition-colors hover:translate-y-[-1px] active:translate-y-0"
          >
            Získať JS Wealth Map™
          </a>
        </div>
      </div>
    </section>
  );
}

const CLIENT_RESULTS = [
  { name: "Samuel", role: "Štátny zamestnanec", investment: "Investuje pravidelne | 3 roky", zisk: "18 427 €", pct: "+50,02 %" },
  { name: "Lukáš", role: "živnostník", investment: "Investuje pravidelne | 2 roky", zisk: "1 905 €", pct: "+35,96 %" },
  { name: "Braňo", role: "zamestnanie", investment: "Investuje pravidelne | 7 mesiacov", zisk: "1 248 €", pct: "+13,57 %" },
  { name: "Andrej", role: "podnikateľ", investment: "Investícia: 50 000 € | 2 roky", zisk: "20 743 €", pct: "+43,27 %" },
  { name: "Kristián", role: "zamestnanie", investment: "Investuje mesačne 300 € | 4 roky", zisk: "8 870 €", pct: "+41,26 %" },
  { name: "Peter", role: "podnikateľ", investment: "Za 3 roky postupne vložil 119 000 €", zisk: "59 898 €", pct: "+51,15 %" },
];

function ClientResultsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const chartLineRefs = useRef<(SVGPathElement | null)[]>([]);
  const hasChartAnimated = useRef(false);
  const [chartLinesRevealed, setChartLinesRevealed] = useState(false);
  const chartsContainerRef = useRef<HTMLDivElement>(null);
  const [chartsInView, setChartsInView] = useState(false);
  const [scrollState, setScrollState] = useState({ leftRatio: 0, thumbRatio: 1, canScroll: false });

  useEffect(() => {
    const el = chartsContainerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setChartsInView(true);
      },
      { threshold: 0.25, rootMargin: "0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const updateScrollState = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const canScroll = scrollWidth > clientWidth;
    if (!canScroll) {
      setScrollState({ leftRatio: 0, thumbRatio: 1, canScroll: false });
      return;
    }
    const thumbRatio = clientWidth / scrollWidth;
    const maxLeft = scrollWidth - clientWidth;
    const leftRatio = maxLeft > 0 ? scrollLeft / maxLeft : 0;
    setScrollState({ leftRatio, thumbRatio, canScroll: true });
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState]);

  useEffect(() => {
    if (!chartsInView || hasChartAnimated.current) return;
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      const paths = chartLineRefs.current.filter(Boolean) as SVGPathElement[];
      if (paths.length === 0) return;
      const lengths = paths.map((p) => p.getTotalLength());
      paths.forEach((p, i) => {
        p.style.strokeDasharray = `${lengths[i]}`;
        p.style.strokeDashoffset = `${lengths[i]}`;
      });
      raf2 = requestAnimationFrame(() => {
        paths.forEach((p) => {
          p.style.strokeDashoffset = "0";
        });
        hasChartAnimated.current = true;
        setChartLinesRevealed(true);
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [chartsInView]);

  // Hodnota účtu (výnosy) – čiara mierne nad vkladmi, s vykyvmi
  const chartPaths = [
    "M 0 48 L 25 44 L 50 42 L 58 46 L 75 36 L 90 34 L 105 32 L 118 30 L 135 28 L 145 26 L 160 28 L 175 24 L 200 22",
    "M 0 52 L 20 48 L 40 46 L 55 50 L 70 44 L 82 48 L 100 40 L 115 38 L 130 44 L 145 36 L 160 34 L 180 30 L 200 28",
    "M 0 57 L 50 55 L 100 54 L 150 52 L 200 50",
    "M 0 46 L 25 42 L 50 40 L 65 44 L 85 36 L 105 34 L 125 40 L 145 32 L 165 30 L 185 26 L 200 24",
    "M 0 54 L 35 50 L 70 46 L 95 50 L 110 44 L 130 38 L 150 34 L 165 40 L 185 32 L 200 30",
    "M 0 50 L 30 44 L 60 40 L 85 36 L 105 40 L 130 34 L 155 30 L 178 34 L 200 28",
  ];
  // Čisté vklady – oblasť hneď pod výnosmi (menší rozdiel)
  const areaPaths = [
    "M 0 58 L 50 54 L 100 50 L 150 46 L 200 42 L 200 80 L 0 80 Z",
    "M 0 60 L 50 56 L 100 52 L 150 48 L 200 44 L 200 80 L 0 80 Z",
    "M 0 61 L 50 60 L 100 59 L 150 58 L 200 57 L 200 80 L 0 80 Z",
    "M 0 56 L 50 52 L 100 48 L 150 44 L 200 40 L 200 80 L 0 80 Z",
    "M 0 62 L 65 56 L 130 50 L 200 46 L 200 80 L 0 80 Z",
    "M 0 58 L 60 52 L 120 46 L 200 42 L 200 80 L 0 80 Z",
  ];
  return (
    <section id="vysledky-klientov" className="section-padding">
      <div ref={ref} className="content-width">
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-12 text-center">
          <em className="text-primary">Skutočné výsledky</em> našich klientov
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-[900px] mx-auto -mt-6 mb-12">
          Ukážka <strong>dlhodobého zhodnotenia majetku</strong> v rámci našich riadených ETF portfólií.
        </p>
        <div
          ref={(el) => {
            carouselRef.current = el;
            chartsContainerRef.current = el;
          }}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-visible gap-4 sm:gap-6 snap-x snap-mandatory sm:snap-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
        >
          {CLIENT_RESULTS.map((c, i) => (
            <div
              key={c.name}
              className="bg-card rounded-2xl p-4 md:p-5 border border-border shadow-sm flex flex-col shrink-0 w-[280px] sm:w-auto sm:shrink min-w-0 snap-center"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 icon-pattern-bg-primary flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-primary-foreground -translate-x-0.5" aria-hidden />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground text-lg">{c.name}</p>
                  <p className="text-base text-muted-foreground">{c.role}</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground mb-4 text-center">{c.investment}</p>
              <p className="text-2xl font-serif text-primary text-center mb-4">
                <span className="block md:inline font-extrabold">Zisk: {c.zisk}</span>
                <span className="block md:inline text-base md:text-2xl font-normal text-muted-foreground mt-0.5 md:mt-0 md:ml-1">({c.pct})</span>
              </p>
              <div className="mt-auto h-[100px] w-full rounded-lg overflow-hidden bg-muted/50">
                <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none" aria-hidden>
                  <defs>
                    <linearGradient id={`area-${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={areaPaths[i]} fill={`url(#area-${i})`} />
                  <path
                    ref={(el) => { chartLineRefs.current[i] = el; }}
                    className="chart-line-draw"
                    d={chartPaths[i]}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={
                      chartLinesRevealed
                        ? { transition: "stroke-dashoffset 2.5s ease-in-out" }
                        : {
                            strokeDasharray: 9999,
                            strokeDashoffset: 9999,
                            transition: "stroke-dashoffset 2.5s ease-in-out",
                          }
                    }
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile: scroll indikátor pod carouselom */}
        <div className="sm:hidden mt-4 px-4">
          <div className="h-1.5 w-full max-w-[200px] mx-auto rounded-full bg-muted-foreground/20 overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-150 ease-out"
              style={{
                width: scrollState.canScroll ? `${Math.max(20, scrollState.thumbRatio * 100)}%` : "100%",
                marginLeft: scrollState.canScroll ? `${scrollState.leftRatio * (100 - Math.max(20, scrollState.thumbRatio * 100))}%` : "0%",
              }}
            />
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          >
            Chcem budovať podobné portfólio
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    { value: "3 044 000 €", label: "v ETF správe majetku", icon: WalletIcon },
    { value: "5 460 000 €", label: "v nehnuteľnostiach získaných vďaka našej stratégii.", icon: Building2 },
    { value: "531", label: "klientov, s ktorými dlhodobo spolupracujeme.", icon: Users },
    {
      value: "Licencovaný správca",
      label: (
        <>
          pod dohľadom NBS s <strong>8+ rokmi skúseností.</strong>
        </>
      ),
      icon: ShieldCheck,
    },
  ];
  return (
    <section className="py-8 md:py-14 px-4 sm:px-6 bg-primary relative overflow-hidden">
      <img
        src={assetSrc(brandPattern)}
        alt=""
        className="absolute -left-20 -bottom-40 w-[360px] h-auto opacity-[0.08] pointer-events-none select-none brightness-200"
        aria-hidden="true"
      />
      <div ref={ref} className="max-w-[1440px] mx-auto w-full relative z-10">
        <div
          className={`scroll-animate ${isVisible ? "visible" : ""} flex flex-col md:flex-row md:items-center md:justify-between gap-0 md:gap-8 w-full md:max-w-none`}
        >
          {stats.map((s, i) => (
            <div
              key={s.value}
              className="flex items-center gap-5 py-5 md:py-0 md:flex-col md:items-center md:justify-center md:text-center border-b border-white/20 md:border-b-0 md:border-r md:border-white/25 last:border-b-0 md:last:border-r-0 md:flex-1 md:px-4"
            >
              <div className="w-14 h-14 icon-pattern-bg-white flex items-center justify-center flex-shrink-0 md:flex-none">
                <s.icon className="w-7 h-7 text-primary -translate-x-0.5" aria-hidden />
              </div>
              <div className="min-w-0 flex-1 md:flex-none md:mt-4 md:w-full">
                <span className="block font-serif font-bold text-white text-2xl md:text-3xl lg:text-4xl leading-tight">
                  {s.value}
                </span>
                <p className="text-white/90 text-base mt-1 font-sans">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
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
            <h2 className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-primary-foreground mb-5 text-center md:text-left`}>
              Nie som bankový ani bežný poradca.
              <em className="block text-[hsl(25,100%,98%)] italic">Nie som poisťovák.</em>
            </h2>
            <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-base md:text-xl text-primary-foreground/90 mb-4 text-left`}>
              Som správca majetku regulovaný NBS, ktorý posledných 8 rokov robí jednu vec: stavia ľuďom finančné stratégie, ktoré fungujú.
            </p>
            <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-[15px] md:text-lg text-primary-foreground/90 mb-4 text-left`}>
              531+ klientov. 3M€+ v ETF portfóliách. 5.4M€+ v investičných nehnuteľnostiach. A 110 000+ ľudí, ktorí ma sledujú na Instagrame, pretože hovorím veci, ktoré vám bankár nepovie.
            </p>
            <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-[15px] md:text-lg text-primary-foreground/90 mb-5 text-left`}>
              Keď prepočítavate kúpu bytu, plánujete mimoriadny vklad, alebo sa na trhoch deje panika — môžete mi zavolať. Toto je moja práca. Byť váš sprievodca na nasledujúcich 20–30 rokov.
            </p>
            <div className={`scroll-animate scroll-animate-delay-3 ${isVisible ? "visible" : ""}`}>
              <a
                href="/dotaznik"
                className="inline-block bg-primary-foreground text-primary font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary-foreground/95 transition-colors"
              >
                Chcem spolupracovať s Ivanom
              </a>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-primary-foreground/90 text-xs md:text-sm max-w-[560px]">
                {[
                  "Bezplatný a nezáväzný hovor",
                  "Prísny dohľad NBS a 100 % diskrétnosť",
                  "8+ rokov skúseností a 541+ klientov",
                ].map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2"
                  >
                    <Check className="w-4 h-4 text-primary-foreground/90 shrink-0" aria-hidden />
                    <span className="leading-snug font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupBenefitAccordionSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div ref={ref} className="content-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="text-center lg:text-left">
            <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-6 lg:mb-8`}>
              Váš celý finančný život <em className="text-primary">na jednom mieste.</em>
            </h2>
            <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-lg md:text-xl text-muted-foreground mb-8 lg:mb-10 max-w-[720px] lg:max-w-none mx-auto lg:mx-0`}>
              S JS Wealth Map™ si nekupujete len bežné investičné fondy. Získavate exaktný plán budovania majetku, chránený našimi železnými garanciami a obohatený o exkluzívne bonusy, ku ktorým bežný investor nemá prístup. Čo všetko obsahuje JS Wealth Map™:
            </p>
            <div className="hidden lg:flex justify-start">
              <a
                href="/dotaznik"
                className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary/95 transition-colors"
              >
                Získať JS Wealth Map™
              </a>
            </div>
          </div>

          <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} flex justify-start lg:justify-end`}>
            <div className="w-full max-w-[440px]">
              <Accordion type="single" collapsible defaultValue="item-7" className="space-y-2 lg:space-y-1">
                {benefitTimelineData.map((item) => {
                  const Icon = item.icon;
                  return (
                      <AccordionItem
                        key={item.id}
                        value={`item-${item.id}`}
                        className="border-b border-border/60 last:border-b-0 py-2 lg:py-1"
                      >
                      <AccordionTrigger className="group flex w-full items-start gap-3 py-2 text-left justify-start hover:no-underline [&>svg]:hidden">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl icon-pattern-bg-primary text-primary-foreground">
                          <Icon className="w-4 h-4 -translate-x-0.5" aria-hidden />
                        </span>
                        <span className="flex-1 font-serif text-base md:text-lg font-semibold text-foreground text-left">
                          {item.title}
                        </span>
                        <span className="ml-2 font-sans text-lg leading-none text-foreground group-data-[state=open]:hidden">
                          +
                        </span>
                        <span className="ml-2 hidden font-sans text-lg leading-none text-primary group-data-[state=open]:inline">
                          –
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-1 pb-3 pr-1 text-sm md:text-base text-muted-foreground">
                        {typeof item.content === "string" ? (
                          <p>{item.content}</p>
                        ) : (
                          <div className="[&_strong]:text-foreground">{item.content}</div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center lg:hidden">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary/95 transition-colors"
          >
            Získať JS Wealth Map™
          </a>
        </div>
      </div>
    </section>
  );
}

function GuaranteePromiseSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="garancia-spokojnosti" className="section-padding">
      <div ref={ref} className="content-width">
        <div className={`scroll-animate ${isVisible ? "visible" : ""} max-w-[880px] mx-auto text-center`}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[46px] font-bold text-foreground mb-6">
            100% GARANCIA SPOKOJNOSTI
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            Ak po úvodnom strategickom hovore zistíte, že JS Wealth Map™ nie je pre vás, jednoducho to ukončíme – bez poplatkov, bez nátlaku, bez zbytočných otázok.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            A ak po dodaní mapy nebudete spokojný, prepracujeme ju bezplatne, kým nebude sedieť na 100%.
          </p>
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary/95 transition-colors"
          >
            Získať JS Wealth Map™
          </a>
        </div>
      </div>
    </section>
  );
}

function FeeComparisonOldCard() {
  const negatives = [
    "Tabuľková stratégia",
    "Žiadny plán",
    "Zbytočné dane z výnosov",
    "Výnosy pod trhovým priemerom",
    "Predaj namiesto poradenstva",
  ];
  return (
    <div className="flex h-full flex-col rounded-2xl bg-zinc-900 p-6 text-white shadow-lg md:p-8">
      <span className="mb-4 inline-flex w-fit rounded-md bg-red-600 px-2.5 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-white">
        STARÝ spôsob
      </span>
      <h3 className="font-serif text-xl font-semibold tracking-tight text-white md:text-2xl">Banka &amp; bežný poradca</h3>
      <p className="mt-5 font-serif text-4xl font-bold tabular-nums md:text-5xl">1 – 2 %</p>
      <p className="mt-1 font-sans text-sm text-zinc-400">ročný poplatok za správu</p>
      <div className="my-6 h-px bg-zinc-700" aria-hidden />
      <ul className="flex flex-1 flex-col gap-3 font-sans text-sm md:text-base">
        {negatives.map((line) => (
          <li key={line} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
              <X className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-xl border border-red-900/60 bg-red-950/50 px-4 py-3.5 font-sans text-base font-medium leading-snug text-zinc-200 md:text-lg">
        Za 20 rokov investovania prídete o 30 až 40 % majetku kvôli poplatkom.
      </div>
    </div>
  );
}

function FeeComparisonNewCard() {
  const positives = [
    "Individuálna stratégia",
    "Investičné nehnuteľnosti",
    "Neverejné fondy (FKI)",
    "Individualita = lepší výnos",
    "Rentové a dividendové účty",
  ];
  return (
    <div className="flex h-full flex-col rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg md:p-8">
      <span className="mb-4 inline-flex w-fit rounded-md bg-white px-2.5 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-foreground">
        NOVÝ spôsob
      </span>
      <h3 className="font-serif text-xl font-semibold tracking-tight md:text-2xl">Komplexná správa majetku</h3>
      <p className="mt-5 font-serif text-4xl font-bold tabular-nums md:text-5xl">0,35 – 0,49 %</p>
      <p className="mt-1 font-sans text-sm text-primary-foreground/75">ročný poplatok za správu</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 font-sans text-xs font-medium backdrop-blur-sm">
          0,49 % do 100 000 € a 0,35 % nad 100 000 €
        </span>
        <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 font-sans text-xs font-medium backdrop-blur-sm">
          1 % poplatok z vkladov
        </span>
      </div>
      <div className="my-6 h-px bg-white/25" aria-hidden />
      <ul className="flex flex-1 flex-col gap-3 font-sans text-sm md:text-base">
        {positives.map((line) => (
          <li key={line} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-primary">
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 font-sans text-base font-semibold leading-snug md:text-lg">
        Úspora na poplatkoch až 100 000 €.
      </div>
    </div>
  );
}

/** Simulácia dopadu poplatkov — farby podľa brand mockupu */
const FEE_IMPACT = {
  bg: "#F2EDE9",
  competitorBar: "#8B7E6F",
  jsBar: "#2D5A3F",
  competitorEnd: 453_000,
  jsEnd: 570_000,
} as const;

function FeeFairnessImpactBlock() {
  const { ref, isVisible } = useScrollAnimation(0.18);
  const competitorPct = (FEE_IMPACT.competitorEnd / FEE_IMPACT.jsEnd) * 100;
  const diff = FEE_IMPACT.jsEnd - FEE_IMPACT.competitorEnd;

  const paramItems = [
    { icon: WalletIcon, label: "mesačná investícia", value: "300 €" },
    { icon: Clock, label: "investičný horizont", value: "30 rokov" },
    { icon: TrendingUp, label: "priemerný ročný výnos", value: "10 %" },
  ] as const;

  return (
    <div
      ref={ref}
      className={cn(
        "fee-impact-root rounded-[20px] p-5 shadow-[0_8px_32px_-8px_rgba(45,90,63,0.12),0_4px_20px_-6px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_14px_44px_-10px_rgba(45,90,63,0.2),0_8px_24px_-8px_rgba(0,0,0,0.08)] md:p-8",
        isVisible && "is-visible"
      )}
      style={
        {
          backgroundColor: FEE_IMPACT.bg,
          "--fee-competitor-pct": `${competitorPct}%`,
        } as CSSProperties
      }
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {paramItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-black/[0.06] bg-white px-4 py-3 shadow-sm transition-all duration-500 md:px-5 md:py-4",
                "hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              )}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary/[0.14]">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="font-sans text-xs text-muted-foreground md:text-sm">{item.label}:</p>
                  <p className="mt-0.5 font-sans text-lg font-bold tabular-nums text-foreground md:text-xl">{item.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="sr-only">
        Pri mesačnej investícii 300 eur počas 30 rokov a priemernom výnose 10 % ročne by ste pri banke s
        poplatkom 1,5 % ročne nazhromaždili približne 453 000 eur, s JS Investor približne 570 000 eur.
        Rozdiel v prospech klienta je približne 117 000 eur.
      </p>

      <div className="mt-8 space-y-7">
        <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-5">
          <div className="shrink-0 md:w-[200px] lg:w-[220px]">
            <p className="font-sans text-sm font-semibold text-foreground md:text-base">Banka &amp; bežný poradca</p>
            <p className="mt-0.5 font-sans text-xs text-muted-foreground md:text-sm">ročný poplatok = 1,5 %</p>
          </div>
          <div className="relative min-h-[52px] flex-1 overflow-hidden rounded-xl bg-gradient-to-b from-white to-white/70 ring-1 ring-black/[0.08] shadow-[inset_0_2px_4px_rgba(255,255,255,0.85)] md:min-h-[58px]">
            <div
              className="fee-impact-competitor-fill absolute inset-y-0 left-0 flex items-center justify-center overflow-hidden rounded-xl px-2 shadow-[inset_0_-3px_10px_rgba(0,0,0,0.15)] transition-[width] duration-[1100ms] motion-reduce:transition-none ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: isVisible ? `${competitorPct}%` : "0%",
                transitionDelay: isVisible ? "160ms" : "0ms",
                background: `linear-gradient(155deg, #9a8b7a 0%, ${FEE_IMPACT.competitorBar} 42%, #6e6358 100%)`,
              }}
            >
              {isVisible ? (
                <div
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl motion-reduce:hidden"
                  aria-hidden
                >
                  <div className="absolute inset-y-0 w-[45%] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-fee-bar-shimmer" />
                </div>
              ) : null}
              <span
                className={cn(
                  "relative z-[1] font-sans text-sm font-bold tabular-nums text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-opacity duration-500 motion-reduce:opacity-100 motion-reduce:transition-none sm:text-base md:text-lg",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: isVisible ? "680ms" : "0ms" }}
              >
                453 000 €
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-5">
          <div className="shrink-0 md:w-[200px] lg:w-[220px]">
            <p className="font-sans text-sm font-semibold text-foreground md:text-base">
              JS Investor <span className="font-normal text-muted-foreground">(Wealth Map™)</span>
            </p>
            <p className="mt-0.5 font-sans text-xs text-muted-foreground md:text-sm">
              ročný poplatok: 0,49 % → 0,35 %
            </p>
          </div>
          <div className="relative min-h-[52px] flex-1 overflow-hidden rounded-xl shadow-[0_8px_24px_-6px_rgba(45,90,63,0.45)] ring-1 ring-[#2D5A3F]/30 md:min-h-[58px]">
            <div
              className="fee-impact-js-fill absolute inset-0 origin-left rounded-xl transition-transform duration-[1200ms] motion-reduce:transition-none ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                transitionDelay: isVisible ? "360ms" : "0ms",
                background: `linear-gradient(155deg, #3d7a55 0%, ${FEE_IMPACT.jsBar} 45%, #1e3d2c 100%)`,
              }}
            >
              {isVisible ? (
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl motion-reduce:hidden" aria-hidden>
                  <div
                    className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-white/22 to-transparent animate-fee-bar-shimmer"
                    style={{ animationDelay: "1.42s" }}
                  />
                </div>
              ) : null}
            </div>
            <div className="relative z-10 flex min-h-[52px] w-full items-center justify-end px-4 md:min-h-[58px] md:px-6">
              <span
                className={cn(
                  "font-sans text-base font-bold tabular-nums text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-opacity duration-500 motion-reduce:opacity-100 motion-reduce:transition-none md:text-xl",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: isVisible ? "880ms" : "0ms" }}
              >
                570 000 €
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-8 flex flex-col gap-4 rounded-xl bg-gradient-to-br from-[#3a6b4d] via-[#2D5A3F] to-[#1f3d2b] px-5 py-5 text-white shadow-[0_14px_40px_-10px_rgba(45,90,63,0.55)] ring-1 ring-white/15 md:flex-row md:items-center md:justify-between md:px-8 md:py-6"
      >
        <div
          className={cn(
            "font-sans text-sm leading-snug transition-opacity duration-500 motion-reduce:opacity-100 motion-reduce:transition-none md:text-base",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: isVisible ? "820ms" : "0ms" }}
        >
          <p className="font-semibold">Rozdiel vo váš prospech</p>
          <p className="mt-0.5 text-white/90">Len vďaka nižším poplatkom</p>
        </div>
        <p
          className={cn(
            "font-sans text-3xl font-bold tabular-nums md:text-4xl lg:text-[2.75rem]",
            !isVisible && "opacity-0",
            isVisible && "animate-fee-diff-pop motion-reduce:animate-none motion-reduce:opacity-100"
          )}
          style={isVisible ? { animationDelay: "0.95s" } : undefined}
        >
          + {diff.toLocaleString("sk-SK")} €
        </p>
      </div>
    </div>
  );
}

function GuaranteeSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="garancia" className="section-padding">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-10 text-center`}>
          <em className="text-primary italic">Váš majetok rastie,</em> poplatky klesajú
        </h2>

        <div
          className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} mb-10 md:mb-12`}
          aria-label="Porovnanie starého a nového spôsobu správy majetku"
        >
          <div className="md:hidden">
            <Tabs defaultValue="old" className="w-full max-w-lg mx-auto">
              <TabsList className="mb-4 grid h-11 w-full grid-cols-2 gap-1 rounded-xl bg-muted p-1">
                <TabsTrigger value="old" className="rounded-lg font-sans text-sm font-semibold data-[state=active]:bg-zinc-900 data-[state=active]:text-white">
                  STARÝ spôsob
                </TabsTrigger>
                <TabsTrigger value="new" className="rounded-lg font-sans text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  NOVÝ spôsob
                </TabsTrigger>
              </TabsList>
              <TabsContent value="old" className="mt-0 outline-none">
                <FeeComparisonOldCard />
              </TabsContent>
              <TabsContent value="new" className="mt-0 outline-none">
                <FeeComparisonNewCard />
              </TabsContent>
            </Tabs>
          </div>
          <div className="mx-auto hidden max-w-5xl grid-cols-2 gap-6 md:grid md:gap-8">
            <FeeComparisonOldCard />
            <FeeComparisonNewCard />
          </div>
        </div>

        <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-xl md:text-2xl text-muted-foreground text-center max-w-[800px] mx-auto mb-10`}>
          Začíname na <strong className="text-foreground">férovej sadzbe 0,49 % ročne</strong> za správu portfólia.
          <span className="block">
            Nad 100 000 € platíte už len exkluzívnych 0,35 % p.a.
          </span>
          <span className="block h-5" aria-hidden="true" />
          <span className="block">
            Namiesto umelých sľubov vám <strong className="text-foreground">garantujem najlepšie podmienky na trhu.</strong> Porovnajte si to sami:
          </span>
        </p>

        {/* Porovnanie poplatkov */}
        <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} mt-8 mb-32 w-full`}>
          <div className="overflow-x-auto lg:overflow-x-visible">
            <table className="w-full min-w-[640px] lg:min-w-0 text-left border-collapse table-fixed">
              <colgroup>
                <col className="w-[22%] lg:w-[22%]" />
                <col className="w-[25%] lg:w-[25%]" />
                <col className="w-[18%] lg:w-[18%]" />
                <col className="w-[17.5%] lg:w-[17.5%]" />
                <col className="w-[17.5%] lg:w-[17.5%]" />
              </colgroup>
              <thead>
                <tr className="border-b border-border/50">
                  <th className="p-4 md:py-5 md:px-6 font-sans text-sm md:text-base font-semibold text-muted-foreground" aria-label="Typ poplatku"> </th>
                  <th className="p-4 md:py-5 md:px-6 font-serif font-bold text-foreground text-center text-lg md:text-xl bg-primary/20 rounded-t-2xl">JS Wealth Map™</th>
                  <th className="p-4 md:py-5 md:px-6 font-sans font-semibold text-foreground text-center text-base md:text-lg">Investičné platformy</th>
                  <th className="p-4 md:py-5 md:px-6 font-sans font-semibold text-foreground text-center text-base md:text-lg">Banky</th>
                  <th className="p-4 md:py-5 md:px-6 font-sans font-semibold text-foreground text-center text-base md:text-lg">Poradcovia</th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm md:text-base">
                <tr className="border-b border-border/40">
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground"><span className="font-bold">Manažérsky poplatok</span> (ročne)</td>
                  <td className="p-4 md:py-5 md:px-6 bg-primary/20 text-foreground font-semibold text-center">
                    <span className="block"><span className="font-normal">do 100 000 € —</span> 0,49 %</span>
                    <span className="block"><span className="font-normal">nad 100 000 € —</span> 0,35 %</span>
                  </td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">0 – 3 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">2 – 3 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">2 – 3 %</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground font-bold">Dane</td>
                  <td className="p-4 md:py-5 md:px-6 bg-primary/20 text-foreground font-semibold text-center">0 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">0 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">19 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">0 %</td>
                </tr>
                <tr>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground font-bold">Vstupný poplatok</td>
                  <td className="p-4 md:py-5 md:px-6 bg-primary/20 text-foreground font-semibold text-center rounded-b-2xl">max 1 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">0 – 3 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">2 – 3 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">2 – 3 %</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={`scroll-animate scroll-animate-delay-3 ${isVisible ? "visible" : ""} mx-auto mt-16 max-w-[860px] md:mt-20`}>
          <h3 className="mb-6 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            Prečo je to{" "}
            <em className="text-primary italic">férové?</em>
          </h3>

          <p className="mx-auto max-w-[800px] text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            Prémiová správa majetku za zlomok ceny tradičných bánk.{" "}
            <strong className="font-semibold text-foreground">Nepotrebujete platiť drahé bankové fondy</strong>
            , aby bol váš majetok v bezpečí. Získavate inštitucionálne portfóliá a osobnú stratégiu s transparentnou
            cenovkou:
          </p>
        </div>

        <div className={`scroll-animate scroll-animate-delay-3 ${isVisible ? "visible" : ""} mx-auto mt-20 max-w-[900px] md:mt-28`}>
          <h3 className="mb-6 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
            Čo znamená{" "}
            <em className="text-primary italic">rozdiel v poplatkoch za 30 rokov?</em>
          </h3>
          <FeeFairnessImpactBlock />
        </div>

        <div className="mt-12 flex flex-col items-center gap-5">
          <p className="max-w-[640px] text-center font-sans text-lg font-normal leading-snug text-foreground md:text-xl">
            Neplaťte zbytočne poplatky a chráňte svoj čistý výnos.
          </p>
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
          >
            Získať JS Wealth Map™
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Investujem sám cez appku. Prečo by som potreboval vás?",
    answer: (
      <>
        Appka je nástroj, nie stratégia. Nevie vám povedať, kedy zmeniť portfólio, kedy kúpiť byt alebo kedy začať čerpať rentu. My áno.
      </>
    ),
  },
  {
    id: "faq-2",
    question: "Prečo by som mal zveriť majetok vám a nie banke alebo privátnemu bankárovi?",
    answer: (
      <>
        Banky primárne predávajú vlastné produkty s vysokými vstupnými a priebežnými poplatkami (často až 2 % ročne), pričom pri výbere ziskov môžete stratiť ďalšie tisíce na daniach. My fungujeme v režime otvorenej architektúry – vyberáme to <strong className="text-foreground">najlepšie z globálneho trhu, maximálne daňovo optimalizovane</strong>. Na rozdiel od bánk u nás <strong className="text-foreground">neplatíte žiadny poplatok za správu do výšky majetku 50 000 €</strong>.
      </>
    ),
  },
  {
    id: "faq-3",
    question: "Sú v systéme nejaké skryté poplatky, o ktorých by som mal vedieť?",
    answer: (
      <>
        Nie, naša poplatková štruktúra je od prvého dňa <strong className="text-foreground">absolútne transparentná a postavená férovo</strong>. Našou filozofiou je zarábať až vtedy, keď reálne rastie váš kapitál. Preto do 50 000 € neplatíte za správu vôbec nič (0 %). Až pri sumách nad túto hranicu je poplatok <strong className="text-foreground">maximálne 0,49 %</strong>. Všetky podmienky sú jasne a vopred dohodnuté.
      </>
    ),
  },
  {
    id: "faq-4",
    question: "Stratím kontrolu nad svojimi peniazmi, keď ich budem spravovať cez váš systém?",
    answer: (
      <>
        Práve naopak, získate <strong className="text-foreground">dokonalý prehľad bez papierovačiek</strong>. Všetky vaše investície, zmluvy a exaktný vývoj čistého majetku vidíte v reálnom čase <strong className="text-foreground">vďaka aplikácii UFO</strong>. Na jeden klik viete zistiť, o koľko klesla vaša hypotéka, narástli fondy a o koľko eur ste celkovo bohatší. Vaše peniaze zostávajú plne flexibilné, takže vieme stratégiu kedykoľvek prispôsobiť zmenám vo vašom živote.
      </>
    ),
  },
  {
    id: "faq-5",
    question: "Čo sa stane s mojím majetkom v prípade, že sa mi niečo stane?",
    answer: (
      <>
        Toto je jedna z najčastejších otázok klientov, ktorí si už vybudovali väčší kapitál a záleží im na zabezpečení rodiny. V rámci JS Wealth Map™ neriešime len zhodnocovanie aktív, ale aj komplexné <strong className="text-foreground">„dedičstvo v investovaní“</strong>. Poskytneme vám jasný systém a presný postup, ako nastaviť bezpečný prechod majetku na vašich blízkych. Zabezpečíme pre vás všetko od základného právneho procesu až po pokročilé nástroje, akými sú <strong className="text-foreground">zverenecké fondy</strong>, ktoré bežne využívajú tí najbohatší. Získate tak absolútny pokoj na duši s vedomím, že o váš majetok a rodinu je odborne postarané v akejkoľvek životnej situácii.
      </>
    ),
  },
];

function FaqSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="faq" className="section-padding section-alt relative overflow-hidden">
      <img
        src={assetSrc(brandPattern)}
        alt=""
        className="absolute bottom-8 left-0 w-[260px] h-auto opacity-[0.04] pointer-events-none select-none -z-10"
        aria-hidden="true"
      />
      <div ref={ref} className="content-width relative z-10">
        <p className={`scroll-animate ${isVisible ? "visible" : ""} text-sm font-sans font-semibold tracking-[0.2em] uppercase text-primary mb-3 text-center`}>
          FAQ
        </p>
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[44px] font-serif font-bold text-foreground mb-3 text-center`}>
          Najčastejšie otázky
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-lg text-muted-foreground text-center max-w-[520px] mx-auto mb-14`}>
          Odpovede na to, čo nás klienti pýtajú najčastejšie.
        </p>
        <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} max-w-[780px] mx-auto space-y-3`}>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="flex flex-col gap-3 border-none"
              >
                <AccordionTrigger className="rounded-xl border border-border/80 bg-card p-4 md:px-6 md:py-5 text-left font-serif font-semibold text-foreground text-[1.05rem] md:text-lg hover:no-underline hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-[0_1px_3px_rgba(0,0,0,0.04)] data-[state=open]:bg-primary data-[state=open]:text-primary-foreground data-[state=open]:border-primary data-[state=open]:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] [&>svg]:text-muted-foreground [&>svg]:w-5 [&>svg]:h-5 hover:[&>svg]:text-primary-foreground [&[data-state=open]>svg]:text-primary-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-1 md:px-6 md:py-4 text-muted-foreground text-[0.9375rem] md:text-base leading-[1.7] mt-0">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function LimitedCapacitySection() {
  const { ref, isVisible } = useScrollAnimation();
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
            100 % osobný prístup vyžaduje <em className="text-primary">limitovanú kapacitu.</em>
          </h2>

          <p className="text-lg md:text-[1.3rem] text-muted-foreground text-center leading-relaxed mb-8 max-w-[860px] mx-auto">
            Garantujem vám čas, ktorý vám banka nevenuje. Mojím cieľom nie je nabrať tisíce klientov. Mojím cieľom je poskytnúť absolútne bezpečie a priamy prístup úzkej skupine ľudí. Aby to bolo fyzicky možné, prijímam len obmedzený počet nových klientov mesačne.
          </p>

          <div className="h-px w-[min(860px,100%)] mx-auto bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-6" aria-hidden />

          <p className="text-lg md:text-2xl text-foreground text-center font-semibold mb-8 max-w-[860px] mx-auto">
            Zabezpečte si svoj{" "}
            <span className="text-primary font-serif font-bold">
              termín
            </span>{" "}
            ešte dnes.
          </p>
          <div className="flex justify-center">
            <a
              href="/dotaznik"
              className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary/95 transition-colors hover:translate-y-[-1px] active:translate-y-0"
            >
              Získať JS Wealth Map™
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  const { ref, isVisible } = useScrollAnimation();
  const ctaBullets = [
    "Bezplatný a nezáväzný hovor",
    "Prísny dohľad NBS a 100 % diskrétnosť",
    "8+ rokov skúseností a 541+ klientov",
  ];
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
                  Ste jeden krok od toho, aby ste mali svoje financie konečne pod kontrolou
                </h2>
                <p className="mb-8 text-base text-primary-foreground/90 md:mb-10 md:text-xl lg:max-w-xl">
                  Získajte Wealth Map™. Vašu osobnú finančnú stratégiu postavenú na férových poplatkoch, jasnom prehľade a dlhodobom partnerstve.
                </p>
                <a
                  href="/dotaznik"
                  className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} inline-block rounded-full border border-primary-foreground bg-primary-foreground px-8 py-3.5 font-sans text-base font-semibold text-primary shadow-lg transition-colors hover:bg-primary-foreground/90 hover:text-primary lg:mx-0`}
                >
                  Získať Wealth Map™
                </a>
              </div>
              <ul
                className="flex flex-col gap-4 text-left text-base text-primary-foreground/90 md:gap-5 md:text-lg lg:justify-center lg:text-lg"
                aria-label="Výhody"
              >
                {ctaBullets.map((item) => (
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