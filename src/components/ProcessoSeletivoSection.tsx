
import React, { useState } from 'react';
import { ArrowRight, Clock, Phone, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';
import { sendApplicationToSupabase } from '../services/applicationService';

const ProcessoSeletivoSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    instagram: '@'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('📝 ProcessoSeletivoSection form submission started');
    e.preventDefault();
    
    if (!formData.nome || !formData.email || !formData.telefone) {
      console.log('❌ Required fields missing in ProcessoSeletivoSection');
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, email e telefone.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const applicationData = {
        nome: formData.nome,
        email: formData.email,
        whatsapp: formData.telefone,
        instagram: formData.instagram === '@' ? '' : formData.instagram,
        empresa: '',
        cargo: '',
        faturamento: '',
        principais_desafios: '',
        objetivos_movimento: '',
        cronograma: '',
        orcamento_investimento: '',
        experiencia_anterior: ''
      };

      console.log('📤 ProcessoSeletivoSection calling sendApplicationToSupabase with:', applicationData);
      const result = await sendApplicationToSupabase(applicationData);
      console.log('✅ ProcessoSeletivoSection submission successful:', result);
      
      toast({
        title: "Aplicação enviada com sucesso!",
        description: "Seus dados foram registrados. Em breve entraremos em contato.",
      });

      setFormData({
        nome: '',
        email: '',
        telefone: '',
        instagram: '@'
      });
    } catch (error) {
      console.error('💥 ProcessoSeletivoSection submission error:', error);
      
      let errorMessage = "Houve um problema ao enviar sua aplicação. Tente novamente.";
      
      if (error instanceof Error) {
        errorMessage = `Erro: ${error.message}`;
      }
      
      toast({
        title: "Erro no envio",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Apenas <strong className="text-gold-400">8 vagas disponíveis</strong> e o processo seletivo é rigoroso porque trabalhamos apenas com pessoas alinhadas aos nossos valores e dispostas a construir marcas pessoais verdadeiramente poderosas.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-black-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            FORMULÁRIO DE APLICAÇÃO
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-white font-medium">
                  Nome Completo *
                </Label>
                <Input
                  id="nome"
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  className="bg-black-800/50 border-white/20 text-white placeholder:text-white/50 focus:border-gold-400"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-black-800/50 border-white/20 text-white placeholder:text-white/50 focus:border-gold-400"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-white font-medium">
                  Telefone/WhatsApp *
                </Label>
                <Input
                  id="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                  className="bg-black-800/50 border-white/20 text-white placeholder:text-white/50 focus:border-gold-400"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="instagram" className="text-white font-medium">
                  Instagram
                </Label>
                <Input
                  id="instagram"
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => handleInputChange('instagram', e.target.value)}
                  className="bg-black-800/50 border-white/20 text-white placeholder:text-white/50 focus:border-gold-400"
                  placeholder="@seuinstagram"
                />
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group relative overflow-hidden bg-gradient-to-r from-gold-500 to-gold-600 text-black-950 font-bold px-8 py-4 text-lg rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-glow-gold-strong hover:from-gold-400 hover:to-gold-500"
              >
                <span className="relative z-10 flex items-center">
                  {isSubmitting ? 'ENVIANDO...' : 'ENVIAR APLICAÇÃO'}
                  {!isSubmitting && <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />}
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-xl" />
              </Button>
            </div>
          </form>
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
