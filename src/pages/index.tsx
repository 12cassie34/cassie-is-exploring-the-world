import React, { FC } from "react"
import type { PageProps } from "gatsby"

import { Grid, GridItem } from '@chakra-ui/react'

import Layout from "../components/Layout"
import Header from "../components/Header"

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Header />
      {/* <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        Main
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem> */}
    </Layout>
  )
}

export default IndexPage
