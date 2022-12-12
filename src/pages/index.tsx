import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from "../components/Layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        this is going to be the child-layout
      </main>
    </Layout>

  )
}

export default IndexPage
