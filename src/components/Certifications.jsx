import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/5trainersData';

export default function Certifications() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 mb-2">
            Quality Assurance
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
            Certified for <span className="text-blue-600 dark:text-blue-400">Quality Education</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider block">
                  {cert.name}
                </span>
                <h3 className="text-base font-black text-slate-900 dark:text-white mt-0.5 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

