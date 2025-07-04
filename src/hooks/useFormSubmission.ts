
import { useToast } from './use-toast';
import { sendApplicationToSupabase } from '../services/applicationService';
import { trackLead } from '../utils/pixelTracking';
import { FormData } from './useApplicationForm';

export const useFormSubmission = (
  formData: FormData,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>,
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  validateAllFields: (fields: any) => boolean
) => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('🎯 handleSubmit called');
    e.preventDefault();
    
    console.log('📝 Current form data:', formData);
    
    const requiredFieldsForSubmission = {
      nome: formData.nome,
      email: formData.email,
      whatsapp: formData.whatsapp,
      empresa: formData.empresa,
      cargo: formData.cargo,
      faturamento: formData.faturamento,
      principais_desafios: formData.principais_desafios,
      cronograma: formData.cronograma
    };
    
    console.log('🔍 Required fields for validation:', requiredFieldsForSubmission);
    
    const isFormValid = validateAllFields(requiredFieldsForSubmission as any);
    console.log('✅ Form validation result:', isFormValid);
    
    if (!isFormValid) {
      console.log('❌ Form validation failed');
      toast({
        title: "Erro na validação",
        description: "Por favor, verifique os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    console.log('🔄 Setting isSubmitting to true');
    setIsSubmitting(true);

    try {
      console.log('📤 Calling sendApplicationToSupabase...');
      const result = await sendApplicationToSupabase(formData);
      
      console.log('✅ Form submitted successfully:', result);
      
      toast({
        title: "Aplicação enviada com sucesso!",
        description: "Seus dados foram registrados. Em breve entraremos em contato.",
      });

      console.log('🎉 Moving to success step (4)');
      setCurrentStep(4);
      
      // Track Lead event after successful submission
      trackLead();
    } catch (error) {
      console.error('💥 Error submitting form:', error);
      
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
      console.log('🔄 Setting isSubmitting to false');
      setIsSubmitting(false);
    }
  };

  return { handleSubmit };
};
