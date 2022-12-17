import React, { FunctionComponent } from 'react';

import { GridItem } from '@chakra-ui/react';

import MainPost from './MainPost';

const Main: FunctionComponent = () => (
  <GridItem pl="2" rowSpan={11} colSpan={8}>
    <MainPost />
  </GridItem>
);

export default Main;
