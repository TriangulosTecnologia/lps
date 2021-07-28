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
    <Flex
      className="section"
      data-anchor={dataAnchor}
      sx={{
        position: 'relative',
        flexDirection: 'column',
      }}
    >
      <Flex
        as="header"
        sx={{
          padding: headerPadding,
          position: 'absolute',
          top: 0,
          right: displayNavigation ? 0 : null,
          left: !displayNavigation ? 0 : null,
        }}
      >
        <Box
          onClick={() => moveTo?.(1)}
          sx={{ cursor: 'pointer', maxWidth: [150] }}
        >
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
      <Box
        sx={{
          paddingLeft: 8,
          paddingRight: 9,
          height: 'auto',
          flex: 1,
        }}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
