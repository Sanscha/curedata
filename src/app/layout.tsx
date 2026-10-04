import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cure Data Clinical Research Academy — Launch Your Pharma Career",
  description:
    "Transforming pharma, life science, nursing, and medical professionals into in-demand clinical research experts. Top courses in Pharmacovigilance, CDM, and SAS.",
  keywords: [
    "Pharmacovigilance",
    "Clinical Data Management",
    "Clinical SAS Programming",
    "Clinical Research Academy",
    "Pharma Courses",
    "Cure Data",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-sky-50/30 text-slate-900 selection:bg-sky-200 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}
