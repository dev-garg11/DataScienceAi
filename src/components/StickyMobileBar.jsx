import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { courseInfo } from '../data/5trainersData';

export default function StickyMobileBar({ onOpenModal }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-xl border-t border-slate-200/90 dark:border-slate-800/90 p-2.5 px-3 flex items-center justify-between gap-2 md:hidden shadow-[0_-10px_25px_-5px_rgba(0,0,0,0.3)]">
      <a
        href={`tel:${courseInfo.phoneRaw}`}
        className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 border border-slate-300/80 dark:border-slate-700/80 active:scale-95 transition"
      >
        <Phone className="w-3.5 h-3.5 text-blue-600" />
        <span>Call</span>
      </a>
      <a
        href={`https://wa.me/919501489999?text=${encodeURIComponent('Hi, I am interested in the Data Science Course at Morph Academy Sector 34A Chandigarh')}`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>
      <button
        onClick={() => onOpenModal('Book Free Demo Class')}
        className="flex-[1.4] py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs flex items-center justify-center gap-1 shadow-md shadow-blue-500/30 active:scale-95 transition"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Book Demo</span>
      </button>
    </div>
  );
}
