'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

// Singleton Lenis instance accessible from any component
let _lenis: Lenis | null = null;

/**
 * Smooth-scroll to a DOM element by id, using the Lenis instance when available.
 * Falls back to native scrollTo so it always works.
 * @param id      — Element id to scroll to (without #)
 * @param offset  — Pixel offset from the element top (default -88 to clear the fixed header)
 */
export function scrollToSection(id: string, offset = -88) {
  const el = document.getElementById(id);
  if (!el) return;

  if (_lenis) {
    _lenis.scrollTo(el, { offset, duration: 1.4 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    _lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      _lenis = null;
    };
  }, []);

  return null;
}
