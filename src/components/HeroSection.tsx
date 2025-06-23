
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useApplicationModal } from '../contexts/ApplicationModalContext';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useApplicationModal();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('formulario-aplicacao');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-2 px-4">
      {/* Background with Davi's image and golden filter */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black-950 via-black-900 to-black-800" />
        <img 
          src="/lovable-uploads/36bc4463-f018-4db0-b71f-10a2e1f5e205.png" 
          alt="Davi Ribas criando movimento" 
          className="w-full h-full object-cover opacity-30 md:object-center object-left" 
        />
        {/* Golden filter overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-gold-400/10 to-transparent mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-950 via-black-900/50 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl flex flex-col h-full">
        {/* Logo section - positioned at the very top */}
        <div className={`flex justify-start pt-4 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-left">
            <img 
              src="/lovable-uploads/5bf8c202-e854-4fba-8707-b047b0730c9e.png" 
              alt="ETER"
              className="h-12 md:h-20 object-contain filter brightness-110 contrast-110"
            />
          </div>
        </div>

        {/* Main content centered with better mobile spacing */}
        <div className="flex-1 flex items-center justify-start pt-8 md:pt-24">
          <div className="text-left space-y-3 md:space-y-4 max-w-3xl">
            {/* The Eight Title with Movement tagline */}
            <div className={`transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black mb-1 md:mb-2">
                <span className="text-gradient bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                  THE EIGHT®
                </span>
              </h1>
              <p className="text-xs md:text-sm lg:text-base text-gold-400/80 font-medium italic mb-2 md:mb-4">
                Movement Is the New Branding
              </p>
            </div>

            {/* Main Headline */}
            <div className={`transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black leading-tight">
                <span className="text-white">
                  SEJA UM DOS 8 ESCOLHIDOS PARA TER SUA MARCA PESSOAL, MOVIMENTO E NARRATIVA CRIADOS PESSOALMENTE POR
                </span>
                <br />
                <span className="text-gradient bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                  DAVI RIBAS
                </span>
              </h2>
            </div>

            {/* Description - Smaller for mobile */}
            <div className={`text-xs sm:text-sm md:text-base lg:text-lg text-white/70 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Transforme-se na referência inquestionável do seu mercado através de uma estratégia de marca pessoal que vai além do comum:
              <br />
              <strong className="text-white">construa uma marca que lidera, inspira e cria uma comunidade de fãs engajados e compradores</strong>
            </div>

            {/* CTA Button */}
            <div className={`flex justify-start pt-3 md:pt-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              <button 
                onClick={scrollToForm}
                className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 font-bold px-6 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-glow-gold-strong hover:from-gold-400 hover:to-gold-500 magnetic"
              >
                {/* Content */}
                <span className="relative z-10 flex items-center justify-center text-sm md:text-base lg:text-lg xl:text-xl">
                  PREENCHER APLICAÇÃO
                  <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-2" />
                </span>
                
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
