import React, { FC } from 'react';
import type { PageProps } from 'gatsby';

import Layout from '../components/Layout';
import Main from '../components/Main';

const IndexPage: FC<PageProps> = () => (
  <Layout>
    <Main />
  </Layout>
);

export default IndexPage;
