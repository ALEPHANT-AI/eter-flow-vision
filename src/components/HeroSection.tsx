
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg noise">
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-500/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-amber-600/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 pt-24 text-center relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center glass px-4 py-2 rounded-full mb-8">
            <span className="text-amber-400 text-sm font-medium">THE EIGHT®</span>
            <span className="ml-2 text-white/70 text-sm">Powered By ETER Flow</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight text-shadow">
            <span className="gradient-text">THE EIGHT®</span>
          </h1>

          {/* Subheading */}
          <div className="text-xl md:text-2xl text-white/90 font-light mb-6 max-w-4xl mx-auto leading-relaxed">
            Movement Is the New Branding
          </div>

          {/* Description */}
          <div className="text-lg md:text-xl text-white/80 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            <strong className="text-white font-semibold">SEJA UM DOS 8 ESCOLHIDOS</strong> para ter sua marca pessoal, movimento e narrativa criados pessoalmente por <strong className="gradient-text">DAVI RIBAS</strong>
          </div>

          {/* Value Proposition */}
          <div className="text-base md:text-lg text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed">
            Transforme-se na referência inquestionável do seu mercado através de uma estratégia de marca pessoal que vai além do comum: 
            <br className="hidden md:block" />
            <strong className="text-white"> construa uma marca que lidera, inspira e cria uma comunidade de fãs engajados e compradores</strong>
          </div>

          {/* CTA Button */}
          <button className="btn-premium text-lg glow-amber-strong animate-glow group">
            <span className="flex items-center">
              PREENCHER APLICAÇÃO
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-900 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
