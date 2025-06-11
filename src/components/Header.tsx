
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center glow-gold">
              <span className="text-black font-bold text-lg">E</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg tracking-tight">ETER.Co</div>
            </div>
          </div>
          
          <button className="btn-premium magnetic hover:glow-gold-strong">
            <span>PREENCHER APLICAÇÃO</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
