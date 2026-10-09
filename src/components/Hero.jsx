import React from 'react';
import { Layers, Monitor, Award, ArrowRight, PhoneCall, MapPin } from 'lucide-react';

export default function Hero({ onOpenDemo }) {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden mesh-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-brand-500/30 text-xs font-bold text-brand-600 dark:text-brand-400 mb-6 shadow-sm">
              <span className="text-sm">🏆</span>
              <span>#1 Rated Data Science Training in Chandigarh</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-6">
              Next-Gen <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-purple-500 to-pink-500">
                Data Science & AI
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Launch your future with AI-powered Data Science. Master Python, Machine Learning, SQL, Generative AI & Agentic Automation in just 6 months — even with zero coding background.
            </p>

            {/* Key USPs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Layers className="w-4 h-4 text-brand-500 flex-shrink-0" />
                <span className="text-xs font-bold">8 Real Projects</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Monitor className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-xs font-bold">Daily 2-Hr Guided Labs</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Award className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-xs font-bold">Placement Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-purple-600 hover:from-brand-700 hover:to-purple-700 text-white font-extrabold text-sm shadow-lg shadow-brand-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:9815489999"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl glass-card font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 transition flex items-center justify-center gap-2 text-slate-800 dark:text-white"
              >
                <PhoneCall className="w-4 h-4 text-brand-500" />
                <span>Call: 9815489999</span>
              </a>
            </div>

            {/* Verified Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 mt-10 pt-8 border-t border-slate-200 dark:border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">6 Months</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase">24 Wks / 20 hrs/wk</div>
              </div>
              <div className="w-px h-10 bg-slate-300 dark:bg-slate-800"></div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">8 Projects</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase">Portfolio Proof</div>
              </div>
              <div className="w-px h-10 bg-slate-300 dark:bg-slate-800"></div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-500">Sec 34A</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase">SCO 64-65, 4th Flr</div>
              </div>
            </div>
          </div>

          {/* Right Visual Hero Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                alt="Data Science Training in Sector 34A Chandigarh"
                className="w-full h-[410px] object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-2.5 py-1 rounded-full bg-brand-600 text-[10px] font-black uppercase tracking-wider mb-2 inline-block">
                  Sector 34A Campus
                </span>
                <h3 className="text-base font-black leading-snug">Guided Computer Lab & Practical Project Training</h3>
                <p className="text-xs text-slate-300 mt-1">Daily coding labs in Python, SQL, Excel, Pandas & Machine Learning.</p>
              </div>
            </div>

            {/* Floating Badge 1 */}
            <div className="hidden sm:flex absolute -top-4 -left-6 glass-card p-3 rounded-2xl shadow-xl border border-brand-500/30 items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-500/20 text-brand-600 dark:text-brand-400 flex items-center justify-center font-black">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 dark:text-white">Sector 34A, Chandigarh</div>
                <div className="text-[10px] text-brand-600 dark:text-brand-400 font-bold">SCO 64-65, 4th Floor</div>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="hidden sm:flex absolute -bottom-4 -right-4 glass-card p-3 rounded-2xl shadow-xl border border-emerald-500/30 items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900 dark:text-white">Direct Helpline</div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">📞 9815489999</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

