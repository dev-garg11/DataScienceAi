import React, { useState } from 'react';
import { PhoneCall, Phone, Menu, X, ChevronDown, Mail } from 'lucide-react';
import { courseInfo } from '../data/5trainersData';

export default function Header({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdown, setPhoneDropdown] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/[0.94] dark:bg-[#070b14]/[0.94] backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <div className="h-9 px-2.5 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg tracking-wider shadow-sm">
              Morph Academy
            </div>
            <span className="hidden sm:inline-block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Sector 34A, Chandigarh
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

            {/* Direct Phone Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setPhoneDropdown(!phoneDropdown)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-3 py-2 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{courseInfo.phone}</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </button>

              {phoneDropdown && (
                <div
                  className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800 shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setPhoneDropdown(false)}
                >
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 py-1">
                    Call Direct Helpline
                  </div>
                  {courseInfo.phones.map((p, i) => (
                    <a
                      key={i}
                      href={`tel:${p.raw}`}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{p.display}</span>
                    </a>
                  ))}
                  <div className="border-t border-slate-100 dark:border-slate-800 mt-1 pt-1">
                    <a
                      href={`mailto:${courseInfo.email}`}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-500" />
                      <span className="truncate">{courseInfo.email}</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

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
          <div className="bg-white dark:bg-[#0c101c] p-6 shadow-2xl border-b border-slate-200 dark:border-slate-800 space-y-4 max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col gap-3 font-bold text-slate-800 dark:text-slate-200 text-sm">
              <a href="#curriculum" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">Data Science Curriculum</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">12 Industry Projects</a>
              <a href="#roles" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">Career Roles</a>
              <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">Student Case Studies</a>
              <a href="#student-videos" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800 text-red-600 dark:text-red-400 font-bold">Students on Camera</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">FAQs</a>
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                Helpline Numbers:
              </div>
              {courseInfo.phones.map((p, i) => (
                <a
                  key={i}
                  href={`tel:${p.raw}`}
                  className="w-full py-2 px-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 font-bold text-xs flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{p.display}</span>
                  </span>
                  <span className="text-[10px] text-emerald-600 font-semibold">Call Now</span>
                </a>
              ))}
              <a
                href={`mailto:${courseInfo.email}`}
                className="w-full py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-xs flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>{courseInfo.email}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal('Request a Callback');
                }}
                className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-bold text-center text-xs mt-2"
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
