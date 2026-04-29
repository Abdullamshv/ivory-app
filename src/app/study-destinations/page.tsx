import { DESTINATIONS } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function StudyDestinationsIndexPage() {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh]">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-accent mb-6">Study Destinations</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore all our featured countries and find the perfect fit for your education journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DESTINATIONS.map((destination) => (
          <Link 
            key={destination.id} 
            href={`/study-destinations/${destination.id}`}
            className="group block rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={destination.image}
                alt={`Study in ${destination.name}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                  {destination.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
