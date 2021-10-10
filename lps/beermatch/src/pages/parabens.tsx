import { useRouter } from 'next/router';
import * as React from 'react';
import { useQuery } from 'react-query';

import Congratulations from '../components/Congratulations';

const Parabens = () => {
  const { isReady, query, push } = useRouter();

  const { transactionId } = query;

  React.useEffect(() => {
    if (!transactionId && isReady) {
      push('/');
    }
  }, [isReady, push, transactionId]);

  const { isLoading, error, data } = useQuery(
    'repoData',
    () =>
      fetch(`/api/transaction?transactionId=${transactionId}`).then((res) =>
        res.json()
      ),
    {
      /**
       * The query will not execute until the `transactionId` exists.
       */
      enabled: !!transactionId,
    }
  );

  console.log({ isLoading, error, data });

  if (!data) {
    return null;
  }

  const { recipe, items, boleto } = data;

  return <Congratulations {...{ recipe, items, boleto }} />;
};

export default Parabens;
