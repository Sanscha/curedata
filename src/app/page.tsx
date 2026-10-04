"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import WhyChooseUs from "@/components/WhyChooseUs";
import DnaPathway from "@/components/DnaPathway";
import ComboOffer from "@/components/ComboOffer";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { BrochureModal, WriteUsModal } from "@/components/BrochureModal";

export default function Home() {
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [writeUsOpen, setWriteUsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Pharmacovigilance");

  const handleReserveSeat = (courseName: string) => {
    setSelectedCourse(courseName);
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-full flex flex-col bg-sky-50/30 text-slate-900 relative font-sans">
      {/* Top Floating Glass Navigation Bar */}
      <Navbar onOpenWriteUs={() => setWriteUsOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero onOpenBrochure={() => setBrochureOpen(true)} />

        {/* About Section */}
        <About />

        {/* Programs Section with 3D Flip Cards */}
        <Programs />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* DNA Pathway / How It Works Section */}
        <DnaPathway />

        {/* Combo Offer Section */}
        <ComboOffer />

        {/* Schedule & Upcoming Batches Section */}
        <Schedule onReserveSeat={handleReserveSeat} />

        {/* Testimonials & Success Stories Section */}
        <Testimonials />

        {/* FAQ Section */}
        <Faq />

        {/* Contact & Free Demo Registration Form Section */}
        <ContactForm selectedCourse={selectedCourse} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
      <WriteUsModal isOpen={writeUsOpen} onClose={() => setWriteUsOpen(false)} />
    </div>
  );
}
