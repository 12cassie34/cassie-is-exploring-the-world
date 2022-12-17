import React, { FunctionComponent } from 'react';

import {
  GridItem,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  Link
} from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

const SideMenu: FunctionComponent = () => (
  <GridItem p="6" rowSpan={11} colSpan={2}>
    <Heading
      as="h3"
      size="md"
      pb="6"
      borderBottom={`2px solid ${theme.colors.customs.bg.dark}`}
      color={theme.colors.customs.text.dark}
      letterSpacing={2}
      fontWeight={400}
    >
      文章分類
    </Heading>
    <Accordion defaultIndex={[0, 1]} allowMultiple color={theme.colors.customs.text.middle}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              程式大小事
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <List spacing={3}>
            <ListItem>
              <Link href="https://www.google.com/" isExternal>
                React
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.google.com/" isExternal>
                JS/TS
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.google.com/" isExternal>
                HTML/CSS
              </Link>
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              讀書筆記
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <List spacing={3}>
            <ListItem>
              <Link href="https://www.google.com/" isExternal>
                2023
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.google.com/" isExternal>
                2022
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.google.com/" isExternal>
                2021
              </Link>
            </ListItem>
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </GridItem>
);

export default SideMenu;
