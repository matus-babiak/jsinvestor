"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { stats } from "@/data/stats";
import { assetSrc } from "@/lib/utils";
import brandPattern from "@/assets/js-brand-pattern.svg";


export function StatsSection() {
  const { ref, isVisible } = useScrollObserver();
  // stats from @/data/stats
  return (
    <section className="py-8 md:py-14 px-4 sm:px-6 bg-primary relative overflow-hidden">
      <img
        src={assetSrc(brandPattern)}
        alt=""
        className="absolute -left-20 -bottom-40 w-[360px] h-auto opacity-[0.08] pointer-events-none select-none brightness-200"
        aria-hidden="true"
      />
      <div ref={ref} className="max-w-[1440px] mx-auto w-full relative z-10">
        <div
          className={`scroll-animate ${isVisible ? "visible" : ""} flex flex-col md:flex-row md:items-center md:justify-between gap-0 md:gap-8 w-full md:max-w-none`}
        >
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex items-center gap-5 py-5 md:py-0 md:flex-col md:items-center md:justify-center md:text-center border-b border-white/20 md:border-b-0 md:border-r md:border-white/25 last:border-b-0 md:last:border-r-0 md:flex-1 md:px-4"
            >
              <div className="w-14 h-14 icon-pattern-bg-white flex items-center justify-center flex-shrink-0 md:flex-none">
                <s.Icon className="w-7 h-7 text-primary -translate-x-0.5" aria-hidden />
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