import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Target, Users, Video, Calendar, Palette } from 'lucide-react';
import DeliverableModal from './DeliverableModal';
import DeliverableCard from './DeliverableCard';
import DeliverablePreview from './DeliverablePreview';

const DeliverableSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ image: '', title: '' });
  const sectionRef = useRef<HTMLElement>(null);

  // Updated modal images
  const modalImages = {
    movimento: "/lovable-uploads/09eda0c9-19c3-47ea-9842-777119a791bb.png",
    identidadeVisual: "/lovable-uploads/29a10b52-5847-4251-b4ed-912b2cbc0e68.png"
  };

  // Preview images for the thumbnail grid
  const previewImages = [
    { 
      src: "/lovable-uploads/e8f389e4-fe43-4df2-b475-0ea7644b61fe.png",
      title: "Movimento",
      fullImage: modalImages.movimento
    },
    { 
      src: "/lovable-uploads/942f15a4-0579-45b2-afe1-8343e8c0204f.png",
      title: "Identidade Visual",
      fullImage: modalImages.identidadeVisual
    }
  ];

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

  const openModal = (image: string, title: string) => {
    setModalContent({ image, title });
    setModalOpen(true);
  };

  const deliverables = [
    {
      icon: Target,
      title: "Criação de Movimento",
      description: "Sua mensagem, promessa e sistema de crenças que farão as pessoas te seguirem apaixonadamente.",
      preview: "Manifesto + Sistema de Crenças",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Sparkles,
      title: "Marca Pessoal",
      description: "Posicionamento único, diferenciação clara e autoridade que te posiciona como líder autêntico.",
      preview: "Posicionamento + Diferenciação",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Narrativa",
      description: "Sua história magnética e storytelling estruturado que conecta emocionalmente com sua audiência.",
      preview: "Storytelling + Mensagens-Chave",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Identidade da Tribo",
      description: "Como sua comunidade pensa, fala, age e se reconhece. O DNA completo dos seus seguidores ideais.",
      preview: "Persona + Linguagem + Rituais",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "Identidade Visual Completa",
      description: "Símbolos, cores, fotografia, fontes e direção de arte completa com atmosfera visual única.",
      preview: "Logo + Paleta + Templates",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Plano de Ativação",
      description: "Cronograma detalhado, scripts de posts e estratégias de lançamento do movimento.",
      preview: "Cronograma + Scripts + Métricas",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden bg-gradient-to-b from-black-800 via-black-850 to-black-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-400/4 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
              O que você <span className="text-gradient">recebe:</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Uma transformação completa da sua presença no mercado
            </p>
          </div>

          {/* Compact Example Preview */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <DeliverablePreview 
              previewImages={previewImages}
              onImageClick={openModal}
            />
          </div>

          {/* Interactive Deliverables Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 ${isVisible ? 'stagger-children revealed' : 'stagger-children'}`}>
            {deliverables.map((item, index) => (
              <DeliverableCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                preview={item.preview}
                gradient={item.gradient}
                isHovered={hoveredCard === index}
                onHover={() => setHoveredCard(index)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button className="group btn-premium text-lg magnetic hover:scale-110 transition-all duration-300">
              <span className="flex items-center relative z-10">
                <Sparkles className="w-5 h-5 mr-2 animate-spin" />
                QUERO SER SELECIONADO
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <DeliverableModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        image={modalContent.image}
        title={modalContent.title}
      />
    </section>
  );
};

export default DeliverableSection;
