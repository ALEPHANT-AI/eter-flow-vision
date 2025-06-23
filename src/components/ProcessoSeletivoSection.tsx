
import React from 'react';
import { ArrowRight, Clock, Phone, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useApplicationModal } from '../contexts/ApplicationModalContext';

const ProcessoSeletivoSection = () => {
  const { openModal } = useApplicationModal();

  return (
    <section id="formulario-aplicacao" className="relative py-20 px-4 bg-gradient-to-br from-black-950 via-black-900 to-black-800">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-gold-400/3 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            <span className="text-gradient bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
              PROCESSO SELETIVO
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12">
            Apenas <strong className="text-gold-400">8 vagas disponíveis</strong> e o processo seletivo é rigoroso porque trabalhamos apenas com pessoas alinhadas aos nossos valores e dispostas a construir marcas pessoais verdadeiramente poderosas.
          </p>

          {/* CTA Button */}
          <Button
            onClick={openModal}
            className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 font-bold px-8 py-4 text-lg rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-glow-gold-strong hover:from-gold-400 hover:to-gold-500"
          >
            <span className="relative z-10 flex items-center">
              PREENCHER APLICAÇÃO AGORA
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-xl" />
          </Button>
        </div>

        {/* Timeline Info */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <p className="text-gold-400 font-semibold">⏰ Prazo para aplicações:</p>
              <p className="text-white">7 dias</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <p className="text-gold-400 font-semibold">📞 Entrevista estratégica</p>
              <p className="text-white">com aprovados</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <p className="text-gold-400 font-semibold">✅ Início imediato</p>
              <p className="text-white">para selecionados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessoSeletivoSection;
