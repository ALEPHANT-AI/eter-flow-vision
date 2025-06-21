
import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
  return (
    <>
      <div className="text-center p-8 pb-6">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-white leading-tight">
          APLICAÇÃO PARA O <span className="text-gradient">THE EIGHT®</span>
        </h2>
        <p className="text-base text-white/70 max-w-2xl mx-auto mb-4">
          Este processo é altamente seletivo. Apenas candidatos que demonstrarem potencial real de liderança serão aceitos.
        </p>
        
        <div className="inline-flex items-center glass px-4 py-2 rounded-full">
          <Sparkles className="w-4 h-4 text-gold-400 mr-2 animate-pulse" />
          <span className="text-gold-400 text-sm font-medium">8 vagas restantes</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8 animate-fade-in">
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            Você está pronto para se tornar um dos 8 líderes selecionados?
          </h3>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Esta é sua oportunidade de ter sua marca pessoal, movimento e narrativa criados pessoalmente por <strong className="text-gradient">Davi Ribas</strong>.
          </p>
          
          <p className="text-base text-white/70 max-w-xl mx-auto">
            O processo de seleção é rigoroso e apenas os candidatos mais promissores serão aceitos para esta transformação exclusiva.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-8 text-white/60">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm">Processo Seletivo</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm">Apenas 8 Vagas</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm">Resposta em 48h</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
