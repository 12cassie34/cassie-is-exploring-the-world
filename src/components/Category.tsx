import React, { FunctionComponent } from 'react';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  List,
  ListItem
} from '@chakra-ui/react';

import theme from '../@chakra-ui/gatsby-plugin/theme';

const Category: FunctionComponent = () => (
  <Accordion defaultIndex={[0, 1]} allowMultiple color={theme.colors.customs.text.middle}>
    <AccordionItem>
      <AccordionButton>
        <Box as="span" flex="1" textAlign="left">
          程式大小事
        </Box>
        <AccordionIcon />
      </AccordionButton>
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
);

export default Category;
