import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  /** Optional background image (Unsplash). Falls back to a solid brand band. */
  image?: string;
  imageAlt?: string;
}

/**
 * Reusable page hero band for inner pages (About, etc.).
 * Solid brand-accent background by default, or an image with a gradient overlay.
 */
export default function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative w-full bg-brand-accent overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0">
          <Image src={image} alt={imageAlt} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        {eyebrow && (
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-brand-light backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg md:text-xl text-brand-light/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
