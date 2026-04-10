"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { testimonials } from "@/data/testimonials";
import { assetSrc } from "@/lib/utils";
import brandPattern from "@/assets/js-brand-pattern.svg";
import { PrimaryCta } from "@/components/ui/PrimaryCta";


export function TestimonialsSection() {
  const { ref, isVisible } = useScrollObserver();
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
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-xl md:text-2xl text-muted-foreground max-w-[980px] mx-auto mb-12`}>
          Reálne skúsenosti ľudí, ktorí našli svojho <strong className="text-foreground">sprievodcu budovaním majetku a získali pocit absolútneho bezpečia</strong> v každej trhovej situácii.
        </p>
        <div
          className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} max-w-[1120px] mx-auto mb-10`}
        >
          <div className="grid md:grid-cols-3">
            {testimonials.map((item, i) => (
              <article
                key={item.name}
                className={`text-left p-6 md:p-8 min-h-[340px] flex flex-col ${i < testimonials.length - 1 ? "md:border-r md:border-border" : ""}`}
              >
                <blockquote className="font-sans text-[18px] md:text-[19px] leading-relaxed text-foreground/90 mb-3">
                  &quot;{item.quote}&quot;
                </blockquote>
                <div className="mt-auto">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                      {"image" in item && typeof item.image === "string" && (
                        <img src={item.image} alt="" className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div>
                      <p className="font-sans font-semibold text-lg text-foreground leading-tight">{item.name}</p>
                      <p className="font-sans text-base text-muted-foreground leading-tight">{item.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-2 mb-6">
          <PrimaryCta href="/dotaznik">Získať JS Wealth Map™</PrimaryCta>
        </div>
      </div>
    </section>
  );
}