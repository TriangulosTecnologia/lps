import { InferGetStaticPropsType } from 'next';

import { Queixapa } from '../../recipes';

export const getStaticProps = async () => {
  return {
    props: {
      recipe: Queixapa,
    },
  };
};

const Comprar = ({
  recipe,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{recipe.name}</div>;
};

export default Comprar;
