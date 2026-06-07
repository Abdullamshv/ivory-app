import Link from "next/link";
import { DESTINATIONS } from "@/data";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import DestinationCard from "@/components/ui/DestinationCard";

export default function StudyDestinationsSection() {
  const featuredDestinations = DESTINATIONS.filter(
    (d) => d.id === "qatar" || d.id === "georgia"
  );

  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            eyebrow="Where will you study?"
            title="Popular Study Destinations"
            subtitle="Discover world-class educational opportunities in our most sought-after locations."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {featuredDestinations.map((destination, i) => (
            <Reveal key={destination.id} variant="up" delay={i * 150}>
              <DestinationCard destination={destination} heightClassName="h-64 md:h-80" />
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delay={200} className="text-center">
          <Link href="/study-destinations">
            <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-6 text-lg rounded-full transition-colors">
              View All Destinations
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
