import Image from 'next/image';
import { Box } from 'theme-ui';

import logo from '../../public/logo.png';

const Header = () => {
  return (
    <Box as="header" sx={{ position: 'relative' }}>
      <Image src={logo} alt="logo" />
    </Box>
  );
};

const Layout: React.FC = ({ children }) => {
  return (
    <Box sx={{ paddingY: 15, paddingX: [15, null, 30] }}>
      <Header />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
