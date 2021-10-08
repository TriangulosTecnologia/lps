import type { Recipe } from './types';

export const Queixapa: Recipe = {
  id: 'Queixapa',
  name: 'Queixapa',
  style: 'American Pale Ale (APA)',
  path: 'Queixapa',
  status: 'onSale',
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
      name: 'APA (Queixapa) - 12 unid.',
      description:
        'Lote BRS1-001 - Cx. com 12 garrafas de 500ml\nEntrega estimada: 09/11/2021',
      pack: 12,
      price: 200,
      length: 12,
      width: 12,
      height: 12,
      weight: 12,
    },
    {
      id: '20210001B',
      name: 'APA (Queixapa) - 6 unid.',
      description:
        'Lote BRS1-001 - Cx. com 6 garrafas de 500ml\nEntrega estimada: 09/11/2021',
      pack: 6,
      price: 100,
      length: 12,
      width: 12,
      height: 12,
      weight: 12,
    },
  ],
};
