import Image from 'next/image';
import { Box, Flex, Heading, useThemeUI } from 'theme-ui';

import Button from './Button';
import { useFullpage } from './Fullpage';
import Layout from './Layout';
import Message from './Message';

import notebook from '../../public/notebook.png';

const Triangle = () => {
  const { theme } = useThemeUI();

  const primary = theme.colors?.primary as string;

  return (
    <svg
      width="600"
      height="460"
      viewBox="0 0 600 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H649V460L0 0Z" fill={primary} />
    </svg>
  );
};

const Hero2 = () => {
  const { moveSectionDown } = useFullpage();

  return (
    <Layout dataAnchor="hero2">
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          display: ['none', null, null, null, 'block'],
        }}
      >
        <Triangle />
      </Box>
      <Flex
        sx={{
          height: '100%',
          flexDirection: ['column'],
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Flex
          sx={{
            flexDirection: ['column', null, null, 'row'],
            alignItems: 'center',
            marginY: [10],
          }}
        >
          <Message>
            <Heading
              as="h2"
              sx={{
                /**
                 * Need to use `position: relative` to activate the `zIndex` property.
                 */
                position: 'relative',
                zIndex: 1,
                maxWidth: [500, 600, null, 700, 600],
                fontSize: ['2xl', '3xl', null, '4xl', '5xl'],
                lineHeight: ['2xl', '3xl', null, '4xl', '5xl'],
              }}
            >
              Faça o <Message.Emphasis>DOBRO</Message.Emphasis> de atendimentos
              na <Message.Emphasis>METADE</Message.Emphasis> do tempo.
            </Heading>
          </Message>
          <Box
            sx={{
              marginTop: [-6, null, null],
              marginLeft: [0, 0, 0, -12],
              maxWidth: 700,
            }}
          >
            <Image src={notebook} alt="Notebook" />
          </Box>
        </Flex>
        <Button icon="arrow-down" onClick={() => moveSectionDown?.()} />
      </Flex>
    </Layout>
  );
};

export default Hero2;
