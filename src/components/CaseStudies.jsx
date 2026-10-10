import React from 'react';
import { Bot, LineChart, CheckCircle } from 'lucide-react';
import { caseStudies } from '../data/5trainersData';

export default function CaseStudies({ onOpenModal }) {
  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 mb-2">
            Proven Results
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
            Student Case <span className="text-blue-600 dark:text-blue-400">Studies</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Real enterprise problems solved by our students during their 6-month hands-on cohorts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-slate-50 dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4">
                <span>{cs.category}</span>
              </div>

              <div className="flex items-center justify-between gap-4 mb-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {cs.title}
                </h3>
              </div>

              <div className="inline-block px-3 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-black text-sm mb-4">
                ⭐ {cs.stat}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {cs.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                {cs.tools.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

