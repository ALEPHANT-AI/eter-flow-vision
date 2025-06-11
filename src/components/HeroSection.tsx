
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dynamic particles based on mouse position
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    scale: Math.random() * 0.8 + 0.4,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-950 via-black-900 to-black-800">
        {/* Animated Mesh */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x / window.innerWidth * 100}% ${mousePosition.y / window.innerHeight * 100}%, rgba(245, 166, 35, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(245, 166, 35, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(245, 166, 35, 0.05) 0%, transparent 50%)
            `
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-gold-400/30 rounded-full animate-float"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`,
                transform: `scale(${particle.scale})`,
                filter: 'blur(0.5px)',
              }}
            />
          ))}
        </div>

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-noise animate-grain" />
      </div>

      <div className="container mx-auto px-6 pt-24 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Logo ETER.Co */}
          <div className={`inline-flex items-center glass px-6 py-3 rounded-full mb-8 transition-all duration-1000 delay-300 hover:bg-white/[0.08] hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <img 
              src="/lovable-uploads/5f1e1bcf-af5e-4446-83c0-e419e53bd3da.png" 
              alt="ETER.Co Logo"
              className="w-5 h-5 mr-2"
            />
            <span className="text-gold-400 text-sm font-medium tracking-wide">ETER.Co</span>
          </div>

          {/* Smaller THE EIGHT Title */}
          <div className={`text-3xl md:text-4xl font-bold text-white/70 mb-4 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            THE EIGHT®
          </div>

          {/* Powered By ETER Flow */}
          <div className={`text-lg md:text-xl text-gold-400 font-medium mb-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Powered By ETER Flow
          </div>

          {/* Main Hero Message - Movement Is the New Branding */}
          <div className="relative mb-8">
            <h1 className={`text-5xl md:text-7xl font-black leading-[0.9] transition-all duration-1200 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="relative inline-block">
                <span className="text-gradient bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent animate-text-reveal">
                  MOVEMENT IS THE<br />NEW BRANDING
                </span>
                {/* Glow Effect */}
                <span className="absolute inset-0 text-gradient opacity-30 blur-sm animate-glow-pulse">
                  MOVEMENT IS THE<br />NEW BRANDING
                </span>
              </span>
            </h1>
          </div>

          {/* Main Value Proposition */}
          <div className={`text-lg md:text-xl mb-12 max-w-5xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-white/80 mb-4">
              <strong className="text-white font-semibold">SEJA UM DOS 8 ESCOLHIDOS PARA TER SUA MARCA PESSOAL, MOVIMENTO E NARRATIVA CRIADOS PESSOALMENTE POR</strong>
            </p>
            <p className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">DAVI RIBAS</span>
            </p>
          </div>

          {/* Description */}
          <div className={`text-base md:text-lg text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Transforme-se na referência inquestionável do seu mercado através de uma estratégia de marca pessoal que vai além do comum:
            <br />
            <strong className="text-white block mt-2">construa uma marca que lidera, inspira e cria uma comunidade de fãs engajados e compradores</strong>
          </div>

          {/* Magnetic CTA Button */}
          <div className={`transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <button 
              className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 font-bold px-12 py-6 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-glow-gold-strong hover:from-gold-400 hover:to-gold-500 magnetic"
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
              {/* Glow Behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
              
              {/* Content */}
              <span className="relative z-10 flex items-center text-lg">
                PREENCHER APLICAÇÃO
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-2xl" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex flex-col items-center text-white/50">
              <span className="text-sm mb-2">Role para descobrir</span>
              <div className="w-0.5 h-16 bg-gradient-to-b from-gold-400 to-transparent animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
