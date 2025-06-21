
import React from 'react';

interface BusinessInfoStepProps {
  formData: {
    empresa: string;
    cargo: string;
    faturamento: string;
  };
  errors: { [key: string]: string };
  onInputChange: (field: string, value: string) => void;
  getFieldClassName: (field: string, baseClassName: string) => string;
  getFieldError: (field: string) => string;
}

const BusinessInfoStep: React.FC<BusinessInfoStepProps> = ({
  formData,
  errors,
  onInputChange,
  getFieldClassName,
  getFieldError
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative">
          <label className="block text-white/80 text-sm font-medium mb-2">Empresa/Negócio *</label>
          <input
            type="text"
            value={formData.empresa}
            onChange={(e) => onInputChange('empresa', e.target.value)}
            className={getFieldClassName('empresa', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/50 transition-all duration-300")}
            placeholder="Nome da sua empresa"
          />
          {getFieldError('empresa') && (
            <p className="text-red-400 text-xs mt-1">{getFieldError('empresa')}</p>
          )}
        </div>
        
        <div className="relative">
          <label className="block text-white/80 text-sm font-medium mb-2">Cargo/Função *</label>
          <input
            type="text"
            value={formData.cargo}
            onChange={(e) => onInputChange('cargo', e.target.value)}
            className={getFieldClassName('cargo', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-white/50 transition-all duration-300")}
            placeholder="CEO, Fundador, Especialista..."
          />
          {getFieldError('cargo') && (
            <p className="text-red-400 text-xs mt-1">{getFieldError('cargo')}</p>
          )}
        </div>
      </div>
      
      <div className="relative">
        <label className="block text-white/80 text-sm font-medium mb-2">Faturamento Mensal *</label>
        <select
          value={formData.faturamento}
          onChange={(e) => onInputChange('faturamento', e.target.value)}
          className={getFieldClassName('faturamento', "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white transition-all duration-300")}
        >
          <option value="">Selecione sua faixa de faturamento</option>
          <option value="50k-100k">R$ 50K - R$ 100K</option>
          <option value="100k-300k">R$ 100K - R$ 300K</option>
          <option value="300k-500k">R$ 300K - R$ 500K</option>
          <option value="500k+">R$ 500K+</option>
        </select>
        {getFieldError('faturamento') && (
          <p className="text-red-400 text-xs mt-1">{getFieldError('faturamento')}</p>
        )}
      </div>
    </div>
  );
};

export default BusinessInfoStep;
