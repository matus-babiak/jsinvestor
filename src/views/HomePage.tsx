"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import StickyNav from "@/components/StickyNav";
import Footer from "@/components/Footer";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { benefitTimelineData } from "@/data/benefit-timeline-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import brandPattern from "@/assets/js-brand-pattern.svg";
import logo from "@/assets/js-investor-logo.png";
import ivanJasikPhoto from "@/assets/ivan-jasik.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { assetSrc } from "@/lib/utils";
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
  Star,
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
              <p className="hero-animate hero-animate-delay-1 inline-block rounded-full bg-muted px-3 py-1.5 mb-6 text-sm font-sans font-[500] tracking-wide text-primary">
                Sprievodca budovaním majetku pre ambicióznych ľudí
              </p>
              <h1 className="hero-animate hero-animate-delay-2 text-4xl md:text-5xl lg:text-[58px] font-serif font-bold text-foreground mb-12">
                Zarábate dobre, ale vaše peniaze strácajú hodnotu, alebo nemajú správny smer? <span className="md:block"><em className="text-primary">Dajte im jasný plán.</em></span>
              </h1>
              <blockquote className="hero-animate hero-animate-delay-3 text-xl font-sans text-muted-foreground mb-10 max-w-[720px] mx-auto">
                Nechajte si navrhnúť <strong className="text-foreground">JS Wealth Map™</strong> a majte <strong className="text-foreground">celý svoj finančný život na jednom mieste.</strong> Získate pocit absolútneho bezpečia a istotu, že je o váš majetok odborne postarané.
              </blockquote>
              <div className="hero-animate hero-animate-delay-4 flex flex-wrap gap-4 items-center justify-center mb-10">
                <a
                  href="/dotaznik"
                  className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
                >
                  Navrhnúť JS Wealth Map™
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
                  <span>
                    Jasný majetkový <strong className="font-semibold">plán na mieru</strong>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                  <span>
                    Celý majetok <strong className="font-semibold">na jednom mieste</strong>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
                  <span>
                    Sprievodca <strong className="font-semibold">kedykoľvek k dispozícii</strong>
                  </span>
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

        {/* 6. Pre koho je / nie je */}
        <ForWhomSection />

        {/* 7. Dôkaz — recenzie */}
        <TestimonialsSection />

        {/* 8. Tabuľka poplatkov */}
        <GuaranteeSection />

        {/* 9. O Ivanovi */}
        <AboutSection />

        {/* Exkluzívny benefit - skupina (akordeón) */}
        <GroupBenefitAccordionSection />

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
      icon: Compass,
      title: "Peniaze bez smeru",
      content: (
        <>
          Úspory na účte vám <strong className="text-foreground">potichu požiera inflácia</strong> a chýba vám <strong className="text-foreground">dlhodobý plán.</strong>
        </>
      ),
    },
    {
      icon: Building2,
      title: "Falošná istota bánk",
      content: (
        <>
          Za pocit bezpečia platíte <strong className="text-foreground">predražené 2 % poplatky</strong> a <strong className="text-foreground">zbytočné dane.</strong>
        </>
      ),
    },
    {
      icon: Clock,
      title: "Nedostatok času a strach",
      content: (
        <>
          Nemáte <strong className="text-foreground">čas študovať trhy</strong> a spravovať majetok cez aplikácie prináša <strong className="text-foreground">riziko drahej chyby.</strong>
        </>
      ),
    },
    {
      icon: Puzzle,
      title: "Roztrieštené investície bez prepojenia",
      content: (
        <>
          Vaše fondy a nehnuteľnosti nespolupracujú, <strong className="text-foreground">chýba vám plán na vyplácanie renty</strong> a prístup k fondom kvalifikovaných investorov.
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
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-4 text-center`}>
          Mnohí ľudia s dobrým príjmom <em className="text-primary">robia pri budovaní majetku rovnaké chyby.</em>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-[720px] mx-auto mb-10">
          Spoznávate sa v niektorej z nich?
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="card-hover-accent bg-card-alt rounded-2xl p-4 md:p-6 shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl icon-pattern-bg-accent flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-accent -translate-x-0.5" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{p.title}</h3>
              <div className="text-lg text-muted-foreground">{p.content}</div>
            </div>
          ))}
        </div>
        <blockquote className="text-lg md:text-xl text-center text-muted-foreground max-w-[720px] mx-auto">
          Ak sa spoznávate, vášmu majetku <strong className="text-foreground">chýba jeden fungujúci ekosystém.</strong>
        </blockquote>
        <div className="flex justify-center mt-10">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
          >
            Navrhnúť JS Wealth Map™
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
          <strong className="text-foreground">Globálne ETF stratégie bez skrytých poplatkov.</strong> Váš kapitál systematicky zhodnotíme cez nízkonákladové ETF fondy. Získate stabilné portfólio nastavené presne na vašu situáciu. Pre predvídateľný rast majetku{" "}
          <strong className="text-foreground">bez stresu, paniky a predražených bankových poplatkov.</strong>
        </>
      ),
    },
    {
      num: "2",
      icon: Building2,
      title: "Investičné nehnuteľnosti",
      content: (
        <>
          <strong className="text-foreground">Na základe dát, nie pocitov.</strong> Byt vás nesmie finančne vyčerpávať. Keď príde čas na kúpu, na stôl vám položíme exaktné ROI kalkulačky a stresové scenáre. Zabezpečíme, aby vaša investícia dávala od prvého dňa{" "}
          <strong className="text-foreground">prísny matematický zmysel.</strong>
        </>
      ),
    },
    {
      num: "3",
      icon: Calculator,
      title: "Fondy kvalifikovaných investorov",
      content: (
        <>
          <strong className="text-foreground">Prémiová vrstva pre investorov s majetkom od 50 000 €.</strong> Otvoríme vám dvere k privátnym investíciám a neverejným projektom. Získate prístup k exkluzívnym príležitostiam{" "}
          <strong className="text-foreground">so stabilnými výnosmi 7–10 %.</strong>
        </>
      ),
    },
    {
      num: "4",
      icon: WalletIcon,
      title: "Renta a skutočná sloboda",
      content: (
        <>
          <strong className="text-foreground">Doživotná renta a vaša časová sloboda.</strong> Neinvestujete len pre pekné čísla v aplikácii, ale pre svoju nezávislosť. V správny moment vaše aktíva prestavíme do rentového módu a vytvoríme vám bezpečný systém výberov, ktorý vám zabezpečí{" "}
          <strong className="text-foreground">stabilný pasívny príjem.</strong>
        </>
      ),
    },
  ];
  return (
    <section id="ako-to-funguje" className="section-padding">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-10 text-center max-w-[960px] mx-auto`}>
          Dajte svojim peniazom <em className="text-primary">jasný smer.</em>
        </h2>
        <div className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-muted-foreground text-center max-w-[800px] mx-auto mb-16 md:mb-20`}>
          <p className="text-xl md:text-2xl mb-10 md:mb-12">
            Spojíme vaše financie <strong className="text-foreground">do jedného ekosystému</strong>. Zložité rozhodnutia delegujete na sprievodcu a <strong className="text-foreground">získate čistú hlavu pre rodinu a kariéru.</strong>
          </p>
          <p className="text-lg md:text-xl bg-primary text-primary-foreground rounded-2xl px-4 py-4 md:px-6 md:py-5">
            Čo je <span className="font-semibold">JS Wealth Map™?</span> Konkrétny <strong className="text-primary-foreground">majetkový plán na mieru.</strong> Presne ukáže, <strong className="text-primary-foreground">kde ste, kam smerujete</strong> a <strong className="text-primary-foreground">ako sa tam dostanete.</strong> Získate tak celý váš finančný život na jednom mieste.
          </p>
        </div>

        {/* Krokový postup tvorby mapy */}
        <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} mb-20 md:mb-24`}>
          <p className="text-center text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6 md:mb-8">
            Ako vzniká vaša mapa budovania majetku
          </p>
          <div className="relative max-w-[900px] mx-auto pl-2 md:pl-0">
            <div className="absolute left-[18px] md:left-6 top-3 bottom-3 w-px bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10" aria-hidden />
            <ol className="space-y-10 md:space-y-12">
              {[
                {
                  num: 1,
                  title: "Hĺbkový audit a váš osobný JS Wealth Map™",
                  desc: <>Zanalyzujeme vaše financie a <strong className="text-foreground">vytvoríme prehľadný plán</strong> na jednej strane. Získate tak jasnú mapu, ktorá vám ukáže vašu štartovaciu čiaru a <strong className="text-foreground">presný postup k vašim cieľom.</strong></>,
                },
                {
                  num: 2,
                  title: "Inteligentné ETF portfólio",
                  desc: <>Základom je stabilný rast cez nízkonákladové globálne fondy. Vybudujeme vám <strong className="text-foreground">silný investičný návyk</strong> a pevný odrazový <strong className="text-foreground">mostík pre ďalšie kroky,</strong> úplne bez stresu.</>,
                },
                {
                  num: 3,
                  title: "Investičné nehnuteľnosti a pákový efekt",
                  desc: <>Keď máte pripravený základ, váš majetok masívne <strong className="text-foreground">znásobíme pomocou investičných bytov a úverovej páky.</strong> Všetko výhradne na základe prísnej matematiky a exaktných kalkulačiek.</>,
                },
                {
                  num: 4,
                  title: "Fondy kvalifikovaných investorov",
                  desc: <>S postupným rastom kapitálu vám <strong className="text-foreground">odomkneme dvere k neverejným projektom.</strong> Získate tak prístup <strong className="text-foreground">k exkluzívnym investíciám</strong>, ku ktorým <strong className="text-foreground">bežný človek nemá prístup.</strong></>,
                },
                {
                  num: 5,
                  title: "Doživotná renta a skutočná sloboda",
                  desc: <>Ultimátnym cieľom je <strong className="text-foreground">bezpečný pasívny príjem.</strong> Vybudované aktíva v správnom čase prestavíme do módu výberov, čím si kúpite to najcennejšie. <strong className="text-foreground">Absolútnu časovú a finančnú nezávislosť.</strong></>,
                },
              ].map((step) => (
                <li key={step.num} className="relative pl-14 md:pl-20">
                  <div className="absolute left-0 top-0.5 w-9 h-9 md:w-11 md:h-11 rounded-full bg-primary text-primary-foreground font-serif font-bold text-base md:text-lg flex items-center justify-center shadow-sm">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="text-center max-w-[880px] mx-auto mb-12 md:mb-14">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
            4 piliere <em className="text-primary">JS Wealth Map™</em>
          </h3>
        </div>

        <ol className="space-y-10 md:space-y-14 text-left max-w-[880px] mx-auto">
          {pillars.map((p, i) => (
            <li key={p.num} className="relative">
              <div className="group relative rounded-2xl px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 flex gap-4 md:gap-6 items-start border border-transparent transition-transform duration-300 hover:-translate-y-2 hover:border-[#ccc7c4]" style={{ backgroundColor: '#f2ede9' }}>
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl icon-pattern-bg-primary flex items-center justify-center shadow-sm">
                    <p.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground -translate-x-0.5" aria-hidden />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2 md:mb-3">
                    {p.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground">{p.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="flex justify-center mt-12">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
          >
            Navrhnúť JS Wealth Map™
          </a>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  const { ref, isVisible } = useScrollAnimation();
  const pred = [
    "Roztrieštené financie: Peniaze vám požiera inflácia alebo drahé bankové fondy.",
    "Chýbajúci prehľad: Neviete presne, aký je váš skutočný čistý majetok.",
    "Zbytočné straty: Prichádzate o tisíce eur na poplatkoch a daniach bez toho, aby ste o tom vedeli.",
    "Ste na to sami: Každé zložité rozhodnutie vás stojí čas a nervy.",
  ];
  const po = [
    "Jeden ekosystém: ETF, byty aj renta prepojené tak, aby dávali prísny matematický zmysel.",
    "Aplikácia UFO: Celý váš finančný život a rast majetku vidíte na jeden klik.",
    "Ochrana zisku: Optimalizované dane a férové poplatky, aby vám ostalo maximum.",
    "Osobný sprievodca: Delegovali ste zodpovednosť. Máte experta na telefóne a kľudný spánok pre svoju kariéru.",
  ];
  return (
    <section id="pred-po" className="section-padding section-alt">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-16 text-center`}>
          Už na svoje financie nemusíte byť sami. Získajte <em className="text-primary">pocit absolútneho bezpečia.</em>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} card-hover-accent bg-card-alt rounded-2xl p-4 md:p-8`}>
            <h3 className="font-serif text-2xl font-semibold text-red-600 text-center mb-6">PRED <span className="font-normal opacity-90">(Chaos a stres)</span></h3>
            <ul className="space-y-2.5 md:space-y-3.5">
              {pred.map((item) => {
                const colonIdx = item.indexOf(": ");
                const label = colonIdx >= 0 ? item.slice(0, colonIdx) : item;
                const text = colonIdx >= 0 ? item.slice(colonIdx + 2) : "";
                return (
                  <li key={item} className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-base md:text-lg text-muted-foreground"><strong className="text-foreground">{label}:</strong> {text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} card-hover bg-card-alt rounded-2xl p-4 md:p-8`}>
            <h3 className="font-serif text-2xl font-semibold text-primary text-center mb-6">PO <span className="font-normal opacity-90">(JS Wealth Map™)</span></h3>
            <ul className="space-y-2.5 md:space-y-3.5">
              {po.map((item) => {
                const colonIdx = item.indexOf(": ");
                const label = colonIdx >= 0 ? item.slice(0, colonIdx) : item;
                const text = colonIdx >= 0 ? item.slice(colonIdx + 2) : "";
                return (
                  <li key={item} className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-base md:text-lg text-muted-foreground"><strong className="text-foreground">{label}:</strong> {text}</span>
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
    { key: "prev1", content: <>Zarábate od 1 500 € mesačne a chcete svoje prebytky začať <strong className="text-foreground">systematicky a bezpečne zhodnocovať.</strong></> },
    { key: "prev2", content: <>Chcete <strong className="text-foreground">delegovať zodpovednosť na experta</strong>, získať kľudný spánok a nehrať sa po večeroch na amatérskeho tradera.</> },
    { key: "prev3", content: <>Hľadáte <strong className="text-foreground">dlhodobého partnera na telefóne</strong>, na ktorého sa môžete obrátiť pri každej dôležitej finančnej či životnej zmene.</> },
    { key: "prev4", content: <>Vážite si svoj čas viac, než aby ste ho strácali hľadaním a analýzou tých „správnych" fondov.</> },
  ];
  const niePreVas = [
    { key: "nie1", content: <>Si chcete portfólio naklikávať sami cez investičné aplikácie a hľadáte skôr <strong className="text-foreground">adrenalín z rýchleho obchodovania.</strong></> },
    { key: "nie2", content: <>Je váš rozpočet <strong className="text-foreground">nižší ako 200 € mesačne.</strong></> },
    { key: "nie3", content: <>Spoliehate sa výhradne na vlastný úsudok a momentálne nestojíte o <strong className="text-foreground">externý a exaktný pohľad odborníka.</strong></> },
    { key: "nie4", content: <>Hľadáte len <strong className="text-foreground">jednorazový nákup</strong> finančného produktu a nezaujíma vás dlhodobý plán budovania doživotnej renty.</> },
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
          Pracujeme výhradne s ľuďmi, pre ktorých je <strong className="text-primary-foreground">čas tá najdrahšia komodita</strong> a ich majetok si zaslúži <strong className="text-primary-foreground">profesionálneho sprievodcu.</strong>
        </p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} card-hover hover:border-transparent bg-card rounded-2xl p-4 md:p-8`}>
            <h3 className="font-serif text-2xl font-bold text-primary text-center mb-6">JE PRE VÁS, AK:</h3>
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
            <h3 className="font-serif text-2xl font-bold text-red-600 text-center mb-6">NIE JE PRE VÁS, AK:</h3>
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
          <blockquote className="text-xl md:text-2xl text-primary-foreground italic mb-6">
            „S Ivanom investujem preto, lebo viem, že moje peniaze sú v bezpečí. A viem, že mu môžem kedykoľvek zavolať."
          </blockquote>
          <p className="font-serif font-semibold text-primary-foreground text-xl">Matej Slovík</p>
          <p className="text-lg text-primary-foreground/80">Klient JS Wealth Map™</p>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/dotaznik"
            className="inline-block bg-primary-foreground text-primary font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary-foreground/95 transition-colors"
          >
            Navrhnúť JS Wealth Map™
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
      quote: "Ivan je vynikajúci odborník na investovanie. Pomohol mi správne zhodnotiť moje peniaze, keď som začínal pracovať ako lekár vo Švajčiarsku. Jeho vedomosti a rady sú hodnotné a vždy mi rýchlo odpovie na otázky. Vďaka nemu som schopný dlhodobo budovať svoj majetok.",
      name: "MuDr. Martin Vanečko",
      role: "Doktor pôsobiaci vo Švajčiarsku",
      image: "https://www.jsinvestor.sk/wp-content/uploads/2024/12/download-3.webp",
    },
    {
      quote: "Ivan je skutočný profesionál. Jeho tvorba je jedinečná a ponúka vedomosti, ktoré sú vzácne na Slovensku. Jeho rýchly a ústretový prístup ma očaril. Spolupracujeme už štyri roky a vždy mi pomáha včas a úplne. Poučil ma nielen o financiách a investovaní, ale aj o osobnom rozvoji. Je úžasné vidieť, ako ľudia, ktorých poznáte, dosahujú úspechy a plnia si svoje sny.",
      name: "Šimon Latkoczy",
      role: "Slovenský hokejový reprezentant",
      image: "https://www.jsinvestor.sk/wp-content/uploads/2024/12/download-2.webp",
    },
    {
      quote: "Ivan je skvelým spoločníkom pre podnikateľov. Jeho rady o investovaní mi pomáhajú zhodnocovať peniaze zo svojho biznisu. Je skúsený a veľmi znalý. Navyše, našiel som s ním aj spoločnú reč a podobné záujmy.",
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
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-xl md:text-2xl text-muted-foreground max-w-[700px] mx-auto mb-14`}>
          Reálne skúsenosti ľudí, ktorí našli svojho <strong className="text-foreground">sprievodcu budovaním majetku a získali pocit absolútneho bezpečia</strong> v každej trhovej situácii.
        </p>
        <div className="space-y-8 max-w-[820px] mx-auto mb-16">
          {real.map((t, i) => (
            <div
              key={t.name}
              className={`scroll-animate scroll-animate-delay-${i + 2} ${isVisible ? "visible" : ""} group relative rounded-2xl p-5 md:p-8 text-left flex flex-col sm:flex-row gap-5 sm:gap-8 items-start border border-transparent hover:border-[#ccc7c4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.12)]`}
              style={{ backgroundColor: "#f2ede9" }}
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 pointer-events-none" style={{ color: "#ccc7c4" }} aria-hidden />
              <div className="relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 brand-pattern-mask bg-primary/15 overflow-hidden">
                {"image" in t && typeof t.image === "string" && (
                  <img src={t.image} alt="" className="absolute inset-0 w-full h-full object-cover object-[35%_50%] scale-125" />
                )}
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <div className="flex gap-1 mb-4" aria-label="Hodnotenie: 5 z 5 hviezd">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400/90 text-amber-400/90" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-base md:text-lg text-foreground/95 leading-relaxed mb-5 font-serif"><span style={{ color: "#ccc7c4" }}>„</span>{t.quote}<span style={{ color: "#ccc7c4" }}>"</span></blockquote>
                <p className="font-serif font-semibold text-foreground text-base">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
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
            Získať rovnaké výsledky
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    { value: "3 044 000 €", label: "v starostlivosti", icon: WalletIcon },
    { value: "8+ rokov", label: "skúsenosti", icon: Clock },
    { value: "531", label: "klientov", icon: Users },
    { value: "NBS", label: "Licencovaný subjekt", icon: ShieldCheck },
  ];
  return (
    <section className="py-8 md:py-14 px-4 sm:px-6 bg-primary relative overflow-hidden">
      <img
        src={assetSrc(brandPattern)}
        alt=""
        className="absolute -left-20 -bottom-40 w-[360px] h-auto opacity-[0.08] pointer-events-none select-none brightness-200"
        aria-hidden="true"
      />
      <div ref={ref} className="content-width relative z-10">
        <div
          className={`scroll-animate ${isVisible ? "visible" : ""} flex flex-col md:flex-row md:items-center md:justify-between gap-0 md:gap-8 w-full md:max-w-none`}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
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
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-stretch">
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
              Správa majetku u nás <em className="text-[hsl(25,100%,98%)]">nekončí pri otvorení investičného účtu.</em>
            </h2>
            <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-[15px] md:text-lg text-primary-foreground/90 mb-5 text-left`}>
              Mojím cieľom nie je predávať vám finančné produkty, ale dať vám <strong className="text-primary-foreground">pocit absolútneho bezpečia.</strong> Som tu, aby ste získali <strong className="text-primary-foreground">stabilného partnera, ktorému môžete kedykoľvek zavolať.</strong> Či už prepočítavate kúpu investičného bytu, riešite mimoriadny vklad, alebo keď na trhoch zavládne panika.
            </p>
            <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-[15px] md:text-lg text-primary-foreground/90 mb-6 text-left`}>
              Toto je moja skutočná práca. <strong className="text-primary-foreground">Byť vaším sprievodcom na nasledujúce desaťročia.</strong>
            </p>
            <div className={`scroll-animate scroll-animate-delay-3 ${isVisible ? "visible" : ""}`}>
              <a
                href="/dotaznik"
                className="inline-block bg-primary-foreground text-primary font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary-foreground/95 transition-colors"
              >
                Spolupracovať s Ivanom
              </a>
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
                Navrhnúť JS Wealth Map™
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
            Navrhnúť JS Wealth Map™
          </a>
        </div>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="garancia" className="section-padding">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-10 text-center`}>
          <em className="text-primary">Skutočné partnerstvo</em> namiesto skrytých poplatkov.
        </h2>
        <p className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} text-xl md:text-2xl text-muted-foreground text-center max-w-[800px] mx-auto mb-10`}>
          Namiesto umelých sľubov vám garantujem najlepšie podmienky na trhu. Porovnajte si to sami:
        </p>

        {/* Porovnanie poplatkov */}
        <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} mb-14 w-full`}>
          <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08),0_8px_16px_-8px_rgba(0,0,0,0.04)]">
            <div className="overflow-x-auto lg:overflow-x-visible">
            <table className="w-full min-w-[560px] lg:min-w-0 text-left border-collapse table-fixed">
              <colgroup>
                <col className="w-[22%] lg:w-[22%]" />
                <col className="w-[25%] lg:w-[25%]" />
                <col className="w-[18%] lg:w-[18%]" />
                <col className="w-[17.5%] lg:w-[17.5%]" />
                <col className="w-[17.5%] lg:w-[17.5%]" />
              </colgroup>
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="p-4 md:py-5 md:px-6 font-sans text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest" aria-label="Typ poplatku"> </th>
                  <th className="p-4 md:py-5 md:px-6 font-serif font-bold text-primary-foreground text-center text-base md:text-lg bg-primary border-l border-border">JS Wealth Map™</th>
                  <th className="p-4 md:py-5 md:px-6 font-sans font-semibold text-foreground text-center text-sm md:text-base">Investičné platformy</th>
                  <th className="p-4 md:py-5 md:px-6 font-sans font-semibold text-foreground text-center text-sm md:text-base">Banky</th>
                  <th className="p-4 md:py-5 md:px-6 font-sans font-semibold text-foreground text-center text-sm md:text-base">Poradcovia</th>
                </tr>
              </thead>
              <tbody className="font-sans text-sm md:text-base bg-card">
                <tr className="border-b border-border/60 hover:bg-muted/20 transition-colors">
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground"><span className="font-bold">Manažérsky poplatok</span> (ročne)</td>
                  <td className="p-4 md:py-5 md:px-6 bg-primary text-primary-foreground font-semibold text-center border-l border-primary/80">
                    <span className="block"><span className="font-normal">do 50 000 € —</span> 0,00 %</span>
                    <span className="block"><span className="font-normal">od 50 000 € —</span> 0,49 %</span>
                  </td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">0–3 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">2–3 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">2–3 %</td>
                </tr>
                <tr className="border-b border-border/60 hover:bg-muted/20 transition-colors">
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground font-bold">Dane</td>
                  <td className="p-4 md:py-5 md:px-6 bg-primary text-primary-foreground font-semibold text-center border-l border-primary/80">0 €</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">0 €</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">109 000 €</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">0 €</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground font-bold">Vstupný poplatok</td>
                  <td className="p-4 md:py-5 md:px-6 bg-primary text-primary-foreground font-semibold text-center border-l border-primary/80">max 1 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">0–3 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">2–3 %</td>
                  <td className="p-4 md:py-5 md:px-6 text-muted-foreground text-center">2–3 %</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>

        <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} mt-8 rounded-2xl border border-border/80 bg-muted/30 px-5 py-5 md:px-8 md:py-6 max-w-[720px] mx-auto`}>
          <p className="font-serif text-lg md:text-xl font-semibold text-foreground mb-3">
            Čo urobí s vašimi peniazmi <em className="text-primary">bežný 1&nbsp;% ročný poplatok?</em>
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            Pri investovaní 300&nbsp;€ mesačne na 30&nbsp;rokov vás bežný 1&nbsp;% poplatok v banke alebo u poradcu pripraví <strong className="text-foreground">až o 1/3 vášho celkového vybudovaného majetku</strong> len na ročných poplatkoch.
          </p>
          <p className="text-foreground font-semibold text-base md:text-lg">
            Neplaťte zbytočne poplatky a chráňte svoj čistý výnos.
          </p>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/dotaznik"
            className="btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg"
          >
            Navrhnúť JS Wealth Map™
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Investujem sám cez investičné aplikácie. Čo mi JS Wealth Map™ prinesie navyše?",
    answer: (
      <>
        Aplikácia je len nástroj, nie stratégia. Zatiaľ čo aplikácie slúžia na mechanický nákup, my vám dodáme ucelenú <strong className="text-foreground">Majetkovú mapu</strong>. Náš systém prepája ETF fondy, matematické modely pre investičné nehnuteľnosti, daňovú optimalizáciu a plánovanie doživotnej renty do jedného funkčného celku. Nekupujete si len investičný účet, ale <strong className="text-foreground">ušetrený čas, pocit bezpečia a dlhodobého partnera</strong>, s ktorým môžete kedykoľvek konzultovať dôležité finančné kroky (čo je inak služba v hodnote 250 €/hod).
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
              Navrhnúť JS Wealth Map™
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="kontakt" className="section-padding">
      <div ref={ref} className="content-width">
        <div className="scroll-animate-wrapper">
          <div
            className={`scroll-animate ${isVisible ? "visible" : ""} relative max-w-[960px] mx-auto rounded-3xl bg-primary px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14 text-center text-primary-foreground shadow-[0_18px_60px_rgba(0,0,0,0.16)]`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-serif font-bold mb-6">
              Vaše peniaze si zaslúžia komplexný systém a vy stabilného partnera.
            </h2>
            <p className="text-lg md:text-2xl max-w-[720px] mx-auto mb-8 text-primary-foreground/90">
              Prestaňte na trhu experimentovať. Zarezervujte si <strong>nezáväzný úvodný hovor</strong>, kde zhodnotíme vašu aktuálnu situáciu a otvorene si povieme, či je náš <strong>JS Wealth Map™</strong> pre vás tým správnym riešením.
            </p>
            <a
              href="/dotaznik"
              className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} inline-block rounded-full border border-primary-foreground bg-primary-foreground text-primary font-sans font-semibold text-base px-8 py-3.5 shadow-lg hover:bg-primary-foreground/90 hover:text-primary transition-colors`}
            >
              Navrhnúť JS Wealth Map™
            </a>
            <ul className="mt-6 flex flex-wrap justify-center items-center gap-4 md:gap-6 w-full text-base text-primary-foreground/90 list-none">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary-foreground shrink-0" aria-hidden />
                <span>Úvodný hovor je nezáväzný</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary-foreground shrink-0" aria-hidden />
                <span>Absolútna diskrétnosť</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary-foreground shrink-0" aria-hidden />
                <span>Pod dohľadom NBS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}