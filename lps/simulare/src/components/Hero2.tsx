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
    <Layout>
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
            flexDirection: ['column'],
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
                maxWidth: 500,
                fontSize: ['2xl'],
                lineHeight: ['2xl'],
              }}
            >
              Faça o <Message.Emphasis>DOBRO</Message.Emphasis> de atendimentos
              na <Message.Emphasis>METADE</Message.Emphasis> do tempo.
            </Heading>
          </Message>
          <Box sx={{ marginTop: [-6] }}>
            <Image src={notebook} alt="Notebook" />
          </Box>
        </Flex>
        <Button icon="arrow-down" onClick={() => moveSectionDown?.()} />
      </Flex>
    </Layout>
  );
};

export default Hero2;
