"use client";

import { useState, useEffect } from "react";
import {
  GraduationCap,
  Menu,
  X,
  Mail,
  MessageSquare,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  Dna,
  Gift,
  Calendar,
  Quote,
  HelpCircle,
  PhoneCall,
  Send,
  ShieldCheck,
} from "lucide-react";

interface NavbarProps {
  onOpenWriteUs: () => void;
}

export default function Navbar({ onOpenWriteUs }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: ShieldCheck },
    { name: "Programs", href: "#programs", icon: BookOpen },
    { name: "Why Choose Us", href: "#why-choose-us", icon: Award },
    { name: "DNA Pathway", href: "#how-it-works", icon: Dna },
    { name: "Combo Offer", href: "#offer", icon: Gift },
    { name: "Schedule", href: "#enroll", icon: Calendar },
    { name: "Testimonials", href: "#testimonials", icon: Quote },
    { name: "FAQ", href: "#faq", icon: HelpCircle },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl rounded-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? "glass-nav-sky shadow-sky-200/60 shadow-xl py-2"
          : "bg-white/90 backdrop-blur-md border border-sky-100 shadow-md py-3"
      }`}
    >
      <div className="px-5 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group select-none">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-sky-300 transition-transform group-hover:scale-105">
              <GraduationCap className="w-6 h-6 transform group-hover:-rotate-6 transition-transform" />
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors uppercase font-heading">
              Cure Data
            </span>
            <span className="text-[10px] font-bold text-sky-600 tracking-wider uppercase -mt-1 hidden sm:block">
              Clinical Research Academy
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 font-semibold text-xs xl:text-sm text-slate-700">
          {navLinks.map((link) => {
            const LinkIcon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-sky-600 transition-colors py-1.5 px-2 rounded-xl hover:bg-sky-50/80 flex items-center gap-1.5 group relative"
              >
                <LinkIcon className="w-3.5 h-3.5 text-sky-500 group-hover:scale-110 transition-transform" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="mailto:curedata2025@gmail.com"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-sky-600 px-3.5 py-2 rounded-full hover:bg-sky-50 border border-transparent hover:border-sky-200 transition-all"
          >
            <Mail className="w-4 h-4 text-sky-500" />
            <span>E-mail</span>
          </a>

          <button
            onClick={onOpenWriteUs}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 transition-all transform hover:-translate-y-0.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Write Us</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenWriteUs}
            className="sm:hidden bg-sky-500 text-white p-2 rounded-full shadow-sm"
            aria-label="Write Us"
          >
            <Send className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-2xl transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-4 pb-6 px-6 border-t border-sky-100 bg-white/95 rounded-3xl shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const LinkIcon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 font-semibold text-sm py-2.5 px-3 rounded-xl hover:bg-sky-50 hover:text-sky-600 flex items-center justify-between border-b border-sky-50"
              >
                <span className="flex items-center gap-2.5">
                  <LinkIcon className="w-4 h-4 text-sky-500" />
                  <span>{link.name}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </a>
            );
          })}
          <div className="flex flex-col gap-2.5 pt-3">
            <a
              href="mailto:curedata2025@gmail.com"
              className="flex items-center justify-center gap-2 bg-sky-50 text-sky-700 py-3 rounded-2xl font-bold text-xs border border-sky-200"
            >
              <Mail className="w-4 h-4 text-sky-500" />
              <span>curedata2025@gmail.com</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWriteUs();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-2xl font-extrabold text-xs shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Write Us / Quick Inquiry</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
