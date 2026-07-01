"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact-schema";
import { organizationTypes, inquiryTypes, countries, contactInfoBlocks } from "@/lib/data/contact-data";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: smoothEase } },
};

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs text-red-500 font-medium" role="alert">
      {message}
    </p>
  );
}

const inputBase =
  "w-full rounded-xl border border-[#EDF4F7] bg-[#F8FCFD] px-4 py-3 text-sm text-[#253746] placeholder:text-[#253746]/40 outline-none transition-all duration-200 focus:border-[#1976D2] focus:ring-2 focus:ring-[#1976D2]/15 aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-100";

const selectBase =
  "w-full rounded-xl border border-[#EDF4F7] bg-[#F8FCFD] px-4 py-3 text-sm text-[#253746] outline-none transition-all duration-200 focus:border-[#1976D2] focus:ring-2 focus:ring-[#1976D2]/15 aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-100 cursor-pointer appearance-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1400));
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact-form"
      aria-label="Contact form and information"
      className="bg-[#F8FCFD] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#1976D2]">
            Get In Touch
          </p>
          <h2 className="font-['Poppins',sans-serif] text-3xl font-bold text-[#253746] sm:text-4xl">
            Send Us a Message
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-[#253746]/60 leading-relaxed">
            Complete the form below and our team will route your inquiry to the right department. We respond within one business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-10 xl:gap-14 items-start">
          {/* ── Form ── */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-[1.75rem] bg-white p-8 shadow-[0_4px_32px_rgba(37,55,70,0.07)] border border-[#EDF4F7] lg:p-10"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center gap-5 py-16 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#7AC943]/12">
                    <CheckCircle2 className="h-10 w-10 text-[#4CAF50]" />
                  </div>
                  <div>
                    <h3 className="font-['Poppins',sans-serif] text-xl font-bold text-[#253746]">
                      Message Received!
                    </h3>
                    <p className="mt-2 text-sm text-[#253746]/60 max-w-sm leading-relaxed">
                      Thank you for reaching out. A member of our team will respond to your inquiry within one business day.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 rounded-full border border-[#1976D2]/30 px-6 py-2.5 text-sm font-medium text-[#1976D2] transition-all duration-200 hover:bg-[#1976D2]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1976D2] focus-visible:ring-offset-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-5"
                >
                  {/* Row 1: Full Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="mb-1.5 block text-xs font-semibold text-[#253746]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Dr. Amina Osei"
                        autoComplete="name"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        className={inputBase}
                        {...register("fullName")}
                      />
                      <FieldError message={errors.fullName?.message} />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-[#253746]">
                        Company / Organisation <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Nairobi General Hospital"
                        autoComplete="organization"
                        aria-invalid={!!errors.company}
                        aria-describedby={errors.company ? "company-error" : undefined}
                        className={inputBase}
                        {...register("company")}
                      />
                      <FieldError message={errors.company?.message} />
                    </div>
                  </div>

                  {/* Row 2: Org Type + Inquiry Type */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="organizationType" className="mb-1.5 block text-xs font-semibold text-[#253746]">
                        Organisation Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="organizationType"
                          aria-invalid={!!errors.organizationType}
                          className={selectBase}
                          defaultValue=""
                          {...register("organizationType")}
                        >
                          <option value="" disabled>Select type…</option>
                          {organizationTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#253746]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                      <FieldError message={errors.organizationType?.message} />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="mb-1.5 block text-xs font-semibold text-[#253746]">
                        Inquiry Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="inquiryType"
                          aria-invalid={!!errors.inquiryType}
                          className={selectBase}
                          defaultValue=""
                          {...register("inquiryType")}
                        >
                          <option value="" disabled>Select inquiry…</option>
                          {inquiryTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#253746]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                      <FieldError message={errors.inquiryType?.message} />
                    </div>
                  </div>

                  {/* Row 3: Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-[#253746]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="amina@hospital.org"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        className={inputBase}
                        {...register("email")}
                      />
                      <FieldError message={errors.email?.message} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-[#253746]">
                        Phone Number <span className="text-[#253746]/40 font-normal">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+254 700 000 000"
                        autoComplete="tel"
                        aria-invalid={!!errors.phone}
                        className={inputBase}
                        {...register("phone")}
                      />
                      <FieldError message={errors.phone?.message} />
                    </div>
                  </div>

                  {/* Row 4: Country + Subject */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="country" className="mb-1.5 block text-xs font-semibold text-[#253746]">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="country"
                          aria-invalid={!!errors.country}
                          className={selectBase}
                          defaultValue=""
                          {...register("country")}
                        >
                          <option value="" disabled>Select country…</option>
                          {countries.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                        <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#253746]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                      <FieldError message={errors.country?.message} />
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold text-[#253746]">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Pharmaceutical supply quotation"
                        aria-invalid={!!errors.subject}
                        className={inputBase}
                        {...register("subject")}
                      />
                      <FieldError message={errors.subject?.message} />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-[#253746]">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Please describe your inquiry, required products, quantities, or how we can assist you…"
                      aria-invalid={!!errors.message}
                      className={`${inputBase} resize-none`}
                      {...register("message")}
                    />
                    <FieldError message={errors.message?.message} />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1976D2] py-4 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(25,118,210,0.3)] transition-all duration-200 hover:bg-[#0056B3] hover:scale-[1.015] hover:shadow-[0_6px_24px_rgba(25,118,210,0.4)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1976D2] focus-visible:ring-offset-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[#253746]/40">
                    Your information is protected and never shared with third parties.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Contact Info cards ── */}
          <motion.div
            id="contact-info"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <p className="mb-2 font-['Poppins',sans-serif] text-lg font-bold text-[#253746]">
              Contact Information
            </p>
            {contactInfoBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.label}
                  className="flex gap-4 items-start rounded-2xl bg-white p-5 shadow-[0_2px_16px_rgba(37,55,70,0.05)] border border-[#EDF4F7]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1976D2]/8">
                    <Icon className="h-5 w-5 text-[#1976D2]" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#253746]/50 mb-1">
                      {block.label}
                    </p>
                    {block.lines.map((line) => (
                      <p key={line} className="text-sm font-medium text-[#253746] leading-relaxed break-all">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Emergency card */}
            <div className="flex gap-4 items-start rounded-2xl bg-[#1976D2]/5 border border-[#1976D2]/15 p-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1976D2]/12">
                <svg className="h-5 w-5 text-[#1976D2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#1976D2]/70 mb-1">Emergency Supply</p>
                <p className="text-sm font-medium text-[#253746]">emergency@epionehealth.com</p>
                <p className="text-sm font-medium text-[#253746]">+254 700 911 000</p>
                <p className="text-xs text-[#253746]/55 mt-1">24/7 for critical healthcare supply</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}