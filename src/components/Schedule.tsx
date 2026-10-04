"use client";

import {
  CalendarDays,
  Clock,
  Ticket,
  Flame,
  ArrowRight,
  Sparkles,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

interface ScheduleProps {
  onReserveSeat: (courseName: string) => void;
}

export default function Schedule({ onReserveSeat }: ScheduleProps) {
  const batches = [
    {
      name: "Pharmacovigilance",
      startDate: "May 15, 2026",
      demoDate: "May 5, 2026",
      seatsLeft: 5,
      totalSeats: 10,
      badge: "Filling Fast",
    },
    {
      name: "Clinical Data Management",
      startDate: "June 1, 2026",
      demoDate: "May 20, 2026",
      seatsLeft: 5,
      totalSeats: 10,
      badge: "Filling Fast",
    },
    {
      name: "Clinical SAS Programming",
      startDate: "July 10, 2026",
      demoDate: "July 05, 2026",
      seatsLeft: 5,
      totalSeats: 10,
      badge: "Filling Fast",
    },
  ];

  return (
    <section id="enroll" className="py-24 bg-sky-50/50 border-t border-sky-100 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-xs font-bold uppercase tracking-wider text-sky-700">
            <CalendarCheck className="w-4 h-4 text-sky-600" />
            <span>✦ ENROLL NOW</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-heading">
            Launch Your Pharma Career:{" "}
            <span className="bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
              Upcoming Batches
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-normal">
            Seats are limited — secure yours before they fill up.
          </p>
        </div>

        {/* Schedule Desktop Table & Mobile Cards */}
        <div className="bg-white rounded-3xl border-2 border-sky-200 shadow-xl shadow-sky-100/60 overflow-hidden">
          {/* Table View for Medium+ Screens */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-sky-50/80 border-b border-sky-200 text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  <th className="py-5 px-6">Course Name</th>
                  <th className="py-5 px-6">Batch Start Date</th>
                  <th className="py-5 px-6">Demo Class Date</th>
                  <th className="py-5 px-6">Seat Availability</th>
                  <th className="py-5 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-100 text-sm font-semibold text-slate-800">
                {batches.map((batch, idx) => (
                  <tr key={idx} className="hover:bg-sky-50/40 transition-colors">
                    <td className="py-5 px-6 font-bold text-slate-900 font-heading">
                      <div className="flex items-center gap-2">
                        <span>{batch.name}</span>
                        <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                          <Flame className="w-3 h-3 text-amber-600" />
                          <span>{batch.badge}</span>
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2 text-slate-700">
                        <CalendarDays className="w-4 h-4 text-sky-500" />
                        <span>{batch.startDate}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex items-center gap-2 text-slate-700">
                        <Clock className="w-4 h-4 text-sky-500" />
                        <span>{batch.demoDate}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="space-y-1.5 w-44">
                        <div className="flex justify-between text-xs">
                          <span className="text-sky-700 font-bold flex items-center gap-1">
                            <Ticket className="w-3.5 h-3.5 text-sky-500" />
                            <span>{batch.seatsLeft} / {batch.totalSeats} Seats</span>
                          </span>
                          <span className="text-amber-600 font-bold">50% Full</span>
                        </div>
                        <div className="w-full h-2 bg-sky-100 rounded-full overflow-hidden">
                          <div className="w-1/2 h-full bg-gradient-to-r from-sky-500 to-amber-500 rounded-full"></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <button
                        onClick={() => onReserveSeat(batch.name)}
                        className="inline-flex items-center gap-1.5 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-sky-500/20 transition-all hover:scale-105"
                      >
                        <span>Reserve Demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden divide-y divide-sky-100">
            {batches.map((batch, idx) => (
              <div key={idx} className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base text-slate-900 font-heading">
                    {batch.name}
                  </h4>
                  <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-amber-600" />
                    <span>{batch.badge}</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-sky-50 rounded-xl space-y-1">
                    <span className="text-slate-400 font-semibold uppercase text-[10px] flex items-center gap-1">
                      <CalendarDays className="w-3 h-3 text-sky-500" />
                      <span>Start Date</span>
                    </span>
                    <p className="font-bold text-slate-800">{batch.startDate}</p>
                  </div>
                  <div className="p-3 bg-sky-50 rounded-xl space-y-1">
                    <span className="text-slate-400 font-semibold uppercase text-[10px] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-sky-500" />
                      <span>Demo Class</span>
                    </span>
                    <p className="font-bold text-slate-800">{batch.demoDate}</p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-sky-700 font-bold flex items-center gap-1">
                      <Ticket className="w-3.5 h-3.5 text-sky-500" />
                      <span>Availability: {batch.seatsLeft} / {batch.totalSeats} Seats Left</span>
                    </span>
                  </div>
                  <div className="w-full h-2 bg-sky-100 rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-gradient-to-r from-sky-500 to-amber-500 rounded-full"></div>
                  </div>
                </div>

                <button
                  onClick={() => onReserveSeat(batch.name)}
                  className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-bold text-xs shadow-md text-center flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Reserve Free Demo Class</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
