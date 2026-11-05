export const COMPANY = {
  name: "LT Tecnologia",
  tradeName: "LT Tecnologia e Segurança",
  slogan: "Soluções completas em tecnologia e segurança",
  motto: "Conectando sua empresa com o futuro",
  finalSlogan: "Sempre ao seu lado!",
  phoneFormatted: "61-99295-3160",
  phoneDisplay: "(61) 99295-3160",
  phoneRaw: "5561992953160",
  email: "contato@lttecnologia.com.br",
  region: "Brasília e Região (DF e Entorno)",
  hours: "Segunda a Sábado: 08h às 18h | Plantão para emergências",
};

export const WHATSAPP_MESSAGES = {
  general: "Olá! Vim pelo site da LT Tecnologia e gostaria de solicitar um orçamento.",
  redes: "Olá! Tenho interesse em Redes Estruturadas. Pode me ajudar com um orçamento?",
  cctv: "Olá! Quero um orçamento de instalação de CFTV/câmeras de segurança.",
  eletrica: "Olá! Preciso de um serviço de instalação/manutenção elétrica.",
  reformas: "Olá! Gostaria de um orçamento para reformas residencial/comercial.",
  seguranca: "Olá! Quero saber mais sobre alarmes e segurança eletrônica.",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || WHATSAPP_MESSAGES.general;
  return `https://wa.me/${COMPANY.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export interface ServiceItem {
  id: string;
  titleLine1: string;
  titleLine2: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  quoteMessage: string;
  imageUrl: string;
  features: string[];
  technicalSpecs: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "redes",
    titleLine1: "REDES DE COMPUTADORES",
    titleLine2: "ESTRUTURADAS",
    shortTitle: "Redes Estruturadas",
    subtitle: "Conectividade, performance e estabilidade.",
    description: "Projetos de infraestrutura de rede de alto desempenho para empresas e escritórios. Cabeamento estruturado Cat6 e Cat6A, organização de racks, patch panels, certificação e Wi-Fi corporativo de alta densidade.",
    quoteMessage: WHATSAPP_MESSAGES.redes,
    imageUrl: "/assets/images/photo_redes.png",
    features: [
      "Projeto e cabeamento estruturado (Cat5e, Cat6, Cat6A)",
      "Montagem, identificação e organização de racks e patch panels",
      "Soluções de Wi-Fi corporativo de alta cobertura (Access Points)",
      "Switches gerenciáveis, roteadores empresariais e redundância",
      "Certificação e testes de atenuação e perda de pacotes"
    ],
    technicalSpecs: [
      "Normas técnicas EIA/TIA 568-C e ABNT NBR 14565",
      "Marcas homologadas: Furukawa, Nexans, Cisco, Ubiquiti, Mikrotik",
      "Documentação completa de portas e diagrama lógico de rede",
      "Garantia estendida na conectorização e fusão de fibra"
    ]
  },
  {
    id: "cctv",
    titleLine1: "CFTV",
    titleLine2: "MONITORAMENTO E INSTALAÇÃO",
    shortTitle: "CFTV & Monitoramento",
    subtitle: "Sua segurança em primeiro lugar.",
    description: "Sistemas inteligentes de circuito fechado de TV em alta resolução (Full HD e 4K). Câmeras IP, DVR/NVR em nuvem ou local, visão noturna colorida e monitoramento remoto em tempo real pelo celular e tablet.",
    quoteMessage: WHATSAPP_MESSAGES.cctv,
    imageUrl: "/assets/images/photo_cctv.png",
    features: [
      "Câmeras de segurança IP e analógicas HD/Full HD/4K",
      "DVRs e NVRs com gravação contínua ou por detecção de movimento",
      "Acesso remoto seguro por app no celular de qualquer lugar",
      "Câmeras com visão noturna ColorVu/Starlight e infravermelho",
      "Posicionamento estratégico para eliminação de pontos cegos"
    ],
    technicalSpecs: [
      "Marcas líderes: Intelbras, Hikvision, Dahua",
      "Armazenamento otimizado com HDs especiais para CFTV (WD Purple/SkyHawk)",
      "Instalação com infraestrutura protegida anti-vandalismo",
      "Treinamento do cliente para operação e extração de gravações"
    ]
  },
  {
    id: "eletrica",
    titleLine1: "ELÉTRICA",
    titleLine2: "INSTALAÇÕES E MANUTENÇÃO",
    shortTitle: "Instalações Elétricas",
    subtitle: "Segurança e eficiência em cada detalhe.",
    description: "Projetos, instalações e manutenções elétricas preventivas e corretivas para ambientes residenciais, comerciais e industriais. Montagem de quadros de distribuição, balanceamento de cargas, iluminação LED e nobreaks.",
    quoteMessage: WHATSAPP_MESSAGES.eletrica,
    imageUrl: "/assets/images/photo_eletrica.png",
    features: [
      "Quadros de distribuição (QGBT) e disjuntores dimensionados",
      "Instalações elétricas comerciais, residenciais e prediais",
      "Manutenção preventiva para evitar sobrecargas e curto-circuitos",
      "Projetos luminotécnicos em LED e automação de iluminação",
      "Infraestrutura dedicada para nobreaks, servidores e maquinários"
    ],
    technicalSpecs: [
      "Rigorosa conformidade com a norma regulamentadora NR-10 e NBR 5410",
      "Componentes de ponta: Schneider Electric, Steck, Siemens, Tigre",
      "Laudo de conformidade elétrica e balanceamento de fases",
      "Sistemas de aterramento e proteção contra surtos (DPS)"
    ]
  },
  {
    id: "reformas",
    titleLine1: "REFORMAS EM GERAL",
    titleLine2: "RESIDENCIAL E COMERCIAL",
    shortTitle: "Reformas em Geral",
    subtitle: "Seu espaço renovado com qualidade.",
    description: "Serviços completos de reformas para empresas, consultórios, lojas e residências. Adequações de layout, fechamentos em drywall, pintura técnica, pisos, acabamentos e infraestrutura integrada de elétrica e dados.",
    quoteMessage: WHATSAPP_MESSAGES.reformas,
    imageUrl: "/assets/images/photo_reformas.png",
    features: [
      "Pequenas e grandes reformas comerciais e corporativas",
      "Adequação de salas para escritórios e consultórios",
      "Paredes e forros em drywall, divisórias e isolamento acústico",
      "Pintura residencial e predial de alto acabamento",
      "Compatibilização de obras civis com instalações de TI e elétrica"
    ],
    technicalSpecs: [
      "Cronograma planejado com pontualidade na entrega",
      "Limpeza e proteção rigorosa do local de trabalho",
      "Equipe multidisciplinar experiente e coordenada",
      "Orçamento transparente sem custos ocultos"
    ]
  },
  {
    id: "seguranca",
    titleLine1: "SEGURANÇA ELETRÔNICA",
    titleLine2: "PROTEÇÃO TOTAL",
    shortTitle: "Segurança Eletrônica",
    subtitle: "Tecnologia a favor da sua tranquilidade.",
    description: "Soluções integradas de proteção perimetral e controle de acesso. Alarmes inteligentes monitorados por smartphone, sensores infravermelhos e micro-ondas, cerca elétrica de alta voltagem, interfonia e fechaduras digitais.",
    quoteMessage: WHATSAPP_MESSAGES.seguranca,
    imageUrl: "/assets/images/photo_seguranca.png",
    features: [
      "Centrais de alarme com notificação instantânea no celular",
      "Sensores de presença, barreira infravermelha perimetral e abertura",
      "Controle de acesso por biometria, cartão de proximidade (RFID) e senha",
      "Cerca elétrica e concertina para proteção de muros e perímetros",
      "Interfonia IP, vídeo porteiros e fechaduras magnéticas/digitais"
    ],
    technicalSpecs: [
      "Sistemas integrados com redundância de bateria contra quedas de energia",
      "Tecnologia anti-sabotagem com aviso de corte de fiação",
      "Soluções homologadas para condomínios e comércios no DF",
      "Garantia de operação contínua e assistência técnica rápida"
    ]
  }
];

export const DIFFERENTIALS = [
  {
    id: "qualidade",
    title: "QUALIDADE GARANTIDA",
    description: "Trabalhamos exclusivamente com materiais homologados de marcas líderes e seguimos rigorosamente as normas técnicas (ABNT, EIA/TIA e NR-10). Cada entrega passa por testes minuciosos de conformidade.",
    highlight: "Normas ABNT e marcas homologadas"
  },
  {
    id: "confianca",
    title: "CONFIANÇA EM CADA PROJETO",
    description: "Transparência total desde o primeiro diagnóstico até a entrega. Orçamentos detalhados sem surpresas, cumprimento de prazos contratuais e técnicos identificados e uniformizados.",
    highlight: "Pontualidade e transparência contratual"
  },
  {
    id: "suporte",
    title: "SUPORTE ESPECIALIZADO",
    description: "Não abandonamos sua empresa após a instalação. Oferecemos garantia formal sobre a mão de obra, suporte ágil para dúvidas e planos de manutenção preventiva e corretiva.",
    highlight: "Pós-venda ativo e atendimento ágil em Brasília"
  }
];

export const TIMELINE_STEPS = [
  {
    number: "01",
    title: "Contato via WhatsApp",
    description: "Você fala diretamente com nossa equipe, relata a necessidade do seu imóvel ou empresa e tira dúvidas preliminares.",
    timeframe: "Atendimento imediato"
  },
  {
    number: "02",
    title: "Avaliação Técnica e Diagnóstico",
    description: "Análise detalhada das necessidades, infraestrutura e particularidades técnicas do seu imóvel ou empresa em Brasília e região.",
    timeframe: "Agendamento ágil"
  },
  {
    number: "03",
    title: "Orçamento Gratuito e Detalhado",
    description: "Apresentamos uma proposta comercial clara e sem custo, com especificação completa de materiais, serviços, prazos e condições facilitadas.",
    timeframe: "Proposta sem custo"
  },
  {
    number: "04",
    title: "Execução, Garantia e Suporte",
    description: "Nossa equipe realiza a instalação com excelência, testa todos os pontos, treina o usuário e fornece termo de garantia.",
    timeframe: "Entrega com excelência"
  }
];

export const AUDIENCES = [
  {
    id: "empresas",
    name: "Empresas & Escritórios",
    badge: "Corporativo",
    headline: "Conectividade veloz e proteção patrimonial ininterrupta para seus negócios.",
    needs: [
      "Redes estruturadas para evitar lentidão e quedas de internet",
      "Controle de acesso para salas de servidores e diretorias",
      "Monitoramento por CFTV com acesso móvel aos diretores",
      "Infraestrutura elétrica para computadores e nobreaks"
    ]
  },
  {
    id: "comercios",
    name: "Comércios & Lojas",
    badge: "Varejo",
    headline: "Prevenção de furtos, atendimento estável no PDV e ambiente acolhedor.",
    needs: [
      "Câmeras de alta definição nos caixas e estoque para prevenção",
      "Alarme comercial com acionamento remoto fora do expediente",
      "Rede Wi-Fi isolada para clientes e para maquininhas de cartão",
      "Reformas e adequações rápidas sem interromper as vendas"
    ]
  },
  {
    id: "condominios",
    name: "Condomínios",
    badge: "Residencial & Comercial",
    headline: "Segurança coletiva reforçada e redução de custos de manutenção.",
    needs: [
      "CFTV perimetral e nas garagens com gravação contínua",
      "Controle de portaria por tag veicular, biometria e interfonia IP",
      "Cerca elétrica e sensores de barreira nos muros externos",
      "Manutenção preventiva de quadros de bombas e iluminação comum"
    ]
  },
  {
    id: "residencias",
    name: "Residências de Alto Padrão",
    badge: "Residencial",
    headline: "Tranquilidade total para sua família com tecnologia discreta e eficiente.",
    needs: [
      "Wi-Fi de alta cobertura sem pontos cegos em toda a casa e jardim",
      "Câmeras inteligentes que alertam presença no quintal pelo celular",
      "Adequação de quadros elétricos para ar-condicionado e carregador veicular",
      "Reformas de acabamento, pintura e gesso com acabamento impecável"
    ]
  }
];
