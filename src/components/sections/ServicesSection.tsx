import { SERVICES } from "@/data";
import { BookOpen, FileText, Award } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const getIcon = (name: string) => {
  switch (name) {
    case "BookOpen": return <BookOpen className="w-10 h-10 text-brand-primary" />;
    case "FileText": return <FileText className="w-10 h-10 text-brand-primary" />;
    case "Award": return <Award className="w-10 h-10 text-brand-primary" />;
    default: return null;
  }
};

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-light w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <SectionHeading
            eyebrow="What we do"
            title="Our Premium Services"
            subtitle="Comprehensive support tailored to ensure your academic success abroad."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.id}
              variant="up"
              delay={i * 120}
              className="bg-white rounded-2xl p-8 shadow-sm border border-brand-primary/10 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 bg-brand-light rounded-2xl group-hover:bg-brand-primary/10 transition-colors">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-bold text-brand-accent mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
