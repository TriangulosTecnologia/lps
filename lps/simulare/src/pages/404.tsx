import { useRouter } from 'next/router';
import * as React from 'react';

export default function Custom404() {
  const { push } = useRouter();

  React.useEffect(() => {
    push('/');
  }, [push]);

  return null;
}
