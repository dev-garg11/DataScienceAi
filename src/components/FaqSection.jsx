import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/5trainersData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 dark:bg-[#070b14] border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 mb-2">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
            Data Science Course in Mohali — <span className="text-blue-600 dark:text-blue-400">Questions Answered</span>
          </h2>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const numStr = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition shadow-sm hover:shadow"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-white cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-mono font-black text-xs sm:text-sm">
                      {numStr}
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-96 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 p-0'
                  }`}
                >
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
