import React from 'react';
import { Container, Flex } from 'theme-ui';

import AgeModal from './AgeModal';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AgeModal />
      <Container>
        <Flex
          sx={{
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Header />
          {children}
          <Footer />
        </Flex>
      </Container>
    </>
  );
};

export default Layout;
