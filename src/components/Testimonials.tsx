import { Star, Quote, Building2, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      company: "Fortrea",
      companyColor: "bg-sky-100 text-sky-800 border-sky-300",
      avatar: "/images/user_student_2.png",
      quote:
        "Cure Data's training helped me crack my Fortrea interview. The mock sessions? Identical to the real thing. I landed my first job with confidence!",
      name: "Sourabh T.",
      role: "B. Pharma Graduate",
    },
    {
      company: "Cognizant",
      companyColor: "bg-cyan-100 text-cyan-800 border-cyan-300",
      avatar: "/images/user_student_3.png",
      quote:
        "I want to express my deepest gratitude for your unwavering support. You guided me from point zero to securing my role at Cognizant. Thank you for everything!",
      name: "Sneha K.",
      role: "Clinical SAS Specialist",
    },
    {
      company: "IQVIA",
      companyColor: "bg-blue-100 text-blue-800 border-blue-300",
      avatar: "/images/user_student_1.png",
      quote:
        "The hands-on practice with real clinical datasets and Argus database gave me a huge edge during my IQVIA interview. Faculty support was outstanding!",
      name: "Ananya R.",
      role: "M. Pharma Graduate",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white border-t border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-xs font-bold uppercase tracking-wider text-sky-700">
            <Quote className="w-4 h-4 text-sky-600" />
            <span>✦ SUCCESS STORIES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading">
            What Our Students Say
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-normal">
            Real results from real students — placed at top CROs and pharma companies.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-sky-50/80 via-white to-white p-8 rounded-3xl border border-sky-200 shadow-lg shadow-sky-100/50 flex flex-col justify-between space-y-6 hover:shadow-xl hover:border-sky-300 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header Tag & Rating */}
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-extrabold uppercase ${review.companyColor}`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Placed at {review.company}</span>
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm md:text-base leading-relaxed italic font-normal">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Student Bio with Cutout Student Photo */}
              <div className="pt-4 border-t border-sky-100 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-sky-400 shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                  <img
                    src={review.avatar}
                    alt={`${review.name} - Cure Data Academy Student`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base font-heading">
                    {review.name}
                  </h4>
                  <p className="text-xs text-sky-700 font-semibold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Callout Banner */}
        <div className="bg-gradient-to-r from-sky-100 via-sky-50 to-cyan-100 p-8 rounded-3xl border border-sky-200 text-center max-w-4xl mx-auto space-y-4 shadow-sm">
          <div className="flex items-center justify-center gap-2 text-sky-700 font-bold text-sm uppercase tracking-wider">
            <CheckCircle2 className="w-5 h-5 text-sky-600" />
            <span>Join 1,000+ Alumni Network</span>
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 font-heading">
            Join 1,000+ students who have launched their clinical research careers with Cure Data Academy.
          </h3>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-sky-500/25 transition-all hover:scale-105"
            >
              <span>Start Your Journey Today</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
