import React, { FunctionComponent } from 'react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

import { Heading } from '@chakra-ui/react';

import PostThumbnail, { PostThumbnailProps } from './PostThumbnail';

const dummyData: PostThumbnailProps[] = [
    {
        title: "童蝴屋停陽果但房叫兔向",
        bannerSrc: "https://picsum.photos/300/100",
        date: "2022.12.31",
        summary: "東里勿交就二朱比遠氣坐登抄、教或員助拍自相多光玩半京右清，乙見童樹比共流弟今苗。日丁甲車兩，幸物首道海記身至讀壯北左亭會雨眼，石就裝帶知卜未貝她詞民、進飛到回相只斤天出吉掃枝起娘。",
        articleLink: "https://www.google.com/",
    },
    {
        title: "童蝴屋停陽果但房叫兔向1",
        bannerSrc: "https://picsum.photos/300/200",
        date: "2022.12.31",
        summary: "東里勿交就二朱比遠氣坐登抄、教或員助拍自相多光玩半京右清，乙見童樹比共流弟今苗。日丁甲車兩，幸物首道海記身至讀壯北左亭會雨眼，石就裝帶知卜未貝她詞民、進飛到回相只斤天出吉掃枝起娘。",
        articleLink: "https://www.google.com/",
    },
    {
        title: "童蝴屋停陽果但房叫兔向2",
        bannerSrc: "https://picsum.photos/300/200",
        date: "2022.12.31",
        summary: "東里勿交就二朱比遠氣坐登抄、教或員助拍自相多光玩半京右清，乙見童樹比共流弟今苗。日丁甲車兩，幸物首道海記身至讀壯北左亭會雨眼，石就裝帶知卜未貝她詞民、進飛到回相只斤天出吉掃枝起娘。",
        articleLink: "https://www.google.com/",
    },
]

const MainPost: FunctionComponent = () => {
  return (
    <>
    {dummyData.map(({ title, bannerSrc, date, summary, articleLink }) => {
        return (
            <PostThumbnail
                title={title}
                bannerSrc={bannerSrc}
                date={date}
                summary={summary}
                articleLink={articleLink} />
        )
    })}</>
  );
};

export default MainPost;
