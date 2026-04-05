import { useEffect, useRef, useState } from "react";

/**
 * Odkryje obsah (trieda `visible`) keď prvok vstúpi do viewportu.
 * Stabilný efekt bez závislosti na `isVisible` — predchádza prázdnej stránke po návrate z iného route
 * (opätovné pripojenie IO, BF cache, oneskorený layout).
 */
export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const revealedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      if (revealedRef.current) return;
      revealedRef.current = true;
      setIsVisible(true);
    };

    const checkViewport = () => {
      if (revealedRef.current) return;
      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      const triggerLine = viewHeight * (1 - threshold);
      if (rect.top <= triggerLine && rect.bottom >= 0) {
        reveal();
      }
    };

    let observer: IntersectionObserver | null = null;
    let rafId = 0;

    const onViewportChange = () => {
      if (revealedRef.current) return;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkViewport);
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry?.isIntersecting) {
            reveal();
            observer?.unobserve(el);
          }
        },
        { threshold }
      );
      observer.observe(el);
    }

    // Po hydrácii / návrate späť môže byť prvý merací beh príliš skoro — zopakuj po layoute
    queueMicrotask(checkViewport);
    let raf2 = 0;
    rafId = requestAnimationFrame(() => {
      checkViewport();
      raf2 = requestAnimationFrame(checkViewport);
    });
    const tId = window.setTimeout(checkViewport, 100);

    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange);

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        queueMicrotask(() => {
          requestAnimationFrame(checkViewport);
        });
      }
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", onViewportChange);
      window.removeEventListener("resize", onViewportChange);
      window.removeEventListener("pageshow", onPageShow);
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(raf2);
      window.clearTimeout(tId);
    };
  }, [threshold]);

  return { ref, isVisible };
}
