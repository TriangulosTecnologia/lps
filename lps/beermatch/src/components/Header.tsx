import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Button, Flex } from 'theme-ui';

import background from '../../public/background.png';
import bmYellowBg from '../../public/bm-yellow-bg.png';

const Header = () => {
  const { push } = useRouter();

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          zIndex: -1,
          height: '480px',
          width: '100vw',
        }}
      >
        <Image src={background} alt="Hero background" layout="fill" />
      </Box>
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
        <Box sx={{ cursor: 'pointer' }} onClick={() => push('/')}>
          <Image
            src={bmYellowBg}
            alt="BeerMatch logo"
            width="112px"
            height="55px"
          />
        </Box>
        <Button onClick={() => push('/comprar')} sx={{ fontSize: [2, 3] }}>
          Quero participar &gt;
        </Button>
      </Flex>
    </>
  );
};

export default Header;
