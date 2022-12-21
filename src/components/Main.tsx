import React, { FunctionComponent } from 'react';

import { GridItem } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

import MainPost from './MainPost';

const Main: FunctionComponent = () => (
  <GridItem
    pl="2"
    rowSpan={11}
    colSpan={8}
    borderRight={`2px solid ${theme.colors.customs.bg.dark}`}
  >
    <MainPost />
  </GridItem>
);

export default Main;
