export type Offer = {
  name: string;
  description: string;
  pack: number;
  price: number;
  length: number; // cm
  width: number; // cm
  height: number; // cm
  weight: number; // kg
};

export type Status = 'onSale';

export type Recipe = {
  id: string;
  name: string;
  path: string;
  status: Status;
  description: string;
  offers: Offer[];
};
