
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg">ETER.Co</div>
            </div>
          </div>
          
          <button className="btn-premium">
            <span>PREENCHER APLICAÇÃO</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
