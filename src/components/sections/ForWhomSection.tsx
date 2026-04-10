"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { assetSrc } from "@/lib/utils";
import brandPattern from "@/assets/js-brand-pattern.svg";
import { PrimaryCta } from "@/components/ui/PrimaryCta";
import { Check, Quote, X } from "lucide-react";


export function ForWhomSection() {
  const { ref, isVisible } = useScrollObserver();
  const preVas = [
    {
      key: "prev1",
      content: (
        <>
          Zarábate od 1 500 € mesačne. Svoje <strong>prebytky chcete začať systematicky zhodnocovať.</strong>
        </>
      ),
    },
    {
      key: "prev2",
      content: (
        <>
          Chcete <strong>delegovať zodpovednosť na experta,</strong> získať kľudný spánok a nehrať sa po večeroch na amatérskeho tradera.
        </>
      ),
    },
    {
      key: "prev3",
      content: (
        <>
          Hľadáte dlhodobého partnera, na ktorého sa <strong>môžete obrátiť pri každej dôležitej finančnej či životnej zmene.</strong>
        </>
      ),
    },
    {
      key: "prev4",
      content: (
        <>
          <strong>Vážite si svoj čas</strong> viac, než aby ste ho strácali hľadaním a analýzou tých „správnych" fondov.
        </>
      ),
    },
  ];
  const niePreVas = [
    {
      key: "nie1",
      content: (
        <>
          <strong>Hľadáte skratky a rýchle zbohatnutie</strong>. Ak očakávate garantované tipy, krypto-signály a zisky cez noc.
        </>
      ),
    },
    {
      key: "nie2",
      content: (
        <>
          <strong>Chcete investovaniu obetovať svoj voľný čas.</strong> Ak vás reálne baví tráviť víkendy študovaním grafov a čítaním finančných
          správ.
        </>
      ),
    },
    {
      key: "nie3",
      content: (
        <>
          Beriete investovanie ako hru „pokus – omyl“. <strong>Nemáte záujem o dlhodobú stratégiu</strong> a chcete len náhodne nakupovať fondy či
          akcie bez jasnej stratégie a cieľa.
        </>
      ),
    },
    {
      key: "nie4",
      content: (
        <>
          Aktuálne <strong>nemáte voľný cashflow</strong> a ešte len riešite základnú stabilizáciu príjmu a zatiaľ si <strong>nedokážete tvoriť pravidelné rezervy.</strong>
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
          <PrimaryCta href="/dotaznik" variant="inverse">Získať JS Wealth Map™</PrimaryCta>
        </div>
      </div>
    </section>
  );
}