import type { NextApiRequest, NextApiResponse } from 'next';

import { getRecipeById } from '../../../recipes';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  try {
    const { transactionId } = req.query;

    const params = new URLSearchParams({
      api_key: process.env.PAGARME_AK_KEY as string,
    });

    const response = await fetch(
      ` https://api.pagar.me/1/transactions/${transactionId}?${params.toString()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const json = await response.json();

    if (response.status !== 200) {
      throw json;
    }

    const boleto = (() => {
      if (json.payment_method === 'boleto') {
        return { url: json.boleto_url, barcode: json.boleto_barcode };
      }

      return undefined;
    })();

    const { recipeId, items } = json.metadata;

    const recipe = await getRecipeById(recipeId);

    res.status(200).json({ recipe, items, transactionId, boleto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
