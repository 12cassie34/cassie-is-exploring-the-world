import React, { FunctionComponent } from 'react';

import { GridItem, Heading } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

import Category from './Category';

const SideMenu: FunctionComponent = () => (
  <GridItem p="6" rowSpan={11} colSpan={2} display={['none', 'block']}>
    <Heading
      as="h3"
      size="md"
      pb="6"
      borderBottom={`2px solid ${theme.colors.customs.bg.dark}`}
      color={theme.colors.customs.text.dark}
      letterSpacing={2}
      fontWeight={400}
    >
      文章分類
    </Heading>
    <Category />
  </GridItem>
);

export default SideMenu;
