'use client';

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "fade" | "left" | "right";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** ms delay for staggering sibling reveals */
  delay?: number;
  /** animation variant -> maps to a CSS class in globals.css */
  variant?: RevealVariant;
  /** 0..1 viewport intersection threshold */
  threshold?: number;
  /** render as a different element (default: div) */
  as?: React.ElementType;
  /** animate only once, then stay revealed (default: true) */
  once?: boolean;
}

/**
 * Lightweight scroll-reveal wrapper built on IntersectionObserver.
 * The actual animation lives in globals.css (.reveal*, with a
 * prefers-reduced-motion guard). Wrapping a Server Component's markup
 * here does not turn that section into a client component — the
 * children render on the server and are passed through.
 *
 * Grid-safety: in a CSS grid, wrap each child individually so the
 * Reveal element becomes the direct grid item; never wrap a whole
 * `.map()` in a single Reveal.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  threshold = 0.15,
  as: Tag = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", `reveal-${variant}`, shown && "reveal-show", className)}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
