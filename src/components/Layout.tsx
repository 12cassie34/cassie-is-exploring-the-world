import React, { FunctionComponent, PropsWithChildren } from "react"

import { Grid } from '@chakra-ui/react'

import theme from "../@chakra-ui/gatsby-plugin/theme"

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {

    return (
        <Grid
            templateAreas={`"header header"
                  "nav main"`}
            gridTemplateColumns={'1fr 25%'}
            h='100%'
            gap='2'
            color={theme.colors.customs.bg.light}
        >
            {children}
        </Grid>
    )
}

export default Layout;
