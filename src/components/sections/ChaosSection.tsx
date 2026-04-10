"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { assetSrc } from "@/lib/utils";
import brandPattern from "@/assets/js-brand-pattern.svg";
import { PrimaryCta } from "@/components/ui/PrimaryCta";
import { BarChart3, Clock, Wallet as WalletIcon, Percent } from "lucide-react";


export function ChaosSection() {
  const { ref, isVisible } = useScrollObserver();
  const problems = [
    {
      icon: WalletIcon,
      title: "Na účte vám leží 30 000 €. Každý rok z nich zmizne 1 200 €.",
      content: <>Nie preto, že ste urobili niečo zle. Ale preto, že ste s nimi neurobili nič.</>,
    },
    {
      icon: Percent,
      title: "Bankár vám povedal, že sa o vás postará.",
      content: (
        <>
          Zabudol dodať, že vám za to účtuje 2% ročne.{" "}
          <strong>Za 30 rokov je to často viac ako 30 % majetku. Vo výsledku až desiatky tisíc eur.</strong>
        </>
      ),
    },
    {
      icon: Clock,
      title: "Po večeroch Googlite ETF a dividendové akcie. Ráno máte meeting.",
      content: (
        <>
          Nemáte čas byť investorom na plný úväzok.{" "}
          <strong>Cez víkend chcete byť s rodinou.</strong>
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
          <PrimaryCta href="/dotaznik">Získať JS Wealth Map™</PrimaryCta>
        </div>
      </div>
    </section>
  );
}