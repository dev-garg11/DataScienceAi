import React from 'react';
import { Monitor, Users, Flame, PartyPopper, Headset } from 'lucide-react';
import { lifeAtInstitute } from '../data/5trainersData';

const iconMap = [Monitor, Users, Flame, PartyPopper, Headset];

export default function LifeAtInstitute() {
  return (
    <section className="py-20 bg-white dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 mb-2">
            Campus Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
            Life at <span className="text-blue-600 dark:text-blue-400">5Trainers Mohali</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            A collaborative learning environment built for real coder culture, networking, and industry immersion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {lifeAtInstitute.map((item, idx) => {
            const Icon = iconMap[idx] || Monitor;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

