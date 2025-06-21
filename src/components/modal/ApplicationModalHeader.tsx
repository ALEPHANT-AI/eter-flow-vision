
import React from 'react';
import { CheckCircle, User, Building, Target, DollarSign } from 'lucide-react';

interface ApplicationModalHeaderProps {
  currentStep: number;
}

const ApplicationModalHeader: React.FC<ApplicationModalHeaderProps> = ({ currentStep }) => {
  const stepIcons = [User, Building, Target, DollarSign];
  const progressPercentage = currentStep === 0 ? 0 : currentStep >= 5 ? 100 : ((currentStep) / 4) * 100;

  if (currentStep === 0 || currentStep === 5) {
    return null;
  }

  return (
    <div className="px-8 pt-8 pb-6">
      <div className="flex justify-between items-center mb-4">
        {Array.from({ length: 4 }, (_, index) => {
          const StepIcon = stepIcons[index];
          const isActive = currentStep === index + 1;
          const isCompleted = currentStep > index + 1;
          
          return (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                isActive 
                  ? 'bg-gradient-to-br from-gold-500 to-gold-600 scale-110 glow-gold' 
                  : isCompleted 
                    ? 'bg-gradient-to-br from-green-500 to-green-600' 
                    : 'bg-white/10'
              }`}>
                {isCompleted ? (
                  <CheckCircle className="w-5 h-5 text-white" />
                ) : (
                  <StepIcon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-white/70'}`} />
                )}
              </div>
              <span className={`text-xs mt-2 transition-colors duration-300 ${
                isActive ? 'text-gold-400' : isCompleted ? 'text-green-400' : 'text-white/50'
              }`}>
                Etapa {index + 1}
              </span>
            </div>
          );
        })}
      </div>
      
      <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-700 ease-out glow-gold"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ApplicationModalHeader;
