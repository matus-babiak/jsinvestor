import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId = 0;
    let observer: IntersectionObserver | null = null;

    const isElementInViewport = () => {
      const el = ref.current;
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const viewHeight = window.innerHeight || document.documentElement.clientHeight;
      const triggerLine = viewHeight * (1 - threshold);
      return rect.top <= triggerLine && rect.bottom >= 0;
    };

    const revealIfInViewport = () => {
      if (isVisible) return;
      if (isElementInViewport()) {
        setIsVisible(true);
        if (observer && ref.current) observer.unobserve(ref.current);
      }
    };

    const onViewportChange = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(revealIfInViewport);
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer?.unobserve(entry.target);
          }
        },
        { threshold }
      );

      if (ref.current) observer.observe(ref.current);
    }

    // Backup path: reveal only when element is actually in viewport.
    revealIfInViewport();
    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("scroll", onViewportChange);
      window.removeEventListener("resize", onViewportChange);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [threshold, isVisible]);

  return { ref, isVisible };
}
