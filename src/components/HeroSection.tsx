
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Logo ETER com Powered By */}
            <div className={`flex items-center space-x-4 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <img 
                src="/lovable-uploads/1bdbf413-bc5f-4675-bf33-7f6dcf2fc161.png" 
                alt="ETER"
                className="h-10"
              />
              <div className="text-sm text-gold-400 font-medium">
                Powered By ETER Flow
              </div>
            </div>

            {/* Main Title */}
            <div className="relative">
              <h1 className={`text-5xl md:text-7xl font-black leading-tight transition-all duration-1200 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="text-gradient bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                  MOVEMENT IS THE<br />NEW BRANDING
                </span>
              </h1>
            </div>

            {/* Main Value Proposition */}
            <div className={`space-y-4 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                <strong className="text-white font-semibold">SEJA UM DOS 8 ESCOLHIDOS PARA TER SUA MARCA PESSOAL, MOVIMENTO E NARRATIVA CRIADOS PESSOALMENTE POR</strong>
              </p>
              <p className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">DAVI RIBAS</span>
              </p>
            </div>

            {/* Description */}
            <div className={`text-base md:text-lg text-white/70 leading-relaxed max-w-2xl transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Transforme-se na referência inquestionável do seu mercado através de uma estratégia de marca pessoal que vai além do comum:
              <br />
              <strong className="text-white">construa uma marca que lidera, inspira e cria uma comunidade de fãs engajados e compradores</strong>
            </div>

            {/* CTA Button */}
            <div className={`transition-all duration-1000 delay-1200 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <button className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 font-bold px-10 py-5 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-glow-gold-strong hover:from-gold-400 hover:to-gold-500 magnetic">
                {/* Content */}
                <span className="relative z-10 flex items-center text-lg">
                  PREENCHER APLICAÇÃO
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
                
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-xl" />
              </button>
            </div>
          </div>

          {/* Right Column - Clean Visual Element */}
          <div className={`relative transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative">
              {/* Elegant background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/20 to-gold-400/10 rounded-3xl blur-3xl" />
              
              {/* Clean content container */}
              <div className="relative glass-strong rounded-3xl p-12 text-center">
                <div className="space-y-6">
                  <div className="text-8xl font-black text-gradient">8</div>
                  <div className="text-2xl text-white font-bold">ESCOLHIDOS</div>
                  <div className="text-gold-400 text-lg font-medium">Para liderar movimentos</div>
                  <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
