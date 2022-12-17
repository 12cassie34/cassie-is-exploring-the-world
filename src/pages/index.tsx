import React, { FC } from 'react';
import type { PageProps } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Main from '../components/Main';
import SideMenu from '../components/SideMenu';

const IndexPage: FC<PageProps> = () => (
  <Layout>
    <Header />
    <Main />
    <SideMenu />
  </Layout>
);

export default IndexPage;
