import React, { useState } from 'react';
import {
  GraduationCap,
  Sun,
  Moon,
  MessageCircle,
  Phone,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

export default function Navbar({ isDark, toggleTheme, onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Placements', href: '#placement-partners' },
    { name: 'Tools', href: '#tools' },
    { name: '8 Projects', href: '#projects' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Analyst vs Scientist', href: '#comparison' },
    { name: 'Fee & EMI', href: '#emi-calc' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      <header className="sticky top-0 z-40 glass-nav border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-purple-600 dark:from-white dark:to-slate-200">
                Morph Meta Academy
              </span>
              <span className="text-[10px] block font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                Sector 34A, Chandigarh
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 font-semibold text-[13.5px] text-slate-600 dark:text-slate-300 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons Group */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* WhatsApp Quick Action */}
            <a
              href="https://wa.me/919815489999?text=Hi%2C%20I%20am%20interested%20in%20the%20Data%20Science%20Course%20at%20Morph%20Meta%20Academy"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Phone Call Quick Action */}
            <a
              href="tel:9815489999"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-brand-500" />
              <span>9815489999</span>
            </a>

            {/* Demo CTA Button */}
            <button
              onClick={onOpenDemo}
              className="bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 text-white px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-xl shadow-md shadow-brand-500/20 hover:scale-[1.02] transition-all whitespace-nowrap"
            >
              Book Free Demo
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className="xl:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md transition-all"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-[#0b101b] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-md shadow-brand-500/30">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-extrabold text-sm block leading-none">Morph Meta Academy</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">Sector 34A, Chandigarh</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Menu"
                  className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-1 mt-6 text-sm font-bold text-slate-700 dark:text-slate-200">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-200"
                >
                  {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>

              <a
                href="tel:9815489999"
                className="w-full py-3 rounded-xl border border-brand-500/40 text-brand-600 dark:text-brand-400 font-bold text-center flex items-center justify-center gap-2 text-xs bg-brand-50/50 dark:bg-brand-950/20"
              >
                <Phone className="w-4 h-4 text-brand-500" />
                <span>Helpline: 9815489999</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700 text-white py-3.5 rounded-xl font-black text-center text-xs shadow-lg shadow-brand-500/25"
              >
                Book Free Demo Class
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

