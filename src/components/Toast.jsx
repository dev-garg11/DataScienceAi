import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 transform transition-all duration-300 max-w-md bg-emerald-600 text-white p-4 rounded-2xl shadow-2xl flex items-start gap-3 animate-in slide-in-from-bottom-5">
      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-white" />
      <div className="text-xs font-medium leading-relaxed flex-1">{message}</div>
      <button onClick={onClose} className="p-1 hover:bg-emerald-700 rounded-lg transition">
        <X className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}

