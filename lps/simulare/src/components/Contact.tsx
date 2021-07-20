import { Heading, Text } from 'theme-ui';

// import { useFullpage } from './Fullpage';
import Layout from './Layout';
import Message from './Message';

const Contact = () => {
  return (
    <Layout displayNavigation>
      <Message>
        <Text sx={{ fontSize: 'sm' }}>Dúvidas?</Text>
        <Heading as="h2" sx={{ fontSize: 'lg' }}>
          ENTRE EM CONTATO
        </Heading>
      </Message>
    </Layout>
  );
};

export default Contact;
