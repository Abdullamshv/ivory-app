'use client';

import { useEffect, useRef, useState } from "react";
import { IMPACT_STATS } from "@/data";

function useCounter(end: number, duration: number = 2000, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, trigger]);

  return count;
}

function StatItem({ item, isVisible }: { item: typeof IMPACT_STATS[0], isVisible: boolean }) {
  const count = useCounter(item.value, 2500, isVisible);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-gray-50">
      <div className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-2 flex items-center">
        <span>{count}</span>
        <span>{item.suffix}</span>
      </div>
      <p className="text-sm md:text-base text-gray-500 font-medium text-center uppercase tracking-wide">
        {item.label}
      </p>
    </div>
  );
}

export default function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="py-12 md:py-20 bg-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {IMPACT_STATS.map((stat) => (
            <StatItem key={stat.id} item={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
