import React, { useState } from 'react';
import { Flame, Star, StarHalf, Loader2 } from 'lucide-react';
import { courseInfo } from '../data/5trainersData';

export default function Hero({ onOpenModal, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: true
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormData({ name: '', email: '', phone: '', whatsapp: true });
      onSuccess(`🎉 Mubarak! Your Free 60-Min Live Trial Class at Morph Academy (Sector 34A Chandigarh) is booked. Our team will contact you shortly.`);
    }, 1000);
  };

  return (
    <section className="bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_440px] gap-10 lg:gap-14 items-center">
        
        {/* Left Column */}
        <div>
          <div className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-orange-600 dark:text-orange-400 mb-3 sm:mb-4">
            {courseInfo.badge}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-5">
            Data Science & AI Course in{' '}
            <span className="relative whitespace-nowrap text-blue-600 dark:text-blue-400 inline-block">
              Chandigarh
              <svg viewBox="0 0 200 18" preserveAspectRatio="none" className="absolute left-0 right-0 -bottom-3 w-full h-5 overflow-visible pointer-events-none" aria-hidden="true">
                <path d="M2 10 Q 50 2, 100 9 T 198 7" fill="none" stroke="#f97316" strokeWidth="3.2" strokeLinecap="round" pathLength="1" className="animate-wavy-underline" />
                <path d="M3 13 Q 55 5, 102 12 T 197 10" fill="none" stroke="#ea580c" strokeWidth="2.2" strokeLinecap="round" pathLength="1" className="animate-wavy-underline-delayed" />
              </svg>
            </span>
          </h1>

          <p className="text-[15px] sm:text-[17px] leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mb-6">
            {courseInfo.description}
          </p>

          {/* Key Program Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-7 max-w-2xl">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-xs font-bold text-slate-800 dark:text-slate-200">
              <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></span>
              <span>100% Practical Labs</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-xs font-bold text-slate-800 dark:text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0"></span>
              <span>10+ Capstone Projects</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-900/40 text-xs font-bold text-slate-800 dark:text-slate-200">
              <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0"></span>
              <span>Python & GenAI</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-orange-50/80 dark:bg-orange-950/30 border border-orange-200/60 dark:border-orange-900/40 text-xs font-bold text-slate-800 dark:text-slate-200">
              <span className="w-2 h-2 rounded-full bg-orange-600 flex-shrink-0"></span>
              <span>100% Placement Help</span>
            </div>
          </div>

          {/* 4 Action Buttons in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6 max-w-md">
            <a
              href="#lead-form"
              className="h-12 w-full rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center justify-center transition shadow-sm"
            >
              Enroll now
            </a>
            <button
              onClick={() => onOpenModal('Download Brochure')}
              className="h-12 w-full rounded-lg bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center justify-center transition shadow-sm"
            >
              Download brochure
            </button>
            <button
              onClick={() => onOpenModal('Attempt Assessment Test')}
              className="h-12 w-full rounded-lg bg-[#ea580c] hover:bg-[#c2410c] active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center justify-center transition shadow-sm"
            >
              Attempt test
            </button>
            <button
              onClick={() => onOpenModal('Get Interview Questions Pack')}
              className="h-12 w-full rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9] active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center justify-center transition shadow-sm"
            >
              Interview question
            </button>
          </div>

          {/* Social Proof Badges */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mb-6 bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">
            <Flame className="w-4 h-4 text-orange-500 fill-orange-500 animate-flame" />
            <span>{courseInfo.cohortInfo}</span>
          </div>

          <div className="flex items-baseline gap-3">
            <div className="text-3xl font-black">{courseInfo.rating}<span className="text-base text-slate-500">/5</span></div>
            <div>
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <StarHalf className="w-4 h-4 fill-amber-400" />
              </div>
              <div className="text-xs text-slate-500 font-semibold">{courseInfo.reviewsCount}</div>
            </div>
          </div>
        </div>

        {/* Right Column: Lead Form */}
        <div id="lead-form" className="scroll-mt-24">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-[#0d1320] text-slate-900 dark:text-slate-100 rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 relative"
          >
            <h3 className="text-center text-lg font-black mb-1">
              Book a Live Class - <span className="text-blue-600 dark:text-blue-400">Free</span>
            </h3>
            <p className="text-center text-xs text-slate-500 dark:text-slate-400 mb-5">
              Free 60-min trial — no account, no payment
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="w-full h-11 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                  <span className="px-3 text-xs font-bold text-slate-500 border-r border-slate-300 dark:border-slate-700">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 h-full px-3 text-sm bg-transparent border-none outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Your Course of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  disabled
                  className="w-full h-11 px-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-sm font-semibold opacity-90 cursor-not-allowed"
                >
                  <option>Data Science (6 Months Industrial Training)</option>
                </select>
              </div>

              <label className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.checked })}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Send me updates on WhatsApp</span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Booking Seat...</span>
                  </>
                ) : (
                  'Book Free Class'
                )}
              </button>

              <div className="text-center text-[11px] text-slate-400">
                By continuing, you agree to Morph Academy Terms & Conditions
              </div>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
