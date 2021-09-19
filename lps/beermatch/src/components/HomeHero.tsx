import Image from 'next/image';
import { Box } from 'theme-ui';

import hero from '../../public/hero.png';

const HomeHero = () => {
  return (
    <Box sx={{ paddingY: 7 }}>
      <Image src={hero} alt="BeerMatch" />
    </Box>
  );
};

export default HomeHero;
