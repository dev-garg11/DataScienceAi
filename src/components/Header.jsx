import React, { useState } from 'react';
import { PhoneCall, Phone, Menu, X, ChevronDown } from 'lucide-react';
import { courseInfo } from '../data/5trainersData';

export default function Header({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/[0.94] dark:bg-[#070b14]/[0.94] backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div className="h-9 px-2.5 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg tracking-wider shadow-sm">
              5Trainers
            </div>
            <span className="hidden sm:inline-block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Mohali Campus
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 font-semibold text-[13.5px] text-slate-700 dark:text-slate-300">
            <a href="#curriculum" className="text-blue-600 font-bold hover:text-blue-700">Data Science</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">12 Projects</a>
            <a href="#roles" className="hover:text-blue-600 transition-colors">Career Roles</a>
            <a href="#case-studies" className="hover:text-blue-600 transition-colors">Case Studies</a>
            <a href="#student-videos" className="text-red-600 dark:text-red-400 font-bold hover:text-red-700 transition-colors">Student Videos</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">FAQs</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Request Callback */}
            <button
              onClick={() => onOpenModal('Request a Callback')}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm px-3.5 py-2 transition-colors shadow-sm"
            >
              <PhoneCall className="w-4 h-4" />
              <span className="hidden sm:inline">Request Callback</span>
            </button>

            {/* Direct Phone Number */}
            <a
              href={`tel:${courseInfo.phoneRaw}`}
              className="hidden md:inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-3 py-2 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{courseInfo.phone}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm pt-16">
          <div className="bg-white dark:bg-[#0c101c] p-6 shadow-2xl border-b border-slate-200 dark:border-slate-800 space-y-4">
            <nav className="flex flex-col gap-3 font-bold text-slate-800 dark:text-slate-200 text-sm">
              <a href="#curriculum" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">Data Science Curriculum</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">12 Industry Projects</a>
              <a href="#roles" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">Career Roles</a>
              <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">Student Case Studies</a>
              <a href="#student-videos" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800 text-red-600 dark:text-red-400 font-bold">Students on Camera</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">FAQs</a>
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${courseInfo.phoneRaw}`}
                className="w-full py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-center text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {courseInfo.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('Request a Callback');
                }}
                className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-bold text-center text-xs"
              >
                Book Free Trial Class
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

