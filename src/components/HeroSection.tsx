
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useApplicationModal } from '../contexts/ApplicationModalContext';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useApplicationModal();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden px-4">
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

      {/* Logo section - positioned at the very top */}
      <div className={`absolute top-2 left-4 z-10 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <img 
          src="/lovable-uploads/5bf8c202-e854-4fba-8707-b047b0730c9e.png" 
          alt="ETER"
          className="h-8 md:h-10 object-contain filter brightness-110 contrast-110"
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl flex-1 flex items-center">
        {/* Main content centered */}
        <div className="text-left space-y-4 max-w-3xl">
          {/* The Eight Title with Movement tagline */}
          <div className={`transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-baseline gap-4 mb-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black">
                <span className="text-gradient bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                  THE EIGHT®
                </span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-gold-400/80 font-medium italic">
                Movement Is the New Branding
              </p>
            </div>
          </div>

          {/* Main Headline */}
          <div className={`transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black leading-tight">
              <span className="text-white">
                SEJA UM DOS 8 ESCOLHIDOS PARA TER SUA MARCA PESSOAL, MOVIMENTO E NARRATIVA CRIADOS PESSOALMENTE POR
              </span>
              <br />
              <span className="text-gradient bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                DAVI RIBAS
              </span>
            </h2>
          </div>

          {/* Description - Simple subheading */}
          <div className={`text-sm md:text-base lg:text-lg text-white/70 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Transforme-se na referência inquestionável do seu mercado através de uma estratégia de marca pessoal que vai além do comum:
            <br />
            <strong className="text-white">construa uma marca que lidera, inspira e cria uma comunidade de fãs engajados e compradores</strong>
          </div>

          {/* CTA Button */}
          <div className={`flex justify-start pt-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <button 
              onClick={openModal}
              className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 font-bold px-8 md:px-10 py-3 md:py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-glow-gold-strong hover:from-gold-400 hover:to-gold-500 magnetic"
            >
              {/* Content */}
              <span className="relative z-10 flex items-center justify-center text-base md:text-lg lg:text-xl">
                PREENCHER APLICAÇÃO
                <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2" />
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
