import React, { FunctionComponent, PropsWithChildren } from 'react';

import { Flex, GridItem, Heading, Image, Spacer, Stack, Text } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';
import { ArticleInterface } from '../libs/types';

import Tags from './Tags';
import OutlineBtn from './OutlineBtn';

interface ArticleProps extends ArticleInterface {}

const Article: FunctionComponent<PropsWithChildren<ArticleProps>> = ({
  date,
  title,
  tags,
  bannerSrc,
  children
}) => (
  <GridItem
    p="10"
    rowSpan={[9, 11]}
    colSpan={[12, 12, 12, 12, 8]}
    borderRight={['none', `2px solid ${theme.colors.customs.bg.dark}`]}
  >
    <Stack spacing={16}>
      <Stack spacing={8}>
        <Heading as="h5" size="sm">
          {date}
        </Heading>
        <Heading as="h2" size="2xl" color={theme.colors.customs.text.middle}>
          {title}
        </Heading>
        <Tags tagArr={tags} />
        <Image
          width="100%"
          objectFit="scale-down"
          fallbackSrc={bannerSrc}
          borderRadius="lg"
          alt={title}
        />
      </Stack>
      <Stack spacing={8} color={theme.colors.customs.text.dark}>
        {children}
      </Stack>
      <Flex alignItems={['center', 'end']} flexDirection={['column', 'row']}>
        <OutlineBtn
          buttonContent={
            <Stack
              spacing={6}
              align="flex-end"
              width={['100%', 200]}
              textAlign="right"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              <Text fontSize="md">Previous</Text>
              <Text fontSize="md">說合姊澡品陽的兄示躲</Text>
            </Stack>
          }
        />
        <Spacer />
        <OutlineBtn
          buttonContent={
            <Stack
              spacing={6}
              align="flex-start"
              width={['100%', 200]}
              textAlign="left"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              <Text fontSize="md">Next</Text>
              <Text fontSize="md">澡遠香黑歡次想衣耳員福草請寫戊</Text>
            </Stack>
          }
        />
      </Flex>
    </Stack>
  </GridItem>
);

export default Article;
