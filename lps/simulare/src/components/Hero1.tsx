import { Box, Flex, Text } from 'theme-ui';

import Header from './Header';

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

const Button = () => {
  return (
    <svg
      width="89"
      height="50"
      viewBox="39 0 89 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="64.1521"
        cy="25"
        rx="24"
        ry="23.8479"
        transform="rotate(-90 64.1521 25)"
        stroke="#5C5C5C"
      />
      <path
        d="M64.3169 38.0202C64.5121 38.2155 64.8287 38.2155 65.024 38.0202L68.2059 34.8382C68.4012 34.643 68.4012 34.3264 68.2059 34.1311C68.0107 33.9359 67.6941 33.9359 67.4988 34.1311L64.6704 36.9595L61.842 34.1311C61.6467 33.9359 61.3301 33.9359 61.1349 34.1311C60.9396 34.3264 60.9396 34.643 61.1349 34.8382L64.3169 38.0202ZM64.1704 12.3333L64.1704 37.6666L65.1704 37.6666L65.1704 12.3333L64.1704 12.3333Z"
        fill="black"
      />
      <ellipse cx="40.3043" cy="25" rx="1.88273" ry="1.89474" fill="#24BB78" />
    </svg>
  );
};

const Hero1 = ({ className }: { className?: string }) => {
  return (
    <Box
      className={className}
      sx={{
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
      <Header />

      <Flex sx={{ flexDirection: 'column' }}>
        <Text
          sx={{ fontFamily: 'Montserrat', color: 'white', fontWeight: 400 }}
        >
          Simulador de Financiamento
        </Text>
        <Text>Descomplique</Text>
        <Text>Sua Venda</Text>
      </Flex>

      <Box sx={{ marginTop: 30, maxWidth: 300 }}>
        <Text sx={{}}>
          Faça diversas simulações de <Text>Terreno e Construção</Text> com
          valores da <Text>Caixa Econômica Federal</Text> de um jeito{' '}
          <Text>rápido</Text> e <Text>fácil.</Text>
        </Text>
      </Box>

      <Flex sx={{ width: '100%', justifyContent: 'space-evenly' }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Text>Cadastre-se</Text>
          <Button />
        </Flex>
        <Flex sx={{ alignItems: 'center' }}>
          <Text>Saiba Mais</Text>
          <Button />
        </Flex>
      </Flex>

      <Box
        sx={{
          height: [305, '100%'],
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      >
        <Flex
          sx={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text sx={{ color: 'white' }}>
            <Text>Terreno+</Text>
            <Text>Construção</Text>
          </Text>
        </Flex>
        <Polygon />
      </Box>
    </Box>
  );
};

export default Hero1;
