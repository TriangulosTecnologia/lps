import { useRouter } from 'next/router';
import * as React from 'react';

import { getOnSaleRecipe } from '../../recipes';

export const getStaticProps = async () => {
  const recipe = getOnSaleRecipe();

  const href = recipe ? `/${recipe.path}` : '/';

  return { props: { href } };
};

const Comprar = ({ href }: { href: string }) => {
  const { push } = useRouter();

  React.useEffect(() => {
    push(href);
  }, [href, push]);

  return null;
};

export default Comprar;
