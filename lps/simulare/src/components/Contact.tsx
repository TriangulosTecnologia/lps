import * as React from 'react';
import { Box, Divider, Flex, Link, Text } from 'theme-ui';

import Button from './Button';
import Layout from './Layout';
import MessageTitle from './MessageTitle';

const PaddingLeft: React.FC = ({ children }) => {
  return (
    <Box sx={{ paddingLeft: [6, null, 11, 12], paddingRight: 8 }}>
      {children}
    </Box>
  );
};

const Contact = () => {
  const [showText, setShowText] = React.useState(false);

  return (
    <Layout displayNavigation dataAnchor="contact">
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <MessageTitle text="Dúvidas?" title="Entre em Contato" />

        <PaddingLeft>
          <Flex
            sx={{
              flexWrap: 'wrap',
              justifyContent: ['center', 'center', 'flex-start'],
              marginY: [9, 10, 11, 12],
            }}
          >
            <Flex sx={{ marginRight: [7, 8, 9, 10, 11] }}>
              <Button label="(17) 98147.2314" icon="whatsapp-filled" />
            </Flex>
            <Button label="contato@simulare.com" icon="email-filled" />
          </Flex>

          <Text
            as="p"
            sx={{
              display: showText ? 'block' : 'none',
              color: 'textSecondary',
              fontSize: ['xs', 'sm', 'base'],
              lineHeight: ['xs', 'sm', 'base'],
            }}
          >
            Nós possuímos uma grande preocupação com a segurança de seus dados e
            temos o compromisso de assegurar a sua privacidade durante todo o
            processo de navegação. Garantimos o sigilo completo dos seus dados
            cadastrais, afirmando que não comercializamos suas informações
            pessoais. Tais informações serão utilizadas para entrar em contato
            com você para apresentação de nossa solução.
          </Text>
        </PaddingLeft>
      </Flex>

      <Divider sx={{ marginY: [8, 9], marginLeft: [6, 8], marginRight: 8 }} />

      <PaddingLeft>
        <Flex sx={{ flexDirection: 'column', marginTop: [8, 10] }}>
          <Text
            sx={{
              fontSize: ['sm', 'base', 'lg'],
            }}
          >
            <Link
              sx={{ color: showText ? 'white' : undefined }}
              onClick={() => setShowText(true)}
              href="#contact"
            >
              Política de Privacidade
            </Link>
            <Text> | </Text>
            <Link href="#hero1">Início</Link>
            <Text> | </Text>
            <Link href="#register">Cadastre-se</Link>
          </Text>

          <Text
            sx={{
              width: '100%',
              textAlign: ['center', null, 'start'],
              marginTop: [8, 9],
              marginBottom: 6,
              fontSize: ['xs', 'sm'],
            }}
          >
            {new Date().getFullYear()} Simulare - Todos os direitos reservados.
          </Text>
        </Flex>
      </PaddingLeft>
    </Layout>
  );
};

export default Contact;
