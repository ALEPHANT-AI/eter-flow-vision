import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Shield, Users, Award } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    <footer id="footer" className="relative py-32 bg-gradient-to-b from-black-900 to-black-950 overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold-500/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Final Emotional Call */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-6xl md:text-8xl font-black mb-8 text-white leading-[0.9]">
              <span className="text-gradient">CONSTRUA UMA MARCA PESSOAL</span>
              <br />
              <span className="text-white">QUE LIDERA</span>
            </h2>
          </div>
          
          <div className={`text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Pare de competir apenas por competência. 
            <br />
            <strong className="text-white">Torne-se o líder que as pessoas seguem, respeitam e pagam premium para trabalhar.</strong>
          </div>

          {/* Urgency Indicator */}
          <div className={`inline-flex items-center glass-strong px-6 py-3 rounded-full mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3" />
            <span className="text-white font-medium">Apenas 8 vagas disponíveis</span>
            <Sparkles className="w-4 h-4 text-gold-400 ml-2 animate-spin" />
          </div>
          
          {/* Final CTA */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <button 
              className="group relative overflow-hidden bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-black-950 font-black px-16 py-8 rounded-3xl transition-all duration-500 hover:scale-110 hover:shadow-glow-gold-strong magnetic text-xl"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.1)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(0px, 0px) scale(1)';
              }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Pulse Effect */}
              <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-3xl" />
              
              {/* Content */}
              <span className="relative z-10 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 animate-spin" />
                PREENCHER APLICAÇÃO AGORA
                <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
              </span>
            </button>
          </div>
        </div>

        {/* Trust Seals */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {trustSeals.map((seal, index) => {
            const Icon = seal.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center glow-gold">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{seal.title}</h3>
                <p className="text-white/70">{seal.description}</p>
              </div>
            );
          })}
        </div>

        {/* Company Info */}
        <div className={`border-t border-white/10 pt-12 transition-all duration-1000 delay-1100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/eac41d62-c80a-4f5d-9147-4be418220852.png" 
                alt="ETER"
                className="h-16"
              />
              <div>
                <div className="text-white font-black text-xl">Eter Flow</div>
                <div className="text-white/60 text-sm">Powered by ALEPHANT</div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <div className="text-white/60 text-sm mb-2">
                © 2025 ETER Co. Todos os direitos reservados.
              </div>
              <div className="text-white/40 text-xs">
                Transformando especialistas em líderes de movimento desde 2019
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
