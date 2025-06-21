
import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Loader2 } from 'lucide-react';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  canProceedToNextStep: () => boolean;
  nextStep: () => void;
  prevStep: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleBackToHome: () => void;
  isSubmitting?: boolean;
}

const FormNavigation: React.FC<FormNavigationProps> = ({
  currentStep,
  totalSteps,
  canProceedToNextStep,
  nextStep,
  prevStep,
  handleSubmit,
  handleBackToHome,
  isSubmitting = false
}) => {
  if (currentStep === 5) {
    return (
      <div className="flex justify-center mt-6 sm:mt-8">
        <button
          type="button"
          onClick={handleBackToHome}
          className="btn-premium text-base sm:text-lg group glow-gold-strong px-6 py-3 sm:px-8 sm:py-4"
        >
          <span className="flex items-center">
            Voltar à página principal
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    );
  }

  if (currentStep < 5) {
    return (
      <div className="flex justify-between items-center mt-4 sm:mt-6 pt-4 border-t border-white/10">
        {currentStep > 0 ? (
          <button
            type="button"
            onClick={prevStep}
            disabled={isSubmitting}
            className={`flex items-center px-4 py-2 sm:px-6 sm:py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 text-sm sm:text-base ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </button>
        ) : (
          <div />
        )}

        {currentStep === 0 ? (
          <button
            type="button"
            onClick={nextStep}
            className="btn-premium group text-lg sm:text-xl px-6 py-3 sm:px-8 sm:py-4"
          >
            <span className="flex items-center">
              <Sparkles className="w-5 h-5 mr-2 animate-spin" />
              APLICAR
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        ) : currentStep < 4 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!canProceedToNextStep() || isSubmitting}
            className={`btn-premium group px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base ${!canProceedToNextStep() || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="flex items-center">
              Próximo
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        ) : (
          <button
            type="submit"
            disabled={!canProceedToNextStep() || isSubmitting}
            className={`btn-premium text-base sm:text-lg group glow-gold-strong px-6 py-3 sm:px-8 sm:py-4 ${!canProceedToNextStep() || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleSubmit}
          >
            <span className="flex items-center">
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Sparkles className="w-5 h-5 mr-2 animate-spin" />
              )}
              {isSubmitting ? 'ENVIANDO...' : 'ENVIAR APLICAÇÃO'}
            </span>
          </button>
        )}
      </div>
    );
  }

  return null;
};

export default FormNavigation;
