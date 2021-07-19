import { ReactElement } from 'react';

import { Box, Flex, Heading, Text, Grid, ThemeUIStyleObject } from 'theme-ui';

import Button from './Button';

import Email from './icons/Email';
import Perfil from './icons/Perfil';
import Whatsapp from './icons/Whatsapp';
import Input from './Input';
import Layout from './Layout';
import Message from './Message';

type FieldsetProps = {
  children: ReactElement[];
  sx?: ThemeUIStyleObject;
};

const Fieldset = ({ children, sx }: FieldsetProps) => (
  <Flex
    sx={{
      alignItems: 'center',
      ...sx,
    }}
  >
    {children}
  </Flex>
);

const Header = () => (
  <Box
    sx={{
      backgroundImage: 'url(/sell-more.png)',
      height: '59px',
      position: 'relative',
      backgroundRepeat: 'round',
      marginLeft: '-8px',
      marginRight: 8,
    }}
  >
    <Message sx={{ bottom: '-10px', position: 'absolute', paddingLeft: 6 }}>
      <Text sx={{ fontFamily: 'body', fontSize: ['sm'] }} as="p">
        Seja o fechador de negócios
      </Text>
      <Heading sx={{ fontFamily: 'heading', fontSize: ['2xl'] }}>
        CADASTRE-SE
      </Heading>
    </Message>
  </Box>
);

const FormRegister = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log('submit form');
  };

  return (
    <Layout displayNavigation>
      <form onSubmit={onSubmit}>
        <Grid
          sx={{
            gridTemplateRows: ['5fr 7fr 4fr'],
          }}
        >
          <Header />

          <Box sx={{ paddingRight: [9] }}>
            <Fieldset sx={{ marginBottom: [9] }}>
              <Perfil />
              <Input sx={{ marginLeft: [7] }} placeholder="Nome" />
            </Fieldset>
            <Fieldset sx={{ marginBottom: [9] }}>
              <Email />
              <Input
                sx={{ marginLeft: [7] }}
                placeholder="Email profissional"
              />
            </Fieldset>

            <Fieldset>
              <Whatsapp />
              <Input
                sx={{ marginLeft: [7] }}
                placeholder="Telefone de contato"
              />
            </Fieldset>
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
                type="submit"
                label="Enviar"
                icon="send"
                color="secondary"
              />

              <Button type="button" label="Contato" icon="arrow-down" />
            </Flex>
          </Flex>
        </Grid>
      </form>
    </Layout>
  );
};

export default FormRegister;
