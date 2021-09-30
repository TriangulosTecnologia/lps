import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  const {
    token,
    amount,
  }: {
    paymentMethod: 'credit_card' | 'boleto';
    token: string;
    amount: number;
  } = JSON.parse(req.body);

  try {
    const response = await fetch(
      `https://api.pagar.me/1/transactions/${token}/capture`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          api_key: process.env.PAGARME_AK_KEY,
        }),
      }
    );

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    res.status(200).json({ message: 'ok' });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error?.message });
  }
}
