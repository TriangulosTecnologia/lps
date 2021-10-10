import Image from 'next/image';
import { ErrorBoundary } from 'react-error-boundary';
import { Box, Heading, Text } from 'theme-ui';

import cerveja1 from '../../public/cerveja-1.png';

import { Recipe as RecipeType } from '../../recipes';

import BuyForm from './BuyForm';
import RecipeDetails from './RecipeDetails';
import RecipeGetYourQuota from './RecipeGetYourQuota';

const Recipe = (recipe: RecipeType) => {
  const { description } = recipe;

  return (
    <>
      <Heading as="h3">Faça parte do 1º lote</Heading>
      <Box sx={{ marginY: 6 }}>
        <Image src={cerveja1} alt="Cerveja 1" />
      </Box>
      <Heading as="h4" sx={{ marginY: 7 }}>
        O que vamos produzir?
      </Heading>
      <Text as="p" sx={{ whiteSpace: 'pre-line', textAlign: 'center' }}>
        {description}
      </Text>
      <Box
        id="recipe-details"
        sx={{ width: '100%', marginY: 10, '>div': { borderRadius: 1 } }}
      >
        <RecipeDetails recipe={recipe} />
      </Box>
      <RecipeGetYourQuota recipe={recipe} />
      <ErrorBoundary fallback={null}>
        <BuyForm {...recipe} />
      </ErrorBoundary>
    </>
  );
};

export default Recipe;
