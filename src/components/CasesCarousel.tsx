
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CasesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cases = [
    {
      name: "ALAN SPADONE",
      area: "Micropigmentação",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Fundador da AS Academy, maior escola de micropigmentação da América Latina e criador de um ecossistema completo da beleza com AS Academy, Make Cake, Odd Sheep e Casa Branca. Transformou-se de profissional comum em autoridade mundial, formando mais de 100 mil profissionais em mais de 25 países através de uma metodologia que vai além da técnica, criando uma verdadeira comunidade global de seguidores fiéis ao movimento."
    },
    {
      name: "ALAN NICOLAS",
      area: "Inteligência Artificial",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Criador do Movimento Lendário e fundador da Academia Lendária, transformou sua expertise em IA em uma comunidade nacional de 'mentes inquietas' com mais de 40 hubs regionais espalhados pelo Brasil. Especialista em IA com clareza e propósito, realizou evento com mais de 2 mil participantes em Florianópolis, demonstrando como construir autoridade através de uma filosofia de vida que atrai seguidores engajados."
    },
    {
      name: "LETÍCIA FELISBERTO",
      area: "Neuroprosperidade",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Especialista número 1 do Brasil em Neurociência da Prosperidade, com 22 anos de experiência em terapia, criou o movimento 'Uma Nova Mulher' através da metodologia Neuroprosperidade. Professora de mais de 30 mil alunas, transformou conhecimento terapêutico em um sistema de atualização de memórias que liberta mulheres de padrões limitantes, criando uma comunidade que faz da prosperidade o novo normal."
    },
    {
      name: "BIANCA LAURI",
      area: "Feminino Raiz",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Psicoterapeuta sistêmica que criou o Feminino Raiz®, o maior movimento feminino do Brasil. Em 8 anos transformou mente, corpo, negócios e relacionamentos de mais de 50 mil mulheres, construindo uma comunidade de mais de 400 mil seguidores nas redes sociais. Demonstra como transformar conhecimento terapêutico em metodologia própria, criando uma tribo engajada que vai muito além de alunas para se tornarem defensoras da marca."
    },
    {
      name: "IURI MEIRA",
      area: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      description: "Especialista em marketing digital que transformou uma dívida de R$ 300 mil em um império digital através do 'Clube da Luta Digital' e metodologia 'Modo Caverna'. Mentor que formou mais de 1.000 milionários na internet, vendeu mais de R$ 70 milhões em 2 anos através de estratégias próprias de tráfego pago e ofertas irresistíveis, criando uma comunidade de elite de empreendedores digitais."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white leading-tight">
            <span className="gradient-text">GRANDES LÍDERES</span> DO MERCADO QUE FORAM AJUDADOS PELA NOSSA METODOLOGIA
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Veja como outros líderes transformaram suas marcas pessoais em movimentos poderosos
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-12 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cases.map((caseItem, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    {/* Photo */}
                    <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.name}
                        className="w-full h-full object-cover rounded-2xl glow-amber"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="mb-4">
                        <h3 className="text-2xl md:text-3xl font-black gradient-text mb-2">
                          {caseItem.name}
                        </h3>
                        <p className="text-amber-400 font-medium text-lg">
                          {caseItem.area}
                        </p>
                      </div>
                      
                      <p className="text-white/80 leading-relaxed">
                        {caseItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="glass hover:glass-strong p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            {/* Indicators */}
            <div className="flex space-x-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-amber-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="glass hover:glass-strong p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-premium text-lg">
            <span>QUERO PREENCHER APLICAÇÃO</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasesCarousel;
