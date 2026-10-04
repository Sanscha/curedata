"use client";

import { useState } from "react";
import { X, Download, BookOpen, CheckCircle2, MessageSquare, Send } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BrochureModal({ isOpen, onClose }: ModalProps) {
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    setTimeout(() => {
      // Simulate file download trigger
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("download", "Cure_Data_Academy_Brochure.pdf");
      document.body.appendChild(link);
      // close after delay
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border-2 border-sky-300 shadow-2xl max-w-md w-full p-6 md:p-8 space-y-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-sky-50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 text-center">
          <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center mx-auto shadow-md shadow-sky-500/20">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
            Course Brochure
          </h3>
          <p className="text-xs text-slate-600">
            Get the full curriculum breakdown, module timing, fee plans, and career placement roadmap in PDF.
          </p>
        </div>

        {downloaded ? (
          <div className="p-6 rounded-2xl bg-sky-50 border border-sky-200 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-sky-600 mx-auto" />
            <h4 className="font-bold text-slate-900 text-base font-heading">
              Brochure Sent!
            </h4>
            <p className="text-xs text-slate-600">
              Thank you! Your brochure download has started. We also sent a copy to <strong>{email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-sky-500 text-white font-bold text-xs rounded-xl shadow-md"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                Your Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="e.g. candidate@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-xl font-bold text-xs shadow-md shadow-sky-500/20 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Free PDF Brochure</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function WriteUsModal({ isOpen, onClose }: ModalProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Cure Data! My name is ${encodeURIComponent(name)}. ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/919322489689?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border-2 border-sky-300 shadow-2xl max-w-md w-full p-6 md:p-8 space-y-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-sky-50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 text-center">
          <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center mx-auto shadow-md shadow-sky-500/20">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
            Write To Us
          </h3>
          <p className="text-xs text-slate-600">
            Have a question about eligibility, batch dates, or course fees? Send us a quick note!
          </p>
        </div>

        <form onSubmit={handleSend} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Anjali Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Message *
            </label>
            <textarea
              required
              rows={3}
              placeholder="Type your inquiry here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 font-medium"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-xl font-bold text-xs shadow-md shadow-sky-500/20 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Send Direct Inquiry on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
