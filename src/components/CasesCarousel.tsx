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
      name: "Alan Nicolas",
      role: "CEO & Fundador",
      company: "Digital Ventures",
      image: "/lovable-uploads/13243273-a668-487d-af78-572da6fc1536.png",
      result: "+400% faturamento em 10 meses",
      metric: "R$ 3.2M",
      metricLabel: "Novo patamar de receita",
      testimonial: "O THE EIGHT® transformou completamente minha presença no mercado. Hoje sou reconhecido como o principal líder em inovação digital. Meu ticket médio quadruplicou e tenho fila de espera de 8 meses.",
      stats: [
        { icon: TrendingUp, value: "400%", label: "Crescimento" },
        { icon: Users, value: "60K", label: "Seguidores" },
        { icon: DollarSign, value: "4x", label: "Ticket Médio" }
      ]
    },
    {
      name: "Alan Spadone",
      role: "Especialista em Growth",
      company: "Scale Pro",
      image: "/lovable-uploads/c07a67ec-0da1-4284-94ef-cb85aab811a6.png",
      result: "Tornou-se referência nacional em Growth Hacking",
      metric: "R$ 12M",
      metricLabel: "Em novos contratos",
      testimonial: "Davi me ajudou a criar um movimento em torno do 'Growth Sustentável'. Hoje empresários me procuram não por serviços, mas pela metodologia que criei. Sou o primeiro nome que vem à mente quando falam de growth no Brasil.",
      stats: [
        { icon: TrendingUp, value: "600%", label: "Reconhecimento" },
        { icon: Users, value: "150K", label: "Comunidade" },
        { icon: DollarSign, value: "6x", label: "Valor Hora" }
      ]
    },
    {
      name: "André Diamand",
      role: "Consultor de Liderança",
      company: "Leadership Excellence",
      image: "/lovable-uploads/88241303-9b60-4caa-8527-4d384750190f.png",
      result: "Criou movimento 'Liderança Humanizada'",
      metric: "R$ 15M",
      metricLabel: "Em palestras e consultorias",
      testimonial: "O processo do ETER me fez descobrir minha verdadeira missão. Hoje lidero um movimento que impacta milhares de líderes pelo Brasil. Saí da 'commoditização' para ser o único no que faço.",
      stats: [
        { icon: TrendingUp, value: "900%", label: "Impacto" },
        { icon: Users, value: "250K", label: "Alcance" },
        { icon: DollarSign, value: "12x", label: "Valor Palestra" }
      ]
    },
    {
      name: "Guilherme Cattani",
      role: "Estrategista Digital",
      company: "Digital Evolution",
      image: "/lovable-uploads/7185128b-a8cb-4b12-9902-1d5fe1889d6e.png",
      result: "Líder em transformação digital corporativa",
      metric: "R$ 8.5M",
      metricLabel: "Faturamento anual",
      testimonial: "Com o THE EIGHT® construí uma autoridade sólida no mercado corporativo. Hoje grandes empresas me procuram para liderar suas transformações digitais. Minha agenda está fechada por 1 ano.",
      stats: [
        { icon: TrendingUp, value: "500%", label: "Crescimento" },
        { icon: Users, value: "80K", label: "Seguidores" },
        { icon: DollarSign, value: "8x", label: "Valor Projeto" }
      ]
    },
    {
      name: "Iuri Meira",
      role: "Expert em Personal Branding",
      company: "Brand Evolution",
      image: "/lovable-uploads/6f61776b-2c5b-480a-beb1-916ba151cee9.png",
      result: "Referência em construção de marca pessoal",
      metric: "R$ 6.8M",
      metricLabel: "Em contratos premium",
      testimonial: "O ETER me transformou de consultor comum em autoridade máxima em personal branding. Hoje tenho uma metodologia própria e sou procurado pelos maiores influenciadores do país.",
      stats: [
        { icon: TrendingUp, value: "700%", label: "Autoridade" },
        { icon: Users, value: "120K", label: "Comunidade" },
        { icon: DollarSign, value: "10x", label: "Ticket Médio" }
      ]
    },
    {
      name: "Letícia Felisberto",
      role: "Consultora de Inovação",
      company: "Innovation Hub",
      image: "/lovable-uploads/d535c18c-ecee-444f-93c6-225e9464f578.png",
      result: "Pioneira em inovação corporativa feminina",
      metric: "R$ 9.2M",
      metricLabel: "Impacto gerado",
      testimonial: "Com a metodologia ETER, me tornei a principal voz feminina em inovação corporativa. Quebrei barreiras e hoje lidero um movimento que inspira milhares de mulheres executivas.",
      stats: [
        { icon: TrendingUp, value: "800%", label: "Influência" },
        { icon: Users, value: "200K", label: "Seguidoras" },
        { icon: DollarSign, value: "15x", label: "Valor Consultoria" }
      ]
    },
    {
      name: "Rafa Medeiros",
      role: "Estrategista de Negócios",
      company: "Business Pro",
      image: "/lovable-uploads/7ac967be-be6d-4dd4-9057-54c20c51092a.png",
      result: "Autoridade em estratégia empresarial",
      metric: "R$ 11M",
      metricLabel: "Receita gerada",
      testimonial: "O THE EIGHT® me posicionou como o estrategista mais procurado do mercado B2B. Desenvolvi uma metodologia única que é referência no setor. Minha agenda está lotada por 18 meses.",
      stats: [
        { icon: TrendingUp, value: "1000%", label: "Crescimento" },
        { icon: Users, value: "180K", label: "Rede" },
        { icon: DollarSign, value: "20x", label: "ROI Clientes" }
      ]
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
              Quem já fez parte do <span className="text-gradient">THE EIGHT®</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Líderes que transformaram suas marcas pessoais em movimentos poderosos
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
                            
                            {/* Floating Stats */}
                            <div className="absolute top-6 left-6 glass px-4 py-2 rounded-xl">
                              <div className="text-gold-400 text-sm font-medium">{case_.result}</div>
                            </div>
                            
                            {/* Name Overlay */}
                            <div className="absolute bottom-6 left-6 right-6">
                              <div className="glass-strong p-6 rounded-xl">
                                <h3 className="text-2xl font-bold text-white mb-1">{case_.name}</h3>
                                <p className="text-white/80 mb-2">{case_.role}</p>
                                <p className="text-gold-400 font-medium">{case_.company}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-8">
                          {/* Main Metric */}
                          <div className="text-center lg:text-left">
                            <div className="text-6xl md:text-7xl font-black text-gradient mb-2">
                              {case_.metric}
                            </div>
                            <div className="text-xl text-white/80">
                              {case_.metricLabel}
                            </div>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid grid-cols-3 gap-6">
                            {case_.stats.map((stat, statIndex) => {
                              const Icon = stat.icon;
                              return (
                                <div key={statIndex} className="text-center">
                                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-black-950" />
                                  </div>
                                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                  <div className="text-sm text-white/60">{stat.label}</div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Testimonial */}
                          <div className="glass-strong p-6 rounded-xl">
                            <div className="flex mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                              ))}
                            </div>
                            <blockquote className="text-white/90 text-lg leading-relaxed italic">
                              "{case_.testimonial}"
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
          <div className="flex justify-center space-x-3">
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
        </div>
      </div>
    </section>
  );
};

export default CasesCarousel;
