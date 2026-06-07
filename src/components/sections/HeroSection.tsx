import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { IMPACT_STATS } from "@/data";

// Curated trust pills sourced from the impact stats.
const TRUST_PILLS = [
  IMPACT_STATS.find((s) => s.id === 4), // 100% Visa Success Rate
  IMPACT_STATS.find((s) => s.id === 2), // 20+ University Partners
  IMPACT_STATS.find((s) => s.id === 1), // 65+ Students Placed
].filter((s): s is (typeof IMPACT_STATS)[number] => Boolean(s));

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[85vh] md:min-h-200 w-full bg-brand-accent overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
          alt="Graduates celebrating"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">
        <Reveal variant="fade">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-brand-light backdrop-blur">
            Education Consultancy · Doha, Qatar
          </span>
        </Reveal>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl drop-shadow-md">
          Discover Your Future at Top Universities
        </h1>
        <p className="text-lg md:text-xl text-brand-light mb-10 max-w-2xl drop-shadow">
          IVORY is based in Qatar and helps students navigate their global education journey.
        </p>

        <Reveal variant="up" delay={100}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/apply-now">
              <Button variant="accent" size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                Apply Now
              </Button>
            </Link>
            <Link href="/study-destinations">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-white text-white hover:bg-white/10 transition-all">
                Explore Destinations
              </Button>
            </Link>
          </div>
        </Reveal>

        {/* Trust pills */}
        <Reveal variant="up" delay={200}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {TRUST_PILLS.map((stat) => (
              <span
                key={stat.id}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm text-brand-light backdrop-blur"
              >
                <span className="font-bold text-ivory-accent">
                  {stat.value}
                  {stat.suffix}
                </span>
                {stat.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <Reveal variant="fade" delay={400} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#impact" aria-label="Scroll to next section" className="text-white/70 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8 animate-hero-bounce" />
        </a>
      </Reveal>
    </section>
  );
}
