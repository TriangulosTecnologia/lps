import type { Recipe } from './types';

export const Queixapa: Recipe = {
  name: 'Queixapa',
  path: 'Queixapa',
  status: 'onSale',
  description: 'A classic Brazilian beer',
  offers: [
    {
      name: 'Queixapa 1',
      description1: 'A classic Brazilian beer',
      description2: 'A classic Brazilian beer',
      pack: 6,
      price: 100,
      length: 12,
      width: 12,
      height: 12,
      weight: 12,
    },
    {
      name: 'Queixapa 2',
      description1: 'A classic Brazilian beer 2',
      description2: 'A classic Brazilian beer 2',
      pack: 12,
      price: 200,
      length: 12,
      width: 12,
      height: 12,
      weight: 12,
    },
  ],
};
