'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { OFFICE_INFO } from "@/data";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal variant="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-accent tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your journey? Contact our experts today for a free consultation.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Side: Contact Info */}
          <Reveal variant="left" className="flex flex-col space-y-8 bg-brand-light p-8 md:p-12 rounded-3xl">
            <div>
              <h3 className="text-2xl font-bold text-brand-accent mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our doors are always open for ambitious students. Reach out to us through any of the following channels or visit our office.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-brand-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-accent">Office Address</h4>
                  <p className="text-gray-600">{OFFICE_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-brand-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-accent">Phone Number</h4>
                  <p className="text-gray-600">{OFFICE_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-accent">Email Address</h4>
                  <p className="text-gray-600">{OFFICE_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-brand-primary mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-accent">Working Hours</h4>
                  <p className="text-gray-600">{OFFICE_INFO.timings}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Side: Form */}
          <Reveal variant="right" className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-accent mb-6">Send us a Message</h3>
            
            {isSuccess ? (
              <div className="p-6 bg-green-50 text-green-700 rounded-xl mb-6 font-medium">
                Thank you! Your message has been sent successfully. We will get back to you soon.
              </div>
            ) : null}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  {...register("name")}
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  {...register("phone")}
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  placeholder="+974 1234 5678"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                className="w-full py-4 text-lg mt-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Application"}
              </Button>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
