import { Box, Flex } from 'theme-ui';

import Button from './Button';
import FeatureCard, { FeatureCardProps } from './FeatureCard';
import { useFullpage } from './Fullpage';
import Layout from './Layout';
import MessageTitle from './MessageTitle';

import caixa from '../../public/caixa.png';
import check from '../../public/check.png';
import familia from '../../public/familia.png';
import impressora from '../../public/impressora.png';
import relogio from '../../public/relogio.png';
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
  {
    heading1: 'Valores de Financiamento em',
    heading2: 'Tempo Real',
    text1: 'Receba todas as informações direto',
    text2: 'da Instituição Financeira - CEF',
    image: caixa,
  },
  {
    heading1: 'Venda Mais em',
    heading2: 'Menos Tempo',
    text1: 'Aumente a velocidade de',
    text2: 'atendimento e atenda mais clientes',
    image: relogio,
  },
  {
    heading1: 'Não Cometa Erros',
    heading2: 'em Suas Propostas',
    text1: 'Apresente informações',
    text2: 'padronizadas e confiáveis',
    image: check,
  },
  {
    heading1: 'Salve o Perfil Financeiro',
    heading2: 'dos Seus Contatos',
    text1: 'Tenha mais informações do perfil do',
    text2: 'cliente que você atende',
    image: familia,
  },
];

const Features = () => {
  const { moveSectionDown } = useFullpage();

  return (
    <Layout displayNavigation dataAnchor="features">
      <MessageTitle text="Conheça as" title="Principais Vantagens" />
      <Flex
        sx={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          paddingRight: 6,
          marginY: [7, 10, 10, 10, 10, 11],
        }}
      >
        {components.map((props) => {
          return (
            <Box
              key={props.heading1}
              sx={{
                width: '100%',
                maxWidth: 400,
                marginY: [5, null, null, 7, 7, 9],
                marginRight: [8, null, null, 9, 10],
              }}
            >
              <FeatureCard {...props} />
            </Box>
          );
        })}
      </Flex>
      <Flex
        sx={{
          display: 'none',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Button icon="arrow-down" onClick={() => moveSectionDown?.()} />
      </Flex>
    </Layout>
  );
};

export default Features;
