
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setIsVisible(scrollY > 100); // Show header after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible 
        ? `${isScrolled ? 'glass border-b border-white/5' : 'bg-transparent'} translate-y-0 opacity-100` 
        : '-translate-y-full opacity-0'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* ETER FLOW Logo with Powered By Alephant */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/6bc9cbd4-7727-4d6d-8de4-1da0209f7d40.png" 
              alt="ETER FLOW"
              className="h-6 md:h-8"
            />
            <div className="text-xs text-gold-400 font-medium">
              Powered By Alephant
            </div>
          </div>
          
          <button className="relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 font-bold px-6 md:px-8 py-2 md:py-3 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-glow-gold-strong hover:from-gold-400 hover:to-gold-500 magnetic group">
            <span className="relative z-10 text-sm md:text-base">PREENCHER APLICAÇÃO</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
