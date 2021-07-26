import Image from 'next/image';
import { Box, Flex, Heading } from 'theme-ui';

import Button from './Button';
import { useFullpage } from './Fullpage';
import Layout from './Layout';
import Message from './Message';

import notebook from '../../public/notebook.png';

const Hero2 = () => {
  const { moveSectionDown } = useFullpage();

  return (
    <Layout dataAnchor="hero2">
      <Flex
        sx={{
          height: '100%',
          flexDirection: ['column'],
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Flex
          sx={{
            flexDirection: ['column', null, null, 'row'],
            alignItems: 'center',
            marginTop: [10],
            marginBottom: [10, 0],
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
            <Image src={notebook} alt="Notebook" loading="lazy" />
          </Box>
        </Flex>
        <Button icon="arrow-down" onClick={() => moveSectionDown?.()} />
      </Flex>
    </Layout>
  );
};

export default Hero2;
