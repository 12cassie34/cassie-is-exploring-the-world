import React, { FunctionComponent } from "react"

import { Heading } from '@chakra-ui/react'
import { GridItem } from '@chakra-ui/react'

import theme from "../@chakra-ui/gatsby-plugin/theme"

const Header: FunctionComponent = () => {
    return (
        <GridItem p='8' bg={theme.colors.customs.bg.middle} area={'header'} color={theme.colors.customs.text.middle}>
            <Heading letterSpacing={2}>Cassie is exploring the world</Heading>
            <Heading as='h6' size='xs' pt={4}>隨筆札記部落格，希望什麼都有，打開就是個驚喜</Heading>
        </GridItem>
    )
}

export default Header