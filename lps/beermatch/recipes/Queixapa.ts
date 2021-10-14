import type { Recipe } from './types';

export const Queixapa: Recipe = {
  id: 'Queixapa',
  name: 'Queixapa',
  style: 'American Pale Ale (APA)',
  pack: 'Lote BRS01-001',
  status: 'onSale',
  closingOfSalesDate: '2021-11-07',
  estimatedDeliveryDate: '2021-12-05',
  properties: {
    color: '#F5D151',
    alcohol: '5.5',
    bitterness: 'Suave',
    body: 'Leve',
  },
  idealizer: {
    avatar: '/avatar-man.png',
    name: 'Zenon',
  },
  creators: [
    {
      avatar: '/avatar-man.png',
      name: 'Zenon',
    },
    {
      avatar: '/avatar-man.png',
      name: 'Peixe',
    },
  ],
  designers: [
    {
      avatar: '/avatar-woman.png',
      name: 'Manu',
    },
    {
      avatar: '/avatar-man.png',
      name: 'Tarsis',
    },
  ],
  producer: {
    avatar: '/avatar-opera.png',
    image: {
      src: '/partner-opera.png',
      alt: 'Fábrica da Opera',
      width: 960,
      height: 712,
    },
    name: 'Opera',
  },
  description:
    'Uma cerveja leve, com baixo amargor, e com todo o frescor que pode oferecer em um final de tarde, de cor amarelo-alaranjado, carregando um complexo aroma tropical e sabores que lembram manga, goiaba, pinho e citrus.\n\nProduzida com lúpulos especiais orgânicos, frescos, fornecidos por pequenos produtores.\n\nUma excelente cerveja para ser apreciada a qualquer horário.',
  highlights: {
    local: 'Los Angeles, CA (East)',
    hop: 'Mosaic(R) WA399 T90 - 2020/2021',
    text: 'O Lúpulo deste lote é originário da fazenda Puterbaugh, localizada no coração do vale do Yakima. Uma fazenda centenária, conhecida pela grande tradição e uma das mais inovadoras dos EUA.\n\nDecidimos usar somente este lúpulo em toda a receita com um dry-hop carregado. Resultando em um produto single hop com qualidade superior e frescor inigualável, incorporando um dos melhores lúpulos que o mundo pode oferecer.',
    hero: {
      src: '/planting.png',
      alt: 'Plantação',
      height: 750,
      width: 750,
    },
  },
  offers: [
    {
      id: '20210001A',
      name: 'APA (Queixapa) 12 unid',
      description:
        'Cx. 12 garrafas de 500ml (Lote BRS01-001)\nEntrega estimada: 05/12/2021',
      pack: 12,
      price: 23900,
      length: 31,
      width: 23,
      height: 24, // cm
      weight: 12, // kg
    },
    {
      id: '20210001B',
      name: 'APA (Queixapa) 6 unid',
      description:
        'Cx. 6 garrafas de 500ml (Lote BRS01-001)\nEntrega estimada: 05/12/2021',
      pack: 6,
      price: 12800,
      length: 24,
      width: 16,
      height: 25, // cm
      weight: 5.8, // kg
    },
  ],
};
