import React, { FunctionComponent, PropsWithChildren } from 'react';

import { Grid } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

import Header from './Header';
import SideMenu from './SideMenu';
import Footer from './Footer';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Grid
    templateRows="repeat(12, 1fr)"
    templateColumns="repeat(12, 1fr)"
    gap="2"
    color={theme.colors.customs.bg.light}
  >
    <Header />
    {children}
    <SideMenu />
    <Footer />
  </Grid>
);

export default Layout;
