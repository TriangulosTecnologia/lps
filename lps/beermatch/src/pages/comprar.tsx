import { getOnSaleRecipe } from '../../recipes';

export const getStaticProps = async () => {
  const recipe = getOnSaleRecipe();

  if (recipe) {
    return {
      redirect: {
        destination: `/${recipe.path}`,
      },
    };
  }

  return {
    redirect: {
      destination: '/',
    },
  };
};

const Comprar = () => {
  return null;
};

export default Comprar;
