
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gold-500/10 relative overflow-hidden">
      <div className="grain-overlay"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight text-reveal">
            <span className="gradient-text">CONSTRUA UMA MARCA PESSOAL</span> QUE LIDERA
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            Pare de competir apenas por competência. Torne-se o líder que as pessoas seguem, respeitam e pagam premium para trabalhar.
          </p>
          
          <button className="btn-premium text-lg glow-gold-strong animate-glow-pulse magnetic-element">
            <span>PREENCHER APLICAÇÃO AGORA</span>
          </button>
        </div>

        <div className="border-t border-gold-500/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-gold-500 to-amber-600 rounded-lg flex items-center justify-center glow-gold">
                <span className="text-slate-900 font-bold">E</span>
              </div>
              <span className="text-white font-bold">ETER.Co</span>
            </div>
            
            <div className="text-white/60 text-sm">
              © 2024 ETER Co. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
