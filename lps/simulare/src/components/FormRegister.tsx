import { ReactElement } from 'react';

import { Box, Flex, Heading, Text } from 'theme-ui';

import Email from './icons/Email';
import Perfil from './icons/Perfil';
import Whatsapp from './icons/Whatsapp';
import Input from './Input';
import Layout from './Layout';

const Fieldset = ({ children }: { children: ReactElement[] }) => (
  <Flex
    sx={{
      alignItems: 'center',
      marginBottom: '16px',
      paddingX: '16px',
    }}
  >
    {children}
  </Flex>
);

const Header = () => (
  <Box
    sx={{
      backgroundImage: 'url(/sell-more.png)',
    }}
  >
    <Box>
      <Text as="p">Seja o fechador de negócios</Text>
      <Heading>CADASTRE-SE</Heading>
    </Box>
  </Box>
);

const FormRegister = () => {
  return (
    <Box>
      <Layout>
        <Header />
        <Fieldset>
          <Perfil />
          <Input sx={{ marginLeft: '16px' }} placeholder="Nome" />
        </Fieldset>
        <Fieldset>
          <Email />
          <Input sx={{ marginLeft: '16px' }} placeholder="Email profissional" />
        </Fieldset>

        <Fieldset>
          <Whatsapp />
          <Input
            sx={{ marginLeft: '16px' }}
            placeholder="Telefone de contato"
          />
        </Fieldset>
      </Layout>
    </Box>
  );
};

export default FormRegister;
