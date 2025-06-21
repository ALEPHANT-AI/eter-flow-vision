
import React, { useEffect, useRef, useState } from 'react';
import { useApplicationModal } from '../contexts/ApplicationModalContext';

const ProfileSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { openModal } = useApplicationModal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-950 via-black-900 to-black-800">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
              <span className="text-gradient">DAVI RIBAS</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              Idealista, empresário e escritor
            </p>
            <p className="text-lg text-gold-400 font-medium mt-2">
              Autor Best Seller "Marketing Ideológico"
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Image Section */}
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="relative">
                {/* Main Image */}
                <div className="relative w-full h-[700px] rounded-3xl overflow-hidden">
                  {/* Glow Effect Behind Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gold-500/30 via-gold-400/20 to-transparent z-10" />
                  
                  <img 
                    src="/lovable-uploads/a559adcc-3061-436d-b7e2-210ac8949426.png" 
                    alt="Davi Ribas"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              {/* Description */}
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  Fundador da ETER Co, o ecossistema Edu |Brand | Tech que transforma marcas pessoais e institucionais em movimentos que dominam o mercado formando as referências brasileiras do futuro.
                </p>
                
                <p className="text-lg text-white/80 leading-relaxed">
                  Davi Ribas é N.1 quando o assunto é Criação de Movimentos e Comunidades para marcas
                </p>
                
                <p className="text-lg text-white/80 leading-relaxed">
                  Especialista em construção de autoridade e marcas pessoais magnéticas, já impactou mais de 10M de pessoas e gerou mais de R$ 72MM em receita para seus clientes através de sua metodologia própria.
                </p>

                <p className="text-lg text-white/80 leading-relaxed">
                  Fundador da ETER. Co, ecossistema de negócios composto pelas empresas ETER Educação, ETER Brands, ETER Scale, ETER Flow e ETER Summit, evento anual da marca que contou com mais de 1000 participantes em sua primeira edição
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button 
              onClick={openModal}
              className="btn-premium text-lg glow-gold magnetic group hover:scale-110 transition-all duration-300"
            >
              <span className="flex items-center">
                QUERO SER ESCOLHIDO
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
