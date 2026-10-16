"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Pixels of scroll movement ignored, so tiny jitters do not flicker the header.
const THRESHOLD = 8;

// Sticky header that slides out of view when scrolling down and back in when scrolling up.
export function HeaderShell({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const height = ref.current?.offsetHeight ?? 0;

      if (y <= height) {
        setHidden(false);
      } else if (Math.abs(y - lastY) > THRESHOLD) {
        setHidden(y > lastY);
      } else {
        ticking = false;
        return;
      }

      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={ref}
      // Keyboard users tabbing into a hidden header bring it back.
      onFocus={() => setHidden(false)}
      className={`sticky top-0 z-50 bg-brand text-white transition-transform duration-300 motion-reduce:transition-none ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {children}
    </header>
  );
}
