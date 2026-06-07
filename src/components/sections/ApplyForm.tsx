'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { DESTINATIONS } from "@/data";
import { Button } from "@/components/ui/Button";

const STUDY_LEVELS = ["Foundation", "Bachelor's", "Master's", "PhD", "Other"];
const INTAKES = ["Fall (Sep)", "Spring (Feb)", "Summer", "Not sure yet"];

const applySchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  country: z.string().min(1, "Please select a destination"),
  level: z.string().min(1, "Please select your study level"),
  program: z.string().min(2, "Please tell us your intended program"),
  intake: z.string().min(1, "Please select a preferred intake"),
  message: z.string().max(1000, "Message is too long").optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
});

type ApplyFormValues = z.infer<typeof applySchema>;

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";
const errorClass = "text-red-500 text-sm mt-1";

export default function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      level: "",
      program: "",
      intake: "",
      message: "",
      consent: false,
    },
  });

  const onSubmit = async (data: ApplyFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 text-center">
        <div className="inline-flex p-4 bg-green-50 rounded-full mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-brand-accent mb-3">Application received!</h3>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Thank you for reaching out. Our team will review your details and contact you within
          1–2 business days to schedule your free consultation.
        </p>
        <Button variant="outline" size="lg" onClick={() => setIsSuccess(false)}>
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-brand-accent mb-6">Start your application</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className={labelClass}>First Name</label>
            <input {...register("firstName")} id="firstName" className={inputClass} placeholder="John" />
            {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>Last Name</label>
            <input {...register("lastName")} id="lastName" className={inputClass} placeholder="Doe" />
            {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className={labelClass}>Email Address</label>
            <input {...register("email")} id="email" type="email" className={inputClass} placeholder="john@example.com" />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Phone Number</label>
            <input {...register("phone")} id="phone" type="tel" className={inputClass} placeholder="+974 1234 5678" />
            {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
          </div>
        </div>

        {/* Destination + Level */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="country" className={labelClass}>Desired Destination</label>
            <select {...register("country")} id="country" className={inputClass} defaultValue="">
              <option value="" disabled>Select a destination</option>
              {DESTINATIONS.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
            {errors.country && <p className={errorClass}>{errors.country.message}</p>}
          </div>
          <div>
            <label htmlFor="level" className={labelClass}>Study Level</label>
            <select {...register("level")} id="level" className={inputClass} defaultValue="">
              <option value="" disabled>Select a level</option>
              {STUDY_LEVELS.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            {errors.level && <p className={errorClass}>{errors.level.message}</p>}
          </div>
        </div>

        {/* Program + Intake */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="program" className={labelClass}>Intended Program</label>
            <input {...register("program")} id="program" className={inputClass} placeholder="e.g. Computer Science" />
            {errors.program && <p className={errorClass}>{errors.program.message}</p>}
          </div>
          <div>
            <label htmlFor="intake" className={labelClass}>Preferred Intake</label>
            <select {...register("intake")} id="intake" className={inputClass} defaultValue="">
              <option value="" disabled>Select an intake</option>
              {INTAKES.map((intake) => (
                <option key={intake} value={intake}>{intake}</option>
              ))}
            </select>
            {errors.intake && <p className={errorClass}>{errors.intake.message}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass}>Anything else we should know? <span className="text-gray-400 font-normal">(optional)</span></label>
          <textarea {...register("message")} id="message" rows={4} className={`${inputClass} resize-none`} placeholder="Tell us about your goals, questions, or anything that would help us prepare." />
          {errors.message && <p className={errorClass}>{errors.message.message}</p>}
        </div>

        {/* Consent */}
        <div>
          <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer">
            <input
              {...register("consent")}
              id="consent"
              type="checkbox"
              className="mt-1 h-5 w-5 rounded border-gray-300 text-brand-primary focus:ring-brand-primary"
            />
            <span className="text-sm text-gray-600">
              I agree to be contacted by IVORY Consultancy about my application.
            </span>
          </label>
          {errors.consent && <p className={errorClass}>{errors.consent.message}</p>}
        </div>

        <Button type="submit" variant="accent" size="lg" className="w-full py-4 text-lg mt-2" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  );
}
