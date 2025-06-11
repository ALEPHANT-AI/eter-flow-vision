
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
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1bdbf413-bc5f-4675-bf33-7f6dcf2fc161.png" 
              alt="ETER"
              className="h-8"
            />
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
