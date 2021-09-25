import type { Recipe } from './types';

export const Queixapa: Recipe = {
  name: 'Queixapa',
  path: 'Queixapa',
  status: 'onSale',
  description:
    'Uma cerveja leve, com baixo amargor, e com todo o frescor que pode oferecer em um final de tarde, de cor amarelo-alaranjado, carregando um complexo aroma tropical e sabores que lembram manga, goiaba, pinho e citrus.\n\nProduzida com lúpulos especiais orgânicos, frescos, fornecidos por pequenos produtores.\n\nUma excelente cerveja para ser apreciada a qualquer horário.',
  offers: [
    {
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
