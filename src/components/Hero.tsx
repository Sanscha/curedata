"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Trophy,
  BookOpenCheck,
  BadgeCheck,
  CalendarCheck,
  FileDown,
  ArrowRight,
  TrendingUp,
  Award,
} from "lucide-react";

interface HeroProps {
  onOpenBrochure: () => void;
}

export default function Hero({ onOpenBrochure }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/hero_banner_1.jpg",
      badge: "✦ Cure Data Clinical Research Academy",
      badgeIcon: Sparkles,
      titlePrefix: "Pharma, Life Science, Nursing & Medical Professionals:",
      titleHighlight: "Ready to Launch a High-Impact Career?",
      description:
        "Our intensive, hands-on training programs transform you into in-demand Clinical Research Professionals. Master Pharmacovigilance, Clinical Data Management, and Clinical SAS Programming.",
    },
    {
      image: "/images/hero_banner_2.jpg",
      badge: "✦ Global Industry Standard Curriculum",
      badgeIcon: TrendingUp,
      titlePrefix: "Upgrade Your Skills in the Clinical Sector:",
      titleHighlight: "Accelerate Your Expertise & Power Up Your Future!",
      description:
        "Whether you're a pharma graduate, life science graduate, nursing student, or a medical professional looking to upgrade your skills in the clinical sector, this program is for you! Accelerate your expertise and power up your future!",
    },
    {
      image: "/images/hero_banner_3.jpg",
      badge: "✦ 100% Placement & Interview Guidance",
      badgeIcon: Award,
      titlePrefix: "Master Pharmacovigilance, CDM & Clinical SAS:",
      titleHighlight: "Step Into Top Pharmaceutical & CRO Companies!",
      description:
        "Gain practical experience with real clinical trial datasets, Argus DB, EDC systems, and CDISC SDTM/ADaM programming. Get placed at Fortrea, Cognizant, IQVIA, and TCS.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full min-h-[92vh] flex items-center justify-center pt-28 pb-16 bg-slate-950 overflow-hidden select-none">
      {/* Background Banner Image with High-Visibility Gradient Overlay */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-0" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Direct HTML img tag to guarantee instant rendering in all environments */}
          <img
            src={slide.image}
            alt={`Clinical Research Banner ${idx + 1}`}
            className="w-full h-full object-cover object-center scale-100 transform transition-transform duration-1000"
          />

          {/* Gradient backdrop: dark slate on left for high-contrast readable text, semi-transparent sky blue overlay across banner */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-sky-950/80 to-slate-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>
        </div>
      ))}

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Slider Carousel Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {slides.map((slide, index) => {
          const BadgeIcon = slide.badgeIcon;
          return (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out flex flex-col items-center text-center ${
                index === currentSlide
                  ? "opacity-100 scale-100 relative z-20"
                  : "opacity-0 scale-95 absolute inset-0 pointer-events-none z-0"
              }`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-900/80 border border-sky-400/50 shadow-lg text-xs md:text-sm font-bold uppercase tracking-wider text-sky-200 mb-6 backdrop-blur-md">
                <BadgeIcon className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: "8s" }} />
                <span>{slide.badge}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] max-w-5xl font-heading mb-6 drop-shadow-md">
                {slide.titlePrefix}{" "}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-sky-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
                  {slide.titleHighlight}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg lg:text-xl text-sky-100/90 font-normal leading-relaxed max-w-3xl mb-8 drop-shadow-sm">
                {slide.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mb-12">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-xl shadow-sky-500/30 transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
                >
                  <CalendarCheck className="w-5 h-5 text-sky-100" />
                  <span>Join Free Demo Class</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  onClick={onOpenBrochure}
                  className="inline-flex items-center justify-center gap-2 border-2 border-sky-400/60 bg-slate-900/80 hover:bg-sky-950 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg backdrop-blur-md transition-all transform hover:-translate-y-0.5 text-center"
                >
                  <FileDown className="w-5 h-5 text-sky-400" />
                  <span>Download Course Brochure</span>
                </button>
              </div>

              {/* Key Stats Bar */}
              <div className="pt-6 border-t border-sky-500/30 w-full max-w-3xl flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs md:text-sm font-semibold text-sky-200">
                <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-sky-400/40 backdrop-blur-md shadow-sm">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-white">85% Placement Rate</span>
                </div>
                <span className="hidden sm:inline text-sky-400">•</span>
                <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-sky-400/40 backdrop-blur-md shadow-sm">
                  <BookOpenCheck className="w-4 h-4 text-sky-400" />
                  <span className="font-bold text-white">3 Specialized Courses</span>
                </div>
                <span className="hidden sm:inline text-sky-400">•</span>
                <div className="flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-sky-400/40 backdrop-blur-md shadow-sm">
                  <BadgeCheck className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold text-white">Industry-Certified Training</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-slate-900/80 hover:bg-sky-500 text-sky-300 hover:text-white border border-sky-400/40 shadow-xl transition-all backdrop-blur-md cursor-pointer hover:scale-110"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:left-auto md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-slate-900/80 hover:bg-sky-500 text-sky-300 hover:text-white border border-sky-400/40 shadow-xl transition-all backdrop-blur-md cursor-pointer hover:scale-110"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ? "bg-sky-400 w-8" : "bg-white/40 hover:bg-white/70 w-2.5"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
