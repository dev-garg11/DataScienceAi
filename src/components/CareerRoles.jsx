import React from 'react';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import { graduateRoles } from '../data/5trainersData';

export default function CareerRoles({ onOpenModal }) {
  return (
    <section id="roles" className="py-20 bg-white dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 mb-2">
            Career Opportunities
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
            Roles graduates <span className="text-blue-600 dark:text-blue-400">land in</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Our curriculum equips you for multi-dimensional roles across top IT and product companies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {graduateRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mb-2">
                  {role.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {role.desc}
                </p>
              </div>

              <button
                onClick={() => onOpenModal(`Eligibility for ${role.title}`)}
                className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline pt-2 border-t border-slate-200 dark:border-slate-800"
              >
                <span>Check Eligibility</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

