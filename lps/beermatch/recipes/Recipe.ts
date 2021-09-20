export type Recipe = {
  name: string;
  description: string;
  offers: {
    quantity: number;
    price: number;
  }[];
};
