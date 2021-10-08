import type { NextApiRequest, NextApiResponse } from 'next';

import { getAllRecipes, Recipe } from '../../../recipes';

const calculateShipping = async ({
  cep,
  recipe,
  quantities,
}: {
  cep: string;
  recipe: Recipe;
  quantities: number[];
}) => {
  const foundRecipe = getAllRecipes().find((r) => r.name === recipe.name);

  if (!foundRecipe) {
    throw new Error('Recipe not found');
  }

  const peso = quantities.reduce((acc, curr, index) => {
    const { weight, length, width, height } = foundRecipe.offers[index];
    const weightCubed = (length * width * height) / 5000;
    return acc + curr * Math.max(weight, weightCubed);
  }, 0);

  const body = JSON.stringify({
    frete: [
      {
        cepori: '14801140',
        cepdes: cep.replace(/\D/g, ''),
        frap: null,
        peso,
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

  const shippingFee = data?.frete?.[0]?.vltotal * 100;

  if (!shippingFee) {
    throw new Error('Could not calculate shipping price');
  }

  return shippingFee;
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
    const shippingFee = await calculateShipping(JSON.parse(req.body));
    res.status(200).json({ shippingFee });
  } catch (error) {
    res.status(500).json({ message: ((error as any) || {}).message });
  }
}
