import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import { getAllRecipes } from '../../../recipes';

import Recipe from '../../components/Recipe';

export const getStaticPaths = async () => {
  const paths = getAllRecipes().map(({ id }) => ({
    params: { slug: id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const recipe = getAllRecipes().find(({ id }) => params.slug === id);

  if (!recipe) {
    throw new Error('Recipe not found');
  }

  return { props: { recipe } };
};

const RecipePage = ({
  recipe,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Recipe {...recipe} />;
};

export default RecipePage;
