/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextApiRequest, NextApiResponse } from 'next';
import pagarme from 'pagarme';

import type { BuyData } from '../../components/BuyForm';

const calculateShipping = async ({ cep }: { cep: string }) => {
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

  const client = await pagarme.client.connect({
    api_key: '',
  });

  const { cep }: BuyData = JSON.parse(req.body);

  const price = calculateShipping({ cep });

  res.status(200).json({ price });
}
