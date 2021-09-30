import { InferGetStaticPropsType } from 'next';
import Script from 'next/script';
import * as React from 'react';

import { getAllRecipes } from '../../recipes';

import Recipe from '../components/Recipe';

export const getStaticPaths = async () => {
  const paths = getAllRecipes().map(({ path }) => ({
    params: { slug: path },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const recipe = getAllRecipes().find(({ path }) => params.slug === path);

  if (!recipe) {
    throw new Error('Recipe not found');
  }

  return { props: { recipe } };
};

const RecipePage = ({
  recipe,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Script
        src="https://assets.pagar.me/checkout/1.1.0/checkout.js"
        strategy="beforeInteractive"
      />
      <Recipe {...recipe} />
    </>
  );
};

export default RecipePage;