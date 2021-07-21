import { ReactElement } from 'react';

import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  ThemeUIStyleObject,
  BoxProps,
} from 'theme-ui';

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

const Header = ({ sx }: BoxProps) => (
  <Box
    sx={{
      backgroundImage: 'url(/sell-more.png)',
      height: ['59px', '192px'],
      maxWidth: '1163px',
      width: '100%',
      position: 'relative',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      marginLeft: '-8px',
      marginRight: 8,
      display: 'flex',
      alignItems: 'flex-start',
      ...sx,
    }}
  >
    <Message
      sx={{
        paddingLeft: [6, 11],
        paddingTop: [0, 9],
        marginTop: [8, 0],
      }}
    >
      <Text
        sx={{
          fontFamily: 'body',
          fontSize: ['sm', 'xl'],
          lineHeight: ['xs', 'base'],
        }}
        as="p"
      >
        Seja o fechador de negócios
      </Text>
      <Heading
        sx={{
          fontFamily: 'heading',
          fontSize: ['2xl', '4xl'],
          lineHeight: ['xl', '4xl'],
        }}
      >
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
            display: ['block', 'grid'],
            rowGap: '89px',
            columnGap: [0, 10],
            paddingTop: [0, 10],
            paddingLeft: [0, 10],
            paddingRight: [0, 12],
            gridTemplateAreas: "'header header' 'form buttons'",
            gridTemplateColumns: '5fr 4fr',
          }}
        >
          <Header sx={{ gridArea: 'header', marginBottom: [11, 0] }} />

          <Box
            sx={{
              paddingRight: [9, 0],
              gridArea: 'form',
              maxWidth: '650px',
              marginLeft: [0, 'auto'],
              width: '100%',
              marginBottom: [10, 0],
            }}
          >
            <Fieldset sx={{ marginBottom: [9] }}>
              <Box sx={{ width: ['26px', '32px'] }}>
                <Perfil width="100%" height="100%" />
              </Box>
              <Input sx={{ marginLeft: [7] }} placeholder="Nome" />
            </Fieldset>
            <Fieldset sx={{ marginBottom: [9] }}>
              <Box sx={{ width: ['26px', '32px'] }}>
                <Email width="100%" height="100%" />
              </Box>

              <Input
                sx={{ marginLeft: [7] }}
                placeholder="Email profissional"
              />
            </Fieldset>

            <Fieldset>
              <Box sx={{ width: ['26px', '32px'] }}>
                <Whatsapp width="100%" height="100%" />
              </Box>
              <Input
                sx={{ marginLeft: [7] }}
                placeholder="Telefone de contato"
              />
            </Fieldset>
          </Box>

          <Flex
            sx={{
              width: '100%',
              justifyContent: ['flex-start', 'flex-end'],
              alignItems: ['center', 'flex-start'],
              flexWrap: 'wrap',
              fontSize: ['sm'],
              flexDirection: ['column'],
              gridArea: 'buttons',
              marginBottom: [0, -11],
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
