import React from 'react';
import { Code, ArrowRight, ExternalLink } from 'lucide-react';
import { projectDetails } from '../data/projects';

export default function ProjectsShowcase({ onSelectProject, onOpenDemo }) {
  return (
    <section id="projects" className="py-24 bg-slate-100/80 dark:bg-[#0d1320] border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-black text-brand-600 dark:text-brand-400 tracking-widest uppercase">
              Concrete Portfolio Proof
            </span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2">8 Real Industry Deliverables</h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2">
              Recruiters hire skills backed by proof. Build 8 production-grade deliverables with clean Python code and interactive dashboards.
            </p>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs hover:bg-brand-700 shadow transition flex items-center gap-2"
          >
            <Code className="w-4 h-4" />
            <span>Get All Project Codes</span>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectDetails.map((project) => {
            if (project.isMaster) {
              return (
                <div
                  key={project.id}
                  className="glass-card rounded-2xl p-6 border-2 border-brand-500/60 hover-glow flex flex-col justify-between bg-brand-50/10 dark:bg-brand-950/20"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold mb-4">
                      {project.num}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                      {project.category}
                    </span>
                    <h3 className="text-base font-black text-slate-900 dark:text-white mt-1 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 mb-4">
                      {project.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2 rounded-xl bg-brand-600 text-white font-bold text-xs hover:bg-brand-700 transition flex items-center justify-center gap-1"
                  >
                    <span>View Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover-glow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold mb-4">
                    {project.num}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                    {project.category}
                  </span>
                  <h3 className="text-base font-black text-slate-900 dark:text-white mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 mb-4">
                    {project.desc}
                  </p>
                </div>
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2 rounded-xl border border-brand-500/40 text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40 font-bold text-xs transition flex items-center justify-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

