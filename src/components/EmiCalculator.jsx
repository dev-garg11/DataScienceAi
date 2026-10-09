import React, { useState } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function EmiCalculator({ onOpenDemo }) {
  const [selectedTrackFee, setSelectedTrackFee] = useState(45000);
  const [tenure, setTenure] = useState(6);

  const emi = Math.round(selectedTrackFee / tenure);

  return (
    <section id="emi-calc" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-brand-500/30 shadow-2xl relative overflow-hidden bg-gradient-to-br from-white via-brand-50/20 to-purple-50/20 dark:from-[#0f1424] dark:via-[#0c101c] dark:to-[#141028]">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-black tracking-wider uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
            0% Interest EMI & Fee Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
            Affordable installment plans designed for students, fresh graduates, and career switchers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Controls */}
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                Select Training Program
              </label>
              <select
                value={selectedTrackFee}
                onChange={(e) => setSelectedTrackFee(Number(e.target.value))}
                className="w-full p-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value={45000}>6-Month Full-Stack Data Science & AI Masterclass (₹45,000)</option>
                <option value={32000}>3-Month Fast-Track Data Analytics & Python (₹32,000)</option>
                <option value={24000}>2-Month Python + SQL Database Foundation (₹24,000)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                Select EMI Tenure (Months)
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[3, 6, 9].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setTenure(m)}
                    className={`py-3 px-4 rounded-xl text-xs font-extrabold border transition ${
                      tenure === m
                        ? 'bg-brand-600 border-brand-600 text-white shadow-md shadow-brand-500/30'
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand-400'
                    }`}
                  >
                    {m} Months
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Zero processing fee & no hidden charges</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <span>Includes all 8 project guides, lab setup & certification</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-600 to-purple-700 text-white shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-brand-200">
                Monthly Installment
              </span>
              <div className="text-4xl sm:text-5xl font-black mt-1 mb-2">
                ₹{emi.toLocaleString('en-IN')}
                <span className="text-sm font-semibold text-brand-200"> / month</span>
              </div>
              <p className="text-xs text-brand-100">
                0% interest installment for {tenure} months. Total fee: ₹{selectedTrackFee.toLocaleString('en-IN')}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 rounded-xl bg-white text-brand-700 hover:bg-yellow-300 hover:text-slate-900 font-extrabold text-xs sm:text-sm shadow-lg transition flex items-center justify-center gap-2"
              >
                <span>Apply for 0% EMI Demo Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

