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
          top: '-20px',
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
          paddingX: [0, null, null, 50],
          maxWidth: [600, null, null, 700],
          zIndex: 10,
          position: 'relative',
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            marginTop: [150],
            textTransform: 'uppercase',
            position: 'relative',
          }}
        >
          <Text sx={{ fontSize: ['base'] }}>Simulador de Financiamento</Text>
          <Heading as="h1" sx={{ fontSize: ['4xl'], lineHeight: ['4xl'] }}>
            <Text as="span" sx={{ color: 'primary' }}>
              Descomplique
            </Text>
            <br />
            Sua Venda
          </Heading>
        </Flex>

        <Box sx={{ marginY: [9] }}>
          <Message>
            <Text
              sx={{ fontSize: ['sm'], lineHeight: ['sm'], fontWeight: 400 }}
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
          }}
        >
          <Flex sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <Button
              sx={{ marginBottom: [8] }}
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
