import Image from 'next/image';
import { Button, Flex, Heading, Text } from 'theme-ui';

import hiwIdealize from '../../public/hiw-idealize.png';
import hiwOrganization from '../../public/hiw-organization.png';
import hiwQuota from '../../public/hiw-quota.png';
import hiwBrewery from '../../public/hiw-brewery.png';
import hiwTaste from '../../public/hiw-taste.png';

type HowItWorksProps = {
  image: StaticImageData;
  title: string;
  description: string;
};

const howItWorks: HowItWorksProps[] = [
  {
    image: hiwIdealize,
    title: 'IDEALIZE, CURTA IDEIAS',
    description:
      'Criamos grupos e comunidades para que você possa ter ou curtir novas ideas de qualquer perfil de cerveja, deixe a imaginação fluir.',
  },
  {
    image: hiwOrganization,
    title: 'NÓS ORGANIZAMOS A PRODUÇÃO E CONECTAMOS OS INTERESSADOS',
    description:
      'Nós organizamos tudo e conectamos você com outros interessados nas mesmas concepções para a cerveja perfeita.',
  },
  {
    image: hiwQuota,
    title: 'COMPRE UMA QUOTA',
    description:
      'Fazemos a cotação com cervejarias. Compre uma quota com quantidade mínima da cerveja escolhida.',
  },
  {
    image: hiwBrewery,
    title: 'PRODUZIDA NAS MELHORES CERVEJARIAS COM OS MELHORES INSUMOS',
    description:
      'Garantimos uma produção de qualidade com cervejarias renomadas, utilizando os melhores insumos do mercado na fabricação.',
  },
  {
    image: hiwTaste,
    title: 'DEGUSTE E COMPARTILHE SUA EXPERIÊNCIA',
    description:
      'Você acompanha a produção de onde estiver. Enviamos a cerveja produzida, aproveite e compartilhe esse momento e aproveite o resultado do processo criativo da sua cerveja, ela será exclusiva.',
  },
];

const HowItWorksCard = ({ image, title, description }: HowItWorksProps) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
      }}
    >
      <Image src={image} layout="fixed" alt={description} />
      <Heading as="h3" sx={{ textAlign: 'center' }}>
        {title}
      </Heading>
      <Text sx={{ textAlign: 'center' }}>{description}</Text>
    </Flex>
  );
};

const HowItWorks = () => {
  return (
    <>
      <Heading as="h2" sx={{ marginY: 9 }}>
        Como Funciona
      </Heading>

      <Flex
        sx={{
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        {howItWorks.map((item) => (
          <HowItWorksCard key={item.title} {...item} />
        ))}
      </Flex>

      <Button sx={{ marginY: 9 }}>Quero participar &gt;</Button>
    </>
  );
};

export default HowItWorks;
