// import { Box, Container, Flex } from 'theme-ui';
import Image from 'next/image';
import { Box, Heading, Text } from 'theme-ui';

import cerveja1 from '../../public/cerveja-1.png';

import { Recipe as RecipeType } from '../../recipes';

import BuyForm from './BuyForm';

const Recipe = (recipe: RecipeType) => {
  const { description } = recipe;

  return (
    <>
      {/* <Container variant="fullWidth" sx={{ backgroundColor: 'black' }}> */}
      {/* <Container> */}
      <Heading as="h3">Faça parte do 1º lote</Heading>
      <Box sx={{ marginY: 6 }}>
        <Image src={cerveja1} alt="Cerveja 1" />
      </Box>
      <Heading as="h4" sx={{ marginY: 7 }}>
        O que vamos produzir?
      </Heading>
      <Text
        as="p"
        sx={{ whiteSpace: 'pre-line', textAlign: 'center', marginBottom: 10 }}
      >
        {description}
      </Text>
      <BuyForm {...recipe} />
      {/* </Container> */}
      {/* </Container> */}
    </>
  );
};

export default Recipe;
