
import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Shield, Users, Award } from 'lucide-react';
import { useApplicationModal } from '../contexts/ApplicationModalContext';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { openModal } = useApplicationModal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('footer');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const trustSeals = [
    {
      icon: Award,
      title: "Metodologia Comprovada",
      description: "500+ marcas transformadas"
    },
    {
      icon: Users,
      title: "Comunidade Elite",
      description: "Rede exclusiva de líderes"
    },
    {
      icon: Shield,
      title: "Garantia de Qualidade",
      description: "Padrão internacional"
    }
  ];

  return (
    <footer id="footer" className="relative py-24 bg-gradient-to-b from-black-900 to-black-950 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gold-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">
              <span className="text-gradient">CONSTRUA UMA MARCA PESSOAL</span>
              <br />
              <span className="text-white">QUE LIDERA</span>
            </h2>
          </div>
          
          <div className={`text-lg md:text-xl text-white/70 leading-relaxed mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Pare de competir apenas por competência.
            <br />
            <span className="text-white font-medium">Torne-se o líder que as pessoas seguem, respeitam e pagam premium para trabalhar.</span>
          </div>

          {/* Urgency Indicator - More Elegant */}
          <div className={`inline-flex items-center bg-black-800/80 backdrop-blur-sm border border-gold-500/20 px-6 py-3 rounded-full mb-10 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}>
            <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse mr-3" />
            <span className="text-white/90 font-medium text-sm">Apenas 8 vagas disponíveis</span>
            <Sparkles className="w-4 h-4 text-gold-400 ml-2" />
          </div>
          
          {/* Final CTA - More Proportional */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <button 
              onClick={openModal}
              className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 font-bold px-12 py-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-glow-gold-strong hover:from-gold-400 hover:to-gold-500 magnetic text-lg"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Pulse Effect */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-2xl" />
              
              {/* Content */}
              <span className="relative z-10 flex items-center">
                <Sparkles className="w-5 h-5 mr-3" />
                PREENCHER APLICAÇÃO AGORA
                <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
            </button>
          </div>
        </div>

        {/* Trust Seals - More Refined */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {trustSeals.map((seal, index) => {
            const Icon = seal.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{seal.title}</h3>
                <p className="text-white/60 text-sm">{seal.description}</p>
              </div>
            );
          })}
        </div>

        {/* Company Info - Cleaner */}
        <div className={`border-t border-white/10 pt-12 transition-all duration-1000 delay-1100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/b51a5c29-18bb-44d4-a063-4685b0fb43a9.png" 
                alt="ETER"
                className="h-12"
              />
              <div>
                <div className="text-white font-bold text-lg">Eter Flow</div>
                <div className="text-white/50 text-xs">Powered by ALEPHANT</div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <div className="text-white/50 text-sm mb-1">
                © 2025 ETER Co. Todos os direitos reservados.
              </div>
              <div className="text-white/30 text-xs">
                Transformando especialistas em líderes de movimento desde 2019
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
    </footer>
  );
};

export default Footer;
