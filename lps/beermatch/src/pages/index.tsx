import Image from 'next/image';
import { Button, Container, Flex, Heading, Text } from 'theme-ui';

/**
 * Hero
 */
import bmYellowBg from '../../public/bm-yellow-bg.png';
import hero from '../../public/hero.png';
import heroBg from '../../public/hero-bg.png';

/**
 * How it works
 */
import hiwIdealize from '../../public/hiw-idealize.png';
import hiwOrganization from '../../public/hiw-organization.png';
import hiwQuota from '../../public/hiw-quota.png';
import hiwBrewery from '../../public/hiw-brewery.png';
import hiwTaste from '../../public/hiw-taste.png';

/**
 * Why Participate
 */
import wpLike from '../../public/wp-like.png';
import wpShop from '../../public/wp-shop.png';
import wpBeer from '../../public/wp-beer.png';
import wpSmile from '../../public/wp-smile.png';

/**
 * Hero
 */

const Hero = () => {
  return (
    <>
      <Flex
        sx={{
          position: 'absolute',
          top: 0,
          zIndex: 0,
          height: '480px',
          width: '100%',
        }}
      >
        <Image src={heroBg} alt="Hero background" layout="fill" />
      </Flex>

      <Flex
        as="header"
        sx={{
          width: '100%',
          padding: 7,
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <Image
          src={bmYellowBg}
          alt="BeerMatch logo"
          width="112px"
          height="55px"
        />
        <Button sx={{ fontSize: ['sm', 'base'] }}>
          Quero participar do 1º Lote &gt;
        </Button>
      </Flex>

      <Flex sx={{ paddingY: 7 }}>
        <Image src={hero} alt="BeerMatch" />
      </Flex>
    </>
  );
};

/**
 * How It Works
 */
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
      <Image src={image} layout="fixed" />
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

/**
 * Why Participate
 */
const whyParticipateItems = [
  { image: wpLike, label: 'Qualidade sempre' },
  { image: wpShop, label: 'Compre local' },
  { image: wpBeer, label: 'Cervejas únicas' },
  { image: wpSmile, label: 'Produção acessível' },
];

const WhyParticipate = () => {
  return (
    <Container variant="fullWidth">
      <Flex
        sx={{
          backgroundColor: 'secondary',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'highlight',
        }}
      >
        <Heading as="h2" sx={{ color: 'highlight' }}>
          Porque Participar
        </Heading>
        <Text as="p" sx={{ textAlign: 'center' }}>
          Somos movidos por levar para qualquer pessoa a experiência de
          participar da concepção de cervejas artesanais.
          <br />
          <br />
          As possibilidades são infinitas, instigamos pessoas a terem ideias e
          de forma colaborativa fazer essas ideias acontecerem.
        </Text>
        <Flex sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {whyParticipateItems.map(({ image, label }) => (
            <Flex
              key={label}
              sx={{
                width: 160,
                flexDirection: 'column',
                alignItems: 'center',
                marginX: [6, 8],
                marginY: 9,
              }}
            >
              <Image src={image} layout="fixed" />
              <Text sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                {label}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

const Home = () => {
  return (
    <Container>
      <Flex
        as="main"
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Hero />
        <HowItWorks />
        <WhyParticipate />
      </Flex>
    </Container>
  );
};

export default Home;
