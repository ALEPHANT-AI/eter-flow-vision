
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Background with Davi's image and golden filter */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black-950 via-black-900 to-black-800" />
        <img 
          src="/lovable-uploads/36bc4463-f018-4db0-b71f-10a2e1f5e205.png" 
          alt="Davi Ribas criando movimento" 
          className="w-full h-full object-cover opacity-30" 
        />
        {/* Purple filter overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-400/10 to-transparent mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-950 via-black-900/50 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 max-w-4xl">
        <div className="text-center space-y-8">
          {/* ETERFLOW Logo */}
          <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/lovable-uploads/64dbad49-b4e0-4046-8942-13e1ae0c7e6f.png" 
                alt="ETER FLOW"
                className="h-16 md:h-20"
              />
            </div>
            
            <div className="flex items-center justify-center space-x-8 mb-4">
              <div className="text-center">
                <div className="text-sm md:text-base text-white/60 font-medium tracking-wide mb-2">
                  Powered By Alephant
                </div>
              </div>
              
              <div className="text-left">
                <p className="text-sm md:text-base text-white/60 font-medium tracking-wide">
                  MOVEMENT IS THE NEW BRANDING
                </p>
              </div>
            </div>
          </div>

          {/* The Eight - Page Title */}
          <div className={`transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
              <span className="text-gradient bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                THE EIGHT
              </span>
            </h1>
          </div>

          {/* Main Headline */}
          <div className={`transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight">
              <span className="text-white">
                SEJA UM DOS 8 ESCOLHIDOS PARA TER SUA MARCA PESSOAL, MOVIMENTO E NARRATIVA CRIADOS PESSOALMENTE POR
              </span>
              <br />
              <span className="text-gradient bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                DAVI RIBAS
              </span>
            </h2>
          </div>

          {/* Description - Subheading */}
          <div className={`text-base md:text-lg lg:text-xl text-white/70 leading-relaxed transition-all duration-1000 delay-500 max-w-3xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Transforme-se na referência inquestionável do seu mercado através de uma estratégia de marca pessoal que vai além do comum:
            <br />
            <strong className="text-white">construa uma marca que lidera, inspira e cria uma comunidade de fãs engajados e compradores</strong>
          </div>

          {/* CTA Button */}
          <div className={`flex justify-center pt-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <button className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold px-8 md:px-10 py-3 md:py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-glow-purple-strong hover:from-purple-400 hover:to-purple-500 magnetic">
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
