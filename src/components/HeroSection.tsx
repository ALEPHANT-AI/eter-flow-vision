
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-8">
      {/* Background with Davi's image and golden filter */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black-950 via-black-900 to-black-800" />
        <img 
          src="/lovable-uploads/36bc4463-f018-4db0-b71f-10a2e1f5e205.png" 
          alt="Davi Ribas criando movimento" 
          className="w-full h-full object-cover opacity-30" 
        />
        {/* Golden filter overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-gold-400/10 to-transparent mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-950 via-black-900/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 lg:space-y-12">
          
          {/* ETER FLOW Brand */}
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-strong rounded-2xl p-4 sm:p-6 lg:p-8 border border-gold-500/20">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gradient mb-2">
                ETER FLOW
              </div>
              <div className="text-xs sm:text-sm text-white/60">
                Powered By Alephant
              </div>
            </div>
          </div>

          {/* Impact Phrase */}
          <div className={`transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight max-w-5xl">
              <span className="text-gradient bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                MOVEMENT IS<br />
                THE NEW BRANDING
              </span>
            </h1>
          </div>

          {/* Main Value Proposition */}
          <div className={`space-y-4 sm:space-y-6 lg:space-y-8 transition-all duration-1000 delay-500 max-w-4xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-strong rounded-xl p-4 sm:p-6 lg:p-8 border border-gold-500/10">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-4">
                <strong className="text-white font-semibold">SEJA UM DOS 8 ESCOLHIDOS PARA TER SUA MARCA PESSOAL, MOVIMENTO E NARRATIVA CRIADOS PESSOALMENTE POR</strong>
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-gradient">DAVI RIBAS</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-700 max-w-4xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass rounded-xl p-4 sm:p-6 lg:p-8 border border-white/5">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed">
                Transforme-se na referência inquestionável do seu mercado através de uma estratégia de marca pessoal que vai além do comum:
                <br className="hidden sm:block" />
                <strong className="text-white">construa uma marca que lidera, inspira e cria uma comunidade de fãs engajados e compradores</strong>
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <button className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 font-bold px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-glow-gold-strong hover:from-gold-400 hover:to-gold-500 magnetic w-full sm:w-auto">
              {/* Content */}
              <span className="relative z-10 flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl">
                PREENCHER APLICAÇÃO
                <ArrowRight className="ml-3 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform group-hover:translate-x-2" />
              </span>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
