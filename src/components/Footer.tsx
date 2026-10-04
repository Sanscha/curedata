import { GraduationCap, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-sky-950 to-slate-950 text-white border-t border-sky-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-bold shadow-md shadow-sky-500/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white uppercase font-heading">
                Cure Data
              </span>
              <span className="text-[10px] font-semibold text-sky-400 tracking-wider uppercase -mt-1">
                Clinical Research Academy
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
            Transforming pharma, life science, nursing, and medical professionals into in-demand clinical research experts.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider text-sky-300 font-heading">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs md:text-sm text-slate-300 font-medium">
            <li>
              <a href="#about" className="hover:text-sky-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:text-sky-400 transition-colors">
                Specialized Programs
              </a>
            </li>
            <li>
              <a href="#why-choose-us" className="hover:text-sky-400 transition-colors">
                Why Cure Data
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-sky-400 transition-colors">
                DNA Pathway
              </a>
            </li>
            <li>
              <a href="#offer" className="hover:text-sky-400 transition-colors">
                Combo Offer
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-sky-400 transition-colors">
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>

        {/* Specialized Courses */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider text-sky-300 font-heading">
            Specialized Courses
          </h4>
          <ul className="space-y-2.5 text-xs md:text-sm text-slate-300 font-medium">
            <li className="flex items-center justify-between">
              <span>Pharmacovigilance</span>
              <span className="text-[10px] bg-sky-900/80 text-sky-300 px-2 py-0.5 rounded font-bold">1.5 Mo</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Clinical Data Management</span>
              <span className="text-[10px] bg-sky-900/80 text-sky-300 px-2 py-0.5 rounded font-bold">1 Mo</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Clinical SAS Programming</span>
              <span className="text-[10px] bg-sky-900/80 text-sky-300 px-2 py-0.5 rounded font-bold">2.5 Mo</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-sky-300 font-bold">Ultimate 3-in-1 Combo</span>
              <span className="text-[10px] bg-sky-500 text-slate-950 px-2 py-0.5 rounded font-black">40% OFF</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider text-sky-300 font-heading">
            Get In Touch
          </h4>
          <div className="space-y-3 text-xs md:text-sm text-slate-300">
            <p className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <span>Pune, Maharashtra, India</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <a href="mailto:curedata2025@gmail.com" className="hover:text-sky-300">
                curedata2025@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <a href="https://wa.me/919322489689" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300">
                +91 93224 89689
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-sky-900/60 py-6 text-center text-xs text-slate-400">
        <p>© 2026 Cure Data Clinical Research Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
