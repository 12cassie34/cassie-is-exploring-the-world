import React, { FunctionComponent } from 'react';

import { HStack, Tag } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

interface TagsProps {
  tagArr: string[];
}

const Tags: FunctionComponent<TagsProps> = ({ tagArr }) => (
  <HStack>
    {tagArr.map((tag) => (
      <Tag
        key={tag}
        color={theme.colors.customs.text.light}
        backgroundColor={theme.colors.customs.bg.light}
        cursor="pointer"
      >
        {tag}
      </Tag>
    ))}
  </HStack>
);

export default Tags;
