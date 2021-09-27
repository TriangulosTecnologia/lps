import type { NextApiRequest, NextApiResponse } from 'next';

import type { BuyData } from '../../components/BuyForm';

// eslint-disable-next-line no-empty-pattern
const calculateShipping = async ({}: { cep: string }) => {
  return 1000;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  const { cep }: BuyData = JSON.parse(req.body);

  const price = calculateShipping({ cep });

  res.status(200).json({ price, cep });
}
