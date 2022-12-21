import React, { FunctionComponent } from 'react';

import { Divider, Grid, GridItem, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';
import { ArticleInterface } from '../libs/types';

import Tags from './Tags';

export interface PostThumbnailProps extends ArticleInterface {
  summary: string;
  articleLink: string;
}

const PostThumbnail: FunctionComponent<PostThumbnailProps> = ({
  title,
  bannerSrc,
  date,
  summary,
  articleLink,
  tags
}) => (
  <>
    <Grid h="45%" templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" gap={6}>
      <GridItem w="100%" colSpan={3} rowSpan={2} display="flex">
        <Image
          width={300}
          objectFit="scale-down"
          fallbackSrc={bannerSrc}
          borderRadius="lg"
          alt={title}
        />
      </GridItem>
      <GridItem w="100%" colSpan={9} rowSpan={2}>
        <Stack mt={6} mb={6} pr={4} spacing={2}>
          <Heading as="h6" size="xs" color={theme.colors.customs.text.light}>
            {date}
          </Heading>
          <Link href={articleLink} isExternal color={theme.colors.customs.text.dark}>
            <Heading size="md">{title}</Heading>
          </Link>
          <Text maxHeight={100} overflow="hidden" color={theme.colors.customs.text.middle}>
            {summary}
          </Text>
          <Tags tagArr={tags} />
        </Stack>
      </GridItem>
    </Grid>
    <Divider />
  </>
);

export default PostThumbnail;
