import React from 'react';
import { placementCategories } from '../data/placementPartners';

function CompanyLogo({ company }) {
  switch (company.type) {
    case 'google':
      return (
        <div className="h-8 flex items-center justify-center">
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
            <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
          </svg>
          <span className="ml-1.5 font-bold text-sm text-white">Google</span>
        </div>
      );
    case 'microsoft':
      return (
        <div className="h-8 flex items-center justify-center">
          <svg className="w-5 h-5 mr-1.5" viewBox="0 0 21 21">
            <path fill="#f25022" d="M1 1h9v9H1z"/>
            <path fill="#00a4ef" d="M1 11h9v9H1z"/>
            <path fill="#7fba00" d="M11 1h9v9h-9z"/>
            <path fill="#ffb900" d="M11 11h9v9h-9z"/>
          </svg>
          <span className="font-bold text-sm text-white">Microsoft</span>
        </div>
      );
    case 'amazon':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-extrabold text-base text-amber-400 tracking-tight">amazon</span>
          <svg className="w-3.5 h-3.5 text-amber-400 ml-1 mt-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.5 17.5c-4.2 2.5-9.3 1.2-12.7-.9-.3-.2-.1-.6.2-.4 3.1 1.8 7.7 2.8 11.6.4.4-.3.9.6.9.9zm1.3-.9c-.2-.3-.9-.2-1.3-.1-.4.1-.7.2-1 .3-.3.1-.3.5 0 .5.9.1 2.2.1 2.4-.7zm-1.8-6.1c0 2.3-1.4 3.9-3.4 3.9-1.3 0-2.3-.7-2.7-1.8l-.1.1v1.5h-2v-8h2v3.3c.5-.9 1.4-1.5 2.6-1.5 2.1 0 3.6 1.6 3.6 3.8z"/>
          </svg>
        </div>
      );
    case 'meta':
      return (
        <div className="h-8 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-500 mr-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          <span className="font-bold text-sm text-blue-400">Meta</span>
        </div>
      );
    case 'ibm':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-black text-lg text-blue-400 tracking-widest border-b-2 border-blue-400 pb-0.5">IBM</span>
        </div>
      );
    case 'apple':
      return (
        <div className="h-8 flex items-center justify-center">
          <svg className="w-5 h-5 text-white mr-1" viewBox="0 0 170 170" fill="currentColor">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-5.35.12-10.27-1.93-14.76-6.17-3.47-3.18-7.39-7.98-11.75-14.4-6.16-9.17-11-19.98-14.52-32.44-3.52-12.45-5.28-24.16-5.28-35.12 0-14.35 3.75-26.23 11.24-35.63 7.49-9.4 16.73-14.21 27.72-14.43 4.25 0 9.17 1.17 14.77 3.53 5.6 2.35 9.38 3.58 11.34 3.69 1.68 0 5.66-1.34 11.93-4.01 6.27-2.67 11.77-3.8 16.5-3.38 12.87.89 23.04 5.92 30.51 15.09-11.29 6.81-16.83 16.29-16.61 28.43.23 9.6 3.86 17.58 10.9 23.95 7.04 6.36 15.32 10.02 24.84 10.97-2.12 6.47-4.75 12.83-7.89 19.07zM119.22 33.51c0-7.36 2.68-14.28 8.04-20.76 5.37-6.48 11.96-10.5 19.78-12.06.67 3.57.73 7.03.17 10.38-.9 5.36-3.36 10.49-7.39 15.4-4.03 4.91-9.05 8.16-15.06 9.75-1.56-1.56-3.41-2.46-5.54-2.71z"/>
          </svg>
          <span className="font-bold text-sm text-white">Apple</span>
        </div>
      );
    case 'deloitte':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-bold text-base text-white tracking-tight">Deloitte</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 ml-0.5"></span>
        </div>
      );
    case 'accenture':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="text-purple-400 font-black text-lg mr-1">&gt;</span>
          <span className="font-bold text-sm text-white">accenture</span>
        </div>
      );
    case 'pwc':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-black text-lg text-orange-400 tracking-wider">pwc</span>
        </div>
      );
    case 'ey':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-black text-xl text-yellow-400 italic">EY</span>
        </div>
      );
    case 'kpmg':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-black text-base text-blue-400 tracking-widest">KPMG</span>
        </div>
      );
    case 'fractal':
      return (
        <div className="h-8 flex items-center justify-center">
          <svg className="w-4 h-4 text-amber-500 mr-1 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="3" strokeDasharray="15 10"/>
          </svg>
          <span className="font-bold text-sm text-amber-400">fractal</span>
        </div>
      );
    case 'flipkart':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="text-yellow-400 font-black mr-1">⚡</span>
          <span className="font-black text-sm text-blue-400 tracking-tight">Flipkart</span>
        </div>
      );
    case 'zomato':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-black text-base text-red-500 italic tracking-wide">zomato</span>
        </div>
      );
    case 'swiggy':
      return (
        <div className="h-8 flex items-center justify-center">
          <svg className="w-4 h-4 text-orange-500 mr-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="font-black text-sm text-orange-500 uppercase tracking-tight">SWIGGY</span>
        </div>
      );
    case 'paytm':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-black text-base text-blue-400">Pay</span>
          <span className="font-black text-base text-cyan-400">tm</span>
        </div>
      );
    case 'phonepe':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="w-5 h-5 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center mr-1">पे</span>
          <span className="font-bold text-sm text-purple-400">PhonePe</span>
        </div>
      );
    case 'razorpay':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="text-blue-400 font-black mr-0.5">⚡</span>
          <span className="font-bold text-sm text-blue-400">Razorpay</span>
        </div>
      );
    case 'tcs':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-black text-base text-blue-400 tracking-wider">TATA</span>
          <span className="ml-1 text-[11px] font-bold text-slate-300">TCS</span>
        </div>
      );
    case 'infosys':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-black text-base text-blue-400 tracking-tight">Infosys</span>
        </div>
      );
    case 'wipro':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1"></span>
          <span className="font-bold text-sm text-emerald-400">wipro</span>
        </div>
      );
    case 'hcl':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-black text-base text-blue-300">HCL</span>
          <span className="font-bold text-xs text-blue-400">Tech</span>
        </div>
      );
    case 'techm':
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-bold text-xs text-red-400">Tech</span>
          <span className="font-bold text-xs text-slate-200 ml-1">Mahindra</span>
        </div>
      );
    case 'cognizant':
    default:
      return (
        <div className="h-8 flex items-center justify-center">
          <span className="font-black text-base text-cyan-400 tracking-tight">{company.name}</span>
        </div>
      );
  }
}

export default function PlacementPartners() {
  return (
    <section id="placement-partners" className="py-20 bg-slate-900 dark:bg-[#070b14] border-y border-slate-800 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black text-brand-400 tracking-widest uppercase">Placement Ecosystem</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2">Where Our Graduates Get Hired</h2>
          <p className="text-sm text-slate-400 mt-2">
            From global tech giants to high-growth product unicorns and Tricity IT parks — our industry-ready curriculum equips you to crack top-paying Data Science, Analytics & AI roles.
          </p>
        </div>

        {/* 2x2 Grid of 4 Placement Containers */}
        <div className="grid lg:grid-cols-2 gap-8">
          {placementCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 bg-[#0f1426] border ${cat.borderColor} shadow-2xl backdrop-blur-md`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-black tracking-wider uppercase mb-4">
                <span>{cat.badge}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-6">{cat.title}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {cat.companies.map((company, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-2xl bg-[#161c36] border border-slate-700/60 hover:border-blue-500 transition text-center flex flex-col items-center justify-center gap-2 group"
                  >
                    <CompanyLogo company={company} />
                    <span className="text-[11px] text-slate-400 font-medium">{company.role}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

