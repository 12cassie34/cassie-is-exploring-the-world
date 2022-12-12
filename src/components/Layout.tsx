import React, { FunctionComponent, PropsWithChildren } from "react"

import { Box } from '@chakra-ui/react'

import theme from "../@chakra-ui/gatsby-plugin/theme"

import Header from "./Header"

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {

    return (
        <Box bg={theme.colors.customs.bg.light} w='100%' h='100%'>
            <Header />
            {children}
        </Box>
    )
}

export default Layout;