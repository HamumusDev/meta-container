"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** The full value string, e.g. "40+". The leading number is animated, the rest is kept as a suffix. */
  value: string;
  from?: number;
  duration?: number;
  className?: string;
};

export function CountUp({
  value,
  from = 1,
  duration = 1400,
  className,
}: CountUpProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const to = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [current, setCurrent] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    // No number to animate — render the raw value as-is.
    if (!match) return;

    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(to);
      return;
    }

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setCurrent(Math.round(from + (to - from) * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [match, from, to, duration]);

  if (!match) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {current}
      {suffix}
    </span>
  );
}
