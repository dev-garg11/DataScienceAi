import React from 'react';
import { hiringCompanies } from '../data/5trainersData';

export default function HiringPartners({ onOpenModal }) {
  return (
    <section className="bg-white dark:bg-[#090d16] py-12 lg:py-16 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-slate-500 mb-2">
            Where our students interview
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Our students have interviewed at <span className="text-blue-600 dark:text-blue-400">30+ companies</span>
          </h2>
        </div>

        {/* Marquee Row 1 */}
        <div className="flex gap-4 sm:gap-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] py-2">
          <div className="flex gap-4 sm:gap-6 animate-marquee-left shrink-0">
            {hiringCompanies.map((comp, idx) => (
              <div
                key={idx}
                className="h-14 px-6 rounded-xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 flex items-center justify-center font-black text-slate-800 dark:text-slate-200 text-sm whitespace-nowrap shadow-sm hover:border-blue-500 transition"
              >
                {comp}
              </div>
            ))}
          </div>
          <div className="flex gap-4 sm:gap-6 animate-marquee-left shrink-0">
            {hiringCompanies.map((comp, idx) => (
              <div
                key={`repeat-${idx}`}
                className="h-14 px-6 rounded-xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 flex items-center justify-center font-black text-slate-800 dark:text-slate-200 text-sm whitespace-nowrap shadow-sm hover:border-blue-500 transition"
              >
                {comp}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => onOpenModal('Download Placement Report')}
            className="h-12 px-7 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition"
          >
            See Placement Report
          </button>
        </div>

      </div>
    </section>
  );
}

