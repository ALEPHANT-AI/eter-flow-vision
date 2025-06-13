
import React from 'react';
import { Sparkles, Expand } from 'lucide-react';

interface PreviewImage {
  src: string;
  title: string;
  fullImage: string;
}

interface DeliverablePreviewProps {
  previewImages: PreviewImage[];
  onImageClick: (image: string, title: string) => void;
}

const DeliverablePreview = ({ previewImages, onImageClick }: DeliverablePreviewProps) => {
  return (
    <div className="card-premium mb-12 bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-gold-500/20 transition-all duration-1000 delay-300 hover:scale-[1.01]">
      <div className="text-center mb-4">
        <div className="flex items-center justify-center mb-3">
          <Sparkles className="w-6 h-6 text-gold-400 mr-2" />
          <span className="text-white text-lg font-bold">EXEMPLO REAL DE ENTREGÁVEL</span>
        </div>
        <p className="text-white/60 text-sm">Clique para ver em tela cheia</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {previewImages.map((item, index) => (
          <div 
            key={index}
            className="relative h-64 bg-gradient-to-br from-gold-500/5 to-gold-600/5 rounded-lg border border-gold-500/20 overflow-hidden cursor-pointer group"
            onClick={() => onImageClick(item.fullImage, item.title)}
          >
            <img 
              src={item.src} 
              alt={`${item.title} preview`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black-900/20 group-hover:bg-black-900/10 transition-colors duration-300" />
            <div className="absolute top-2 right-2 bg-black-900/80 backdrop-blur-sm rounded-lg px-2 py-1">
              <Expand className="w-4 h-4 text-white/70" />
            </div>
            <div className="absolute bottom-2 left-2 bg-black-900/80 backdrop-blur-sm rounded-lg px-2 py-1">
              <span className="text-white/70 text-xs">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliverablePreview;
