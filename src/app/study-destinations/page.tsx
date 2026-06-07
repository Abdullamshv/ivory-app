import type { Metadata } from "next";
import { DESTINATIONS } from "@/data";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import DestinationCard from "@/components/ui/DestinationCard";

export const metadata: Metadata = {
  title: "Study Destinations | IVORY Consultancy",
  description: "Explore our featured study destinations and find the perfect fit for your education journey.",
};

export default function StudyDestinationsIndexPage() {
  return (
    <div className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh]">
      <Reveal variant="up">
        <SectionHeading
          eyebrow="Where will you study?"
          title="Study Destinations"
          subtitle="Explore all our featured countries and find the perfect fit for your education journey."
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESTINATIONS.map((destination, i) => (
          <Reveal key={destination.id} variant="up" delay={(i % 3) * 120}>
            <DestinationCard destination={destination} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
