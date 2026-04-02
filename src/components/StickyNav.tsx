"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "@/assets/js-investor-logo.png";
import { assetSrc, cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Prečo to nefunguje", href: "#problem" },
  { label: "Ako to riešime", href: "#ako-to-funguje" },
  { label: "Pre koho", href: "#pre-koho" },
  { label: "Recenzie", href: "#recenzie" },
  { label: "FAQ", href: "#faq" },
];

const StickyNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px] px-4">
      <nav
        className={cn(
          "rounded-[64px] border border-white/30 bg-white/70 backdrop-blur-md",
          "shadow-[0_0.71px_0.71px_-0.75px_rgba(0,0,0,0.08),0_1.94px_1.94px_-1.5px_rgba(0,0,0,0.07),0_4.25px_4.25px_-2.25px_rgba(0,0,0,0.06),0_9.44px_9.44px_-3px_rgba(0,0,0,0.05),0_24px_24px_-3.75px_rgba(0,0,0,0.03)]",
          "flex items-center justify-between gap-4 py-3 pl-4 pr-4 md:pl-6 md:pr-4"
        )}
      >
        <Link href="/" className="flex items-center flex-shrink-0" aria-label="JS Investor – domov">
          <img src={assetSrc(logo)} alt="JS Investor" className="h-8 md:h-9" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[15px] text-foreground/90 hover:text-foreground transition-colors no-underline hover:underline underline-offset-4"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/dotaznik"
            className="hidden sm:inline-flex items-center font-sans font-semibold text-base bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Získať JS Wealth Map™
          </a>
          <button
            className="lg:hidden p-2 rounded-full text-foreground hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl border border-white/30 bg-white/95 backdrop-blur-md shadow-xl py-4 px-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-[15px] text-foreground/90 hover:text-foreground py-3 px-4 transition-colors no-underline hover:underline"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/dotaznik"
              onClick={() => setOpen(false)}
              className="font-sans font-semibold text-sm bg-primary text-primary-foreground py-3 px-4 rounded-xl text-center mt-2 hover:bg-primary/90"
            >
              Získať JS Wealth Map™
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default StickyNav;
