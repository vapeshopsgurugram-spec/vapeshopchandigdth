'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { STORE_INFO } from '@/data/mockData';
import { useCart } from '@/context/CartContext';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { Plus, Minus, ShoppingBag, Check } from 'lucide-react';

interface Props {
  product: Product;
}

export default function ProductActionButtons({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart, setIsCartOpen } = useCart();

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const getWhatsAppOrderUrl = () => {
    const total = product.price * quantity;
    const message = encodeURIComponent(
      `Hello Vape Shop Chandigarh!\n\nI want to order:\n*Product:* ${product.name}\n*Quantity:* ${quantity}\n*Total Price:* ₹${total}\n\n*Delivery Address:* [Please enter your Chandigarh / Mohali / Panchkula Sector]\n*Payment Mode:* Cash on Delivery / UPI\n\nPlease dispatch express delivery.`
    );
    return `https://wa.me/${STORE_INFO.whatsapp}?text=${message}`;
  };

  return (
    <div className="space-y-4">
      {/* Quantity & Stock Selector */}
      <div className="flex items-center gap-4">
        <span className="text-xs font-bold text-slate-700">Quantity:</span>
        <div className="inline-flex items-center border border-slate-300 rounded-xl bg-white shadow-2xs">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="px-4 text-sm font-black text-slate-900 min-w-[2rem] text-center">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 text-slate-600 hover:text-slate-900 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <span className="text-xs text-emerald-700 font-bold">
          Total: ₹{product.price * quantity}
        </span>
      </div>

      {/* Primary WhatsApp Direct Order Button & Cart Button */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <a
          href={getWhatsAppOrderUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-md shadow-emerald-900/20 transition-all hover:scale-[1.02] active:scale-95 text-center"
        >
          <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
          <span>Order via WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={handleAddToCart}
          className={`flex items-center justify-center gap-2 border-2 font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl transition-all cursor-pointer ${
            isAdded
              ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
              : 'bg-white hover:bg-slate-50 border-slate-800 text-slate-900 hover:border-emerald-600 hover:text-emerald-600'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-5 h-5 text-emerald-600" />
              <span>Added to Basket!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Basket</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

