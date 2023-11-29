import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function useSmoothScroll() {
  useEffect(() => {
    let rafId: number;
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);
}
