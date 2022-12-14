import React, { FunctionComponent } from 'react';

import { Stack } from '@chakra-ui/react';

import PostThumbnail, { PostThumbnailProps } from './PostThumbnail';
import OutlineBtn from './OutlineBtn';

const dummyData: PostThumbnailProps[] = [
  {
    title: '童蝴屋停陽果但房叫兔向',
    bannerSrc: 'https://picsum.photos/300/100',
    date: '2022.12.31',
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    articleLink: 'https://www.google.com/',
    tags: ['JS', 'React']
  },
  {
    title: '童蝴屋停陽果但房叫兔向1',
    bannerSrc: 'https://picsum.photos/300/200',
    date: '2022.12.31',
    summary:
      '東里勿交就二朱比遠氣坐登抄、教或員助拍自相多光玩半京右清，乙見童樹比共流弟今苗。日丁甲車兩，幸物首道海記身至讀壯北左亭會雨眼，石就裝帶知卜未貝她詞民、進飛到回相只斤天出吉掃枝起娘。',
    articleLink: 'https://www.google.com/',
    tags: ['文學', '小說']
  },
  {
    title: '童蝴屋停陽果但房叫兔向2',
    bannerSrc: 'https://picsum.photos/300/200',
    date: '2022.12.31',
    summary:
      '東里勿交就二朱比遠氣坐登抄、教或員助拍自相多光玩半京右清，乙見童樹比共流弟今苗。日丁甲車兩，幸物首道海記身至讀壯北左亭會雨眼，石就裝帶知卜未貝她詞民、進飛到回相只斤天出吉掃枝起娘。',
    articleLink: 'https://www.google.com/',
    tags: ['文學', '小說']
  }
];

const MainPost: FunctionComponent = () => (
  <Stack>
    {dummyData.map(({ title, bannerSrc, date, summary, articleLink, tags }) => (
      <PostThumbnail
        key={title}
        title={title}
        bannerSrc={bannerSrc}
        date={date}
        summary={summary}
        articleLink={articleLink}
        tags={tags}
      />
    ))}
    <Stack p={10}>
      <OutlineBtn buttonContent="Read More" />
    </Stack>
  </Stack>
);

export default MainPost;
