// import { Box, Container, Flex } from 'theme-ui';

import { Recipe as RecipeType } from '../../recipes';

import BuyForm from './BuyForm';

const Recipe = (recipe: RecipeType) => {
  return (
    <>
      {/* <Container variant="fullWidth" sx={{ backgroundColor: 'black' }}> */}
      {/* <Container> */}
      <BuyForm {...recipe} />
      {/* </Container> */}
      {/* </Container> */}
    </>
  );
};

export default Recipe;
