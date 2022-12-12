import React, { FunctionComponent, PropsWithChildren } from "react"

import { Box } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'

import theme from "../@chakra-ui/gatsby-plugin/theme"


import Header from "./Header"

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {

    return (
        <Grid
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateColumns={'150px 1fr'}
            h='100%'
            gap='1'
            color={theme.colors.customs.bg.light}
            fontWeight='bold'
        >
            {children}
        </Grid>
    )
}

export default Layout;
