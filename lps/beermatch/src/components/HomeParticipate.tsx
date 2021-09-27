import { useRouter } from 'next/router';
import { Button, Heading } from 'theme-ui';

const HomeParticipate = () => {
  const { push } = useRouter();

  return (
    <>
      <Heading as="h5" sx={{ marginY: 9 }}>
        DESAFIE, COLABORE E EXPERIMENTE. VIVA ESTE ESTILO
      </Heading>
      <Button sx={{ marginBottom: 9 }} onClick={() => push('/comprar')}>
        Quero participar &gt;
      </Button>
    </>
  );
};

export default HomeParticipate;
