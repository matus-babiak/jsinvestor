"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import { useCallback, useEffect, useRef, useState } from "react";
import { clientResults } from "@/data/client-results";
import { PrimaryCta } from "@/components/ui/PrimaryCta";
import { BarChart3 } from "lucide-react";


export function ClientResultsSection() {
  const { ref, isVisible } = useScrollObserver();
  const carouselRef = useRef<HTMLDivElement>(null);
  const chartLineRefs = useRef<(SVGPathElement | null)[]>([]);
  const hasChartAnimated = useRef(false);
  const [chartLinesRevealed, setChartLinesRevealed] = useState(false);
  const chartsContainerRef = useRef<HTMLDivElement>(null);
  const [chartsInView, setChartsInView] = useState(false);
  const [scrollState, setScrollState] = useState({ leftRatio: 0, thumbRatio: 1, canScroll: false });

  useEffect(() => {
    const el = chartsContainerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setChartsInView(true);
      },
      { threshold: 0.25, rootMargin: "0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const updateScrollState = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const canScroll = scrollWidth > clientWidth;
    if (!canScroll) {
      setScrollState({ leftRatio: 0, thumbRatio: 1, canScroll: false });
      return;
    }
    const thumbRatio = clientWidth / scrollWidth;
    const maxLeft = scrollWidth - clientWidth;
    const leftRatio = maxLeft > 0 ? scrollLeft / maxLeft : 0;
    setScrollState({ leftRatio, thumbRatio, canScroll: true });
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState]);

  useEffect(() => {
    if (!chartsInView || hasChartAnimated.current) return;
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      const paths = chartLineRefs.current.filter(Boolean) as SVGPathElement[];
      if (paths.length === 0) return;
      const lengths = paths.map((p) => p.getTotalLength());
      paths.forEach((p, i) => {
        p.style.strokeDasharray = `${lengths[i]}`;
        p.style.strokeDashoffset = `${lengths[i]}`;
      });
      raf2 = requestAnimationFrame(() => {
        paths.forEach((p) => {
          p.style.strokeDashoffset = "0";
        });
        hasChartAnimated.current = true;
        setChartLinesRevealed(true);
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [chartsInView]);

  // Hodnota účtu (výnosy) – čiara mierne nad vkladmi, s vykyvmi
  const chartPaths = [
    "M 0 48 L 25 44 L 50 42 L 58 46 L 75 36 L 90 34 L 105 32 L 118 30 L 135 28 L 145 26 L 160 28 L 175 24 L 200 22",
    "M 0 52 L 20 48 L 40 46 L 55 50 L 70 44 L 82 48 L 100 40 L 115 38 L 130 44 L 145 36 L 160 34 L 180 30 L 200 28",
    "M 0 57 L 50 55 L 100 54 L 150 52 L 200 50",
    "M 0 46 L 25 42 L 50 40 L 65 44 L 85 36 L 105 34 L 125 40 L 145 32 L 165 30 L 185 26 L 200 24",
    "M 0 54 L 35 50 L 70 46 L 95 50 L 110 44 L 130 38 L 150 34 L 165 40 L 185 32 L 200 30",
    "M 0 50 L 30 44 L 60 40 L 85 36 L 105 40 L 130 34 L 155 30 L 178 34 L 200 28",
  ];
  // Čisté vklady – oblasť hneď pod výnosmi (menší rozdiel)
  const areaPaths = [
    "M 0 58 L 50 54 L 100 50 L 150 46 L 200 42 L 200 80 L 0 80 Z",
    "M 0 60 L 50 56 L 100 52 L 150 48 L 200 44 L 200 80 L 0 80 Z",
    "M 0 61 L 50 60 L 100 59 L 150 58 L 200 57 L 200 80 L 0 80 Z",
    "M 0 56 L 50 52 L 100 48 L 150 44 L 200 40 L 200 80 L 0 80 Z",
    "M 0 62 L 65 56 L 130 50 L 200 46 L 200 80 L 0 80 Z",
    "M 0 58 L 60 52 L 120 46 L 200 42 L 200 80 L 0 80 Z",
  ];
  return (
    <section id="vysledky-klientov" className="section-padding">
      <div ref={ref} className="content-width">
        <h2 className="text-3xl md:text-4xl lg:text-[48px] font-serif font-bold text-foreground mb-12 text-center">
          <em className="text-primary">Skutočné výsledky</em> našich klientov
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-[900px] mx-auto -mt-6 mb-12">
          Ukážka <strong>dlhodobého zhodnotenia majetku</strong> v rámci našich riadených ETF portfólií.
        </p>
        <div
          ref={(el) => {
            carouselRef.current = el;
            chartsContainerRef.current = el;
          }}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-visible gap-4 sm:gap-6 snap-x snap-mandatory sm:snap-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
        >
          {clientResults.map((c, i) => (
            <div
              key={c.name}
              className="bg-card rounded-2xl p-4 md:p-5 border border-border shadow-sm flex flex-col shrink-0 w-[280px] sm:w-auto sm:shrink min-w-0 snap-center"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 icon-pattern-bg-primary flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-primary-foreground -translate-x-0.5" aria-hidden />
                </div>
                <div>
                  <p className="font-serif font-semibold text-foreground text-lg">{c.name}</p>
                  <p className="text-base text-muted-foreground">{c.role}</p>
                </div>
              </div>
              <p className="text-base text-muted-foreground mb-4 text-center">{c.investment}</p>
              <p className="text-2xl font-serif text-primary text-center mb-4">
                <span className="block md:inline font-extrabold">Zisk: {c.zisk}</span>
                <span className="block md:inline text-base md:text-2xl font-normal text-muted-foreground mt-0.5 md:mt-0 md:ml-1">({c.pct})</span>
              </p>
              <div className="mt-auto h-[100px] w-full rounded-lg overflow-hidden bg-muted/50">
                <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="none" aria-hidden>
                  <defs>
                    <linearGradient id={`area-${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={areaPaths[i]} fill={`url(#area-${i})`} />
                  <path
                    ref={(el) => { chartLineRefs.current[i] = el; }}
                    className="chart-line-draw"
                    d={chartPaths[i]}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={
                      chartLinesRevealed
                        ? { transition: "stroke-dashoffset 2.5s ease-in-out" }
                        : {
                            strokeDasharray: 9999,
                            strokeDashoffset: 9999,
                            transition: "stroke-dashoffset 2.5s ease-in-out",
                          }
                    }
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile: scroll indikátor pod carouselom */}
        <div className="sm:hidden mt-4 px-4">
          <div className="h-1.5 w-full max-w-[200px] mx-auto rounded-full bg-muted-foreground/20 overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-150 ease-out"
              style={{
                width: scrollState.canScroll ? `${Math.max(20, scrollState.thumbRatio * 100)}%` : "100%",
                marginLeft: scrollState.canScroll ? `${scrollState.leftRatio * (100 - Math.max(20, scrollState.thumbRatio * 100))}%` : "0%",
              }}
            />
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <PrimaryCta href="/dotaznik">Chcem budovať podobné portfólio</PrimaryCta>
        </div>
      </div>
    </section>
  );
}