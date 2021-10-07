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

    const data = await response.json();

    const boleto =
      data.payment_method === 'boleto'
        ? { url: data.boleto_url, barcode: data.boleto_barcode }
        : undefined;

    /**
     * Only works in production.
     * https://docs.pagar.me/v4/reference#notificando-cliente-sobre-boleto-a-ser-pago
     */
    if (process.env.NODE_ENV === 'production' && boleto) {
      const { tid, customer } = data;

      try {
        await fetch(
          `https://api.pagar.me/1/transactions/${tid}/collect_payment`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              api_key: process.env.PAGARME_AK_KEY,
              email: customer.email,
            }),
          }
        );
      } catch (error) {
        console.error(error);
      }
    }

    res.status(200).json({ success: true, boleto });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ error: error?.message });
  }
}
