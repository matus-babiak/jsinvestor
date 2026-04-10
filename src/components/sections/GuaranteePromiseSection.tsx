"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { PrimaryCta } from "@/components/ui/PrimaryCta";


export function GuaranteePromiseSection() {
  const { ref, isVisible } = useScrollObserver();
  return (
    <section id="garancia-spokojnosti" className="section-padding">
      <div ref={ref} className="content-width">
        <div className={`scroll-animate ${isVisible ? "visible" : ""} max-w-[980px] mx-auto text-left`}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[46px] font-bold text-foreground mb-5 text-center">
            <em className="text-primary italic">Naše záväzky voči vám.</em>{" "}
            <span className="md:block">Žiadne marketingové reči a prázdne sľuby.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
            Nie ste môj ďalší klient v zozname. Ste <strong>partner, ktorému garantujem férovú hru</strong>, matematickú presnosť a podporu v každej krízovej situácii.
          </p>

          <div className="space-y-6 md:space-y-7 mb-9">
            <div>
              <h3 className="font-sans text-lg md:text-xl font-semibold text-foreground mb-2">✓ GARANCIA 1: Férová spolupráca. Žiadny nátlak do predaja</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Po úvodnom, bezplatnom hovore vám poviem narovinu: buď vám viem pomôcť, alebo nie. <strong>Žiadny predajný nátlak, žiadne tlačenie do produktov, ktoré nedávajú zmysel.</strong> Ak zistím, že JS Wealth Map™ nie je pre vás, poviem vám to a ukončíme to bez poplatkov a zbytočných otázok.
              </p>
            </div>

            <div>
              <h3 className="font-sans text-lg md:text-xl font-semibold text-foreground mb-2">✓ GARANCIA 2: Nikdy na to nebudete sami</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Keď príde krízový pokles, vojna alebo panika na trhoch, nebudete si lámať hlavu sami. Zavoláte mi a poviem vám presne, čo robiť. <strong>Garantujem vám partnera, ktorý zdvihne telefón a odpovie na každú dôležitú otázku.</strong> Nie predajcu, ktorý zmizne po podpise zmluvy.
              </p>
            </div>

            <div>
              <h3 className="font-sans text-lg md:text-xl font-semibold text-foreground mb-2">✓ GARANCIA 3: Presná matematika, žiadne nezmysly</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Vaša mapa bude postavená len na dátach, ROI kalkuláciách a stresových scenároch. Nie na pocitoch alebo trendoch. Dostanete presný plán, kde budete vedieť, kde ste dnes, kam idete a čo urobiť ďalej. Ak z mapy nebudete mať absolútnu jasnosť, <strong>prepracujeme ju, až kým nebudete spokojný na 100 %.</strong>
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <PrimaryCta href="/dotaznik">Získať JS Wealth Map™</PrimaryCta>
          </div>
        </div>
      </div>
    </section>
  );
}