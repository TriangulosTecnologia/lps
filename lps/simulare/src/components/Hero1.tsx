import { useBreakpointIndex } from '@theme-ui/match-media';
import Image from 'next/image';
import { Box, Flex, Heading, Text } from 'theme-ui';

import { useFullpage } from './Fullpage';
import Layout from './Layout';
import Message from './Message';
import Button from './Button';

import terrenoEConstrucao from '../../public/terreno-e-construcao.png';
import terrenoEConstrucaoSemi from '../../public/terreno-e-construcao-semi.png';

const Hero1 = () => {
  const { moveSectionDown, moveTo } = useFullpage();

  const breakpoint = useBreakpointIndex();

  return (
    <Layout dataAnchor="hero1">
      <Box
        sx={{
          position: 'absolute',
          top: ['-20px', null, null, 0],
          right: '-1px',
          height: [300, 400, 500, 600, '100%'],
          width: '100%',
          zIndex: 1,
        }}
      >
        <Image
          src={breakpoint >= 4 ? terrenoEConstrucaoSemi : terrenoEConstrucao}
          alt="Terreno e Construção"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
        />
      </Box>

      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundImage: 'url(/background.png)',
          backgroundSize: 'cover',
          opacity: 0.03,
        }}
      />

      <Box
        sx={{
          paddingX: [0, 25, 50, 50],
          maxWidth: [600, 700, 800, 700],
          zIndex: 10,
          position: 'relative',
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            marginTop: [180, 150, null, null, 100],
            textTransform: 'uppercase',
            position: 'relative',
          }}
        >
          <Text sx={{ fontSize: ['base', 'lg', 'xl', '2xl'] }}>
            Simulador de Financiamento
          </Text>
          <Heading
            as="h1"
            sx={{
              fontSize: ['4xl', '5xl', '6xl', '7xl', '8xl'],
              lineHeight: ['4xl', '5xl', '6xl', '7xl', '8xl'],
            }}
          >
            <Text as="span" sx={{ color: 'primary' }}>
              Descomplique
            </Text>
            <br />
            Sua Venda
          </Heading>
        </Flex>

        <Box sx={{ marginY: [9, 10] }}>
          <Message>
            <Text
              sx={{
                fontSize: ['sm', 'base', 'lg', null, 'xl'],
                lineHeight: ['sm', 'base', 'lg', null, 'xl'],
                fontWeight: 400,
              }}
            >
              Faça diversas simulações de{' '}
              <Message.Emphasis>Terreno e Construção</Message.Emphasis> com
              valores da{' '}
              <Message.Emphasis>Caixa Econômica Federal</Message.Emphasis> de um
              jeito <Message.Emphasis>rápido</Message.Emphasis> e{' '}
              <Message.Emphasis>fácil.</Message.Emphasis>
            </Text>
          </Message>
        </Box>

        <Flex
          sx={{
            width: '100%',
            justifyContent: ['flex-start'],
            alignItems: ['center'],
            flexWrap: 'wrap',
            fontSize: ['sm'],
            flexDirection: ['column'],
            marginTop: 10,
          }}
        >
          <Flex
            sx={{ flexDirection: ['column', 'row'], alignItems: 'flex-end' }}
          >
            <Button
              sx={{ marginBottom: [8, 0], marginRight: [0, 9] }}
              icon="arrow-down"
              label="Cadastre-se"
              color="secondary"
              onClick={() => moveTo?.(4)}
            />
            <Button
              icon="arrow-down"
              label="Saiba Mais"
              onClick={() => moveSectionDown?.()}
            />
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Hero1;
