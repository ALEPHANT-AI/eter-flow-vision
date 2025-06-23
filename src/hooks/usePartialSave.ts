
import { useState } from 'react';
import { savePartialApplication } from '../services/applicationService';
import { FormData } from './useApplicationForm';

export const usePartialSave = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaveTime, setLastSaveTime] = useState<Date | null>(null);

  const savePartialData = async (data: Pick<FormData, 'nome' | 'email' | 'whatsapp' | 'instagram'>) => {
    console.log('🔄 Starting partial save...');
    setIsSaving(true);
    
    try {
      const result = await savePartialApplication(data);
      setLastSaveTime(new Date());
      console.log('✅ Partial save completed successfully');
      return { success: true, data: result.data };
    } catch (error) {
      console.error('❌ Partial save failed:', error);
      // Don't throw the error - we want partial saves to fail silently
      return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' };
    } finally {
      setIsSaving(false);
    }
  };

  return {
    savePartialData,
    isSaving,
    lastSaveTime
  };
};
