import React, { FunctionComponent } from 'react';

import { GridItem } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

import MainPost from './MainPost';

const Main: FunctionComponent = () => (
  <GridItem
    pl="2"
    rowSpan={[9, 11]}
    colSpan={[12, 12, 8]}
    borderRight={['none', `2px solid ${theme.colors.customs.bg.dark}`]}
  >
    <MainPost />
  </GridItem>
);

export default Main;
