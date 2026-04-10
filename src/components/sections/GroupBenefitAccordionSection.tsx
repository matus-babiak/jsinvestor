"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { benefitTimelineData } from "@/data/benefit-timeline-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PrimaryCta } from "@/components/ui/PrimaryCta";


export function GroupBenefitAccordionSection() {
  const { ref, isVisible } = useScrollObserver();

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
              <PrimaryCta href="/dotaznik">Získať JS Wealth Map™</PrimaryCta>
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
          <PrimaryCta href="/dotaznik">Získať JS Wealth Map™</PrimaryCta>
        </div>
      </div>
    </section>
  );
}