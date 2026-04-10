import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const variantClass: Record<
  "primary" | "outlineOnPrimary" | "inverse" | "ghost",
  string
> = {
  primary:
    "btn-primary inline-block bg-primary text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary/95 transition-colors hover:translate-y-[-1px] active:translate-y-0",
  outlineOnPrimary:
    "inline-block bg-transparent border border-primary-foreground text-primary-foreground font-sans font-semibold text-base px-8 py-3.5 rounded-full shadow-lg hover:bg-primary-foreground/10 transition-colors",
  inverse:
    "inline-block rounded-full border border-primary-foreground bg-primary-foreground px-8 py-3.5 font-sans text-base font-semibold text-primary shadow-lg transition-colors hover:bg-primary-foreground/90 hover:text-primary",
  ghost:
    "inline-block font-sans font-thin text-base text-foreground hover:text-primary transition-colors",
};

export function PrimaryCta({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variantClass;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(variantClass[variant], className)}>
      {children}
    </Link>
  );
}
