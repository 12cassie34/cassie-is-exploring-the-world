import React, { FunctionComponent } from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';

import { Flex, Heading, Stack } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

const NotFoundPage: FunctionComponent<PageProps> = () => (
  <main>
    <Flex align="center" justify="center" width="100vw" height="100vh">
      <Stack
        spacing={4}
        p={24}
        border={`2px solid ${theme.colors.customs.text.dark}`}
        borderRadius={8}
      >
        <Heading as="h2" size="2xl">
          Oops...
        </Heading>
        <Heading as="h5" size="sm">
          看起來你找到了一個空空的寶箱，我們還是
        </Heading>
        <Heading as="h5" size="sm" color={theme.colors.customs.text.middle}>
          <Link to="/">回家去吧</Link>
        </Heading>
      </Stack>
    </Flex>
  </main>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
