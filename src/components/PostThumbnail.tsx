import React, { FunctionComponent } from "react"

import { Avatar, Card, CardBody, Divider, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'

import theme from "../@chakra-ui/gatsby-plugin/theme"

export interface PostThumbnailProps {
    title: string
    avatarSrc: string
    date: string
    summary: string
    articleLink: string
}

const PostThumbnail: FunctionComponent<PostThumbnailProps> = ({ title, avatarSrc, date, summary, articleLink }) => {
    return (
        <>
            <Card pl={0} pt={4} pb={6} maxW="sm" boxShadow="none">
                <CardBody p={2}>
                    <Image maxW={{ base: '100%', sm: '300px' }} fallbackSrc={avatarSrc} borderRadius='lg' />
                    <Stack mt={6} spacing={2}>
                        <Heading as='h6' size='xs' color={theme.colors.customs.text.light}>
                            {date}
                        </Heading>
                        <Link href={articleLink} isExternal color={theme.colors.customs.text.dark}>
                            <Heading size='md'>{title}</Heading>
                        </Link>
                        <Text maxHeight={100} overflow="hidden" color={theme.colors.customs.text.middle}>
                            {summary}
                        </Text>
                        <Link href={articleLink} isExternal>
                            <Heading as='h6' size='xs' color={theme.colors.customs.text.light}>
                                Read More
                            </Heading>
                        </Link>
                    </Stack>
                </CardBody>
            </Card>
            <Divider />
        </>
    )
}

export default PostThumbnail