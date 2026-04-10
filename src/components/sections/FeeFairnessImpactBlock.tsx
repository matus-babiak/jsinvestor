"use client";

import { useScrollObserver } from "@/hooks/use-scroll-observer";
import type { CSSProperties } from "react";
import { feeImpact } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { Clock, TrendingUp, Wallet as WalletIcon } from "lucide-react";


export function FeeFairnessImpactBlock() {
  const { ref, isVisible } = useScrollObserver(0.18);
  const competitorPct = (feeImpact.competitorEnd / feeImpact.jsEnd) * 100;
  const diff = feeImpact.jsEnd - feeImpact.competitorEnd;

  const paramItems = [
    { icon: WalletIcon, label: "mesačná investícia", value: "300 €" },
    { icon: Clock, label: "investičný horizont", value: "30 rokov" },
    { icon: TrendingUp, label: "priemerný ročný výnos", value: "10 %" },
  ] as const;

  return (
    <div
      ref={ref}
      className={cn(
        "fee-impact-root rounded-[20px] p-5 shadow-[0_8px_32px_-8px_rgba(45,90,63,0.12),0_4px_20px_-6px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_14px_44px_-10px_rgba(45,90,63,0.2),0_8px_24px_-8px_rgba(0,0,0,0.08)] md:p-8",
        isVisible && "is-visible"
      )}
      style={
        {
          backgroundColor: feeImpact.bg,
          "--fee-competitor-pct": `${competitorPct}%`,
        } as CSSProperties
      }
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {paramItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-black/[0.06] bg-white px-4 py-3 shadow-sm transition-all duration-500 md:px-5 md:py-4",
                "hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              )}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary/[0.14]">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden />
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="font-sans text-xs text-muted-foreground md:text-sm">{item.label}:</p>
                  <p className="mt-0.5 font-sans text-lg font-bold tabular-nums text-foreground md:text-xl">{item.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="sr-only">
        Pri mesačnej investícii 300 eur počas 30 rokov a priemernom výnose 10 % ročne by ste pri banke s
        poplatkom 1,5 % ročne nazhromaždili približne 453 000 eur, s JS Investor približne 570 000 eur.
        Rozdiel v prospech klienta je približne 117 000 eur.
      </p>

      <div className="mt-8 space-y-7">
        <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-5">
          <div className="shrink-0 md:w-[200px] lg:w-[220px]">
            <p className="font-sans text-sm font-semibold text-foreground md:text-base">Banka &amp; bežný poradca</p>
            <p className="mt-0.5 font-sans text-xs text-muted-foreground md:text-sm">ročný poplatok = 1,5 %</p>
          </div>
          <div className="relative min-h-[52px] flex-1 overflow-hidden rounded-xl bg-gradient-to-b from-white to-white/70 ring-1 ring-black/[0.08] shadow-[inset_0_2px_4px_rgba(255,255,255,0.85)] md:min-h-[58px]">
            <div
              className="fee-impact-competitor-fill absolute inset-y-0 left-0 flex items-center justify-center overflow-hidden rounded-xl px-2 shadow-[inset_0_-3px_10px_rgba(0,0,0,0.15)] transition-[width] duration-[1100ms] motion-reduce:transition-none ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: isVisible ? `${competitorPct}%` : "0%",
                transitionDelay: isVisible ? "160ms" : "0ms",
                background: `linear-gradient(155deg, #9a8b7a 0%, ${feeImpact.competitorBar} 42%, #6e6358 100%)`,
              }}
            >
              {isVisible ? (
                <div
                  className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl motion-reduce:hidden"
                  aria-hidden
                >
                  <div className="absolute inset-y-0 w-[45%] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-fee-bar-shimmer" />
                </div>
              ) : null}
              <span
                className={cn(
                  "relative z-[1] font-serif text-sm font-bold tabular-nums text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-opacity duration-500 motion-reduce:opacity-100 motion-reduce:transition-none sm:text-base md:text-lg",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: isVisible ? "680ms" : "0ms" }}
              >
                453 000 €
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-5">
          <div className="shrink-0 md:w-[200px] lg:w-[220px]">
            <p className="font-sans text-sm font-semibold text-foreground md:text-base">
              JS Investor <span className="font-normal text-muted-foreground">(JS Wealth Map™)</span>
            </p>
            <p className="mt-0.5 font-sans text-xs text-muted-foreground md:text-sm">
              ročný poplatok: 0,49 % → 0,35 %
            </p>
          </div>
          <div className="relative min-h-[52px] flex-1 overflow-hidden rounded-xl shadow-[0_8px_24px_-6px_rgba(45,90,63,0.45)] ring-1 ring-[#2D5A3F]/30 md:min-h-[58px]">
            <div
              className="fee-impact-js-fill absolute inset-0 origin-left rounded-xl transition-transform duration-[1200ms] motion-reduce:transition-none ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                transitionDelay: isVisible ? "360ms" : "0ms",
                background: `linear-gradient(155deg, #3d7a55 0%, ${feeImpact.jsBar} 45%, #1e3d2c 100%)`,
              }}
            >
              {isVisible ? (
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl motion-reduce:hidden" aria-hidden>
                  <div
                    className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-white/22 to-transparent animate-fee-bar-shimmer"
                    style={{ animationDelay: "1.42s" }}
                  />
                </div>
              ) : null}
            </div>
            <div className="relative z-10 flex min-h-[52px] w-full items-center justify-end px-4 md:min-h-[58px] md:px-6">
              <span
                className={cn(
                  "font-serif text-base font-bold tabular-nums text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-opacity duration-500 motion-reduce:opacity-100 motion-reduce:transition-none md:text-xl",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: isVisible ? "880ms" : "0ms" }}
              >
                570 000 €
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mt-8 flex flex-col gap-4 rounded-xl bg-gradient-to-br from-[#3a6b4d] via-[#2D5A3F] to-[#1f3d2b] px-5 py-5 text-white shadow-[0_14px_40px_-10px_rgba(45,90,63,0.55)] ring-1 ring-white/15 md:flex-row md:items-center md:justify-between md:px-8 md:py-6"
      >
        <div
          className={cn(
            "font-sans text-sm leading-snug transition-opacity duration-500 motion-reduce:opacity-100 motion-reduce:transition-none md:text-base",
            isVisible ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: isVisible ? "820ms" : "0ms" }}
        >
          <p className="font-semibold">Rozdiel vo váš prospech</p>
          <p className="mt-0.5 text-white/90">Len vďaka nižším poplatkom</p>
        </div>
        <p
          className={cn(
            "font-serif text-3xl font-bold tabular-nums md:text-4xl lg:text-[2.75rem]",
            !isVisible && "opacity-0",
            isVisible && "animate-fee-diff-pop motion-reduce:animate-none motion-reduce:opacity-100"
          )}
          style={isVisible ? { animationDelay: "0.95s" } : undefined}
        >
          + {diff.toLocaleString("sk-SK")} €
        </p>
      </div>
    </div>
  );
}