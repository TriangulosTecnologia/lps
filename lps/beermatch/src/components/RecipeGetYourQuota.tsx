import Image from 'next/image';
import { Box, Flex, Heading, Text } from 'theme-ui';

import hop from '../../public/hop.png';

const texts = [
  'Produção e lote único! Não será produzido novamente.',
  'Você poderá acompanhar o dia da produção na cervejaria.',
  'Receba em seu endereço ou retire pessoalmente.',
  'Manteremos você informado durante todo o processo, não se preocupe.',
  'Compra mínima de 1 quota de 12 garrafas de 500ml.',
];

const RecipeGetYourQuota = () => {
  return (
    <>
      <Heading as="h5">Adquira a sua quota</Heading>
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          marginBottom: 10,
          maxWidth: 500,
        }}
      >
        {texts.map((text) => (
          <Flex key={text} sx={{ marginTop: 9, alignItems: 'center', gap: 7 }}>
            <Box sx={{ width: 50, minWidth: 50 }}>
              <Image src={hop} alt="hop" width="50px" />
            </Box>
            <Text sx={{ textAlign: 'left' }}>{text}</Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
};

export default RecipeGetYourQuota;
