import { DESTINATIONS } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  Languages,
  Coins,
  Wallet,
  Home,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ country: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const destination = DESTINATIONS.find((d) => d.id === country);
  if (!destination) {
    return { title: "Destination Not Found | IVORY Consultancy" };
  }
  return {
    title: `Study in ${destination.name} | IVORY Consultancy`,
    description: destination.tagline ?? destination.description,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const destination = DESTINATIONS.find((d) => d.id === country);

  if (!destination) {
    notFound();
  }

  const { keyFacts } = destination;
  const overview = destination.overviewParagraphs ?? [destination.description];

  const facts = keyFacts
    ? [
        { icon: <Languages className="w-6 h-6 text-brand-primary" />, label: "Language", value: keyFacts.language },
        { icon: <Coins className="w-6 h-6 text-brand-primary" />, label: "Currency", value: keyFacts.currency },
        { icon: <Wallet className="w-6 h-6 text-brand-primary" />, label: "Tuition Range", value: keyFacts.tuitionRange },
        { icon: <Home className="w-6 h-6 text-brand-primary" />, label: "Living Cost", value: keyFacts.livingCost },
        { icon: <CalendarDays className="w-6 h-6 text-brand-primary" />, label: "Intakes", value: keyFacts.intakes.join(", ") },
        { icon: <MapPin className="w-6 h-6 text-brand-primary" />, label: "Popular Cities", value: keyFacts.popularCities.join(", ") },
      ]
    : [];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative w-full h-85 md:h-115 overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
          <Link
            href="/study-destinations"
            className="inline-flex items-center gap-2 text-sm text-brand-light/90 hover:text-white transition-colors mb-4 w-fit"
          >
            <ArrowLeft className="w-4 h-4" /> All destinations
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            {destination.name}
          </h1>
          <p className="mt-3 text-lg md:text-xl text-brand-light/90 max-w-2xl drop-shadow">
            {destination.tagline ?? destination.description}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16 md:space-y-24">
        {/* Overview */}
        <Reveal variant="up" as="section">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-6">
            About studying in {destination.name}
          </h2>
          <div className="space-y-4 max-w-3xl">
            {overview.map((paragraph, i) => (
              <p key={i} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Key Facts */}
        {facts.length > 0 && (
          <section>
            <Reveal variant="up">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-accent mb-8">Key Facts</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facts.map((fact, i) => (
                <Reveal
                  key={fact.label}
                  variant="up"
                  delay={i * 80}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <div className="shrink-0 p-3 bg-brand-light rounded-xl">{fact.icon}</div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-1">
                      {fact.label}
                    </h3>
                    <p className="text-brand-accent font-medium">{fact.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Highlights */}
        {destination.highlights && destination.highlights.length > 0 && (
          <section className="bg-brand-light rounded-3xl p-8 md:p-12">
            <Reveal variant="up">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-accent mb-8">
                Why study in {destination.name}?
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              {destination.highlights.map((highlight, i) => (
                <Reveal key={highlight} variant="up" delay={i * 80} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-gray-700">{highlight}</span>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Top Universities + Programs */}
        {destination.topUniversities && destination.topUniversities.length > 0 && (
          <section>
            <Reveal variant="up">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-accent mb-8">
                Top Universities
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {destination.topUniversities.map((university, i) => (
                <Reveal
                  key={university}
                  variant="up"
                  delay={i * 80}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <GraduationCap className="w-7 h-7 text-brand-primary shrink-0" />
                  <span className="font-medium text-brand-accent">{university}</span>
                </Reveal>
              ))}
            </div>

            {destination.popularPrograms && destination.popularPrograms.length > 0 && (
              <Reveal variant="up" className="mt-10">
                <h3 className="text-lg font-semibold text-brand-accent mb-4">Popular Programs</h3>
                <div className="flex flex-wrap gap-3">
                  {destination.popularPrograms.map((program) => (
                    <span
                      key={program}
                      className="rounded-full bg-brand-primary/10 text-brand-primary px-4 py-1.5 text-sm font-medium"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}
          </section>
        )}

        {/* Optional gallery */}
        {destination.gallery && destination.gallery.length > 0 && (
          <section>
            <Reveal variant="up">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-accent mb-8">Gallery</h2>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {destination.gallery.map((src, i) => (
                <Reveal
                  key={src}
                  variant="up"
                  delay={i * 80}
                  className="relative h-48 rounded-2xl overflow-hidden shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`${destination.name} ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <Reveal variant="fade" as="section" className="text-center bg-brand-accent rounded-3xl px-6 py-14 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in studying in {destination.name}?
          </h2>
          <p className="text-lg text-brand-light/90 max-w-2xl mx-auto mb-8">
            Get personalized guidance from our experts and take the first step toward your future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/apply-now">
              <Button variant="accent" size="lg" className="px-8 py-6 text-lg rounded-full">
                Apply Now
              </Button>
            </Link>
            <Link href="/study-destinations">
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full border-white text-white hover:bg-white/10">
                View All Destinations
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
