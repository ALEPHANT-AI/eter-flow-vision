
import React from 'react';

interface InvestmentStepProps {
  formData: {
    experiencia_anterior: string;
  };
  errors: { [key: string]: string };
  onInputChange: (field: string, value: string) => void;
  getFieldClassName: (field: string, baseClassName: string) => string;
  getFieldError: (field: string) => string;
}

const InvestmentStep: React.FC<InvestmentStepProps> = ({
  formData,
  errors,
  onInputChange,
  getFieldClassName,
  getFieldError
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="relative">
        <label className="block text-white/80 text-sm font-medium mb-2">
          Experiência anterior com consultoria/mentoria
          <span className="text-white/50 text-xs ml-1">(opcional)</span>
        </label>
        <textarea
          value={formData.experiencia_anterior}
          onChange={(e) => onInputChange('experiencia_anterior', e.target.value)}
          rows={4}
          className={getFieldClassName('experiencia_anterior', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 sm:py-2.5 text-white placeholder-white/50 transition-all duration-300 resize-none text-base sm:text-sm")}
          placeholder="Conte sobre suas experiências anteriores com consultoria ou mentoria... (opcional)"
        />
        {getFieldError('experiencia_anterior') && (
          <p className="text-red-400 text-xs mt-1">{getFieldError('experiencia_anterior')}</p>
        )}
      </div>
      
      <div className="card-premium bg-gradient-to-br from-gold-500/10 to-gold-600/5 border-gold-500/20 p-6 text-center">
        <h4 className="text-xl font-black text-white mb-4">Confirme sua Aplicação</h4>
        <p className="text-white/90 text-lg leading-relaxed mb-2">
          Confirme agora sua aplicação para poder ter seu movimento, sua marca, construída pelo próprio <span className="text-gold-400 font-bold">Davi Ribas</span> e se tornar um novo <span className="text-gold-400 font-bold">Case</span>.
        </p>
        <div className="text-xs text-gold-400 mt-4">
          ✓ Metodologia ETER completa • ✓ Mentoria com Davi Ribas • ✓ 11 semanas de transformação
        </div>
      </div>
    </div>
  );
};

export default InvestmentStep;
