import React, { FunctionComponent } from 'react';

import { Divider, Grid, GridItem, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

export interface PostThumbnailProps {
  title: string;
  bannerSrc: string;
  date: string;
  summary: string;
  articleLink: string;
}

const PostThumbnail: FunctionComponent<PostThumbnailProps> = ({
  title,
  bannerSrc,
  date,
  summary,
  articleLink
}) => (
  <>
    <Grid h={200} templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" gap={6}>
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
        <Stack mt={6} spacing={2}>
          <Heading as="h6" size="xs" color={theme.colors.customs.text.light}>
            {date}
          </Heading>
          <Link href={articleLink} isExternal color={theme.colors.customs.text.dark}>
            <Heading size="md">{title}</Heading>
          </Link>
          <Text maxHeight={100} overflow="hidden" color={theme.colors.customs.text.middle}>
            {summary}
          </Text>
          <Link href={articleLink} isExternal>
            <Heading as="h6" size="xs" color={theme.colors.customs.text.light}>
              Read More
            </Heading>
          </Link>
        </Stack>
      </GridItem>
    </Grid>
    <Divider />
  </>
);

export default PostThumbnail;
