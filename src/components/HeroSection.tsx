
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg noise">
      {/* Floating Particles */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="container mx-auto px-6 pt-24 text-center relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Badge */}
          <div className={`inline-flex items-center glass px-6 py-3 rounded-full mb-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-gold-400 text-sm font-medium tracking-wide">THE EIGHT®</span>
            <span className="ml-3 text-white/70 text-sm">Powered By ETER Flow</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-7xl md:text-9xl font-black mb-8 leading-[0.9] text-shadow-lg transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="text-gradient">THE EIGHT®</span>
          </h1>

          {/* Subheading */}
          <div className={`text-2xl md:text-3xl text-white/90 font-light mb-6 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Movement Is the New Branding
          </div>

          {/* Description */}
          <div className={`text-lg md:text-xl text-white/80 mb-12 max-w-5xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <strong className="text-white font-semibold">SEJA UM DOS 8 ESCOLHIDOS</strong> para ter sua marca pessoal, movimento e narrativa criados pessoalmente por <strong className="text-gradient font-semibold">DAVI RIBAS</strong>
          </div>

          {/* Value Proposition */}
          <div className={`text-base md:text-lg text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Transforme-se na referência inquestionável do seu mercado através de uma estratégia de marca pessoal que vai além do comum: 
            <br className="hidden md:block" />
            <strong className="text-white"> construa uma marca que lidera, inspira e cria uma comunidade de fãs engajados e compradores</strong>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-1300 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <button className="btn-premium text-lg glow-gold-strong animate-glow-pulse group magnetic">
              <span className="flex items-center">
                PREENCHER APLICAÇÃO
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-950 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
