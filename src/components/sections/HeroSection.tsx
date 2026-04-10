import { Check } from "lucide-react";
import brandPattern from "@/assets/js-brand-pattern.svg";
import logo from "@/assets/js-investor-logo.png";
import { assetSrc } from "@/lib/utils";
import { PrimaryCta } from "@/components/ui/PrimaryCta";

export function HeroSection() {
  return (
    <section className="pt-2 md:pt-8 section-padding relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto w-full relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <img src={assetSrc(logo)} alt="JS Investor" className="hero-animate hero-animate-delay-1 h-[2.2rem] mx-auto mb-6" />
          <h1 className="hero-animate hero-animate-delay-2 text-4xl md:text-5xl lg:text-[58px] font-serif font-bold text-foreground mb-12">
            <span className="lg:hidden">
              Investovanie potrebuje plán, aby váš{" "}
              <em className="text-primary italic">majetok zodpovedal vášmu príjmu.</em>
            </span>
            <span className="hidden lg:block">
              Investovanie potrebuje plán, aby váš{" "}
              <em className="text-primary italic">majetok zodpovedal vášmu príjmu.</em>
            </span>
          </h1>
          <blockquote className="hero-animate hero-animate-delay-3 text-xl font-sans text-muted-foreground mb-10 max-w-[720px] mx-auto">
            <strong className="text-foreground">Získajte JS Wealth Map™.</strong> Jasný plán, ktorý vám ukáže, kde ste dnes,
            kam smerujete a čo má zmysel urobiť ďalej.
          </blockquote>
          <div className="hero-animate hero-animate-delay-4 flex flex-wrap gap-4 items-center justify-center mb-10">
            <PrimaryCta href="/dotaznik">Získať JS Wealth Map™</PrimaryCta>
            <PrimaryCta href="#ako-to-funguje" variant="ghost">
              Ako to funguje →
            </PrimaryCta>
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
  );
}
