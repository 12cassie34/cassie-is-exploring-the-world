import React, { FunctionComponent, PropsWithChildren } from 'react';

import { Grid } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

import Header from './Header';
import SideMenu from './SideMenu';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Grid
    templateAreas={`"header header"
                  "nav main"`}
    gridTemplateColumns="1fr 25%"
    h="100%"
    gap="2"
    color={theme.colors.customs.bg.light}
  >
    <Header />
    {children}
    <SideMenu />
  </Grid>
);

export default Layout;
