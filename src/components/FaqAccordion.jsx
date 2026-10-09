import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqsList } from '../data/faq';

export default function FaqAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-xs font-black text-brand-600 dark:text-brand-400 tracking-widest uppercase">
          Got Questions?
        </span>
        <h2 className="text-3xl sm:text-5xl font-black mt-2">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqsList.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="border border-slate-200 dark:border-slate-800 rounded-2xl glass-card overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-base text-slate-900 dark:text-white"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-brand-500' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="p-5 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

