import React from 'react';
import { statsMetrics } from '../data/5trainersData';

export default function StatsStrip() {
  return (
    <section className="bg-white dark:bg-[#090d16] pb-12 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 rounded-2xl py-6 sm:py-8 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 -mt-12 sm:-mt-16 relative z-10 shadow-xl gap-6">
          {statsMetrics.map((stat, idx) => (
            <div
              key={idx}
              className={`px-3 sm:px-4 ${
                idx !== statsMetrics.length - 1 ? 'lg:border-r lg:border-slate-200 dark:lg:border-slate-800' : ''
              }`}
            >
              <div className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 leading-tight">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

