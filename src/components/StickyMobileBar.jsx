import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';

export default function StickyMobileBar({ onOpenDemo }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-xl border-t border-slate-200/90 dark:border-slate-800/90 p-2.5 px-3 flex items-center justify-between gap-2 md:hidden shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.3)]">
      <a
        href="tel:9815489999"
        className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-300/80 dark:border-slate-700/80 active:scale-95 transition"
      >
        <Phone className="w-3.5 h-3.5 text-brand-500" />
        <span>Call</span>
      </a>
      <a
        href="https://wa.me/919815489999?text=Hi%2C%20I%20am%20interested%20in%20the%20Data%20Science%20Course%20at%20Morph%20Meta%20Academy%20Sector%2034A"
        target="_blank"
        rel="noreferrer"
        className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>
      <button
        onClick={onOpenDemo}
        className="flex-[1.4] py-2.5 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 text-white font-black text-xs flex items-center justify-center gap-1 shadow-md shadow-brand-500/30 active:scale-95 transition"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Book Demo</span>
      </button>
    </div>
  );
}

