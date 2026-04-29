import { DESTINATIONS } from "@/data";
import Image from "next/image";
import { notFound } from "next/navigation";

// Since it's Next.js 15, params is a Promise
export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const resolvedParams = await params;
  const destination = DESTINATIONS.find(d => d.id === resolvedParams.country);

  if (!destination) {
    notFound();
  }

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh]">
      <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-xl">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            {destination.name}
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-brand-accent mb-6">About Studying in {destination.name}</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {destination.description}
        </p>
        <p className="text-gray-600">
          More detailed information about universities, living costs, and cultural highlights in {destination.name} will go here.
        </p>
      </div>
    </div>
  );
}
