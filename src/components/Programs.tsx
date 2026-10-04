"use client";

import { useState } from "react";
import {
  Pill,
  Database,
  Code2,
  CheckCircle2,
  Clock,
  Layers,
  Rocket,
  ArrowUpRight,
  ShieldAlert,
  FileSpreadsheet,
  Terminal,
  Video,
  MessageCircle,
} from "lucide-react";

export default function Programs() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      coverIcon: Pill,
      imageSrc: "/images/pv_course.png",
      title: "Pharmacovigilance",
      subtitle: "Become a Drug Safety Expert",
      description:
        "Master drug safety monitoring with immersive, hands-on training. Report adverse events, detect signals, and navigate regulatory compliance with confidence.",
      duration: "1.5 Month (Mon–Fri, 1 hr/day)",
      curriculum: [
        { text: "Online live sessions with interactive Q&A", icon: Video },
        { text: "Argus/ARISg database demonstrations", icon: ShieldAlert },
        { text: "Signal detection & ICSR reporting", icon: Pill },
      ],
      standardFee: "₹15,000",
      discountFee: "₹10,000 Only",
      whatsappUrl:
        "https://wa.me/919322489689?text=I%20want%20to%20inquire%20about%20the%20Pharmacovigilance%20course",
    },
    {
      id: 2,
      coverIcon: Database,
      imageSrc: "/images/cdm_course.png",
      title: "Clinical Data Management",
      subtitle: "Excel in Clinical Data Management",
      description:
        "Acquire crucial skills in clinical trial data management. Learn to validate and manage data using industry-leading tools and methodologies. Become indispensable.",
      duration: "1 Month intensive training",
      curriculum: [
        { text: "EDC system practical exercises", icon: Database },
        { text: "CRF annotation and data validation", icon: FileSpreadsheet },
        { text: "Discrepancy management & locking", icon: CheckCircle2 },
      ],
      standardFee: "₹15,000",
      discountFee: "₹10,000 Only",
      whatsappUrl:
        "https://wa.me/919322489689?text=I%20want%20to%20inquire%20about%20the%20Clinical%20Data%20Management%20course",
    },
    {
      id: 3,
      coverIcon: Code2,
      imageSrc: "/images/sas_course.png",
      title: "Clinical SAS Programming",
      subtitle: "Conquer Clinical SAS Programming",
      description:
        "Master the essential statistical software for clinical trials. From foundational programming to advanced CDISC standards, unlock powerful data analysis skills.",
      duration: "2.5 Months comprehensive program",
      curriculum: [
        { text: "Base SAS, Advanced SAS, SDTM, ADaM", icon: Terminal },
        { text: "Real-world TLF creation practice", icon: Code2 },
        { text: "CDISC implementation & validation", icon: CheckCircle2 },
      ],
      standardFee: "₹25,000",
      discountFee: "₹20,000 Only",
      whatsappUrl:
        "https://wa.me/919322489689?text=I%20want%20to%20inquire%20about%20the%20Clinical%20SAS%20Programming%20course",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-sky-50/50 border-t border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-xs font-bold uppercase tracking-wider text-sky-700">
            <Layers className="w-4 h-4 text-sky-600" />
            <span>✦ OUR PROGRAMS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading">
            Launch Your Career:{" "}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Specialized Courses
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Pharma graduates, life science graduates, nursing students, and medical professionals in the clinical sector, elevate your career. Our specialized courses bridge academic knowledge with critical industry skills.
          </p>
        </div>

        {/* 3D Interactive Flip Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch py-4">
          {courses.map((course) => {
            const isFlipped = flippedCard === course.id;
            const CoverIcon = course.coverIcon;

            return (
              <div
                key={course.id}
                onMouseEnter={() => setFlippedCard(course.id)}
                onMouseLeave={() => setFlippedCard(null)}
                onClick={() => setFlippedCard(isFlipped ? null : course.id)}
                className="group relative w-full h-[520px] perspective-1000 cursor-pointer"
              >
                {/* 3D Flipping Container */}
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    isFlipped ? "[transform:rotateY(-180deg)]" : ""
                  }`}
                >
                  {/* FRONT: Textbook Cover with Course Image Overlay */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl bg-gradient-to-br from-sky-950 via-slate-900 to-sky-900 text-white p-8 border-2 border-sky-400/40 shadow-2xl flex flex-col justify-between overflow-hidden backface-hidden select-none">
                    {/* Background Course Banner Image */}
                    <img
                      src={course.imageSrc}
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-sky-950/80"></div>

                    <div className="absolute inset-4 border border-sky-400/20 rounded-2xl pointer-events-none"></div>

                    <div className="text-center relative z-10">
                      <span className="text-[10px] font-bold text-sky-300 uppercase tracking-widest bg-sky-950/80 px-3 py-1 rounded-full border border-sky-400/30 shadow-sm">
                        Academy Textbook
                      </span>
                    </div>

                    <div className="text-center relative z-10 space-y-3">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-500/20 border border-sky-300/40 flex items-center justify-center text-sky-300 mb-2 shadow-lg shadow-sky-500/20 backdrop-blur-md">
                        <CoverIcon className="w-7 h-7 text-sky-300" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug drop-shadow-md font-heading">
                        {course.title}
                      </h3>
                      <p className="text-xs font-semibold text-sky-200/90 tracking-wide uppercase">
                        {course.subtitle}
                      </p>
                      <div className="w-16 h-1 bg-sky-400/60 mx-auto rounded-full"></div>
                    </div>

                    <div className="text-center relative z-10 space-y-1">
                      <span className="text-[11px] font-bold text-sky-300 uppercase tracking-widest block">
                        ✦ Cure Data Academy ✦
                      </span>
                      <span className="text-[10px] text-sky-200/90 font-semibold tracking-wider block bg-sky-950/70 py-1.5 px-3.5 rounded-full inline-block border border-sky-400/30 backdrop-blur-md">
                        Hover or Tap to Open Syllabus
                      </span>
                    </div>
                  </div>

                  {/* BACK: Inside Syllabus & Details */}
                  <div className="absolute inset-0 w-full h-full rounded-3xl bg-white border-2 border-sky-300 shadow-2xl p-6 flex flex-col justify-between [transform:rotateY(180deg)] backface-hidden">
                    <div className="space-y-4">
                      {/* Title & Tag */}
                      <div className="border-b border-sky-100 pb-3 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-extrabold text-sky-600 uppercase tracking-wider block mb-0.5">
                            Specialized Syllabus
                          </span>
                          <h4 className="text-xl font-extrabold text-slate-900 font-heading">
                            {course.title}
                          </h4>
                        </div>
                        <div className="p-2 rounded-xl bg-sky-100 text-sky-600">
                          <CoverIcon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Curriculum Bullets */}
                      <div className="space-y-2.5">
                        <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5 bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-100 inline-block">
                          <Clock className="w-3.5 h-3.5 text-sky-600" />
                          <span>{course.duration}</span>
                        </span>
                        <ul className="space-y-2 list-none p-0 m-0 pt-1">
                          {course.curriculum.map((item, idx) => {
                            const ItemIcon = item.icon;
                            return (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                                <ItemIcon className="w-3.5 h-3.5 text-sky-500 mt-0.5 flex-shrink-0" />
                                <span>{item.text}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="pt-4 border-t border-sky-100 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-slate-400 font-medium block">
                            Standard Fee: <span className="line-through">{course.standardFee}</span>
                          </span>
                          <span className="text-lg font-extrabold text-sky-600 font-heading">
                            {course.discountFee}
                          </span>
                        </div>
                        <span className="bg-sky-100 text-sky-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                          Save ₹5k-₹5k+
                        </span>
                      </div>

                      <a
                        href={course.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-xl font-bold text-xs transition-all shadow-md shadow-sky-500/20 text-center"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Inquire Now on WhatsApp</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-600 text-white text-center max-w-4xl mx-auto shadow-xl shadow-sky-500/20 border border-sky-300/40 flex items-center justify-center gap-3">
          <Rocket className="w-6 h-6 text-sky-200 flex-shrink-0 animate-bounce" />
          <p className="text-sm md:text-base font-bold tracking-wide">
            Every course accelerates your job search with mock interviews, professional certification, and direct placement guidance.
          </p>
        </div>
      </div>
    </section>
  );
}
