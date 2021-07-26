import * as React from 'react';
import { Box, Divider, Flex, Link, Text } from 'theme-ui';

import Button from './Button';
import Layout from './Layout';
import MessageTitle from './MessageTitle';

const Contact = () => {
  const [showText, setShowText] = React.useState(false);

  const paddingSx = {
    paddingLeft: [6, null, 11, 12],
    paddingRight: 8,
    height: '100%',
  };

  return (
    <Layout displayNavigation dataAnchor="contact">
      <Flex
        sx={{
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            height: '100%',
            paddingTop: [11, 12],
          }}
        >
          <MessageTitle text="Dúvidas?" title="Entre em Contato" />

          <Flex
            sx={{
              ...paddingSx,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              flex: 1,
            }}
          >
            <Flex
              sx={{
                flexWrap: 'wrap',
                justifyContent: ['center', 'center', 'flex-start'],
              }}
            >
              <Flex sx={{ marginRight: [7, 8, 9, 10, 11] }}>
                <Flex
                  sx={{
                    flexDirection: ['column', 'row'],
                    alignItems: 'flex-end',
                    gap: 10,
                  }}
                >
                  <Button label="(17) 98147.2314" icon="whatsapp-filled" />

                  <Button label="contato@simulare.com" icon="email-filled" />
                </Flex>
              </Flex>
            </Flex>

            <Text
              as="p"
              sx={{
                display: showText ? 'block' : 'none',
                color: 'textSecondary',
                fontSize: ['xs', 'sm', 'base'],
                lineHeight: ['xs', 'sm', 'base'],
                maxWidth: [700],
              }}
            >
              Nós possuímos uma grande preocupação com a segurança de seus dados
              e temos o compromisso de assegurar a sua privacidade durante todo
              o processo de navegação. Garantimos o sigilo completo dos seus
              dados cadastrais, afirmando que não comercializamos suas
              informações pessoais. Tais informações serão utilizadas para
              entrar em contato com você para apresentação de nossa solução.
            </Text>
          </Flex>
        </Flex>

        <Box>
          <Divider
            sx={{ marginY: [8, 9], marginLeft: [6, 8], marginRight: 8 }}
          />

          <Flex
            sx={{ flexDirection: 'column', marginTop: [8, 10], ...paddingSx }}
          >
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
                lineHeight: ['xs', 'sm'],
              }}
            >
              {new Date().getFullYear()} Simulare - Todos os direitos
              reservados.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Contact;
