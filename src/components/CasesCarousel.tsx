
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CasesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const cases = [
    {
      name: "ALAN SPADONE",
      area: "Micropigmentação",
      image: "/lovable-uploads/1ac651cd-90be-4b20-89f1-9e24e31bd73b.png",
      description: "Fundador da AS Academy, maior escola de micropigmentação da América Latina e criador de um ecossistema completo da beleza com AS Academy, Make Cake, Odd Sheep e Casa Branca. Transformou-se de profissional comum em autoridade mundial, formando mais de 100 mil profissionais em mais de 25 países através de uma metodologia que vai além da técnica, criando uma verdadeira comunidade global de seguidores fiéis ao movimento."
    },
    {
      name: "ALAN NICOLAS",
      area: "Inteligência Artificial",
      image: "/lovable-uploads/e18ebc5e-67b7-4f07-a863-1b4abb82a3d6.png",
      description: "Criador do Movimento Lendário e fundador da Academia Lendária, transformou sua expertise em IA em uma comunidade nacional de 'mentes inquietas' com mais de 40 hubs regionais espalhados pelo Brasil. Especialista em IA com clareza e propósito, realizou evento com mais de 2 mil participantes em Florianópolis, demonstrando como construir autoridade através de uma filosofia de vida que atrai seguidores engajados."
    },
    {
      name: "LETÍCIA FELISBERTO",
      area: "Neuroprosperidade",
      image: "/lovable-uploads/08386bc3-86ab-4be9-9b4e-aa1e5ccccdeb.png",
      description: "Especialista número 1 do Brasil em Neurociência da Prosperidade, com 22 anos de experiência em terapia, criou o movimento 'Uma Nova Mulher' através da metodologia Neuroprosperidade. Professora de mais de 30 mil alunas, transformou conhecimento terapêutico em um sistema de atualização de memórias que liberta mulheres de padrões limitantes, criando uma comunidade que faz da prosperidade o novo normal."
    },
    {
      name: "FELIPE MARX",
      area: "Breathwork",
      image: "/lovable-uploads/98af57c9-96ab-4f40-969f-cc68b5c5933d.png",
      description: "Mentor transformacional que criou o maior movimento de Breathwork do Brasil, formando milhares de facilitadores e impactando mais de 50 mil vidas através da respiração consciente. Transformou uma técnica milenar em metodologia própria, construindo uma comunidade global que vê na respiração o caminho para libertação emocional e expansão da consciência."
    },
    {
      name: "IURI MEIRA",
      area: "Marketing Digital",
      image: "/lovable-uploads/66e26694-2a22-4a49-af5b-886c931461b6.png",
      description: "Especialista em marketing digital que transformou uma dívida de R$ 300 mil em um império digital através do 'Clube da Luta Digital' e metodologia 'Modo Caverna'. Mentor que formou mais de 1.000 milionários na internet, vendeu mais de R$ 70 milhões em 2 anos através de estratégias próprias de tráfego pago e ofertas irresistíveis, criando uma comunidade de elite de empreendedores digitais."
    },
    {
      name: "ANDRÉ DIAMAND",
      area: "Inovação",
      image: "/lovable-uploads/5841503f-0375-4e54-99e1-2ef58e82530c.png",
      description: "Fundador da Escola de Inovação, transformou o modo como empresas brasileiras pensam inovação. Criou metodologias próprias que já impactaram mais de 500 empresas e 50 mil executivos, estabelecendo-se como a principal referência em inovação corporativa no Brasil através de uma abordagem que combina neurociência, design thinking e estratégia empresarial."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-transparent to-black-950/50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
            <span className="text-gradient">GRANDES LÍDERES</span> DO MERCADO QUE FORAM AJUDADOS PELA NOSSA METODOLOGIA
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Veja como outros líderes transformaram suas marcas pessoais em movimentos poderosos
          </p>
        </div>

        {/* Carousel */}
        <div className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="card-premium overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cases.map((caseItem, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
                    {/* Photo */}
                    <div className="relative w-80 h-80 lg:w-96 lg:h-96 flex-shrink-0">
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.name}
                        className="w-full h-full object-cover rounded-2xl shadow-premium"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black-900/60 via-transparent to-transparent rounded-2xl"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-black text-gradient mb-1">
                          {caseItem.name}
                        </h3>
                        <p className="text-gold-400 font-medium text-lg">
                          {caseItem.area}
                        </p>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                      <p className="text-white/80 leading-relaxed text-lg">
                        {caseItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button 
              onClick={prevSlide}
              className="glass hover:glass-strong p-4 rounded-full transition-all duration-300 hover:scale-110 magnetic"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            {/* Indicators */}
            <div className="flex space-x-3">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gold-400 scale-125 shadow-glow-gold' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="glass hover:glass-strong p-4 rounded-full transition-all duration-300 hover:scale-110 magnetic"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="btn-premium text-lg magnetic">
            <span>QUERO PREENCHER APLICAÇÃO</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasesCarousel;
