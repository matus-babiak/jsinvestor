"use client";

import { feeComparisonNewPositives } from "@/data/pricing";
import { Check } from "lucide-react";

export function FeeComparisonNewCard() {
  const positives = [...feeComparisonNewPositives];
  return (
    <div className="flex h-full flex-col rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg md:p-8">
      <span className="mb-4 inline-flex w-fit rounded-md bg-white px-2.5 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-foreground">
        NOVÝ spôsob
      </span>
      <h3 className="font-serif text-xl font-semibold tracking-tight md:text-2xl">Komplexná správa majetku</h3>
      <p className="mt-5 font-serif text-4xl font-bold tabular-nums md:text-5xl">0,35 – 0,49 %</p>
      <p className="mt-1 font-sans text-base font-normal text-primary-foreground/75">ročný poplatok za správu</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 font-sans text-xs font-medium backdrop-blur-sm">
          0,49 % do 100 000 € a 0,35 % nad 100 000 €
        </span>
        <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 font-sans text-xs font-medium backdrop-blur-sm">
          1 % poplatok z vkladov
        </span>
      </div>
      <div className="my-6 h-px bg-white/25" aria-hidden />
      <ul className="flex flex-1 flex-col gap-3 font-sans text-sm md:text-base">
        {positives.map((line) => (
          <li key={line} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-primary">
              <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 font-sans text-base font-semibold leading-snug md:text-lg">
        Úspora na poplatkoch až 100 000 €.
      </div>
    </div>
  );
}