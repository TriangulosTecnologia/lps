import Image from 'next/image';
import { Box, Button, Flex } from 'theme-ui';

import background from '../../public/background.png';
import bmYellowBg from '../../public/bm-yellow-bg.png';

const Header = () => {
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
    </>
  );
};

export default Header;
