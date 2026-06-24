// Configuração de SEO e Compartilhamento de Redes Sociais do Coletivo Coworking
// Edite os textos abaixo para mudar os títulos, descrições e imagens exibidos nas redes sociais (Telegram, WhatsApp, etc).

export interface SeoPageConfig {
  title: string;
  desc: string;
  ogImage: string;
}

export const seoConfig: Record<string, SeoPageConfig> = {
  '/': {
    title: 'Coletivo Coworking | Salas Privativas e Escritórios POA',
    desc: 'O Coletivo é mais que um coworking: um ecossistema completo com salas privativas, estações de trabalho e salas de reunião modernas em Porto Alegre.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/03/IMG_0571_edit-scaled.jpg'
  },
  '/unidades': {
    title: 'Unidades Coletivo | Casa 62 e Area 51 em Porto Alegre',
    desc: 'Conheça nossas duas unidades premium em Porto Alegre: Casa 62 e Area 51. Espaços inspiradores, modernos e prontos para decolar sua empresa.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg'
  },
  '/unidades/casa-62': {
    title: 'Unidade Casa 62 POA | Coletivo Coworking',
    desc: 'Descubra a Casa 62: um espaço de coworking charmoso e intimista no coração de Porto Alegre, ideal para networking e foco de alto rendimento.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/6.jpg'
  },
  '/unidades/area-51': {
    title: 'Unidade Area 51 POA | Hub de Inovação e Tech',
    desc: 'Conheça a Area 51: o hub de inovação, coworking e tecnologia definitivo para startups e empresas modernas acelerarem em Porto Alegre.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg'
  },
  '/espacos': {
    title: 'Espaços Coworking e Salas Privativas | Coletivo',
    desc: 'Encontre o espaço perfeito para seu negócio: de estações rotativas a escritórios privativos sob medida e salas de reunião totalmente equipadas.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg'
  },
  '/espacos/estacao-rotativa': {
    title: 'Estação Rotativa | Trabalho Flexível e Conectado',
    desc: 'Trabalhe de forma flexível e econômica com nosso plano de estação rotativa. Acesso a infraestrutura premium e community lounge integrado.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2023/03/IMG_0571_edit-scaled.jpg'
  },
  '/espacos/estacao-fixa': {
    title: 'Estação Fixa Resident | Sua Mesa Exclusiva POA',
    desc: 'Uma mesa exclusiva para chamar de sua em Porto Alegre. Alie a estabilidade de um escritório próprio ao ecossistema vibrante do Coletivo.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/6.jpg'
  },
  '/espacos/privativo-startup': {
    title: 'Salas Privativas para Startups | Coletivo Coworking',
    desc: 'Escritórios privativos flexíveis e dinâmicos sob medida para impulsionar a colaboração e o rápido crescimento da sua startup.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/1.jpg'
  },
  '/espacos/privativo-empresa': {
    title: 'Escritórios Privativos Corporate | Coletivo',
    desc: 'Salas exclusivas com máxima privacidade, acústica e infraestrutura premium para consolidar a presença de sua empresa em Porto Alegre.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg'
  },
  '/espacos/sala-reuniao': {
    title: 'Aluguel de Salas de Reunião em Porto Alegre | Coletivo',
    desc: 'Salas de reunião equipadas com isolamento acústico, tecnologia de ponta e serviço de café para receber seus clientes com máximo profissionalismo.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/6.jpg'
  },
  '/empresas/endereco-comercial': {
    title: 'Endereço Fiscal e Comercial POA | Coletivo Coworking',
    desc: 'Formalize sua empresa com endereço fiscal de prestígio em Porto Alegre. Gestão de correspondência profissional e credibilidade imediata.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg'
  },
  '/empresas/eventos': {
    title: 'Espaço para Eventos Corporativos POA | Coletivo',
    desc: 'Realize palestras, workshops e meetups em auditórios e lounges sofisticados com buffet integrado e suporte técnico completo.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/06/PROPOSTA-EVENTOS.png'
  },
  '/empresas': {
    title: 'Soluções Corporativas p/ Empresas | Coletivo',
    desc: 'Impulsione sua empresa com escritórios privativos, endereço comercial de prestígio e eventos de alto impacto no Coletivo Coworking.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2024/09/DSC01993-scaled.jpg'
  },
  '/comunidade': {
    title: 'Comunidade e Networking em POA | Coletivo',
    desc: 'Faça parte de um hub ativo de conexões humanas e sinergia de negócios. Eventos exclusivos, parcerias e muito networking em Porto Alegre.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0079-scaled.jpg'
  },
  '/sobre': {
    title: 'Sobre o Coletivo | Manifesto e Nosso Ecossistema',
    desc: 'Descubra a história e o manifesto do Coletivo Coworking. Acreditamos na força da comunidade e na evolução conjunta de pessoas e negócios.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2025/03/Design-sem-nome-4.jpg'
  },
  '/investidores': {
    title: 'Investidores e Parcerias no Hub | Coletivo',
    desc: 'Apoie o crescimento do ecossistema empreendedor de Porto Alegre investindo in infraestrutura de alto rendimento e inovação contínua.',
    ogImage: 'https://lavender-dugong-488889.hostingersite.com/wp-content/uploads/2026/05/AREA_51_0022-scaled.jpg'
  }
};
