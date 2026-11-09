'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS, STORE_INFO } from '@/data/mockData';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { 
  Search, 
  X, 
  Zap, 
  ShoppingBag
} from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results: Product[] = query.trim() === ''
    ? PRODUCTS.slice(0, 4)
    : PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.flavors?.some((f) => f.toLowerCase().includes(q))
        );
      });

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:pt-20 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Geek Bar, Caliburn, 15000 puffs, mango flavor..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-bold text-slate-500 hover:text-slate-700 px-2 py-1 rounded bg-slate-200 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center justify-between">
            <span>{query.trim() === '' ? '🔥 Trending in Chandigarh:' : `Results (${results.length}):`}</span>
            <span className="text-emerald-700 font-bold">Fast 45-Min Dispatch</span>
          </div>

          {results.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-slate-600 text-sm">No products found matching &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for &quot;Geek Bar&quot;, &quot;Caliburn&quot;, &quot;Mango&quot;, or &quot;Pods&quot;
              </p>
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                className="p-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{product.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <span className="text-emerald-700 font-bold">{product.brand}</span>
                      <span>•</span>
                      {product.puffCount && <span>{product.puffCount.toLocaleString()} Puffs</span>}
                      {product.puffCount && <span>•</span>}
                      <span className="text-slate-900 font-bold">₹{product.price}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(product);
                      onClose();
                    }}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                  <a
                    href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hi%2C%20I%20want%20to%20order%20${encodeURIComponent(product.name)}%20(₹${product.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
