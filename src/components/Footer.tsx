import React, { FunctionComponent, useRef } from 'react';

import { Flex, Heading, GridItem, Spacer } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

const Footer: FunctionComponent = () => {
  const year = useRef(new Date().getFullYear());

  return (
    <GridItem
      colSpan={12}
      rowSpan={[2]}
      mt={-2}
      p="8"
      bg={theme.colors.customs.bg.dark}
      color={theme.colors.customs.text.light}
    >
      <Flex>
        <Heading letterSpacing={2} as="h6" size="xs">
          Cassie is exploring the world
        </Heading>
        <Spacer />
        <Heading letterSpacing={2} as="h6" size="xs">
          2023-{year.current}
        </Heading>
      </Flex>
    </GridItem>
  );
};

export default Footer;
