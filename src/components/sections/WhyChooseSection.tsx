import Image from "next/image";
import { WHY_CHOOSE_ITEMS } from "@/data";
import { Handshake, GraduationCap, Globe } from "lucide-react";

const getIcon = (name: string) => {
  switch (name) {
    case "Handshake": return <Handshake className="w-8 h-8 text-brand-primary" />;
    case "GraduationCap": return <GraduationCap className="w-8 h-8 text-brand-primary" />;
    case "Globe": return <Globe className="w-8 h-8 text-brand-primary" />;
    default: return null;
  }
};

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-accent tracking-tight">
                Why Choose IVORY?
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We provide comprehensive guidance to help you navigate the complexities of studying abroad. 
                Our experts ensure you find the right fit for your academic and career goals.
              </p>
            </div>
            
            <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div 
                key={item.id} 
                className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 p-3 bg-brand-light rounded-xl mr-5">
                  {getIcon(item.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-accent mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
