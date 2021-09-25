// import { Box, Container, Flex } from 'theme-ui';
import { Heading, Text } from 'theme-ui';

import { Recipe as RecipeType } from '../../recipes';

import BuyForm from './BuyForm';

const Recipe = (recipe: RecipeType) => {
  const { description } = recipe;

  return (
    <>
      {/* <Container variant="fullWidth" sx={{ backgroundColor: 'black' }}> */}
      {/* <Container> */}
      <Heading>Faça parte do 1º lote</Heading>
      <Text as="p" sx={{ whiteSpace: 'pre-line' }}>
        {description}
      </Text>
      <BuyForm {...recipe} />
      {/* </Container> */}
      {/* </Container> */}
    </>
  );
};

export default Recipe;
