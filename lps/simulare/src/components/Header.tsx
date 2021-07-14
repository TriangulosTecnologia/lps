import Image from 'next/image';
import { Box } from 'theme-ui';

import logo from '../../public/logo.png';

const Header = () => {
  return (
    <Box sx={{ position: 'relative', padding: 10 }}>
      <Image src={logo} alt="logo" />
    </Box>
  );
};

export default Header;
