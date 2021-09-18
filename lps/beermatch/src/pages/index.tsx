import Image from 'next/image';
import { Button, Container, Flex } from 'theme-ui';

import bmYellowBg from '../../public/bm-yellow-bg.png';
import hero from '../../public/hero.png';
import heroBg from '../../public/hero-bg.png';

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
          <Button variant="accent" sx={{ fontSize: ['sm', 'base'] }}>
            Quero participar do 1º Lote &gt;
          </Button>
        </Flex>

        <Flex sx={{ paddingY: 7 }}>
          <Image src={hero} alt="BeerMatch" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
