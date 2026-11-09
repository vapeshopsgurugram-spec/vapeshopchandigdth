'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types';
import { STORE_INFO } from '@/data/mockData';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedFlavor?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, flavor?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  totalPrice: number;
  sendWhatsAppOrder: (customerName: string, sectorAddress: string, paymentMethod: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('vape_cart_chandigarh');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      // Ignore parse error
    }
  }, []);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vape_cart_chandigarh', JSON.stringify(cart));
    } catch {
      // Ignore write error
    }
  }, [cart]);

  const addToCart = (product: Product, flavor?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1, selectedFlavor: flavor || item.selectedFlavor }
            : item
        );
      }
      return [...prev, { product, quantity: 1, selectedFlavor: flavor || product.flavors?.[0] }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const sendWhatsAppOrder = (
    customerName: string,
    sectorAddress: string,
    paymentMethod: string
  ) => {
    if (cart.length === 0) return;

    let itemsList = '';
    cart.forEach((item, index) => {
      const flavorStr = item.selectedFlavor ? ` (${item.selectedFlavor})` : '';
      itemsList += `${index + 1}. *${item.product.name}*${flavorStr} x ${item.quantity} = ₹${item.product.price * item.quantity}\n`;
    });

    const message = 
`⚡ *NEW ORDER - VAPE SHOP CHANDIGARH* ⚡
-----------------------------------
👤 *Name:* ${customerName || 'Customer'}
📍 *Delivery Sector/Address:* ${sectorAddress || 'Chandigarh/Mohali/Panchkula'}
💳 *Payment Mode:* ${paymentMethod || 'Cash on Delivery / UPI'}
-----------------------------------
📦 *ITEMS ORDERED:*
${itemsList}
💰 *TOTAL AMOUNT:* ₹${totalPrice}
🚚 *Delivery ETA:* 30-45 Minutes (Discreet Box)
-----------------------------------
Please confirm stock and dispatch rider!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        totalPrice,
        sendWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
