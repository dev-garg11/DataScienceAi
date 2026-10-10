import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { courseInfo } from '../data/5trainersData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 pb-24 md:pb-16 border-t border-slate-800 text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Brand */}
        <div>
          <div className="h-9 w-max px-3 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-lg tracking-wider mb-4">
            5Trainers
          </div>
          <p className="text-slate-400 leading-relaxed mb-4 text-xs">
            Leading industrial IT & Data Science training institute in Mohali. 100% practical learning with real projects, industry mentorship, and dedicated placement support.
          </p>
          <div className="text-slate-500 text-xs">
            © 2026 5Trainers Technologies Pvt. Ltd.<br />All rights reserved.
          </div>
        </div>

        {/* Courses in Mohali */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Courses in Mohali</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#curriculum" className="hover:text-white transition">Data Science Course in Mohali</a></li>
            <li><a href="#curriculum" className="hover:text-white transition">Artificial Intelligence Course</a></li>
            <li><a href="#projects" className="hover:text-white transition">Full Stack Development Course</a></li>
            <li><a href="#roles" className="hover:text-white transition">Data Analytics Training</a></li>
            <li><a href="#roles" className="hover:text-white transition">Python Programming Industrial Training</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#curriculum" className="hover:text-white transition">Curriculum & 9 Modules</a></li>
            <li><a href="#projects" className="hover:text-white transition">12 Industry Deliverables</a></li>
            <li><a href="#case-studies" className="hover:text-white transition">Student Case Studies</a></li>
            <li><a href="#faq" className="hover:text-white transition">Admissions FAQ</a></li>
            <li><a href="#lead-form" className="hover:text-white transition">Book Free Demo Class</a></li>
          </ul>
        </div>

        {/* Campus Location */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Visit Our Mohali Centre</h4>
          <div className="space-y-2.5 text-xs text-slate-400">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <span>{courseInfo.campusAddress}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <a href={`tel:${courseInfo.phoneRaw}`} className="hover:text-white font-bold text-white">
                {courseInfo.phone}
              </a>
            </div>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-800">
              ⏰ Mon – Sat: 9:00 AM – 7:00 PM<br />
              Offline Classroom & Interactive Labs
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
