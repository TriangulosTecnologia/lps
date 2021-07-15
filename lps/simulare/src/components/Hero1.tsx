import { useBreakpointIndex } from '@theme-ui/match-media';
import { Box, Flex, Heading, Text } from 'theme-ui';

import ArrowDownButton from './ArrowDownButton';
import Layout from './Layout';
import Message from './Message';

const Polygon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="100%"
      viewBox="0 0 153 305"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M123.503 -5.39809e-06L6.48089 145.178C-3.7544 158.193 -1.62208 177.018 11.2648 187.414L152.527 305L152.527 -6.66679e-06L123.503 -5.39809e-06Z"
        fill="#24BB78"
      />
    </svg>
  );
};

const Hero1 = () => {
  const a = useBreakpointIndex();

  console.log(a);

  return (
    <Box
      sx={{
        height: '100vh',
        position: 'relative',
        '::before': {
          content: '" "',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          opacity: 0.02,
          zIndex: 0,
        },
      }}
    >
      <Layout>
        <Box
          sx={{
            paddingX: [0, null, null, 50],
            maxWidth: [600, null, null, 700],
            zIndex: 10,
            position: 'relative',
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              marginTop: [220, 120],
              textTransform: 'uppercase',
              position: 'relative',
            }}
          >
            <Text sx={{ fontSize: [18, 24, 34] }}>
              Simulador de Financiamento
            </Text>
            <Heading as="h1" sx={{ fontSize: [42, 56, 80] }}>
              <Text as="span" sx={{ color: 'primary' }}>
                Descomplique
              </Text>
              <br />
              Sua Venda
            </Heading>
          </Flex>

          <Box sx={{ marginY: [40, null, 80] }}>
            <Message>
              <Text sx={{ fontSize: [15, null, 24], fontWeight: 400 }}>
                Faça diversas simulações de{' '}
                <Text variant="primary" sx={{ fontWeight: 700 }}>
                  Terreno e Construção
                </Text>{' '}
                com valores da{' '}
                <Text variant="primary" sx={{ fontWeight: 700 }}>
                  Caixa Econômica Federal
                </Text>{' '}
                de um jeito{' '}
                <Text variant="primary" sx={{ fontWeight: 700 }}>
                  rápido
                </Text>{' '}
                e{' '}
                <Text variant="primary" sx={{ fontWeight: 700 }}>
                  fácil.
                </Text>
              </Text>
            </Message>
          </Box>

          <Flex
            sx={{
              width: '100%',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              fontSize: [15, null, 19],
            }}
          >
            <Flex sx={{ alignItems: 'center', margin: 15 }}>
              <Text sx={{ marginRight: '10px' }}>Cadastre-se</Text>
              <ArrowDownButton color="secondary" />
            </Flex>
            <Flex sx={{ alignItems: 'center', margin: 15 }}>
              <Text sx={{ marginRight: '10px' }}>Saiba Mais</Text>
              <ArrowDownButton />
            </Flex>
          </Flex>
        </Box>

        <Box
          sx={{
            height: [300, 400, 500, '100%'],
            position: 'absolute',
            right: '-5px',
            top: 0,
          }}
        >
          <Flex
            sx={{
              top: '5px',
              position: 'absolute',
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              sx={{
                color: 'white',
                fontWeight: '800',
                textTransform: 'uppercase',
                fontSize: [15, 18, 26, 48],
              }}
            >
              Terreno
              <Text sx={{ color: 'black' }}>+</Text>
              <br />
              Construção
            </Text>
          </Flex>
          <Polygon />
        </Box>
      </Layout>
    </Box>
  );
};

export default Hero1;
