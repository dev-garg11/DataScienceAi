import React from 'react';
import { Phone, MapPin, Mail, ExternalLink } from 'lucide-react';
import { courseInfo } from '../data/5trainersData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 pb-24 md:pb-16 border-t border-slate-800 text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Brand */}
        <div>
          <div className="h-9 w-max px-3 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg tracking-wider mb-4">
            Morph Academy
          </div>
          <p className="text-slate-400 leading-relaxed mb-4 text-xs">
            Leading practical IT, Data Science & AI training institute in Chandigarh. 100% practical lab training with industry mentors and placement assistance.
          </p>
          <div className="text-slate-500 text-xs">
            © 2026 Morph Academy, Chandigarh.<br />All rights reserved.
          </div>
        </div>

        {/* Courses in Chandigarh */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Courses Offered</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#curriculum" className="hover:text-white transition">Data Science Course in Chandigarh</a></li>
            <li><a href="#curriculum" className="hover:text-white transition">Artificial Intelligence & ML</a></li>
            <li><a href="#projects" className="hover:text-white transition">Full Stack Development Course</a></li>
            <li><a href="#roles" className="hover:text-white transition">Data Analytics & Business Intelligence</a></li>
            <li><a href="#roles" className="hover:text-white transition">Python Programming Industrial Training</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#curriculum" className="hover:text-white transition">Curriculum & 9 Modules</a></li>
            <li><a href="#projects" className="hover:text-white transition">12 Industry Deliverables</a></li>
            <li><a href="#case-studies" className="hover:text-white transition">Student Case Studies</a></li>
            <li><a href="#student-videos" className="hover:text-white transition">Students on Camera</a></li>
            <li><a href="#faq" className="hover:text-white transition">Admissions FAQ</a></li>
            <li><a href="#lead-form" className="hover:text-white transition">Book Free Demo Class</a></li>
          </ul>
        </div>

        {/* Campus Location & All 3 Phones */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Campus Location & Contact</h4>
          <div className="space-y-3 text-xs text-slate-400">
            {/* Address */}
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="text-slate-300 font-medium leading-relaxed">
                {courseInfo.campusAddress}
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <a
                href={`mailto:${courseInfo.email}`}
                className="text-slate-300 hover:text-white font-semibold transition"
              >
                {courseInfo.email}
              </a>
            </div>

            {/* All 3 Phone Numbers */}
            <div className="pt-2 border-t border-slate-800 space-y-1.5">
              <div className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                Helpline Numbers:
              </div>
              {courseInfo.phones.map((p, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <a
                    href={`tel:${p.raw}`}
                    className="text-white font-bold hover:text-emerald-400 transition"
                  >
                    {p.display}
                  </a>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-slate-500 pt-1">
              ⏰ Mon – Sat: 9:00 AM – 7:00 PM<br />
              Offline Classroom & Practical Labs
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
