'use client';

import React, { useState, useEffect } from 'react';
import SearchModal from '@/components/SearchModal';
import CartDrawer from '@/components/CartDrawer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import MobileBottomBar from '@/components/MobileBottomBar';

export default function AppClientOverlay() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleOpenSearch = () => setSearchOpen(true);
    window.addEventListener('open-search-modal', handleOpenSearch);
    return () => window.removeEventListener('open-search-modal', handleOpenSearch);
  }, []);

  return (
    <>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer />
      <WhatsAppFloating />
      <MobileBottomBar onOpenSearch={() => setSearchOpen(true)} />
    </>
  );
}
