"use client";

import { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  GraduationCap,
  Briefcase,
  CreditCard,
  BookOpen,
  Clock,
  Laptop,
  Award,
  Video,
} from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: GraduationCap,
      q: "Do I need prior experience?",
      a: "Not at all! Our programs are tailor-made for aspiring pharmacy graduates, life science students, nursing candidates, and medical professionals. We guide you from fundamental principles to advanced expertise – no prior industry experience needed.",
    },
    {
      icon: Briefcase,
      q: "Will I get placement support?",
      a: "Yes! Gain comprehensive career support: expert resume building, intensive interview preparation, and direct access to our industry network. Our proven track record: 85% placement rate within 3 months of course completion.",
    },
    {
      icon: CreditCard,
      q: "Are EMI / installment options available?",
      a: "Yes, we offer flexible payment plans with 0% interest EMI options. Choose to pay in 2-3 installments to suit your budget. Connect with our admissions team for personalized details.",
    },
    {
      icon: BookOpen,
      q: "What courses are offered?",
      a: "We offer three specialized programs: Pharmacovigilance (Drug Safety & Monitoring), Clinical Data Management (Structured Data & Validation), and Clinical SAS Programming (Analytics & Statistics). Each course is designed to make you job-ready in the clinical research industry.",
    },
    {
      icon: Clock,
      q: "How long are the courses?",
      a: "Pharmacovigilance is 1.5 months, Clinical Data Management is 1 month, and Clinical SAS Programming is 2.5 months. You can also enroll in the Ultimate Combo to complete all three in a structured sequence.",
    },
    {
      icon: Laptop,
      q: "Are the classes online or offline?",
      a: "All classes are conducted online via Google Meet, making it convenient for working professionals and students across India. Evening batches (Mon–Fri, 8–9 PM IST) and Weekend batches (Sat–Sun, 8–9:30 PM IST) are available.",
    },
    {
      icon: Award,
      q: "What certifications will I receive?",
      a: "Upon successful completion, you will receive industry-recognized certifications for each course. The Combo package includes 3 certifications — one per course — which are valued by top CROs and pharma companies.",
    },
    {
      icon: Video,
      q: "Is there a free demo class available?",
      a: "Absolutely! We encourage you to attend a free demo class before enrolling. You can experience our teaching style, ask questions, and make an informed decision — no commitment required.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-sky-50/40 border-t border-sky-100 relative">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-xs font-bold uppercase tracking-wider text-sky-700">
            <HelpCircle className="w-4 h-4 text-sky-600" />
            <span>✦ FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-normal">
            Everything you need to know before enrolling.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const QuestionIcon = faq.icon;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-sky-300 shadow-md shadow-sky-100"
                    : "bg-white/80 hover:bg-white border-sky-100 hover:border-sky-200"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base md:text-lg font-heading"
                >
                  <span className="flex items-center gap-3.5">
                    <span className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 text-xs font-extrabold flex items-center justify-center flex-shrink-0 border border-sky-200">
                      <QuestionIcon className="w-4 h-4 text-sky-600" />
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-sky-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-sky-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-600 text-sm md:text-base leading-relaxed border-t border-sky-50 animate-in fade-in duration-200">
                    <p className="pt-3.5 pl-12">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
