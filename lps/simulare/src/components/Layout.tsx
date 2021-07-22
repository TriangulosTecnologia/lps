import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Box, Flex } from 'theme-ui';

import logo from '../../public/logo.png';

import { useFullpage } from './Fullpage';

const Navigation = dynamic(() => import('./Navigation'));

const Layout: React.FC<{ dataAnchor: string; displayNavigation?: boolean }> = ({
  children,
  displayNavigation,
  dataAnchor,
}) => {
  const { moveTo } = useFullpage();

  const headerPadding = 8;

  return (
    <Box
      className="section"
      data-anchor={dataAnchor}
      sx={{ position: 'relative' }}
    >
      <Flex
        as="header"
        sx={{
          padding: headerPadding,
          justifyContent: displayNavigation ? 'flex-end' : 'flex-start',
        }}
      >
        <Box onClick={() => moveTo?.(1)} sx={{ cursor: 'pointer' }}>
          <Image src={logo} alt="simulare" />
        </Box>
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
      <Box sx={{ paddingLeft: 8, paddingRight: 9 }}>{children}</Box>
    </Box>
  );
};

export default Layout;
