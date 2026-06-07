import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Destination } from "@/types";

interface DestinationCardProps {
  destination: Destination;
  /** Card media height utility classes (defaults tuned for grid use) */
  heightClassName?: string;
}

/**
 * Shared destination media card used by the homepage section and the
 * Study Destinations index, so card markup stays consistent site-wide.
 */
export default function DestinationCard({
  destination,
  heightClassName = "h-64 md:h-72",
}: DestinationCardProps) {
  return (
    <Link
      href={`/study-destinations/${destination.id}`}
      className="group block rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
    >
      <div className={`relative w-full overflow-hidden ${heightClassName}`}>
        <Image
          src={destination.image}
          alt={`Study in ${destination.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
            {destination.name}
          </h3>
          <p className="text-brand-light/90 text-sm drop-shadow line-clamp-2 mb-2">
            {destination.description}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            Explore <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
