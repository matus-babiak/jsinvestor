"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { assetSrc } from "@/lib/utils";
import brandPattern from "@/assets/js-brand-pattern.svg";
import { PrimaryCta } from "@/components/ui/PrimaryCta";
import { Building2, Calculator, TrendingUp, Wallet as WalletIcon } from "lucide-react";


export function WealthMapSection() {
  const { ref, isVisible } = useScrollObserver();
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
          <strong>stratégia na mieru pre vašu situáciu.</strong> Bezpečne, jasne a bez predražených sprostredkovateľov.
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
          <strong>Nie každý potrebuje investičný byt.</strong> Ale ak ho kúpite, musí vám dávať matematický zmysel. Odo mňa dostanete ROI kalkulačku, stresové scenáre a model financovania. Žiadne &quot;kúpim, lebo ceny rastú.&quot; Prísne{" "}
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
            Spolu s JS Wealth Map™ sa konečne <strong>zbavíte finančného chaosu a získate presný plán,</strong> ktorý bude pracovať pre vás.
          </p>
        </div>

        <div className="text-center max-w-[880px] mx-auto mb-14 md:mb-16">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground">
            4 piliere{" "}
            <em className="text-primary-foreground">JS Wealth Map™</em>
          </h3>
        </div>

        <ol className="grid md:grid-cols-2 gap-7 md:gap-8 text-left max-w-[1040px] mx-auto">
          {pillars.map((p) => (
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
                  <div
                    className="w-[86%] h-[74%] rounded-lg border border-[#ddd4cd] bg-[#efe8e2]"
                    aria-hidden
                  />
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
                <h3 className="font-serif text-3xl md:text-[44px] leading-[1.08] font-bold text-primary-foreground text-left">
                  Ako bude vyzerať vaša mapa v praxi?
                </h3>
                <p className="text-lg md:text-[22px] leading-relaxed text-primary-foreground/90 mt-4 md:mt-5 text-left max-w-[640px]">
                  Pozrite si reálny príklad vo videu a PDF, kde presne uvidíte, čo získate.
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
                <div className="w-full rounded-2xl overflow-hidden aspect-video bg-black shadow-[0_24px_56px_-24px_rgba(0,0,0,0.55)]">
                  <iframe
                    src="https://player.vimeo.com/video/1145809910?autoplay=0&title=0&portrait=0&byline=0"
                    title="Vimeo video"
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="block w-full h-full align-top border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} mt-24 md:mt-28 mb-20 md:mb-24`}>
          <div className="relative max-w-[1080px] mx-auto">
            <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[70%] h-24 rounded-full bg-white/10 blur-3xl" aria-hidden />
            <p className="relative text-center text-2xl md:text-4xl font-serif font-semibold text-primary-foreground mb-8 md:mb-10">
              Čo bude nasledovať, keď začnete teraz:
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
                  title: "Získate JS Wealth Map™",
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
                      {"✓ "}Otvoríme účty a nastavíme ETF portfólio
                      <br />
                      {"✓ "}Naplánujeme investičnú nehnuteľnosť, ak dáva zmysel
                      <br />
                      {"✓ "}Dlhodobo spolupracujeme a váš majetok prispôsobujem trhu a vašej situácii
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
          <PrimaryCta href="/dotaznik" variant="outlineOnPrimary">Získať JS Wealth Map™</PrimaryCta>
        </div>
      </section>
      </div>
    </section>
  );
}