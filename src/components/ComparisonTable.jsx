import React from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import { comparisonData } from '../data/comparison';

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 bg-slate-100/70 dark:bg-[#0e1422] border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black text-brand-600 dark:text-brand-400 tracking-widest uppercase">
            Career Clarity
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-2">Data Analyst vs Data Scientist Comparison</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Understand which career path aligns with your current qualifications and long-term ambitions.
          </p>

          {/* Mobile Swipe Hint Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-[11px] font-bold mt-4 md:hidden">
            <ChevronsLeftRight className="w-3.5 h-3.5 animate-pulse" />
            <span>Swipe sideways to view full table</span>
          </div>
        </div>

        <div className="w-full max-w-full overflow-hidden rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse glass-card min-w-[560px]">
              <thead>
                <tr className="bg-slate-200/80 dark:bg-slate-800 text-xs sm:text-sm uppercase tracking-wider font-extrabold text-slate-700 dark:text-slate-200">
                  <th className="p-4 sm:p-5">Parameter</th>
                  <th className="p-4 sm:p-5 text-brand-600 dark:text-brand-400">
                    Data Analyst (Trainee / Executive)
                  </th>
                  <th className="p-4 sm:p-5 text-purple-600 dark:text-purple-400">
                    Data Scientist / AI Engineer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 sm:p-5 font-bold">{row.parameter}</td>
                    <td
                      className={`p-4 sm:p-5 ${
                        row.analystHighlight
                          ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                          : ''
                      }`}
                    >
                      {row.analyst}
                    </td>
                    <td className="p-4 sm:p-5">{row.scientist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

