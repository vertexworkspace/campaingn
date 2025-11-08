"use client";
import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null; // ✅ Global reference

export function getLenis() {
  return lenisInstance;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1,
    });

    lenisInstance = lenis; // ✅ Store global instance

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return <>{children}</>;
}
