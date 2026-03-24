import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { StaticImageData } from "next/image";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Next.js: importované obrázky sú StaticImageData – pre <img src> použite .src */
export function assetSrc(mod: string | StaticImageData) {
  return typeof mod === "string" ? mod : mod.src;
}
