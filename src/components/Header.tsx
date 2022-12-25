import React, { FunctionComponent } from 'react';

import { Heading, GridItem, VStack } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';
import useWindowDimensions from '../hooks/useWindowDimensions';

import MobileSideMenu from './MobileSideMenu';

const Header: FunctionComponent = () => {
  const { innerWidth } = useWindowDimensions();

  return (
    <GridItem
      rowSpan={[1, 1, 11]}
      colSpan={[12, 12, 2]}
      p="8"
      bg={theme.colors.customs.bg.middle}
      color={theme.colors.customs.text.middle}
    >
      <VStack spacing={4} alignItems="flex-end">
        <Heading letterSpacing={2}>Cassie is Exploring the World</Heading>
        <Heading as="h6" size="xs">
          隨筆札記部落格，希望什麼都有，打開就是個驚喜
        </Heading>
        {innerWidth < 1200 && <MobileSideMenu />}
      </VStack>
    </GridItem>
  );
};

export default Header;
