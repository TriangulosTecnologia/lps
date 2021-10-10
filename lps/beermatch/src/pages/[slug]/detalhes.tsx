import { InferGetStaticPropsType } from 'next';
import * as React from 'react';
import { Container } from 'theme-ui';

import { getAllRecipes } from '../../../recipes';

import RecipeDetails from '../../components/RecipeDetails';

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
  return (
    <Container variant="fullWidth" sx={{ backgroundColor: 'secondary' }}>
      <Container>
        <RecipeDetails fullDetails recipe={recipe} />
      </Container>
    </Container>
  );
};

export default RecipePage;
