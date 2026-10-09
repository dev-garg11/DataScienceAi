import React from 'react';
import { roadmapMonths } from '../data/roadmap';

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-black text-brand-600 dark:text-brand-400 tracking-widest uppercase">
          Structured Transformation
        </span>
        <h2 className="text-3xl sm:text-5xl font-black mt-2">6-Month Step-by-Step Learning Roadmap</h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
          Advance month-by-month through your transformation from novice to job-ready analyst.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmapMonths.map((item, idx) => (
          <div
            key={idx}
            className={`glass-card rounded-2xl p-6 border ${
              item.isMaster
                ? 'border-2 border-brand-500/60 bg-brand-50/10 dark:bg-brand-950/20'
                : 'border-slate-200 dark:border-slate-800'
            }`}
          >
            <span
              className={`px-3 py-1 rounded-full text-xs font-black ${
                item.isMaster
                  ? 'bg-brand-600 text-white'
                  : 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
              }`}
            >
              {item.month}
            </span>
            <h3 className="text-lg font-black mt-3 mb-2">{item.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">{item.desc}</p>
            <div className="text-xs font-semibold space-y-1 text-slate-700 dark:text-slate-300">
              {item.bullets.map((b, bIdx) => (
                <div key={bIdx}>🔹 {b}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

