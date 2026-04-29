import HeroSection from "@/components/sections/HeroSection";
import ImpactSection from "@/components/sections/ImpactSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import StudyDestinationsSection from "@/components/sections/StudyDestinationsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection />
      <ImpactSection />
      <WhyChooseSection />
      <StudyDestinationsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
