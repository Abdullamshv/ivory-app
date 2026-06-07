import type { Metadata } from "next";
import { Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { OFFICE_INFO } from "@/data";
import { Reveal } from "@/components/ui/Reveal";
import ApplyForm from "@/components/sections/ApplyForm";

export const metadata: Metadata = {
  title: "Apply Now | IVORY Consultancy",
  description: "Start your study-abroad application with IVORY Consultancy. Free, no-obligation consultation and end-to-end support.",
};

const STEPS = [
  { title: "Submit your application", description: "Share your details and goals using the form." },
  { title: "Free consultation call", description: "We'll discuss your options and answer your questions." },
  { title: "Shortlist universities", description: "Together we choose the right programs for you." },
  { title: "Application & documents", description: "We prepare and submit a strong application." },
  { title: "Offer, visa & departure", description: "We guide you through offers, visa, and pre-departure." },
];

export default function ApplyNowPage() {
  return (
    <div className="py-16 md:py-24 bg-brand-light min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal variant="up" className="text-center mb-12 md:mb-16">
          <span className="inline-block mb-3 text-sm font-semibold uppercase tracking-wider text-brand-primary">
            Apply Now
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-accent tracking-tight mb-4">
            Start your journey today
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our advisors will get back to you within 1–2 business days
            for a free, no-obligation consultation.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form */}
          <Reveal variant="up" className="lg:col-span-2">
            <ApplyForm />
          </Reveal>

          {/* Sidebar */}
          <Reveal variant="up" delay={120} className="lg:col-span-1 space-y-6">
            {/* What happens next */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-brand-accent mb-6">What happens next</h2>
              <ol className="space-y-5">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-primary text-white text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-brand-accent">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Reassurance */}
            <div className="bg-brand-accent text-brand-light p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-ivory-accent" />
                <h2 className="text-lg font-bold text-white">Free, no-obligation</h2>
              </div>
              <p className="text-sm text-brand-light/80 mb-6">
                Have a question first? Reach out directly — we&apos;re happy to help before you apply.
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-ivory-accent shrink-0" />
                  <a href={`tel:${OFFICE_INFO.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                    {OFFICE_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-ivory-accent shrink-0" />
                  <a href={`mailto:${OFFICE_INFO.email}`} className="hover:text-white transition-colors break-all">
                    {OFFICE_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-ivory-accent shrink-0" />
                  <span>{OFFICE_INFO.timings}</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
