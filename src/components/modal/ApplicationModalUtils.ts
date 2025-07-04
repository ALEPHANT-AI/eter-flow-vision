
export const getStepTitle = (step: number): string => {
  switch (step) {
    case 0:
      return 'Bem-vindo ao THE EIGHT®';
    case 1:
      return 'Informações Pessoais';
    case 2:
      return 'Informações Profissionais';
    case 3:
      return 'Desafios e Objetivos';
    case 4:
      return 'Aplicação Enviada';
    default:
      return 'THE EIGHT®';
  }
};

export const getStepDescription = (step: number): string => {
  switch (step) {
    case 0:
      return 'Programa exclusivo para 8 líderes que querem transformar sua marca pessoal em um movimento poderoso';
    case 1:
      return 'Conte-nos sobre você';
    case 2:
      return 'Informações sobre sua empresa';
    case 3:
      return 'Seus desafios e expectativas';
    case 4:
      return 'Sua aplicação foi enviada com sucesso';
    default:
      return 'Programa exclusivo para líderes';
  }
};

export const getStepFields = (step: number): string[] => {
  switch (step) {
    case 1:
      return ['nome', 'email', 'whatsapp', 'instagram'];
    case 2:
      return ['empresa', 'cargo', 'faturamento'];
    case 3:
      return ['principais_desafios', 'cronograma'];
    case 4:
      return []; // Success screen - no fields
    default:
      return [];
  }
};
