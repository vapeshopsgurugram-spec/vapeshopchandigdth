'use client';

import React, { useState, useEffect } from 'react';
import { ShieldAlert, Check, X } from 'lucide-react';

export default function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isAgeVerified = localStorage.getItem('vape_age_verified_chandigarh');
    if (!isAgeVerified) {
      setIsOpen(true);
    }
  }, []);

  const handleConfirmAge = () => {
    localStorage.setItem('vape_age_verified_chandigarh', 'true');
    setIsOpen(false);
  };

  const handleRejectAge = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-md rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-center">
        
        {/* Warning Icon Badge */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
          <ShieldAlert className="w-8 h-8 text-amber-500" />
        </div>

        <div className="inline-block px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-2">
          Legal Age Verification (18+)
        </div>

        <h2 id="age-modal-title" className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Are You 18 Years of Age or Older?
        </h2>

        <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-6 leading-relaxed">
          The products on this website are strictly intended for adult smokers and vapers of legal smoking age (18+). Please verify your age to enter.
        </p>

        <div className="space-y-3">
          <button
            type="button"
            onClick={handleConfirmAge}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all cursor-pointer"
          >
            <Check className="w-5 h-5" />
            <span>Yes, I am 18 or Older (Enter Store)</span>
          </button>

          <button
            type="button"
            onClick={handleRejectAge}
            className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 font-bold py-3 px-6 rounded-xl transition-colors cursor-pointer text-xs sm:text-sm"
          >
            <X className="w-4 h-4" />
            <span>No, I am Under 18 (Exit)</span>
          </button>
        </div>

        <p className="text-[10px] text-slate-400 mt-5">
          By entering, you confirm you are of legal age in your territory to view nicotine-related products.
        </p>
      </div>
    </div>
  );
}
