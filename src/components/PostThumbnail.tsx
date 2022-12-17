import React, { FunctionComponent } from 'react';

import {
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Tag,
  Text
} from '@chakra-ui/react';

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
          <HStack>
            <Tag
              color={theme.colors.customs.text.light}
              backgroundColor={theme.colors.customs.bg.light}
              cursor="pointer"
            >
              小說
            </Tag>
            <Tag
              color={theme.colors.customs.text.light}
              backgroundColor={theme.colors.customs.bg.light}
              cursor="pointer"
            >
              JS
            </Tag>
          </HStack>
        </Stack>
      </GridItem>
    </Grid>
    <Divider />
  </>
);

export default PostThumbnail;
