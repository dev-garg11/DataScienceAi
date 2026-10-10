import React, { useState } from 'react';
import { Code, Check, ArrowRight } from 'lucide-react';
import { studentProjects } from '../data/5trainersData';

export default function ProjectsSection({ onOpenModal }) {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 mb-2">
            Real Deliverables
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
            Projects our students <span className="text-blue-600 dark:text-blue-400">build</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Build 10–12 hands-on industry projects from regression algorithms to REST API deployment and interactive web dashboards.
          </p>
        </div>

        {/* 12 Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentProjects.map((p) => (
            <div
              key={p.id}
              className="bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-600 dark:text-blue-400 font-black text-xs flex items-center justify-center">
                    {String(p.id).padStart(2, '0')}
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {p.keywords.slice(0, 2).map((kw, kIdx) => (
                      <span key={kIdx} className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {p.desc}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 mb-4">
                  {p.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenModal(`Project Code & Setup: ${p.title}`)}
                className="w-full py-2.5 rounded-xl border border-blue-500/30 text-blue-600 dark:text-blue-400 font-bold text-xs hover:bg-blue-50 dark:hover:bg-blue-950/30 transition flex items-center justify-center gap-1.5"
              >
                <span>Get Project GitHub & Docs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenModal('All 12 Project Source Codes')}
            className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition"
          >
            Download All 12 Project Repositories
          </button>
        </div>

      </div>
    </section>
  );
}

