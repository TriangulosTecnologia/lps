export type Offer = {
  id: string;
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

type People = {
  name: string;
  avatar: string;
};

export type Recipe = {
  id: string;
  name: string;
  style: string;
  path: string;
  status: Status;
  description: string;
  offers: Offer[];
  properties: {
    color: string;
    alcohol: string;
    bitterness: string;
    body: string;
  };
  idealizer: People;
  creators: People[];
  designers: People[];
  producer: {
    avatar: string;
    name: string;
  };
  highlights: {
    local: string;
    hop: string;
    text: string;
    hero: {
      src: string;
      alt: string;
      height: number;
      width: number;
    };
  };
};
