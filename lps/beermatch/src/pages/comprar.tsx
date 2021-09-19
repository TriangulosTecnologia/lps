import { InferGetStaticPropsType } from 'next';

import { Queixapa } from '../../recipes';

import Buy from '../components/Buy';

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
  return (
    <div>
      {recipe.name}
      <Buy />
    </div>
  );
};

export default Comprar;
