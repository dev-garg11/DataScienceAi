import React from 'react';
import { Play, Sparkles, Youtube, CheckCircle2 } from 'lucide-react';

export const videoList = [
  {
    id: 'sd_hsh10F88',
    title: 'Student Review & Coding Lab Experience',
    tag: 'Lab Session',
    caption: 'Hands-on practical training and mentor guidance at Sector 34A Chandigarh campus.'
  },
  {
    id: 'rjNPet26kJ8',
    title: 'Project Building & Interview Preparation',
    tag: 'Success Story',
    caption: 'Building real data models, tackling interview coding rounds, and cracking placements.'
  },
  {
    id: 'gyi1rSTEl0U',
    title: 'Zero Coding to Data Science Transformation',
    tag: 'Student Journey',
    caption: 'How non-tech freshers learn Python, SQL and Machine Learning from scratch.'
  },
  {
    id: '39BBur_39CM',
    title: 'Campus Life & Live Project Demos',
    tag: 'Campus Vibes',
    caption: 'Collaborative development sprints and real-world project presentations.'
  }
];

export default function StudentVideos({ onOpenModal }) {
  return (
    <section id="student-videos" className="py-20 lg:py-28 bg-white dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs font-black tracking-wider uppercase mb-3">
            <Youtube className="w-4 h-4 text-red-600 fill-red-600" />
            <span>Students On Camera</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Hear Directly from Our <span className="text-blue-600 dark:text-blue-400">Students</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            Real feedback, project demos, and classroom moments from our Data Science cohorts at Sector 34A Chandigarh.
          </p>
        </div>

        {/* 4 Shorts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoList.map((video, idx) => (
            <div
              key={video.id}
              className="bg-slate-50 dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Responsive 9:16 Aspect Ratio Container */}
              <div className="relative w-full aspect-[9/16] bg-slate-950 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                  title={video.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-2 border border-blue-500/20">
                    {video.tag}
                  </span>
                  
                  <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white mb-1.5 leading-snug line-clamp-2">
                    {video.title}
                  </h3>
                  
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {video.caption}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Student</span>
                  </span>
                  
                  <a
                    href={`https://youtube.com/shorts/${video.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-red-600 transition flex items-center gap-1 text-[11px] font-semibold"
                  >
                    <span>Watch Full</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">Want to experience our classroom in person?</h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1">
              Visit our Sector 34A Chandigarh campus, attend a free 60-min live demo, and talk to current batch students.
            </p>
          </div>
          <button
            onClick={() => onOpenModal('Book Campus Visit & Meet Students')}
            className="px-7 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-yellow-300 hover:text-slate-900 font-extrabold text-xs sm:text-sm transition-all shadow-lg shrink-0 whitespace-nowrap"
          >
            Book Free Campus Visit
          </button>
        </div>

      </div>
    </section>
  );
}

