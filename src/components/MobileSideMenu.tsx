import React, { FunctionComponent } from 'react';

import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  GridItem,
  Stack,
  useDisclosure
} from '@chakra-ui/react';

import OutlineBtn from './OutlineBtn';
import Category from './Category';

const MobileSideMenu: FunctionComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <GridItem rowSpan={1} colSpan={12}>
      <OutlineBtn buttonContent="文章分類" handleClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Stack mt={20}>
            <Category />
          </Stack>
        </DrawerContent>
      </Drawer>
    </GridItem>
  );
};

export default MobileSideMenu;
