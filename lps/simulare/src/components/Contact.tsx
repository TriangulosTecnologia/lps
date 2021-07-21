import { Divider, Flex, Heading, Link, Text } from 'theme-ui';

import Button from './Button';
import Layout from './Layout';
import Message from './Message';

const Contact = () => {
  return (
    <Layout displayNavigation dataAnchor="contact">
      <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between' }}>
        <Message>
          <Text sx={{ fontSize: 'sm' }}>Dúvidas?</Text>
          <Heading as="h2" sx={{ fontSize: 'lg' }}>
            ENTRE EM CONTATO
          </Heading>
        </Message>

        <Flex>
          <Button label="(17) 98147.2314" icon="whatsapp-filled" />
          <Button label="contato@simulare.com" icon="email-filled" />
        </Flex>

        <Text>
          Nós possuímos uma grande preocupação com a segurança de seus dados e
          temos o compromisso de assegurar a sua privacidade durante todo o
          processo de navegação. Garantimos o sigilo completo dos seus dados
          cadastrais, afirmando que não comercializamos suas informações
          pessoais. Tais informações serão utilizadas para entrar em contato com
          você para apresentação de nossa solução.
          <br />
          <br />
          Você poderá solicitar a sua exclusão do banco de dados, e assim não
          receberá mais informações dos nossos produtos e serviços. Não obstante
          o descrito acima, havendo solicitação formal, por qualquer Autoridade
          Pública ou Judicial, devidamente fundamentada, o Cliente e/ou Usuário
          nos autoriza expressamente a encaminhar os dados cadastrais
          solicitados, independente de notificação prévia ao Cliente e/ou
          Usuário.
        </Text>
      </Flex>

      <Divider />

      <Flex sx={{ flexDirection: 'column' }}>
        <Text>
          <Link href="#contact">Política de Privacidade</Link>
          <Text> | </Text>
          <Link href="#hero1">Início</Link>
          <Text> | </Text>
          <Link href="#register">Cadastre-se</Link>
        </Text>

        <Text>
          {new Date().getFullYear()} Simulare - Todos os direitos reservados.
        </Text>
      </Flex>
    </Layout>
  );
};

export default Contact;
