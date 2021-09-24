import * as recipes from './recipes';

export * from './types';

export const getAllRecipes = () => Object.values(recipes);

export const getOnSaleRecipe = () => {
  const recipe = Object.values(recipes).find(
    ({ status }) => status === 'onSale'
  );

  return recipe;
};
