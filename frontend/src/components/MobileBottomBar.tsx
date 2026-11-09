'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { 
  Home, 
  Search, 
  ShoppingBag, 
  Grid
} from 'lucide-react';

interface MobileBottomBarProps {
  onOpenSearch: () => void;
}

export default function MobileBottomBar({ onOpenSearch }: MobileBottomBarProps) {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <nav 
      aria-label="Mobile Navigation" 
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 border-t border-slate-200 backdrop-blur-md px-4 py-2.5 shadow-lg"
    >
      <div className="max-w-md mx-auto grid grid-cols-4 items-center text-center">
        {/* 1. Home */}
        <Link 
          href="/" 
          className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-emerald-600 transition-colors"
        >
          <Home className="w-5 h-5 text-slate-500" />
          <span>Home</span>
        </Link>

        {/* 2. Categories */}
        <Link 
          href="#categories" 
          className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-emerald-600 transition-colors"
        >
          <Grid className="w-5 h-5 text-slate-500" />
          <span>Categories</span>
        </Link>

        {/* 3. Search */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer"
        >
          <Search className="w-5 h-5 text-slate-500" />
          <span>Search</span>
        </button>

        {/* 4. Basket */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 text-slate-500" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-emerald-600 text-white font-black text-[9px] flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <span>Basket</span>
        </button>
      </div>
    </nav>
  );
}
