
import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full min-h-0">
      {/* Header Section with proper spacing */}
      <div className="text-center px-4 py-4 sm:px-6 sm:py-6 shrink-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 text-white leading-tight">
          APLICAÇÃO PARA O <span className="text-gradient">THE EIGHT®</span>
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto mb-4 sm:mb-6 leading-relaxed">
          Este processo é altamente seletivo. Apenas candidatos que demonstrarem potencial real de liderança serão aceitos.
        </p>
        
        {/* Badge with explicit spacing */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gold-400 mr-1.5 sm:mr-2 animate-pulse" />
            <span className="text-gold-400 text-xs sm:text-sm font-medium">8 vagas restantes</span>
          </div>
        </div>
      </div>

      {/* Main Content Section with explicit spacing */}
      <div className="flex-1 flex flex-col justify-center px-4 py-4 sm:py-6 min-h-0">
        <div className="text-center space-y-4 sm:space-y-6 max-w-2xl mx-auto">
          {/* Main Question */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-3 sm:mb-4">
              Você está pronto para se tornar um dos 8 líderes selecionados?
            </h3>
            
            <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto leading-relaxed mb-3 sm:mb-4">
              Esta é sua oportunidade de ter sua marca pessoal, movimento e narrativa criados pessoalmente por <strong className="text-gradient">Davi Ribas</strong>.
            </p>
            
            <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
              O processo de seleção é rigoroso e apenas os candidatos mais promissores serão aceitos para esta transformação exclusiva.
            </p>
          </div>

          {/* Features Section with explicit spacing */}
          <div className="mt-6 sm:mt-8">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-white/60">
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm whitespace-nowrap">Processo Seletivo</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm whitespace-nowrap">Apenas 8 Vagas</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm whitespace-nowrap">Resposta em 48h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
