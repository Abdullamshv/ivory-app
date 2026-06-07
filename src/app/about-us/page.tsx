import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, Compass, ShieldCheck, Users, Award, Globe2, HeartHandshake, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ImpactSection from "@/components/sections/ImpactSection";

export const metadata: Metadata = {
  title: "About Us | IVORY Consultancy",
  description: "Learn about IVORY Consultancy — a Doha-based team guiding students to top universities worldwide with honest, end-to-end support.",
};

const CORE_VALUES = [
  { icon: ShieldCheck, title: "Integrity & Transparency", description: "Honest advice with no hidden fees — we recommend what's right for you, not what's easy for us." },
  { icon: Users, title: "Student-First", description: "Every plan is built around your goals, ambitions, and circumstances — never a one-size-fits-all path." },
  { icon: Award, title: "Excellence", description: "We hold ourselves to the highest standards at every stage of your application journey." },
  { icon: Globe2, title: "Global Partnerships", description: "Direct relationships with universities across the world open doors that matter for you." },
  { icon: HeartHandshake, title: "Personalized Support", description: "One dedicated advisor stays with you from first consultation to pre-departure." },
  { icon: Sparkles, title: "Community", description: "Join a growing network of students who support one another long after they arrive on campus." },
];

export default function AboutUsPage() {
  return (
    <div className="w-full">
      <PageHero
        eyebrow="About IVORY"
        title="Your trusted partner for global education"
        subtitle="Based in Doha, we help students from Qatar and the region access world-class universities with honest, end-to-end guidance."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Students walking on a university campus"
      />

      {/* Intro + Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up" className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              IVORY Consultancy was founded to fill a simple gap: students in Qatar deserved
              trustworthy, expert guidance for studying abroad. Today we combine deep university
              relationships with genuinely personal support to turn ambition into admission.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal variant="up" className="p-8 md:p-10 bg-brand-light rounded-3xl">
              <div className="inline-flex p-3 bg-white rounded-xl shadow-sm mb-5">
                <Target className="w-8 h-8 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-bold text-brand-accent mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower students across Qatar and the region to access world-class education
                through honest advice, expert planning, and dependable end-to-end support.
              </p>
            </Reveal>

            <Reveal variant="up" delay={120} className="p-8 md:p-10 bg-brand-light rounded-3xl">
              <div className="inline-flex p-3 bg-white rounded-xl shadow-sm mb-5">
                <Compass className="w-8 h-8 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-bold text-brand-accent mb-3">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the region&apos;s most trusted education consultancy — known for putting
                students first and for outcomes that change lives.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal variant="up" className="relative w-full h-80 sm:h-105 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80"
                alt="IVORY advisors meeting with students"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal variant="up" delay={120}>
              <SectionHeading
                eyebrow="Our Story"
                title="Built on trust, grown through results"
                align="left"
                className="mb-6"
              />
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We started with a belief that choosing where to study shouldn&apos;t feel
                  overwhelming or risky. Too many students were navigating applications alone,
                  relying on guesswork and unreliable information.
                </p>
                <p>
                  Since then, we&apos;ve built a network of trusted university partners and guided
                  students to campuses across the Gulf, Europe, and beyond — with a 100% visa
                  success rate to show for it. Our philosophy has never changed: students first,
                  always.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <SectionHeading
              eyebrow="What we stand for"
              title="Our Core Values"
              subtitle="The principles that guide every recommendation we make."
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal
                  key={value.title}
                  variant="up"
                  delay={(i % 3) * 120}
                  className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <div className="inline-flex p-3 bg-brand-light rounded-xl mb-5">
                    <Icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-accent mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact stats (reused animated section) */}
      <ImpactSection />

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal variant="fade" className="text-center bg-brand-accent rounded-3xl px-6 py-14 md:py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to begin your journey?
            </h2>
            <p className="text-lg text-brand-light/90 max-w-2xl mx-auto mb-8">
              Book a free consultation and let our experts map out your path to the right university.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/apply-now">
                <Button variant="accent" size="lg" className="px-8 py-6 text-lg rounded-full">
                  Apply Now
                </Button>
              </Link>
              <Link href="/study-destinations">
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-full border-white text-white hover:bg-white/10">
                  Explore Destinations
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
