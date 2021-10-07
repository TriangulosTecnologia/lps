import Image from 'next/image';
import { Box, Container, Flex, Heading, Link, Text } from 'theme-ui';

import bmYellowBg from '../../public/bm-yellow-bg.png';

import type { Recipe } from '../../recipes';

const BuyCongratulations = ({
  success,
  recipe,
  boleto,
}: {
  success: boolean;
  boleto?: { url: string; barcode: string };
  recipe: Recipe;
}) => {
  const notSucessNode = (
    <>
      <Heading as="h3" sx={{}}>
        Ops, algo deu errado.
      </Heading>
      <Text sx={{ fontSize: 4, marginY: 7 }}>
        Por favor, entre em contato conosco para que possamos verificar o que
        aconteceu.
      </Text>
    </>
  );

  const successNode = (
    <>
      <Heading as="h3" sx={{}}>
        Parabéns!
      </Heading>
      <Text sx={{ fontSize: 4, marginY: 7 }}>
        Você acabou de adquirir o seu lote único e exclusivo da receita{' '}
        <Text sx={{ fontFamily: 'heading', textTransform: 'uppercase' }}>
          {recipe.name}
        </Text>
        !
      </Text>
      <Box sx={{ marginY: 8 }}>
        <Image src={bmYellowBg} alt="logo" layout="fixed" />
      </Box>
      {boleto && (
        <>
          <Link href={boleto.url} sx={{ textDecoration: 'underline' }}>
            Para finalizar a sua compra, acesse este link para imprimir o boleto
            ou use o código de barras abaixo.
          </Link>
          <Box
            sx={{
              marginY: 8,
              paddingX: 10,
              maxWidth: 550,
            }}
          >
            <Text
              as="p"
              sx={{
                fontSize: 5,
                wordBreak: 'break-all',
                fontFamily: 'monospace',
              }}
            >
              {boleto.barcode}
            </Text>
          </Box>
        </>
      )}
    </>
  );

  return (
    <Container
      variant="fullWidth"
      sx={{ backgroundColor: 'secondary', paddingX: 8, paddingY: 9 }}
    >
      <Container sx={{ backgroundColor: 'background', borderRadius: 1 }}>
        <Flex
          sx={{ flexDirection: 'column', alignItems: 'center', paddingY: 9 }}
        >
          {success ? successNode : notSucessNode}
        </Flex>
      </Container>
    </Container>
  );
};

export default BuyCongratulations;
