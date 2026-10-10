import React, { useState } from 'react';
import { CheckCircle2, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';
import { curriculumModules } from '../data/5trainersData';

export default function Curriculum({ onOpenModal }) {
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const displayedModules = showAll ? curriculumModules : curriculumModules.slice(0, 4);

  return (
    <section id="curriculum" className="py-20 lg:py-28 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 mb-2">
            Curriculum
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
            What you’ll <span className="text-blue-600 dark:text-blue-400">learn</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            A comprehensive 6-month industrial journey designed with 15+ tech leaders to make you job-ready from day one.
          </p>
        </div>

        {/* Modules Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-0 sm:pl-10">
          {/* Animated Vertical Line Beam */}
          <div className="hidden sm:block absolute left-4 top-8 bottom-8 w-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden pointer-events-none">
            <div className="timeline-beam" />
          </div>

          <div className="space-y-6">
            {displayedModules.map((module, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div
                  key={module.num}
                  className="bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-sm glow-card transition relative z-10"
                >
                  {/* Timeline indicator node */}
                  <div className="hidden sm:flex absolute -left-[35px] top-7 w-7 h-7 rounded-full bg-blue-600 text-white font-black text-xs items-center justify-center shadow-md ring-4 ring-white dark:ring-[#070b14]">
                    {idx + 1}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="sm:hidden w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                        {module.num}
                      </span>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-orange-600 dark:text-orange-400 mr-2">
                          {module.phase}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          • {module.duration}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Less' : 'Details'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  <h3
                    onClick={() => setExpandedIndex(isExpanded ? -1 : idx)}
                    className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-3 cursor-pointer hover:text-blue-600 transition-colors"
                  >
                    {module.title}
                  </h3>

                  {/* Topics List with Smooth Expand */}
                  <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100 mb-6' : 'max-h-24 opacity-85 mb-4'}`}>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Core Topics:</div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {module.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Badges */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                      💻 {module.deliverables.caseStudies}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-xs font-semibold">
                      🤝 {module.deliverables.interviews}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                      📜 {module.deliverables.assignments}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-semibold">
                      🧩 {module.deliverables.quizzes}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Show all toggle & Brochure CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full sm:w-auto px-7 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-[0.98] transition flex items-center justify-center gap-2"
          >
            <span>{showAll ? 'Show Fewer Modules' : 'Show All 9 Modules'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
          <button
            onClick={() => onOpenModal('Download Full Syllabus PDF')}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-xs sm:text-sm shadow-md transition"
          >
            Download Full Syllabus PDF
          </button>
        </div>

      </div>
    </section>
  );
}
