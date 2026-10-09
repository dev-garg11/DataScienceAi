import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function TopAnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: '04',
    hours: '12',
    minutes: '30',
    seconds: '15'
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);
    targetDate.setHours(19, 0, 0, 0);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) return;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-white text-xs py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 mx-auto md:mx-0">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px] border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>New Batch: Sector 34A Chandigarh</span>
          </span>
          <span className="text-slate-300 hidden sm:inline">
            Starting in{' '}
            <strong className="text-white font-mono font-bold">{timeLeft.days}</strong>d :{' '}
            <strong className="text-white font-mono font-bold">{timeLeft.hours}</strong>h :{' '}
            <strong className="text-white font-mono font-bold">{timeLeft.minutes}</strong>m :{' '}
            <strong className="text-white font-mono font-bold">{timeLeft.seconds}</strong>s
          </span>
          <span className="text-slate-400 text-[11px] hidden lg:inline">| Max 20 Seats per Batch</span>
        </div>
        <div className="flex items-center gap-4 mx-auto md:mx-0 text-xs font-semibold text-slate-300">
          <a href="tel:9815489999" className="hover:text-white flex items-center gap-1.5 text-brand-300">
            <Phone className="w-3.5 h-3.5" />
            <span>Call Helpline: 9815489999</span>
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <span className="text-slate-400 hidden sm:inline">SCO 64-65, 4th Floor, Sector 34A</span>
        </div>
      </div>
    </div>
  );
}

