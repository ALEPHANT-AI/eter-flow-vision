
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, TrendingUp, Users, DollarSign } from 'lucide-react';

const CasesCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
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
      name: "Alan Spadone",
      field: "Micropigmentação",
      image: "/lovable-uploads/c07a67ec-0da1-4284-94ef-cb85aab811a6.png",
      description: "Fundador da AS Academy, maior escola de micropigmentação da América Latina e criador de um ecossistema completo da beleza com AS Academy, Make Cake, Odd Sheep e Casa Branca. Transformou-se de profissional comum em autoridade mundial, formando mais de 100 mil profissionais em mais de 25 países através de uma metodologia que vai além da técnica, criando uma verdadeira comunidade global de seguidores fiéis ao movimento."
    },
    {
      name: "Alan Nicolas",
      field: "Inteligência Artificial",
      image: "/lovable-uploads/13243273-a668-487d-af78-572da6fc1536.png",
      description: "Criador do Movimento Lendário e fundador da Academia Lendária, transformou sua expertise em IA em uma comunidade nacional de \"mentes inquietas\" com mais de 40 hubs regionais espalhados pelo Brasil. Especialista em IA com clareza e propósito, realizou evento com mais de 2 mil participantes em Florianópolis, demonstrando como construir autoridade através de uma filosofia de vida que atrai seguidores engajados."
    },
    {
      name: "Letícia Felisberto",
      field: "Neuroprosperidade", 
      image: "/lovable-uploads/d535c18c-ecee-444f-93c6-225e9464f578.png",
      description: "Especialista número 1 do Brasil em Neurociência da Prosperidade, com 22 anos de experiência em terapia, criou o movimento \"Uma Nova Mulher\" através da metodologia Neuroprosperidade. Professora de mais de 30 mil alunas, transformou conhecimento terapêutico em um sistema de atualização de memórias que liberta mulheres de padrões limitantes, criando uma comunidade que faz da prosperidade o novo normal."
    },
    {
      name: "André Diamand",
      field: "Inovação",
      image: "/lovable-uploads/88241303-9b60-4caa-8527-4d384750190f.png",
      description: "Ex-executivo IBM que criou a metodologia Sexy Canvas, revolucionando a forma como produtos irresistíveis são desenvolvidos através do mapeamento do comportamento humano. Empreendedor serial, inventor e investidor anjo com especializações internacionais, transformou experiência corporativa em movimento de inovação que atrai empresários buscando criar produtos que realmente conectam com seu público."
    },
    {
      name: "Iuri Meira",
      field: "Marketing Digital",
      image: "/lovable-uploads/6f61776b-2c5b-480a-beb1-916ba151cee9.png",
      description: "Especialista em marketing digital que transformou uma dívida de R$ 300 mil em um império digital através do \"Clube da Luta Digital\" e metodologia \"Modo Caverna\". Mentor que formou mais de 1.000 milionários na internet, vendeu mais de R$ 70 milhões em 2 anos através de estratégias próprias de tráfego pago e ofertas irresistíveis, criando uma comunidade de elite de empreendedores digitais."
    },
    {
      name: "Rafa Medeiros",
      field: "Influência",
      image: "/lovable-uploads/7ac967be-be6d-4dd4-9057-54c20c51092a.png",
      description: "Criador dos Códigos da Influência e Método Influência Máxima, com 17 anos de experiência transformou-se em palestrante TEDx e fundador do Instituto Rafael Medeiros. Mentor de mais de 10 mil empresários, especializa-se em ensinar vendas através da personalidade, criando uma comunidade de líderes que vendem através da autenticidade e não de técnicas manipulativas."
    },
    {
      name: "Guilherme Cattani",
      field: "Estratégia Digital",
      image: "/lovable-uploads/7185128b-a8cb-4b12-9902-1d5fe1889d6e.png",
      description: "Estrategista digital que transformou conhecimento técnico em autoridade no mercado corporativo, criando metodologias próprias para transformação digital. Especialista reconhecido por grandes empresas, desenvolveu uma comunidade de líderes empresariais que buscam inovação e resultados sustentáveis através de estratégias digitais diferenciadas."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    const startX = e.clientX;
    const startScrollLeft = carouselRef.current?.scrollLeft || 0;

    const handleDragMove = (e: MouseEvent) => {
      if (!carouselRef.current) return;
      const x = e.clientX;
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = startScrollLeft - walk;
    };

    const handleDragEnd = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
    };

    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
  };

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-gradient-to-b from-black-950 to-black-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gold-400/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white leading-tight">
              GRANDES LÍDERES DO MERCADO QUE FORAM AJUDADOS PELA NOSSA METODOLOGIA
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Veja como outros líderes transformaram suas marcas pessoais em movimentos poderosos
            </p>
          </div>

          {/* Main Carousel */}
          <div className="relative mb-12">
            <div 
              ref={carouselRef}
              className={`overflow-hidden cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
              onMouseDown={handleDragStart}
            >
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {cases.map((case_, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="card-premium bg-gradient-to-br from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.06] transition-all duration-500">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image Section */}
                        <div className="relative">
                          <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gold-500/20 to-transparent z-10" />
                            
                            <img 
                              src={case_.image} 
                              alt={case_.name}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                            
                            {/* Name Overlay */}
                            <div className="absolute bottom-6 left-6 right-6">
                              <div className="glass-strong p-6 rounded-xl">
                                <h3 className="text-2xl font-bold text-white mb-1">{case_.name}</h3>
                                <p className="text-gold-400 font-medium">{case_.field}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-8">
                          {/* Description */}
                          <div className="glass-strong p-6 rounded-xl">
                            <blockquote className="text-white/90 text-lg leading-relaxed">
                              {case_.description}
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-strong rounded-full flex items-center justify-center hover:bg-white/[0.15] transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-gold-400 transition-colors" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass-strong rounded-full flex items-center justify-center hover:bg-white/[0.15] transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-gold-400 transition-colors" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mb-16">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gold-400 w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="btn-premium text-lg magnetic group hover:scale-110 transition-all duration-300">
              <span className="flex items-center">
                QUERO PREENCHER APLICAÇÃO
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesCarousel;
