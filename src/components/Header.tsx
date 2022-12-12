import React, { FunctionComponent } from "react"

import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

import theme from "../@chakra-ui/gatsby-plugin/theme"

const Header: FunctionComponent = () => {
    return (
        <header>
            <Box bg={theme.colors.customs.bg.middle} w='100%' h='100%' p={8}>
                <Heading letterSpacing={2}>Cassie is exploring the world</Heading>
                <Heading as='h6' size='xs' pt={4}>隨筆札記部落格，希望什麼都有，打開就是個驚喜</Heading>
            </Box>
        </header>
    )
}

export default Header