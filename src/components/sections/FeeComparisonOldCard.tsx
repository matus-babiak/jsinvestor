"use client";

import { feeComparisonOldNegatives } from "@/data/pricing";
import { X } from "lucide-react";

export function FeeComparisonOldCard() {
  const negatives = [...feeComparisonOldNegatives];
  return (
    <div className="flex h-full flex-col rounded-2xl bg-zinc-900 p-6 text-white shadow-lg md:p-8">
      <span className="mb-4 inline-flex w-fit rounded-md bg-red-600 px-2.5 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-white">
        STARÝ spôsob
      </span>
      <h3 className="font-serif text-xl font-semibold tracking-tight text-white md:text-2xl">Banka &amp; bežný poradca</h3>
      <p className="mt-5 font-serif text-4xl font-bold tabular-nums md:text-5xl">1 – 2 %</p>
      <p className="mt-1 font-sans text-base font-normal text-zinc-400">ročný poplatok za správu</p>
      <div className="my-6 h-px bg-zinc-700" aria-hidden />
      <ul className="flex flex-1 flex-col gap-3 font-sans text-sm md:text-base">
        {negatives.map((line) => (
          <li key={line} className="flex gap-3">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
              <X className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
            </span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-xl border border-red-900/60 bg-red-950/50 px-4 py-3.5 font-sans text-base font-medium leading-snug text-zinc-200 md:text-lg">
        Za 20 rokov investovania prídete o 30 až 40 % majetku kvôli poplatkom.
      </div>
    </div>
  );
}