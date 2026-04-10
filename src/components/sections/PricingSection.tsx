"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PrimaryCta } from "@/components/ui/PrimaryCta";
import { FeeComparisonOldCard } from "@/components/sections/FeeComparisonOldCard";
import { FeeComparisonNewCard } from "@/components/sections/FeeComparisonNewCard";
import { FeeFairnessImpactBlock } from "@/components/sections/FeeFairnessImpactBlock";


export function PricingSection() {
  const { ref, isVisible } = useScrollObserver();
  return (
    <section id="garancia" className="section-padding">
      <div ref={ref} className="content-width">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-10 text-center`}>
          <em className="text-primary italic">Váš majetok dlhodobo rastie,</em> poplatky klesajú
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
            Neplaťte zbytočne poplatky a <strong>chráňte svoj čistý výnos.</strong>
          </p>
          <PrimaryCta href="/dotaznik">Získať JS Wealth Map™</PrimaryCta>
        </div>
      </div>
    </section>
  );
}