import { Globe2, UserCheck, Rocket, Sparkles, Trophy, Building2, Users } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Globe2,
      title: "Global Industry Recognition",
      description:
        "Future-proof your career. Our certifications are prized by leading pharmaceutical and clinical research organizations worldwide. Instantly elevate your resume.",
    },
    {
      icon: UserCheck,
      title: "Learn from Industry Leaders",
      description:
        "Train directly with active clinical research professionals. They bring unparalleled global expertise and real-world case studies into every session.",
    },
    {
      icon: Rocket,
      title: "Accelerate Your Career Launch",
      description:
        "Don't just train; get hired. Benefit from mock interviews, expert resume building, and direct access to our extensive industry network. Your dream job awaits.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white border-t border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-xs font-bold uppercase tracking-wider text-sky-700">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>✦ WHY CURE DATA?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading">
            Why Choose Cure Data Academy?
          </h2>
          <p className="text-lg text-sky-700 font-semibold">
            We don&apos;t just train — we transform careers.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-b from-sky-50/70 to-white p-8 rounded-3xl border border-sky-200 space-y-5 hover:shadow-xl hover:shadow-sky-100/60 hover:border-sky-300 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-bold text-lg group-hover:scale-110 group-hover:bg-sky-600 transition-all shadow-md shadow-sky-500/25">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors font-heading">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Stats Banner */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 p-8 md:p-12 rounded-3xl text-white shadow-xl shadow-sky-500/25 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-sky-400/40">
          <div className="space-y-2 pt-6 md:pt-0 first:pt-0 flex flex-col items-center">
            <Trophy className="w-8 h-8 text-amber-300 mb-1" />
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">85%</p>
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-sky-100">
              Placement Rate
            </p>
          </div>

          <div className="space-y-2 pt-6 md:pt-0 flex flex-col items-center">
            <Building2 className="w-8 h-8 text-sky-200 mb-1" />
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">15+</p>
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-sky-100">
              Years Combined Experience
            </p>
          </div>

          <div className="space-y-2 pt-6 md:pt-0 flex flex-col items-center">
            <Users className="w-8 h-8 text-cyan-200 mb-1" />
            <p className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading">1000+</p>
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-sky-100">
              Students Trained
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
