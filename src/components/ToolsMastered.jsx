import React from 'react';
import { Code2, FileSpreadsheet, Table, Database, Check } from 'lucide-react';
import { toolsList } from '../data/tools';

const iconMap = {
  Code2: Code2,
  FileSpreadsheet: FileSpreadsheet,
  Table: Table,
  Database: Database
};

export default function ToolsMastered() {
  return (
    <section id="tools" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-black text-brand-600 dark:text-brand-400 tracking-widest uppercase">
          Corporate Tech Stack
        </span>
        <h2 className="text-3xl sm:text-5xl font-black mt-2">Data Science Tools You'll Master</h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
          From your first line of Python to querying relational SQL databases and deploying predictive algorithms — the exact tools top employers list in job descriptions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {toolsList.map((tool, idx) => {
          const IconComp = iconMap[tool.icon] || Code2;
          return (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover-glow">
              <div className={`w-12 h-12 rounded-xl bg-${tool.color}-500/10 text-${tool.color}-600 dark:text-${tool.color}-400 flex items-center justify-center mb-4 font-black`}>
                <IconComp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">{tool.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">{tool.desc}</p>
              <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pt-3 border-t border-slate-200 dark:border-slate-800">
                {tool.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

