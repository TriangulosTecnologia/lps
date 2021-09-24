export type Offer = {
  name: string;
  description1: string;
  description2: string;
  pack: number;
  price: number;
  length: number; // cm
  width: number; // cm
  height: number; // cm
  weight: number; // kg
};

export type Status = 'onSale';

export type Recipe = {
  name: string;
  path: string;
  status: Status;
  description: string;
  offers: Offer[];
};
