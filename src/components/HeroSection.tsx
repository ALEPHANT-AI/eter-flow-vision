
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 px-4">
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

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center space-y-4">
          {/* Logo section - positioned to the left and moved up */}
          <div className={`flex justify-start mb-8 -mt-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-left">
              <img 
                src="/lovable-uploads/6bc9cbd4-7727-4d6d-8de4-1da0209f7d40.png" 
                alt="ETER FLOW"
                className="h-12 md:h-14 mb-0 object-contain filter brightness-110 contrast-110"
              />
              <div className="text-sm text-gold-400 font-medium mb-1 -mt-1">
                ETERFLOW
              </div>
              <div className="text-sm md:text-base text-white/60 font-medium tracking-wide">
                MOVEMENT IS THE NEW BRANDING
              </div>
            </div>
          </div>

          {/* The Eight Title */}
          <div className={`transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4">
              <span className="text-gradient bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                THE EIGHT®
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
              <span className="text-gradient bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                DAVI RIBAS
              </span>
            </h2>
          </div>

          {/* Description - Updated copy */}
          <div className={`text-sm md:text-base lg:text-lg text-white/70 leading-relaxed transition-all duration-1000 delay-500 max-w-4xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <span className="text-gold-400 mr-2">✓</span>
                <span><strong className="text-white">Criação de Movimento:</strong> Sua mensagem, promessa e sistema de crenças que farão as pessoas te seguirem apaixonadamente e se tornarem fãs compradores</span>
              </div>
              <div className="flex items-start">
                <span className="text-gold-400 mr-2">✓</span>
                <span><strong className="text-white">Marca Pessoal:</strong> Posicionamento único, Ensaio Fotográfico, diferenciação e autoridade que te posiciona como líder autêntico e reconhecido.</span>
              </div>
              <div className="flex items-start">
                <span className="text-gold-400 mr-2">✓</span>
                <span><strong className="text-white">Narrativa:</strong> Sua história magnética, mensagens-chave e storytelling que conecta emocionalmente com sua audiência</span>
              </div>
              <div className="flex items-start">
                <span className="text-gold-400 mr-2">✓</span>
                <span><strong className="text-white">Identidade da Tribo:</strong> Como sua comunidade pensa, fala, age e se reconhece o DNA dos seus seguidores ideais</span>
              </div>
              <div className="flex items-start">
                <span className="text-gold-400 mr-2">✓</span>
                <span><strong className="text-white">Identidade Visual Completa:</strong> Símbolos, Cores, fotografia p fontes, direção de arte e atmosfera visual com templates visuais prontos para usar</span>
              </div>
              <div className="flex items-start">
                <span className="text-gold-400 mr-2">✓</span>
                <span><strong className="text-white">Plano de Ativação:</strong> Cronograma detalhado, scripts de posts, estratégias de lançamento do Movimento e métricas de acompanhamento para implementar sua nova marca no mercado</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`flex justify-center pt-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <button className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 font-bold px-8 md:px-10 py-3 md:py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-glow-gold-strong hover:from-gold-400 hover:to-gold-500 magnetic">
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
