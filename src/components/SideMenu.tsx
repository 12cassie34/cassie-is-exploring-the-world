import React, { FunctionComponent } from "react"

import { GridItem, Heading } from '@chakra-ui/react'

import theme from "../@chakra-ui/gatsby-plugin/theme"

import PostThumbnail, { PostThumbnailProps } from "./PostThumbnail"

const dummyData: PostThumbnailProps[] = [
    {
        title: "童蝴屋停陽果但房叫兔向",
        avatarSrc: "https://bit.ly/dan-abramov",
        date: "2022.12.31",
        summary: "東里勿交就二朱比遠氣坐登抄、教或員助拍自相多光玩半京右清，乙見童樹比共流弟今苗。日丁甲車兩，幸物首道海記身至讀壯北左亭會雨眼，石就裝帶知卜未貝她詞民、進飛到回相只斤天出吉掃枝起娘。",
        articleLink: "https://www.google.com/",
    },
    {
        title: "童蝴屋停陽果但房叫兔向1",
        avatarSrc: "https://bit.ly/dan-abramov",
        date: "2022.12.31",
        summary: "東里勿交就二朱比遠氣坐登抄、教或員助拍自相多光玩半京右清，乙見童樹比共流弟今苗。日丁甲車兩，幸物首道海記身至讀壯北左亭會雨眼，石就裝帶知卜未貝她詞民、進飛到回相只斤天出吉掃枝起娘。",
        articleLink: "https://www.google.com/",
    },
    {
        title: "童蝴屋停陽果但房叫兔向2",
        avatarSrc: "https://bit.ly/dan-abramov",
        date: "2022.12.31",
        summary: "東里勿交就二朱比遠氣坐登抄、教或員助拍自相多光玩半京右清，乙見童樹比共流弟今苗。日丁甲車兩，幸物首道海記身至讀壯北左亭會雨眼，石就裝帶知卜未貝她詞民、進飛到回相只斤天出吉掃枝起娘。",
        articleLink: "https://www.google.com/",
    },
]

const SideMenu: FunctionComponent = () => {
    return (
        <GridItem p='6' borderLeft={`2px solid ${theme.colors.customs.bg.dark}`}>
            <Heading
                as='h3'
                size='md'
                pb='6'
                borderBottom={`2px solid ${theme.colors.customs.bg.dark}`}
                color={theme.colors.customs.text.dark}
                letterSpacing={2}
                fontWeight={400}
            >
                最新文章
            </Heading>
            {dummyData.map(({ title, avatarSrc, date, summary, articleLink }) => {
                return (
                    <PostThumbnail
                        title={title}
                        avatarSrc={avatarSrc}
                        date={date}
                        summary={summary}
                        articleLink={articleLink} />
                )
            })}

        </GridItem>
    )
}

export default SideMenu