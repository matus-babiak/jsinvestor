"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { faqItems } from "@/data/faq-items";
import { assetSrc } from "@/lib/utils";
import brandPattern from "@/assets/js-brand-pattern.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export function FaqSection() {
  const { ref, isVisible } = useScrollObserver();
  return (
    <section id="faq" className="section-padding section-alt relative overflow-hidden">
      <img
        src={assetSrc(brandPattern)}
        alt=""
        className="absolute bottom-8 left-0 w-[260px] h-auto opacity-[0.04] pointer-events-none select-none -z-10"
        aria-hidden="true"
      />
      <div ref={ref} className="content-width relative z-10">
        <h2 className={`scroll-animate ${isVisible ? "visible" : ""} text-3xl md:text-4xl lg:text-[44px] font-serif font-bold text-foreground mb-3 text-center`}>
          Najčastejšie otázky
        </h2>
        <p className={`scroll-animate scroll-animate-delay-1 ${isVisible ? "visible" : ""} text-lg text-muted-foreground text-center max-w-[520px] mx-auto mb-14`}>
          Odpovede na to, čo nás klienti pýtajú najčastejšie.
        </p>
        <div className={`scroll-animate scroll-animate-delay-2 ${isVisible ? "visible" : ""} max-w-[780px] mx-auto space-y-3`}>
          <Accordion type="single" collapsible defaultValue={faqItems[0]?.id} className="space-y-3">
            {faqItems.map((item) => (
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