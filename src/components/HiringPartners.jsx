import React from 'react';

const row1Companies = [
  'TCS', 'Infosys', 'Capgemini', 'Cognizant', 'Wipro', 'Accenture', 'IBM'
];

const row2Companies = [
  'HCLTech', 'Tech Mahindra', 'LTIMindtree', 'Genpact', 'Oracle', 'Mphasis', 'Hexaware'
];

export default function HiringPartners({ onOpenModal }) {
  return (
    <section className="bg-white dark:bg-[#090d16] py-14 lg:py-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-slate-500 mb-2">
            Where our students interview
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Our students have interviewed at <span className="text-blue-600 dark:text-blue-400">30+ companies</span>
          </h2>
        </div>

        {/* Dual Opposing Direction Marquees */}
        <div className="space-y-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          
          {/* Row 1: Leftward */}
          <div className="flex gap-4 sm:gap-6 overflow-hidden py-1">
            <div className="flex gap-4 sm:gap-6 animate-marquee-left shrink-0">
              {row1Companies.map((comp, idx) => (
                <div
                  key={idx}
                  className="h-14 px-7 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 flex items-center justify-center font-black text-slate-800 dark:text-slate-200 text-sm whitespace-nowrap shadow-sm hover:border-blue-500 hover:shadow-md transition cursor-pointer"
                >
                  {comp}
                </div>
              ))}
            </div>
            <div className="flex gap-4 sm:gap-6 animate-marquee-left shrink-0">
              {row1Companies.map((comp, idx) => (
                <div
                  key={`repeat1-${idx}`}
                  className="h-14 px-7 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 flex items-center justify-center font-black text-slate-800 dark:text-slate-200 text-sm whitespace-nowrap shadow-sm hover:border-blue-500 hover:shadow-md transition cursor-pointer"
                >
                  {comp}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward */}
          <div className="flex gap-4 sm:gap-6 overflow-hidden py-1">
            <div className="flex gap-4 sm:gap-6 animate-marquee-right shrink-0">
              {row2Companies.map((comp, idx) => (
                <div
                  key={idx}
                  className="h-14 px-7 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 flex items-center justify-center font-black text-slate-800 dark:text-slate-200 text-sm whitespace-nowrap shadow-sm hover:border-orange-500 hover:shadow-md transition cursor-pointer"
                >
                  {comp}
                </div>
              ))}
            </div>
            <div className="flex gap-4 sm:gap-6 animate-marquee-right shrink-0">
              {row2Companies.map((comp, idx) => (
                <div
                  key={`repeat2-${idx}`}
                  className="h-14 px-7 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 flex items-center justify-center font-black text-slate-800 dark:text-slate-200 text-sm whitespace-nowrap shadow-sm hover:border-orange-500 hover:shadow-md transition cursor-pointer"
                >
                  {comp}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => onOpenModal('Download Placement Report')}
            className="h-12 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-sm shadow-md shadow-blue-500/20 transition"
          >
            See Placement Report
          </button>
        </div>

      </div>
    </section>
  );
}
