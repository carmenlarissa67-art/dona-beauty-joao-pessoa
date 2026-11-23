// ==============================================================================
// CONFIGURAÇÃO CENTRAL DA CLIENTE: DONA BEAUTY STUDIO DE BELEZA (JOÃO PESSOA)
// Toda a personalização do site fica neste arquivo.
// Fontes: perfil @donabeautypb (post com a lista de serviços, stories de
// preços e Black November) e ficha do Google (endereço no Atlantis Trade
// Center, horário e telefone).
// VALORES REAIS (vistos nos stories): design de sobrancelhas R$ 40, brow
// lamination R$ 110, selagem retoque de raiz R$ 180 e todos os combos Black
// November. Os DEMAIS valores são ESTIMATIVA para a demo. Trocar pelos valores
// reais do studio antes da entrega.
// ==============================================================================

export const studioConfig = {
  name: "Dona Beauty",
  ownerName: "equipe Dona Beauty",
  nameSuffix: "Studio de Beleza",
  fullName: "Dona Beauty Studio de Beleza",
  tagline: "Cabelo, unhas, sobrancelhas, cílios, maquiagem e estética facial",
  subtitle:
    "Cabelo, unhas, sobrancelhas, cílios e maquiagem num só lugar, em Manaíra. Escolha o serviço, veja o valor e reserve seu horário em poucos toques.",
  city: "João Pessoa, PB",
  neighborhood: "Manaíra",
  addressShort: "Atlantis Trade Center, Manaíra",
  address: "Av. São Gonçalo, 452 - Manaíra, João Pessoa - PB, 58038-331",
  addressNote: "Dentro do Atlantis Trade Center",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dona+Beauty+Studio+de+Beleza,+Av.+São+Gonçalo,+452,+Manaíra,+João+Pessoa+-+PB",
  whatsappNumber: "5583998526828", // Apenas dígitos com DDI e DDD
  whatsappDisplay: "(83) 99852-6828",
  instagramHandle: "@donabeautypb",
  instagramUrl: "https://www.instagram.com/donabeautypb",
  // Link do Calendly. Na demo usamos a agenda de teste; na entrega vai o do studio.
  calendlyUrl: "https://calendly.com/carbosalarissa/30min",
  workingHours: [
    { days: "Terça a Sábado", hours: "9h às 18h" },
    { days: "Domingo e Segunda", hours: "Fechado" },
  ],
  workingHoursShort: "Ter a sáb, 9h às 18h",
  // Dias sem atendimento (0 = domingo ... 6 = sábado). Vazio = abre todos os dias.
  closedWeekdays: [0, 1],
  periods: [
    { id: "Manhã (9h às 12h)", label: "Manhã", sub: "9h às 12h" },
    { id: "Tarde (13h às 18h)", label: "Tarde", sub: "13h às 18h" },
  ],
  paymentNote: "Valores de cabelo para tamanho médio. Mega e longo sob consulta. No cartão há acréscimo da taxa.",
  // Avisos que a cliente confirma antes de agendar
  bookingNotes: [
    "Chegue 10 minutinhos antes do seu horário.",
    "Se precisar desmarcar, avise com antecedência para liberar a vaga.",
    "Cabelo mega ou longo pode ter valor diferente. A gente confirma pelo WhatsApp.",
  ],
  decoratedNote: "Tem uma foto de inspiração? Escreva nas observações ou mande no WhatsApp depois de agendar.",

  // Sobre o studio
  about: {
    photo: "/images/cabelo-ondas-iluminado.webp",
    title: "Beleza bem feita não é sorte, é técnica",
    text: "A Dona Beauty é um studio de beleza completo em Manaíra, dentro do Atlantis Trade Center. Cabelo, unhas, sobrancelhas, cílios, maquiagem e estética facial com uma equipe que cuida de cada detalhe, do corte à selagem, do design de sobrancelha ao volume nos cílios. São mais de 13 mil seguidoras no Instagram e nota 4,7 no Google.",
    highlights: ["Selagem e Nanokeratin", "Brow lamination", "Extensão de cílios", "Unhas em gel", "Maquiagem para noivas"],
    coursesText: "",
  },

  // Categorias de serviço (cada uma com suas opções e valores)
  categories: [
    {
      id: "black",
      promo: true,
      title: "Combos Black November",
      short: "Combos",
      description: "Combos do mês com preço especial. Valores para cabelo médio.",
      image: "/images/cabelo-nanokeratin.webp",
      duration: "",
      maintenance: "",
      notes: [],
      items: [
        { id: "combo-escova-mani", title: "Escova, hidratação, manicure e pedicure", price: 95, oldPrice: 120, popular: true },
        { id: "combo-completo", title: "Escova, hidratação, manicure, pedicure, sobrancelha e buço", price: 130, oldPrice: 200 },
        { id: "combo-corte", title: "Corte, escova, hidratação, manicure e pedicure", price: 140, oldPrice: 220 },
        { id: "combo-coloracao", title: "Coloração com a tinta da cliente, escova e hidratação", price: 100, oldPrice: 130 },
        { id: "combo-retoque", title: "Coloração retoque de raiz, escova e hidratação", price: 170, oldPrice: 220 },
        { id: "combo-make", title: "Escova e maquiagem", price: 150 },
        { id: "combo-selagem", title: "Selagem, qualquer tamanho de cabelo", price: 180 },
      ],
    },
    {
      id: "cabelo",
      title: "Cabelo",
      short: "Cabelo",
      description: "Do corte à selagem. Liso com brilho, ondas para a festa ou cor nova, sempre com tratamento.",
      image: "/images/selagem-antes-depois.webp",
      duration: "1h a 3h",
      maintenance: "",
      notes: ["Valores para cabelo médio", "Mega e longo sob consulta"],
      items: [
        { id: "selagem", title: "Selagem (liso perfeito, retoque de raiz)", price: 180, popular: true },
        { id: "botox", title: "Botox capilar", price: 150 },
        { id: "nanokeratin", title: "Nanokeratin", price: null },
        { id: "escova", title: "Escova", price: 50 },
        { id: "hidratacao", title: "Hidratação", price: 60 },
        { id: "corte", title: "Corte", price: 70 },
        { id: "coloracao", title: "Coloração", price: 120 },
        { id: "mechas", title: "Descoloração e mechas", price: null },
        { id: "penteado", title: "Penteado", price: 120 },
      ],
    },
    {
      id: "unhas",
      title: "Unhas",
      short: "Unhas",
      description: "Do tradicional ao gel. Nude que combina com tudo, chocolate brilhante ou francesinha com detalhe dourado.",
      image: "/images/unhas-milky.webp",
      duration: "1h a 2h30",
      maintenance: "Manutenção do gel a cada 20 a 25 dias",
      notes: ["Inclui cutilagem"],
      items: [
        { id: "mani", title: "Manicure", price: 30 },
        { id: "pedi", title: "Pedicure", price: 35 },
        { id: "mani-pedi", title: "Manicure e pedicure", price: 60, popular: true },
        { id: "plastica-pes", title: "Plástica dos pés", price: 70 },
        { id: "aplicacao-gel", title: "Aplicação em gel", price: 150 },
        { id: "manut-gel", title: "Manutenção do gel", price: 100 },
        { id: "banho-gel", title: "Banho de gel", price: 90 },
        { id: "blindagem", title: "Blindagem", price: 60 },
        { id: "esmaltacao-gel", title: "Esmaltação em gel", price: 60 },
      ],
    },
    {
      id: "sobrancelhas",
      title: "Sobrancelhas",
      short: "Sobrancelhas",
      description: "Design pensado para o seu rosto. A brow lamination deixa os fios alinhados e cheios por semanas.",
      image: "/images/brow-lamination.webp",
      duration: "30min a 1h",
      maintenance: "Brow lamination dura de 4 a 6 semanas",
      notes: [],
      items: [
        { id: "design", title: "Design de sobrancelhas", price: 40, popular: true },
        { id: "design-henna", title: "Design com henna ou pintura", price: 55 },
        { id: "brow", title: "Brow lamination", price: 110, popular: true },
        { id: "nano", title: "Nanopigmentação", price: null },
      ],
    },
    {
      id: "cilios",
      title: "Cílios",
      short: "Cílios",
      description: "Do volume leve do dia a dia ao efeito fox marcado. Olhar pronto ao acordar.",
      image: "/images/cilios-volume.webp",
      duration: "1h30 a 2h30",
      maintenance: "Manutenção a cada 15 a 20 dias",
      notes: [],
      items: [
        { id: "vol-express", title: "Volume express", price: 130 },
        { id: "vol-brasileiro", title: "Volume brasileiro", price: 150, popular: true },
        { id: "fox", title: "Efeito fox", price: 170 },
        { id: "vol-4d", title: "Volume 4D", price: 180 },
        { id: "lash-lifting", title: "Lash lifting", price: 120 },
      ],
    },
    {
      id: "make",
      title: "Maquiagem",
      short: "Maquiagem",
      description: "Make social para a festa, para a debutante e para a noiva, com prova antes do grande dia.",
      image: "/images/cabelo-ondas-studio.webp",
      duration: "1h a 1h30",
      maintenance: "",
      notes: ["Noiva e debutante com orçamento pelo WhatsApp"],
      items: [
        { id: "make-social", title: "Maquiagem social", price: 150, popular: true },
        { id: "make-debutante", title: "Maquiagem de debutante", price: null },
        { id: "make-noiva", title: "Maquiagem de noiva", price: null },
      ],
    },
    {
      id: "estetica",
      title: "Estética e Depilação",
      short: "Estética",
      description: "Pele limpa, macia e com viço. Cuidados faciais e depilação de rosto.",
      image: "/images/design-sobrancelha.webp",
      duration: "15min a 1h30",
      maintenance: "",
      notes: [],
      items: [
        { id: "limpeza", title: "Limpeza de pele", price: 150, popular: true },
        { id: "dermaplaning", title: "Dermaplaning", price: 120 },
        { id: "hidragloss", title: "Hidragloss", price: 80 },
        { id: "buco", title: "Depilação de buço", price: 15 },
        { id: "queixo", title: "Depilação de queixo", price: 15 },
      ],
    },
  ],

  // Adicionais que podem ser somados no agendamento
  addons: [
    { id: "hidratacao-add", name: "Hidratação extra", price: 40 },
    { id: "buco-add", name: "Depilação de buço", price: 15 },
    { id: "design-add", name: "Design de sobrancelhas", price: 40 },
    { id: "esmaltacao-add", name: "Esmaltação em gel", price: 60 },
  ],

  // Informações importantes
  policies: [
    {
      title: "Pontualidade",
      description: "Chegue 10 minutinhos antes. Assim o seu horário rende e ninguém fica esperando.",
    },
    {
      title: "Desmarcar",
      description: "Imprevisto acontece. Avise com antecedência para a vaga ir para outra cliente.",
    },
    {
      title: "Tamanho do cabelo",
      description: "Os valores de cabelo são para tamanho médio. Mega e longo a gente confirma pelo WhatsApp.",
    },
    {
      title: "Pagamento",
      description: "Pix, dinheiro ou cartão. No cartão há acréscimo da taxa da maquininha.",
    },
  ],

  // Galeria de fotos de resultados (fotos reais do Instagram)
  gallery: [
    { url: "/images/cabelo-nanokeratin.webp", tag: "Nanokeratin, liso com movimento" },
    { url: "/images/unhas-chocolate.webp", tag: "Chocolate brilhante, amendoada" },
    { url: "/images/brow-lamination.webp", tag: "Brow lamination" },
    { url: "/images/cabelo-escova-loiro.webp", tag: "Escova com ondas" },
    { url: "/images/cilios-volume.webp", tag: "Cílios com volume" },
    { url: "/images/unhas-francesinha-dourada.webp", tag: "Francesinha dourada com arte" },
    { url: "/images/sobrancelha-antes-depois.webp", tag: "Sobrancelha, antes e depois" },
    { url: "/images/unhas-nude-brilho.webp", tag: "Nude com brilho" },
    { url: "/images/cabelo-ondas-iluminado.webp", tag: "Iluminado com ondas" },
  ],
};

// Lista "achatada" de todos os serviços, usada no agendamento
export const allServices = studioConfig.categories.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.title,
    categoryId: cat.id,
    duration: item.duration || cat.duration,
  }))
);

export const formatPrice = (value) =>
  value === null || value === undefined
    ? "Sob consulta"
    : `R$ ${Number(value).toFixed(2).replace(".", ",")}`;
