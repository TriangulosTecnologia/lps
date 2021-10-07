import { useRouter } from 'next/router';
import { Button } from 'theme-ui';

const CTAButton = () => {
  const { push } = useRouter();

  return (
    <Button onClick={() => push('/comprar')} sx={{ fontSize: [2, 3] }}>
      Quero participar &gt;
    </Button>
  );
};

export default CTAButton;
