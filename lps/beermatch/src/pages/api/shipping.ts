import type { NextApiRequest, NextApiResponse } from 'next';

import { getAllRecipes, Recipe } from '../../../recipes';

const calculateShipping = async ({
  cep,
  recipe,
}: // quantities,
{
  cep: string;
  recipe: Recipe;
  quantities: number[];
}) => {
  const foundRecipe = getAllRecipes().find((r) => r.name === recipe.name);

  if (!foundRecipe) {
    throw new Error('Recipe not found');
  }

  // const weightCubed = (length * width * height) / 5000;

  const body = JSON.stringify({
    frete: [
      {
        cepori: '14801140',
        cepdes: cep,
        frap: null,
        peso: 8.3,
        cnpj: '30488828000100',
        tpentrega: 'D',
        tpseguro: 'N',
        vldeclarado: 240.85,
        vlcoleta: null,
        modalidade: 3,
      },
    ],
  });

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.JADLOG_TOKEN}`,
    },
    body,
  };

  const response = await fetch(
    `https://www.jadlog.com.br/embarcador/api/frete/valor`,
    options
  );

  const data: any = await response.json();

  const shippingPrice = data?.frete?.[0]?.vltotal;

  if (!shippingPrice) {
    throw new Error('Could not calculate shipping price');
  }

  return shippingPrice;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(403).json({ message: 'Forbidden' });
    return;
  }

  try {
    const price = await calculateShipping(JSON.parse(req.body));
    res.status(200).json({ price });
  } catch (error) {
    res.status(500).json({ message: ((error as any) || {}).message });
  }
}
