
import { supabase } from '../integrations/supabase/client';
import { FormData } from '../hooks/useApplicationForm';

export const sendApplicationToSupabase = async (data: FormData) => {
  console.log('📤 sendApplicationToSupabase called with data:', data);
  
  try {
    // Test Supabase connection first
    console.log('🔗 Testing Supabase connection...');
    const { data: testData, error: testError } = await supabase
      .from('form_applications')
      .select('count')
      .limit(1);
    
    if (testError) {
      console.error('❌ Supabase connection test failed:', testError);
      throw new Error(`Connection failed: ${testError.message}`);
    }
    
    console.log('✅ Supabase connection successful');
    
    // Prepare data for insertion
    const insertData = {
      nome: data.nome,
      email: data.email,
      whatsapp: data.whatsapp,
      instagram: data.instagram === '@' ? null : data.instagram,
      empresa: data.empresa,
      cargo: data.cargo,
      faturamento: data.faturamento,
      principais_desafios: data.principais_desafios,
      objetivos_movimento: data.objetivos_movimento || null,
      cronograma: data.cronograma,
      orcamento_investimento: data.orcamento_investimento,
      experiencia_anterior: data.experiencia_anterior || null
    };
    
    console.log('📋 Prepared data for insertion:', insertData);
    
    // Validate required fields
    const requiredFields = ['nome', 'email', 'whatsapp', 'empresa', 'cargo', 'faturamento', 'principais_desafios', 'cronograma', 'orcamento_investimento'];
    const missingFields = requiredFields.filter(field => !insertData[field as keyof typeof insertData]);
    
    if (missingFields.length > 0) {
      console.error('❌ Missing required fields:', missingFields);
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }
    
    console.log('✅ All required fields present');
    
    // Attempt insertion
    console.log('🚀 Attempting to insert data into Supabase...');
    const { data: insertResult, error } = await supabase
      .from('form_applications')
      .insert([insertData])
      .select();

    if (error) {
      console.error('❌ Supabase insertion error:', error);
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      throw error;
    }

    console.log('✅ Data successfully inserted into Supabase:', insertResult);
    return { success: true, data: insertResult };
  } catch (error) {
    console.error('💥 sendApplicationToSupabase error:', error);
    throw error;
  }
};
