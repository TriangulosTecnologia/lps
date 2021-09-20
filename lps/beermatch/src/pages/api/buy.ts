import type { NextApiRequest, NextApiResponse } from 'next';

import type { BuyData } from '../../components/BuyForm';

const calculateShipping = async ({ cep }: { cep: string }) => {
  return cep;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BuyData>
) {
  if (req.method !== 'POST') {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  const { cep } = JSON.parse(req.body);

  const price = calculateShipping({ cep });

  res.status(200).json({ price });
}
