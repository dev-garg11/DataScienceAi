import React from 'react';

const companyIcons = {
  TCS: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#004b87"/>
      <path d="M6 8h12v2.5H13.5V18h-3V10.5H6V8z" fill="#ffffff"/>
    </svg>
  ),
  Infosys: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#007cc3"/>
      <path d="M7 6h3.2v12H7zm6.8 0H17v12h-3.2z" fill="#ffffff"/>
    </svg>
  ),
  Capgemini: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0070ad"/>
      <path d="M12 4C9 8 6 11 6 14a6 6 0 0 0 12 0c0-3-3-6-6-10z" fill="#ffffff"/>
      <circle cx="12" cy="14" r="2.5" fill="#0070ad"/>
    </svg>
  ),
  Cognizant: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0033a0"/>
      <circle cx="12" cy="12" r="5.5" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="22 8"/>
    </svg>
  ),
  Wipro: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2" fill="#e11d48"/>
      <circle cx="17.5" cy="8.5" r="2" fill="#f59e0b"/>
      <circle cx="17.5" cy="15.5" r="2" fill="#10b981"/>
      <circle cx="12" cy="19" r="2" fill="#06b6d4"/>
      <circle cx="6.5" cy="15.5" r="2" fill="#3b82f6"/>
      <circle cx="6.5" cy="8.5" r="2" fill="#8b5cf6"/>
      <circle cx="12" cy="12" r="2" fill="#1e293b" className="dark:fill-white"/>
    </svg>
  ),
  Accenture: (
    <svg className="w-4 h-4 shrink-0 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 3l13 9-13 9V16l7.5-4L5 8V3z"/>
    </svg>
  ),
  IBM: (
    <svg className="w-6 h-3.5 shrink-0 text-blue-600 dark:text-blue-400" viewBox="0 0 40 20" fill="currentColor">
      <path d="M2 2h9v2H2zm0 4h9v2H2zm0 4h9v2H2zm0 4h9v2H2zm13-12h9v2h-9zm0 4h9v2h-9zm0 4h9v2h-9zm0 4h9v2h-9zm13-12h10v2h-10zm0 4h10v2h-10zm0 4h10v2h-10zm0 4h10v2h-10z"/>
    </svg>
  ),
  HCLTech: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0b5cff"/>
      <path d="M6 7h3v4h6V7h3v10h-3v-4H9v4H6V7z" fill="#ffffff"/>
    </svg>
  ),
  'Tech Mahindra': (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#e31837"/>
      <path d="M6 10h12M6 14h12M12 6v12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  LTIMindtree: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#0f172a"/>
      <path d="M6 16l6-9 6 9" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="14" r="2" fill="#38bdf8"/>
    </svg>
  ),
  Genpact: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#ff533d"/>
      <circle cx="12" cy="12" r="5" fill="#ffffff"/>
    </svg>
  ),
  Oracle: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="7" fill="none" stroke="#ea2e24" strokeWidth="3.2"/>
    </svg>
  ),
  Mphasis: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#48a02c"/>
      <path d="M7 8l5 4 5-4M7 12l5 4 5-4" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Hexaware: (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#f36f21"/>
      <path d="M7 7h3v4h4V7h3v10h-3v-4h-4v4H7V7z" fill="#ffffff"/>
    </svg>
  )
};

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
                  className="h-14 px-6 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 flex items-center gap-3 font-black text-slate-800 dark:text-slate-200 text-sm whitespace-nowrap shadow-sm hover:border-blue-500 hover:shadow-md transition cursor-pointer"
                >
                  {companyIcons[comp] || null}
                  <span>{comp}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 sm:gap-6 animate-marquee-left shrink-0">
              {row1Companies.map((comp, idx) => (
                <div
                  key={`repeat1-${idx}`}
                  className="h-14 px-6 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 flex items-center gap-3 font-black text-slate-800 dark:text-slate-200 text-sm whitespace-nowrap shadow-sm hover:border-blue-500 hover:shadow-md transition cursor-pointer"
                >
                  {companyIcons[comp] || null}
                  <span>{comp}</span>
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
                  className="h-14 px-6 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 flex items-center gap-3 font-black text-slate-800 dark:text-slate-200 text-sm whitespace-nowrap shadow-sm hover:border-orange-500 hover:shadow-md transition cursor-pointer"
                >
                  {companyIcons[comp] || null}
                  <span>{comp}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 sm:gap-6 animate-marquee-right shrink-0">
              {row2Companies.map((comp, idx) => (
                <div
                  key={`repeat2-${idx}`}
                  className="h-14 px-6 rounded-2xl bg-slate-50 dark:bg-[#101626] border border-slate-200 dark:border-slate-800 flex items-center gap-3 font-black text-slate-800 dark:text-slate-200 text-sm whitespace-nowrap shadow-sm hover:border-orange-500 hover:shadow-md transition cursor-pointer"
                >
                  {companyIcons[comp] || null}
                  <span>{comp}</span>
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
