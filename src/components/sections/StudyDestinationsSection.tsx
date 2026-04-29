import Image from "next/image";
import Link from "next/link";
import { DESTINATIONS } from "@/data";
import { Button } from "@/components/ui/Button";

export default function StudyDestinationsSection() {
  const featuredDestinations = DESTINATIONS.filter(d => d.id === 'qatar' || d.id === 'georgia');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-accent tracking-tight mb-4">
            Popular Study Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover world-class educational opportunities in our most sought-after locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {featuredDestinations.map((destination) => (
            <Link 
              key={destination.id} 
              href={`/study-destinations/${destination.id}`}
              className="group block rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image
                  src={destination.image}
                  alt={`Study in ${destination.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md">
                    {destination.name}
                  </h3>
                  <p className="text-brand-light drop-shadow line-clamp-2">
                    {destination.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/study-destinations">
            <Button variant="outline" size="lg" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-6 text-lg rounded-full transition-colors">
              View All Destinations
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
