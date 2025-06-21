
import { getStepFields } from '../components/modal/ApplicationModalUtils';
import { FormData } from './useApplicationForm';

export const useStepNavigation = (
  currentStep: number,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
  formData: FormData,
  errors: { [key: string]: string },
  validateField: (field: string, value: string) => string
) => {
  const canProceedToNextStep = () => {
    if (currentStep === 0) return true;
    
    const stepFields = getStepFields(currentStep);
    console.log('Checking step', currentStep, 'fields:', stepFields);
    console.log('Current form data:', formData);
    console.log('Current errors:', errors);
    
    const hasRequiredValues = stepFields.every(field => {
      const value = formData[field as keyof typeof formData];
      
      if (field === 'instagram') {
        return true;
      }
      if (field === 'experiencia_anterior') {
        return true;
      }
      
      const hasValue = value && value.trim() !== '' && value !== '@';
      console.log(`Field ${field}: value="${value}", hasValue=${hasValue}`);
      return hasValue;
    });
    
    const hasNoErrors = stepFields.every(field => !errors[field]);
    
    console.log('Has required values:', hasRequiredValues);
    console.log('Has no errors:', hasNoErrors);
    
    return hasRequiredValues && hasNoErrors;
  };

  const nextStep = () => {
    if (currentStep === 0) {
      setCurrentStep(prev => prev + 1);
      return;
    }
    
    const stepFields = getStepFields(currentStep);
    console.log('Attempting to move from step', currentStep, 'to', currentStep + 1);
    
    stepFields.forEach(field => {
      const value = formData[field as keyof typeof formData];
      const error = validateField(field, value);
      if (error) {
        console.log(`Validation error for ${field}:`, error);
      }
    });
    
    if (canProceedToNextStep() && currentStep < 5) {
      setCurrentStep(prev => prev + 1);
      console.log('Moving to step:', currentStep + 1);
      console.log('Form data at step change:', formData);
    } else {
      console.log('Cannot proceed to next step. Can proceed:', canProceedToNextStep());
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return {
    canProceedToNextStep,
    nextStep,
    prevStep
  };
};
