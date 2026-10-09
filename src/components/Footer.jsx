import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 pb-28 md:pb-16 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 text-white font-extrabold text-lg mb-4">
            <GraduationCap className="w-5 h-5 text-brand-500" />
            <span>Morph Meta Academy</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            Best Data Science Course in Chandigarh. Empowering students with industry-ready practical skills in Data Analytics, Python, SQL, and AI.
          </p>
          <div className="text-xs text-slate-500">
            © 2026 Morph Meta Academy, Chandigarh.<br />All rights reserved.
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Key Tracks</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#tools" className="hover:text-white transition">Python Training Chandigarh</a></li>
            <li><a href="#tools" className="hover:text-white transition">Advanced Excel Course</a></li>
            <li><a href="#tools" className="hover:text-white transition">SQL Database Masterclass</a></li>
            <li><a href="#projects" className="hover:text-white transition">8 Student Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Websites</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="https://www.morphacademy.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
                www.morphacademy.com
              </a>
            </li>
            <li>
              <a href="https://www.boxfy.co.in" target="_blank" rel="noreferrer" className="hover:text-white transition">
                www.boxfy.co.in
              </a>
            </li>
            <li>
              <a href="#roadmap" className="hover:text-white transition">
                6-Month Roadmap
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Campus Location & Hours</h4>
          <ul className="space-y-2 text-xs">
            <li>📍 SCO 64-65, 4th Floor, Sector 34A, Chandigarh, 160022</li>
            <li>📞 Helpline: 9815489999</li>
            <li>⏰ Mon – Sat: 9:00 AM – 7:00 PM</li>
            <li>⏰ Sun: Special Demos on Appointment</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

