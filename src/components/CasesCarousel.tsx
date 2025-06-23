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
      image: "/lovable-uploads/97958041-5e44-4b91-9481-3cba966ef268.png",
      description: "Fundador da AS Academy, maior escola de micropigmentação da América Latina e criador de um ecossistema completo da beleza com AS Academy, Make Cake, Odd Sheep e Casa Branca. Transformou-se de profissional comum em autoridade mundial, formando mais de 100 mil profissionais em mais de 25 países através de uma metodologia que vai além da técnica, criando uma verdadeira comunidade global de seguidores fiéis ao movimento."
    },
    {
      name: "Alan Nicolas",
      field: "Inteligência Artificial",
      image: "/lovable-uploads/f83dcdac-fe21-4b19-a0df-58682304ded6.png",
      description: "Criador do Movimento Lendário e fundador da Academia Lendária, transformou sua expertise em IA em uma comunidade nacional de \"mentes inquietas\" com mais de 40 hubs regionais espalhados pelo Brasil. Especialista em IA com clareza e propósito, realizou evento com mais de 2 mil participantes em Florianópolis, demonstrando como construir autoridade através de uma filosofia de vida que atrai seguidores engajados."
    },
    {
      name: "Letícia Felisberto",
      field: "Neuroprosperidade", 
      image: "/lovable-uploads/a41d70c4-487d-466a-9460-dc43191dbc52.png",
      description: "Especialista número 1 do Brasil em Neurociência da Prosperidade, com 22 anos de experiência em terapia, criou o movimento \"Uma Nova Mulher\" através da metodologia Neuroprosperidade. Professora de mais de 30 mil alunas, transformou conhecimento terapêutico em um sistema de atualização de memórias que liberta mulheres de padrões limitantes, criando uma comunidade que faz da prosperidade o novo normal."
    },
    {
      name: "André Diamand",
      field: "Inovação",
      image: "/lovable-uploads/2f78c51e-daa3-4f8e-8c29-eab1a0e0d13f.png",
      description: "Ex-executivo IBM que criou a metodologia Sexy Canvas, revolucionando a forma como produtos irresistíveis são desenvolvidos através do mapeamento do comportamento humano. Empreendedor serial, inventor e investidor anjo com especializações internacionais, transformou experiência corporativa em movimento de inovação que atrai empresários buscando criar produtos que realmente conectam com seu público."
    },
    {
      name: "Iuri Meira",
      field: "Marketing Digital",
      image: "/lovable-uploads/49fed9fa-0fb7-4458-a9f6-e47f3d43f52a.png",
      description: "Especialista em marketing digital que transformou uma dívida de R$ 300 mil em um império digital através do \"Clube da Luta Digital\" e metodologia \"Modo Caverna\". Mentor que formou mais de 1.000 milionários na internet, vendeu mais de R$ 70 milhões em 2 anos através de estratégias próprias de tráfego pago e ofertas irresistíveis, criando uma comunidade de elite de empreendedores digitais."
    },
    {
      name: "Rafa Medeiros",
      field: "Influência",
      image: "/lovable-uploads/117d30a6-673b-4632-9a4b-9adbae640b72.png",
      description: "Criador dos Códigos da Influência e Método Influência Máxima, com 17 anos de experiência transformou-se em palestrante TEDx e fundador do Instituto Rafael Medeiros. Mentor de mais de 10 mil empresários, especializa-se em ensinar vendas através da personalidade, criando uma comunidade de líderes que vendem através da autenticidade e não de técnicas manipulativas."
    },
    {
      name: "Bianca Lauri",
      field: "Feminino Raiz",
      image: "/lovable-uploads/ab7a1a60-71c4-45c6-907a-0dd2c17da64d.png",
      description: "Psicoterapeuta sistêmica que criou o Feminino Raiz®, o maior movimento feminino do Brasil. Em 8 anos transformou mente, corpo, negócios e relacionamentos de mais de 50 mil mulheres, construindo uma comunidade de mais de 400 mil seguidores nas redes sociais. Demonstra como transformar conhecimento terapêutico em metodologia própria, criando uma tribo engajada que vai muito além de alunas para se tornarem defensoras da marca."
    },
    {
      name: "Rodrigo Mendanha",
      field: "Nutrição",
      image: "/lovable-uploads/94da7039-0ccb-478f-931e-7a865e9dcafb.png",
      description: "Nutricionista que revolucionou o mercado criando a metodologia Nutri High Ticket e fundando a Nutrição Holística®. Especialista em ensinar nutricionistas a faturarem 20-50K por mês através de protocolos de alto valor, criou uma comunidade de profissionais que saíram da commoditização para se tornarem autoridades bem remuneradas em suas especialidades."
    },
    {
      name: "Kelvin Almeida",
      field: "Branding",
      image: "/lovable-uploads/e2c06564-8697-4a64-9174-f4647454abc8.png",
      description: "Especialista em branding que criou a Verso Company e a primeira Escola de Diferenciação do Brasil. Viral no TikTok ensinando diferenciação de marcas, vencedor do TikTok Awards 2024, transformou conhecimento em branding em conteúdo acessível para jovens empreendedores, criando uma comunidade massiva que aprende diferenciação através de entretenimento educativo."
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

  const scrollToForm = () => {
    const formElement = document.getElementById('formulario-aplicacao');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-32 relative overflow-hidden bg-gradient-to-b from-black-950 to-black-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gold-400/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-8 text-white leading-tight">
              GRANDES LÍDERES DO MERCADO QUE FORAM AJUDADOS PELA NOSSA METODOLOGIA
            </h2>
            <p className="text-sm md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
              Veja como outros líderes transformaram suas marcas pessoais em movimentos poderosos
            </p>
          </div>

          {/* Main Carousel */}
          <div className="relative mb-8 md:mb-12">
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
                  <div key={index} className="w-full flex-shrink-0 px-2 md:px-4">
                    <div className="card-premium bg-gradient-to-br from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.06] transition-all duration-500">
                      <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
                        {/* Image Section */}
                        <div className="relative">
                          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gold-500/20 to-transparent z-10" />
                            
                            <img 
                              src={case_.image} 
                              alt={case_.name}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                            
                            {/* Name Overlay */}
                            <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6">
                              <div className="glass-strong p-3 md:p-6 rounded-xl">
                                <h3 className="text-lg md:text-2xl font-bold text-white mb-1">{case_.name}</h3>
                                <p className="text-sm md:text-base text-gold-400 font-medium">{case_.field}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-4 md:space-y-8">
                          {/* Description */}
                          <div className="glass-strong p-4 md:p-6 rounded-xl">
                            <blockquote className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed">
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
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 glass-strong rounded-full flex items-center justify-center hover:bg-white/[0.15] transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-gold-400 transition-colors" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 glass-strong rounded-full flex items-center justify-center hover:bg-white/[0.15] transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-gold-400 transition-colors" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 md:space-x-3 mb-8 md:mb-16">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gold-400 w-6 md:w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button 
              onClick={scrollToForm}
              className="btn-premium text-base md:text-lg magnetic group hover:scale-110 transition-all duration-300"
            >
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
