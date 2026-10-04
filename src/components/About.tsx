import {
  ShieldCheck,
  UserCheck,
  Video,
  Database,
  Briefcase,
  Building2,
  Microscope,
  Award,
  Sparkles,
} from "lucide-react";

export default function About() {
  const features = [
    { text: "Industry-active instructors", icon: UserCheck },
    { text: "Live online sessions — evening & weekend", icon: Video },
    { text: "Hands-on with real clinical datasets", icon: Database },
    { text: "Placement support until you're hired", icon: Briefcase },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Column: Mission & Background */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-xs font-bold uppercase tracking-wider text-sky-700">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>✦ ABOUT US</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading">
              Your Clinical Research <br />
              <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Launchpad
              </span>
            </h2>
          </div>

          <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
            <p>
              Founded by industry veterans, Cure Data Academy transforms pharma, life science, nursing, and medical professionals into in-demand clinical research experts. We bridge the critical gap between academic knowledge and real-world industry demands.
            </p>
            <p>
              Drawing on over 15 years of combined experience from leading CROs and pharmaceutical companies, our founders meticulously designed a curriculum to directly address the skill gaps they observed when hiring new talent.
            </p>
          </div>

          {/* Clinical Team Banner Image Showcase */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-sky-200 h-56 sm:h-64 group">
            <img
              src="/images/about_team.png"
              alt="Cure Data Clinical Research Academy Team"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-bold text-white uppercase tracking-wider bg-sky-600/90 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-sky-400/30">
                ✦ 15+ Years Combined CRO Experience
              </span>
            </div>
          </div>

          <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-sky-100">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200">
              <div className="p-2.5 rounded-xl bg-sky-500 text-white shadow-sm shadow-sky-500/30">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-slate-900 font-heading">15+ Yrs</p>
                <p className="text-xs text-slate-500 font-semibold">CRO Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200">
              <div className="p-2.5 rounded-xl bg-sky-500 text-white shadow-sm shadow-sky-500/30">
                <Microscope className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-slate-900 font-heading">Real</p>
                <p className="text-xs text-slate-500 font-semibold">Clinical Datasets</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200 col-span-2 sm:col-span-1">
              <div className="p-2.5 rounded-xl bg-sky-500 text-white shadow-sm shadow-sky-500/30">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-slate-900 font-heading">100%</p>
                <p className="text-xs text-slate-500 font-semibold">Job Guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Key Value Prop Card */}
        <div className="lg:col-span-5">
          <div className="bg-gradient-to-b from-sky-50/90 via-white to-white p-8 md:p-10 rounded-3xl border-2 border-sky-200 shadow-xl shadow-sky-100/50 space-y-6 transition-all duration-300 hover:shadow-2xl hover:border-sky-300 relative group">
            <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 mb-2">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-snug font-heading">
              We don&apos;t just teach. We transform the careers of healthcare and life science professionals.
            </h3>

            <p className="text-sm text-slate-600">
              Our programs equip you with the exact skills employers demand in clinical research and drug safety.
            </p>

            <ul className="space-y-4 list-none p-0 m-0 pt-2">
              {features.map((feature, idx) => {
                const ItemIcon = feature.icon;
                return (
                  <li key={idx} className="flex items-center gap-3.5 text-sm md:text-base font-bold text-slate-800">
                    <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-600">
                      <ItemIcon className="w-4 h-4 text-sky-600" />
                    </span>
                    <span>{feature.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
