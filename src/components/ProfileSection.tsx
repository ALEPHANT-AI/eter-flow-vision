
import React, { useEffect, useRef, useState } from 'react';

const ProfileSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-transparent to-black-950/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="relative card-premium overflow-hidden">
                <div className="w-full h-[600px] bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-2xl flex items-center justify-center relative border border-gold-500/20">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop&crop=face" 
                    alt="Davi Ribas"
                    className="w-full h-full object-cover rounded-2xl shadow-premium"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-900/50 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`stagger-children space-y-8 ${isVisible ? 'revealed' : ''}`}>
              <div>
                <h2 className="text-6xl md:text-7xl font-black text-white mb-4 leading-tight">
                  <span className="text-gradient">DAVI RIBAS</span>
                </h2>
                <p className="text-xl text-gold-400 font-medium mb-2">
                  Idealista, empresário e escritor
                </p>
                <p className="text-lg text-white/70 mb-6">
                  Autor Best Seller "Marketing Ideológico"
                </p>
              </div>

              <div className="space-y-6 text-white/80 leading-relaxed">
                <p className="text-lg">
                  Fundador da <strong className="text-white">ETER Co</strong>, o ecossistema Edu |Brand | Tech que transforma marcas pessoais e institucionais em movimentos que dominam o mercado formando as referências brasileiras do futuro.
                </p>

                <p className="text-lg">
                  Davi Ribas é <span className="text-gradient font-bold text-2xl">N.1</span> quando o assunto é Criação de Movimentos e Comunidades para marcas.
                </p>

                <p className="text-lg">
                  Especialista em construção de autoridade e marcas pessoais magnéticas, já impactou mais de <strong className="text-gold-400">10M de pessoas</strong> e gerou mais de <strong className="text-gold-400">R$ 72MM em receita</strong> para seus clientes através de sua metodologia própria.
                </p>

                <p className="text-lg">
                  Fundador da <strong className="text-white">ETER. Co</strong>, ecossistema de negócios composto pelas empresas ETER Educação, ETER Brands, ETER Scale, ETER Flow e ETER Summit, evento anual da marca que contou com mais de <strong className="text-gold-400">1000 participantes</strong> em sua primeira edição.
                </p>
              </div>

              {/* Credentials/Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="glass px-6 py-3 rounded-full border border-gold-500/20">
                  <span className="text-gold-400 font-medium">Best Seller Author</span>
                </div>
                <div className="glass px-6 py-3 rounded-full border border-gold-500/20">
                  <span className="text-gold-400 font-medium">10M+ Impactados</span>
                </div>
                <div className="glass px-6 py-3 rounded-full border border-gold-500/20">
                  <span className="text-gold-400 font-medium">R$ 72MM+ Gerados</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <button className="btn-premium text-lg glow-gold magnetic">
                  <span>QUERO SER ESCOLHIDO</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
