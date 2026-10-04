"use client";

import { useState } from "react";
import {
  Dna,
  CheckCircle,
  ArrowRight,
  BrainCircuit,
  Terminal,
  Microscope,
  UserCheck,
  Trophy,
  Sparkles,
} from "lucide-react";

export default function DnaPathway() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: BrainCircuit,
      title: "Master Core Concepts",
      subtitle: "Foundational Theory & Compliance",
      description:
        "Grasp the bedrock theories of clinical research, GCP guidelines, ICH standards, and regulatory requirements with crystal clarity.",
      details: "Covers ICH-GCP E6(R2), FDA & EMA regulations, clinical trial phases I-IV, and drug development lifecycles.",
    },
    {
      number: "02",
      icon: Terminal,
      title: "Command Industry Tools",
      subtitle: "Hands-on Software Mastery",
      description:
        "Watch experts demonstrate industry-leading software like Argus Safety, Oracle Clinical, Medidata Rave, and SAS Studio in action.",
      details: "Practice live database entries, query generation, case safety reports (ICSR), and SAS programming syntax.",
    },
    {
      number: "03",
      icon: Microscope,
      title: "Apply Real-World Skills",
      subtitle: "Live Clinical Datasets",
      description:
        "Practice with actual clinical study templates, ICSR case processing, CRF annotations, and realistic data validation tasks.",
      details: "Work on anonymized real pharma trial datasets to solve real data queries, MedDRA coding, and WHO-DD lookups.",
    },
    {
      number: "04",
      icon: UserCheck,
      title: "Polish Professional Identity",
      subtitle: "Branding & Mock Interview Prep",
      description:
        "Build an irresistible resume, optimize your LinkedIn profile for pharma recruiters, and crush 1-on-1 mock technical interviews.",
      details: "Simulated interview rounds with active CRO hiring managers, domain-specific Q&A banks, and communication coaching.",
    },
    {
      number: "05",
      icon: Trophy,
      title: "Launch High-Impact Career",
      subtitle: "Direct Placement Guidance",
      description:
        "Secure your spot with top CROs and pharma companies (IQVIA, Fortrea, Cognizant, TCS) with our direct placement support.",
      details: "Resume referrals to hiring partners, active job alerts, application tracking, and salary negotiation guidance.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-sky-50/40 border-t border-sky-100 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-xs font-bold uppercase tracking-wider text-sky-700">
            <Dna className="w-4 h-4 text-sky-600 animate-spin" style={{ animationDuration: "10s" }} />
            <span>✦ HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading">
            Your Path to Clinical Research{" "}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Mastery
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-normal">
            A structured, 5-step curriculum engineered to transform you into an industry-ready professional.
          </p>
        </div>

        {/* Interactive Step Selector & DNA Strand Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left / Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;

              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4.5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? "bg-white border-sky-400 shadow-lg shadow-sky-500/15 scale-[1.02]"
                      : "bg-white/60 hover:bg-white border-sky-100 text-slate-600 hover:border-sky-200"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                        isActive
                          ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                          : "bg-sky-100 text-sky-700"
                      }`}
                    >
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm md:text-base font-heading ${isActive ? "text-slate-900" : "text-slate-700"}`}>
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">{step.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? "text-sky-600 translate-x-1" : "text-slate-300 opacity-50"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Center DNA Strand Graphic */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-center relative h-96">
            <div className="w-16 h-full flex flex-col items-center justify-between relative">
              <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-cyan-400 to-sky-600 rounded-full"></div>
              {steps.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-7 h-7 rounded-full border-4 cursor-pointer transition-all duration-300 z-10 flex items-center justify-center ${
                    activeStep === idx
                      ? "bg-sky-500 border-white shadow-lg shadow-sky-500/50 scale-125"
                      : "bg-white border-sky-300 hover:scale-110"
                  }`}
                >
                  {activeStep === idx && <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Right Detailed Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl border-2 border-sky-200 shadow-xl shadow-sky-100 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Dna className="w-32 h-32 text-sky-600" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-700 uppercase tracking-widest bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
                  Step {steps[activeStep].number} of 05
                </span>
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" />
                  <span>DNA Pathway</span>
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                  {steps[activeStep].title}
                </h3>
                <p className="text-sm font-semibold text-sky-600">
                  {steps[activeStep].subtitle}
                </p>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-sky-600" />
                  <span>Key Module Highlights</span>
                </div>
                <p className="text-xs md:text-sm text-slate-700 font-medium">
                  {steps[activeStep].details}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-sky-600 hover:bg-sky-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  ← Previous Step
                </button>
                <button
                  disabled={activeStep === 4}
                  onClick={() => setActiveStep((prev) => Math.min(4, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-sky-500 hover:bg-sky-600 text-white disabled:opacity-30 disabled:pointer-events-none shadow-md shadow-sky-500/20 transition-all"
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
