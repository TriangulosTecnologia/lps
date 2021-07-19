import Image from 'next/image';
import { Box } from 'theme-ui';

// import Navigation from './Navigation';

import logo from '../../public/logo.png';

const Header = () => {
  return (
    <Box as="header" sx={{ padding: 8 }}>
      <Image src={logo} alt="simulare" />
    </Box>
  );
};

const Layout: React.FC<{ renderAbsolute?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box className="section" sx={{ position: 'relative' }}>
      <Header />
      <Box
        sx={{
          height: '100%',
          width: '10px',
          backgroundColor: 'green',
          position: 'absolute',
          top: 0,
        }}
      >
        {/* <Navigation circles={5} /> */}
      </Box>
      <Box sx={{ paddingX: 8 }}>{children}</Box>
    </Box>
  );
};

export default Layout;
