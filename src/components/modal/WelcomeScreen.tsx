
import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="text-center px-4 py-3 sm:p-6 shrink-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-2 sm:mb-3 text-white leading-tight">
          APLICAÇÃO PARA O <span className="text-gradient">THE EIGHT®</span>
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-2 sm:mb-3">
          Este processo é altamente seletivo. Apenas candidatos que demonstrarem potencial real de liderança serão aceitos.
        </p>
        
        <div className="inline-flex items-center glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold-400 mr-1.5 sm:mr-2 animate-pulse" />
          <span className="text-gold-400 text-xs sm:text-sm font-medium">8 vagas restantes</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 py-2 sm:py-4 space-y-4 sm:space-y-6 min-h-0">
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
            Você está pronto para se tornar um dos 8 líderes selecionados?
          </h3>
          
          <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto leading-relaxed">
            Esta é sua oportunidade de ter sua marca pessoal, movimento e narrativa criados pessoalmente por <strong className="text-gradient">Davi Ribas</strong>.
          </p>
          
          <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto">
            O processo de seleção é rigoroso e apenas os candidatos mais promissores serão aceitos para esta transformação exclusiva.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-white/60">
          <div className="flex items-center">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1.5" />
            <span className="text-xs sm:text-sm">Processo Seletivo</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1.5" />
            <span className="text-xs sm:text-sm">Apenas 8 Vagas</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1.5" />
            <span className="text-xs sm:text-sm">Resposta em 48h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
