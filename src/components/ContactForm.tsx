"use client";

import { useState } from "react";
import {
  MessageSquare,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Phone,
  Sparkles,
  User,
  BookOpen,
} from "lucide-react";

interface ContactFormProps {
  selectedCourse?: string;
}

export default function ContactForm({ selectedCourse = "" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: selectedCourse || "Pharmacovigilance",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const text = `Hello Cure Data Team!%0A%0AMy Name: ${encodeURIComponent(
        formData.name
      )}%0AEmail: ${encodeURIComponent(
        formData.email
      )}%0APhone: ${encodeURIComponent(
        formData.phone
      )}%0ACourse: ${encodeURIComponent(
        formData.course
      )}%0AMessage: ${encodeURIComponent(formData.message || "I want to reserve my seat for the Free Demo Class.")}`;
      window.open(`https://wa.me/919322489689?text=${text}`, "_blank");
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-xs font-bold uppercase tracking-wider text-sky-700">
            <MessageSquare className="w-4 h-4 text-sky-600" />
            <span>✦ GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading">
            Let&apos;s Connect &amp;{" "}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Elevate!
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-normal">
            Got questions? Eager to enroll? Our team is ready to fast-track your journey and clarify every detail.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                Reach Out Directly
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect with our academic counselors via WhatsApp or email for instant support, fee breakdown, and schedule consultation.
              </p>
            </div>

            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919322489689"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-sky-50/80 border border-sky-200 hover:bg-sky-100/60 hover:border-sky-300 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    WhatsApp Chat
                  </span>
                  <p className="font-extrabold text-slate-900 text-base group-hover:text-emerald-700 transition-colors font-heading">
                    +91 93224 89689
                  </p>
                  <p className="text-xs text-sky-700 font-semibold">Click to Chat directly</p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:curedata2025@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-sky-50/80 border border-sky-200 hover:bg-sky-100/60 hover:border-sky-300 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-bold shadow-md shadow-sky-500/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Official Email
                  </span>
                  <p className="font-extrabold text-slate-900 text-base group-hover:text-sky-600 transition-colors font-heading">
                    curedata2025@gmail.com
                  </p>
                  <p className="text-xs text-sky-700 font-semibold">Write to us anytime</p>
                </div>
              </a>

              {/* Address Card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-sky-50/80 border border-sky-200">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-white flex items-center justify-center font-bold shadow-md shadow-cyan-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Academy Location
                  </span>
                  <p className="font-extrabold text-slate-900 text-base font-heading">
                    Pune, Maharashtra, India
                  </p>
                  <p className="text-xs text-slate-500 font-medium">Cure Data Clinical Research Academy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Demo Class Reservation Form */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-b from-sky-50/90 to-white p-8 md:p-10 rounded-3xl border-2 border-sky-200 shadow-xl shadow-sky-100 relative">
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500 text-white text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>Reserve Seat</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                  Free Demo Class
                </h3>
                <p className="text-xs md:text-sm text-slate-600">
                  Witness our innovative teaching, meet industry-leading instructors, and envision your future. Reserve your free demo class seat today!
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-slate-900 font-heading">
                    Seat Reserved Successfully!
                  </h4>
                  <p className="text-sm text-slate-600">
                    We are redirecting you to WhatsApp to instantly confirm your demo class link. If it doesn&apos;t open automatically, please click below.
                  </p>
                  <a
                    href={`https://wa.me/919322489689?text=Hi%20Cure%20Data,%20I%20reserved%20a%20seat%20for%20${encodeURIComponent(
                      formData.course
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md"
                  >
                    Open WhatsApp Chat Now
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-sky-500" />
                        <span>Full Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 font-medium transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-sky-500" />
                        <span>Phone / WhatsApp *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 font-medium transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-sky-500" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 font-medium transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                        <span>Interested Course *</span>
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 font-medium transition-all"
                      >
                        <option value="Pharmacovigilance">Pharmacovigilance (1.5 Months)</option>
                        <option value="Clinical Data Management">Clinical Data Management (1 Month)</option>
                        <option value="Clinical SAS Programming">Clinical SAS Programming (2.5 Months)</option>
                        <option value="Ultimate Combo Offer">Ultimate All-in-1 Combo Offer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-sky-500" />
                      <span>Message / Question (Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask about batch timings, fee structure, or syllabus details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 font-medium transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-xl font-extrabold text-sm shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Reserve My Free Demo Seat</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
