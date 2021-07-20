import { Box, Flex, Heading, Text } from 'theme-ui';

import Button from './Button';
import FeatureCard, { FeatureCardProps } from './FeatureCard';
import { useFullpage } from './Fullpage';
import Layout from './Layout';
import Message from './Message';

import impressora from '../../public/impressora.png';
import selo from '../../public/selo.png';

const components: FeatureCardProps[] = [
  {
    heading1: 'Não Perca Vendas',
    heading2: 'Gere Inúmeras Propostas',
    text1: 'Faça 100 propostas em',
    text2: '5 min. por cliente',
    image: impressora,
  },
  {
    heading1: 'Entrege o Melhor Negócio',
    heading2: 'para o seu Cliente',
    text1: 'Ofereça as melhores oportunidades',
    text2: 'para cada cliente',
    image: selo,
  },
];

const Features = () => {
  const { moveSectionDown } = useFullpage();

  return (
    <Layout displayNavigation>
      <Message>
        <Text sx={{ fontSize: 'sm' }}>Conheça as</Text>
        <Heading as="h2" sx={{ fontSize: 'lg' }}>
          PRINCIPAIS VANTAGENS
        </Heading>
      </Message>
      <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {components.map((props) => {
          return (
            <Box key={props.heading1} sx={{ margin: 6 }}>
              <FeatureCard {...props} />
            </Box>
          );
        })}
      </Flex>
      <Flex sx={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button icon="arrow-down" onClick={() => moveSectionDown?.()} />
      </Flex>
    </Layout>
  );
};

export default Features;
