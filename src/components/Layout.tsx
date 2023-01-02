import { ChakraProvider , Grid } from '@chakra-ui/react';
import React, { FunctionComponent, PropsWithChildren } from 'react';


import theme from '../@chakra-ui/gatsby-plugin/theme';
import useWindowDimensions from '../hooks/useWindowDimensions';

import Header from './Header';
import SideMenu from './SideMenu';
import Footer from './Footer';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { innerWidth } = useWindowDimensions();

  return (
    <ChakraProvider>
      <Grid
        templateRows={[
          '300px 1fr 100px',
          '200px 1fr 100px',
          '200px 1fr 100px',
          '200px 1fr 100px',
          'repeat(12, 1fr)'
        ]}
        templateColumns="repeat(12, 1fr)"
        gap="2"
        color={theme.colors.customs.bg.light}
      >
        <Header />
        {children}
        {innerWidth > 1200 && <SideMenu />}
        <Footer />
      </Grid>
    </ChakraProvider>
  );
};

export default Layout;
