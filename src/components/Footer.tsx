import React, { FunctionComponent } from 'react';

import { Heading, GridItem } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

const Footer: FunctionComponent = () => (
  <GridItem
    rowSpan={1}
    colSpan={12}
    p="8"
    bg={theme.colors.customs.bg.middle}
    color={theme.colors.customs.text.middle}
  >
    <Heading letterSpacing={2}>Cassie is exploring the world</Heading>
  </GridItem>
);

export default Footer;
