import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  /** Optional small label rendered above the title */
  eyebrow?: string;
}

/**
 * Shared heading block used across sections and pages.
 * Encapsulates the repeated brand-accent title + muted subtitle pattern.
 */
export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-wider text-brand-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-accent tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-gray-600",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
