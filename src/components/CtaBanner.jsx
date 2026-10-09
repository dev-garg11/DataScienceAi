import React from 'react';
import { Phone } from 'lucide-react';

export default function CtaBanner({ onOpenDemo }) {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-brand-700 via-purple-700 to-pink-700 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
          Apna Future Future-Proof Karo ✨
        </h2>
        <p className="text-base sm:text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
          Join Morph Meta Academy in Sector 34A Chandigarh. 6-Month Hands-on Program with 8 Real Projects and 100% Placement Support.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-900 hover:bg-yellow-300 font-black text-base shadow-2xl hover:scale-105 transition-all"
          >
            Book Free Demo Class Now
          </button>
          <a
            href="tel:9815489999"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-white/60 hover:bg-white/10 font-bold text-base transition flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call Helpline: 9815489999</span>
          </a>
        </div>
      </div>
    </section>
  );
}

