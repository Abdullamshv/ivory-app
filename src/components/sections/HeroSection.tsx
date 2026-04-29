import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] md:min-h-[800px] w-full bg-brand-accent overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80"
          alt="Graduates celebrating"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-4xl drop-shadow-md">
          Discover Your Future at Top Universities
        </h1>
        <p className="text-lg md:text-xl text-brand-light mb-10 max-w-2xl drop-shadow">
          IVORY is based in Qatar and helps students navigate their global education journey.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <Link href="/apply-now">
            <Button variant="accent" size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              Apply Now
            </Button>
          </Link>
          
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="flex text-ivory-accent text-2xl drop-shadow-sm">
              ★★★★★
            </div>
            <span className="text-sm md:text-base text-gray-200 font-medium">
              Trusted by students worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
