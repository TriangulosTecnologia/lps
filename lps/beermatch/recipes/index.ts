import * as recipes from './recipes';

export * from './types';

export const getAllRecipes = () => Object.values(recipes);

export const getOnSaleRecipe = () => {
  const recipe = Object.values(recipes).find(
    ({ status }) => status === 'onSale'
  );

  return recipe;
};

export const getTotalPrice = ({
  recipeId,
  quantities,
}: {
  recipeId: string;
  quantities: number[];
}) => {
  const recipe = getAllRecipes().find(({ id }) => id === recipeId);

  if (!recipe) {
    return 0;
  }

  const total = quantities.reduce((acc, cur, index) => {
    return acc + cur * recipe.offers[index].price;
  }, 0);

  return total;
};
