import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Box, Flex } from 'theme-ui';

import logo from '../../public/logo.png';

const Navigation = dynamic(() => import('./Navigation'));

const Layout: React.FC<{ displayNavigation?: boolean }> = ({
  children,
  displayNavigation,
}) => {
  const headerPadding = 8;

  return (
    <Box className="section" sx={{ position: 'relative' }}>
      <Flex
        as="header"
        sx={{
          padding: headerPadding,
          justifyContent: displayNavigation ? 'flex-end' : 'flex-start',
        }}
      >
        <Image src={logo} alt="simulare" />
      </Flex>
      <Box
        sx={{
          height: '100%',
          position: 'absolute',
          top: 0,
          right: headerPadding,
          paddingRight: '1px',
        }}
      >
        {displayNavigation && <Navigation circles={5} />}
      </Box>
      <Box sx={{ paddingLeft: 8, paddingRight: 10 }}>{children}</Box>
    </Box>
  );
};

export default Layout;
